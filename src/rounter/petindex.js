import VueRouter from "vue-router";
import petlogin from "@/views/petlogin";
import petregister from "@/views/petregister";
import pethome from "@/views/pethome";

new VueRouter({
    routes:[
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