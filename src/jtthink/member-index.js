/**
 * Created by 覃雪平 on 2017/6/18.
 */
import Vue from "vue";
import Vuex from "vuex";
import ElementUI from 'element-ui'
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import "./../css/common.css";
import 'element-ui/lib/theme-default/index.css'
import navbar from './../components/member/navbar.vue';
import {routerConfig} from  "./../config/RouterConfig"

import global from "./global";
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(global)

import ResModule from "./../Store/modules/ResModule";

const storeConfig = new Vuex.Store({
    modules: {
        res: ResModule,

    }
})
Vue.component('navbar',navbar);
new Vue({
    el:".container",
    store:storeConfig,
    router:routerConfig
})