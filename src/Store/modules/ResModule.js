/**
 * Created by 覃雪平 on 2017/6/20.
 */
import Vue from "vue";
export default
{
    state: {
        // count: 0
        NavBar:[]//导航栏
    },
    mutations: {
       setData(state,{key,data}){
           state[key]=data;
       }
    },
    getters:{
        navForVedioClass: state => {
            return state.NavBar.filter(function (item) {
                return item.nav_text!='首页';
            })
        }
    },
    actions:{
        loadData(context,{url,key}){
            Vue.http.get(url).then((rs)=>{
                context.commit("setData",{key,data:rs.body});
            }, (res)=>{

            });
        }
    }
}