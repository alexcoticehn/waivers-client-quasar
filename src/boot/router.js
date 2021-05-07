import { boot } from 'quasar/wrappers'

export default boot(({ router, store }) => {
    router.beforeEach((to, from, next) => {
        if (to.meta.requiresAuth && !store.state.session.isAuthenticated) {
            store.dispatch('session/verifyToken')
            .then(() => {
                store.commit('session/setIsAuthenticated', true);
                next();
            })
            .catch(() => {
                store.commit('session/setIsAuthenticated', false);
                next({name: 'Landing'});
            });
        } else {
            next();
        }
    })
})