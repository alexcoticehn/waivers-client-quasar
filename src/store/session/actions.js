import { api } from 'boot/axios';

export function verifyToken () {
    return api.get('auth/token/verify');
}

export function verifyPasswordResetToken({}, reset_token) {
    return api.post('users/reset/verify', {
        token: reset_token
    });
}
