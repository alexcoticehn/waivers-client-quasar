import { api } from 'boot/axios';

export function verifyToken ({ commit }) {
    return api.get('auth/token/verify', {});
}
