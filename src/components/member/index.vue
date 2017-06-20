<template>
    <el-row>
        <el-col :span="6">
            <membermenu></membermenu>
        </el-col>
        <el-col :span="18">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>
<style>
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