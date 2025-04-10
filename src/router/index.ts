import { createRouter, createWebHistory } from 'vue-router'
import PackageWarning from '../components/PackageWarning.vue'
import SuccessPage from '@/views/SuccessPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'PackageWarning',
      component: PackageWarning,
    },
    {
      path: '/update-address',
      name: 'UpdateAddress',
      component: () => import('../components/UpdateAddress.vue'),
    },
    {
      path: '/payment',
      name: 'PaymentForm',
      component: () => import('../components/PaymentForm.vue'),
    },
    {
      path: '/success',
      name: 'Success',
      component: SuccessPage,
    },
    {
      // 将所有未匹配的路由重定向到 PackageWarning
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requiresPrevValidation) {
    // 这里可以添加表单验证逻辑
    const isFormValid = true // 临时设置为true，实际应该根据表单状态判断
    if (!isFormValid) {
      next({ name: 'AddressForm' })
      return
    }
  }
  next()
})

export default router
