<template>
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo menu" :router="true">
        <el-menu-item-group title="视频管理" class="menumtitle">
            <el-menu-item index="/vpub"><i class="el-icon-message"></i>发布视频</el-menu-item>
            <el-menu-item index="/vlist"><i class="el-icon-message"></i>视频列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="个人资料"  class="menumtitle">
            <el-menu-item index="3"><i class="el-icon-message"></i>个人信息</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-message"></i>密码修改</el-menu-item>
        </el-menu-item-group>
    </el-menu>
</template>
<style>
    .menu{background: #fff;}
.menumtitle div{font-size: 20px;}
</style>

<script>

    export default {

        data(){
            return {

            }
        },
        components: {

        }
    }
</script>