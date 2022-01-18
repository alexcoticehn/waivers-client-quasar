import { boot } from 'quasar/wrappers'

export default boot(({ router, store }) => {
    router.beforeEach((to, from, next) => {
        if (to.meta.disabled) {
            next({name: 'MyRoster'});
        } else if (to.meta.requiresAuth && !store.state.session.isAuthenticated) {
            store.dispatch('session/verifyToken')
            .then((res) => {
                store.commit('session/setIsAuthenticated', true);
                if (res.body.admin) {
                    store.commit('session/setIsAdmin', true);
                }
                next();
            })
            .catch(() => {
                store.commit('session/setIsAuthenticated', false);
                next({name: 'Landing'});
            });
        } else if (to.meta.adminOnly && !store.state.session.isAdmin) {
            next({name: 'MyRoster'});
        } else {
            next();
        }
    })
})