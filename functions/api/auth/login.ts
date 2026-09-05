import { Env, hashPassword, createJWT, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { email, password } = await context.request.json() as { email: string; password: string };

    if (!email || !password) {
      return jsonResponse({ error: 'Email and password are required' }, 400);
    }

    const passwordHash = await hashPassword(password);

    const cleanInput = (email || '').trim();

    // Check admin_users table (by email or username)
    const user = await context.env.DB.prepare(
      'SELECT id, username, email, role, password_hash FROM admin_users WHERE (email = ? OR username = ? OR LOWER(email) = LOWER(?)) AND is_active = 1'
    ).bind(cleanInput, cleanInput, cleanInput).first() as any;

    if (!user) {
      return jsonResponse({ error: 'Invalid email or password' }, 401);
    }

    // Verify password
    if (user.password_hash !== passwordHash) {
      return jsonResponse({ error: 'Invalid email or password' }, 401);
    }

    // Update last_login
    await context.env.DB.prepare(
      'UPDATE admin_users SET last_login = datetime(\'now\') WHERE id = ?'
    ).bind(user.id).run();

    // Create JWT token
    const secret = context.env.JWT_SECRET || 'gfcl_jwt_secret_2026_golden_fiber';
    const token = await createJWT(
      { id: user.id, username: user.username, email: user.email, role: user.role },
      secret
    );

    return jsonResponse({
      success: true,
      token,
      user: { id: user.id, username: user.username, email: user.email, role: user.role }
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Login failed: ' + err.message }, 500);
  }
};
