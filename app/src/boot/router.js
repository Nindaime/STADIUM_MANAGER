/* import { boot } from 'quasar/wrappers'
import { useCounterStore } from '../stores/example-store'
const Store = useCounterStore()

export default boot(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    
    if (!Store.isUserLoggedIn && to.path != '/login') {
      if (to.path == '/signup') {
        next()
      } else next('/login')
    } else next()
  })
})
  */