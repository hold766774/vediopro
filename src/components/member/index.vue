<template>
    <el-row id="outbox">
        <el-col :span="4">
            <membermenu></membermenu>
        </el-col>
        <el-col :span="20">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>
<style>
    #outbox{width: 80%;
        margin:10px auto}
</style>

<script>
import membermenu from "./menu.vue";
    export default {

        data(){
            return {

            }
        },
        components: {
            membermenu
        }
    }
</script>