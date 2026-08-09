import { Env, authenticateAdmin, jsonResponse, corsHeaders } from './_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

// Cloudinary image upload
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const user = await authenticateAdmin(context.request, context.env);
  if (!user) return jsonResponse({ error: 'Unauthorized' }, 401);

  try {
    const formData = await context.request.formData();
    const file = formData.get('file') as File;
    const folder = (formData.get('folder') as string) || 'goldenfibercrafts/products';

    if (!file) return jsonResponse({ error: 'No file provided' }, 400);

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const uploadPreset = 'gfcl_uploads';

    // Prepare signed upload to Cloudinary
    const signStr = `folder=${folder}&timestamp=${timestamp}${context.env.CLOUDINARY_API_SECRET}`;
    const encoder = new TextEncoder();
    const hashBuffer = await crypto.subtle.digest('SHA-1', encoder.encode(signStr));
    const signature = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

    const uploadBody = new FormData();
    uploadBody.append('file', file);
    uploadBody.append('folder', folder);
    uploadBody.append('timestamp', timestamp);
    uploadBody.append('api_key', context.env.CLOUDINARY_API_KEY);
    uploadBody.append('signature', signature);

    const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${context.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: uploadBody
    });

    const cloudData = await cloudRes.json() as any;

    if (!cloudRes.ok) {
      return jsonResponse({ error: cloudData.error?.message || 'Cloudinary upload failed' }, 400);
    }

    return jsonResponse({
      success: true,
      url: cloudData.secure_url,
      public_id: cloudData.public_id,
      width: cloudData.width,
      height: cloudData.height
    });
  } catch (err: any) {
    return jsonResponse({ error: err.message }, 500);
  }
};
