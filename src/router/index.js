import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/Login.vue'
import home from '../components/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
      path:"/login",
      component:login
    },
    {
      path:"/",
      redirect:"/login"
    },
    {
      path:"/home",
      component: home
    }
]

const router = new VueRouter({
  routes
})
// 挂载路由守卫
router.beforeEach((to,fom,next)=>{
    if(to.path=="/login") return next();
    //获取token
   const token =window.sessionStorage.getItem("token");
   if(!token) return next("/login");
   else return next()
})

export default router
