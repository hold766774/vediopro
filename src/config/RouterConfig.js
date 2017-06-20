/**
 * Created by 覃雪平 on 2017/6/20.
 */
import VueRouter from "vue-router";

import memberindex from "./../components/member/index.vue";
import vpublish from "./../components/member/publish.vue";
import vlist from "./../components/member/vlist.vue";
export const routerConfig= new VueRouter({
    routes :[
        { path: '/', component: memberindex,name:"memberindex",
            children: [
                { path: '/vpub', component: vpublish,name:"vpublish"},
                { path: '/vlist', component: vlist,name:"vlist"}
            ]
        },

    ]
})