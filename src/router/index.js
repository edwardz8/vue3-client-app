import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";
import store from '../store'
import { users } from '../assets/users'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const user = store.state.user

  if (!user) {
    await store.dispatch('setUser', users[0])
  }

  const isAdmin = false
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if (requiresAdmin && !isAdmin) next({ name: 'Home' })
  else next()
})

export default router
