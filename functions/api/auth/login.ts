import { Env, hashPassword, createJWT, jsonResponse, corsHeaders } from '../_shared';

export const onRequestOptions: PagesFunction<Env> = async () => corsHeaders();

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { email, password } = await context.request.json() as { email: string; password: string };

    if (!email || !password) {
      return jsonResponse({ error: 'Email and password are required' }, 400);
    }

    const passwordHash = await hashPassword(password);

    // Check admin_users table
    const user = await context.env.DB.prepare(
      'SELECT id, username, email, role, password_hash FROM admin_users WHERE email = ? AND is_active = 1'
    ).bind(email).first();

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
    const token = await createJWT(
      { id: user.id, username: user.username, email: user.email, role: user.role },
      context.env.JWT_SECRET
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
