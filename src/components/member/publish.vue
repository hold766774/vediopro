<template>
    <div>
        <el-row>
            <el-col :span="12">
                <h3>视频基本信息</h3>
                <el-form :model="vedio" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="视频标题" prop="v_title">
                        <el-input v-model="vedio.v_title" placeholder="填写视频标题"></el-input>
                    </el-form-item>
                    <el-form-item label="分类" prop="v_class">
                        <el-select v-model="vedio.v_class" placeholder="请选择">
                            <el-option
                                    v-for="item in this.$store.getters.navForVedioClass"
                                    :key="item.nav_id"
                                    :label="item.nav_text"
                                    :value="item.nav_id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12"></el-col>
        </el-row>

    </div>
</template>
<style>
    h3{color: dimgray;margin-bottom: 10px;}
</style>

<script>

    export default {
      data(){
          return {
              vedio:{
                  v_title:'',
                  v_class:'健身'
              }
          };
      }
    }
</script>