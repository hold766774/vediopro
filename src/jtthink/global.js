/**
 * Created by 覃雪平 on 2017/6/19.
 */
//插件
import functions from "./functions";
import APIConfig from "./../config/APIConfig";
export default {
    install(Vue ){
        Vue.prototype.functions=functions;
        Vue.prototype.APIConfig=APIConfig;
    }
}