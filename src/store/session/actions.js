import { api } from 'boot/axios';
import { Loading } from 'quasar';

export function verifyToken ({ commit }) {
    api.get('auth/token/verify', {})
    .then(() => {
        commit('setIsAuthenticated', true);
        this.$router.replace({name: 'MyRoster'});
        Loading.hide();
    })
    .catch(() => {
        commit('setIsAuthenticated', false);
        Loading.hide();
    })
}
