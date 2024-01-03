import VueRouter from "vue-router";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import petlogin from "@/views/petlogin";
import petregister from "@/views/petregister";
import pethome from "@/views/pethome";

export default new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login

        },
        {
            path:'/register',
            component:Register

        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/petlogin',
            component:petlogin

        },
        {
            path:'/petregister',
            component:petregister

        },
        {
            path:'/pethome',
            component:pethome
        },


    ]
})