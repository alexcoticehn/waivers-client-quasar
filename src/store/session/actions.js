import { api } from 'boot/axios';

export function verifyToken () {
    return api.get('auth/token/verify');
}

export function verifyPasswordResetToken({}, reset_token) {
    return api.post('users/reset/verify', {
        token: reset_token
    });
}

export function resetPassword({ state }, password) {
    return api.patch('users/reset/confirm', {
        token: state.passwordResetToken,
        id: state.userId,
        password: password
    })
}
