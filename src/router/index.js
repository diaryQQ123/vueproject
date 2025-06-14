import { ElMessage } from "element-plus"
import {createRouter,createWebHashHistory} from "vue-router"
import {useStore} from "vuex"
const store=useStore()
const routes=[
    {
        path:"/",
        name:"登录页",
        redirect:"/login",
        component:()=>import("@/views/paths/login.vue")
    },
    {
        path:"/home",
        name:"首页",
        component:()=>import("@/views/paths/home.vue")
    },
    {
        path:"/user",
        name:"用户管理",
        component:()=>import("@/views/paths/user.vue")
    },
    {
        path:"/course",
        name:"课程管理",
        component:()=>import("@/views/paths/course.vue")
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes,
})
router.beforeEach((to,from,next)=>{
    const token=localStorage.getItem("token")
    if(token){
        ElMessage({
            message:"请勿重复登录",
            icon:"error"
        })
    }else{
        next()
    }
})



export default router