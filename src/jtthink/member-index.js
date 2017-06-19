/**
 * Created by 覃雪平 on 2017/6/18.
 */
import Vue from "vue";
import Vuex from "vuex";
import ElementUI from 'element-ui'
import "./../css/common.css";
import 'element-ui/lib/theme-default/index.css'
import navbar from './../components/member/navbar.vue';

import global from "./global";
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(global)

Vue.component('navbar',navbar);
new Vue({
    el:".container",
})