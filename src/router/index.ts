import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import UpdateProductViews from '../views/UpdateProductViews.vue'
import LoginView from '../views/LoginView.vue'
import StatsView from '../views/StatsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/product/:id',
    name: 'detail',
    component: ProductDetails,
  },

  {
    path: '/update/:id',
    name: 'update',
    component: UpdateProductViews,
  },

  {
    path: '/stats',
    name: 'stats',
    component: StatsView,
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
