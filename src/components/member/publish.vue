<template>
    <div>

        <el-dialog
                title="图片预览"
                v-model="showVPic"
                size="small"
             >
            <span>
                <img :src="vedio.v_pic.url" alt="">
            </span>
            <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="showVPic = false">关 闭</el-button>
  </span>
        </el-dialog>


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

                    <el-form-item label="视频封面" prop="v_pic">
                        <el-button type="text" @click="showVPic=true">图片预览</el-button>
                        <el-upload
                                class="upload-demo"
                                drag
                                action="http://localhost:9090/vedio/uploadpic"
                                name="Uploader[file]"
                                :on-success="handleSuccess"

                        >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="标签" >

                            <input-tag  :tags="vedio.v_tags"></input-tag>

                    </el-form-item>
                    <el-form-item label="测试" >

                    <el-button type="button" @click="testBtn">测试按钮</el-button>

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
    import InputTag from 'vue-input-tag'
    export default {
      data(){
          return {
              showVPic:false,
              vedio:{
                  v_title:'',
                  v_class:'健身',
                  v_pic:{
                      name:"",
                      url:"",
                      id:0
                  },
                  v_tags:[]
              }
          };
      },
        components: {
            "input-tag":InputTag
        },
      methods:{
          testBtn(){
              alert(this.vedio.v_tags);
          },
          handleSuccess(file){
              //响应成功
             // console.log(file);
              if(file.status==1){
                  this.vedio.v_pic.name=file.name;
                  this.vedio.v_pic.url=file.url;
                  this.vedio.v_pic.url=file.id;
              }else{
                  alert("上传失败，请稍后再试");
              }

          },
          handlePreview(file){
              //预览图片
              this.showVPic=true;
          },
          handleRemove(file){
              //移除图片
              this.vedio.v_pic.name='';
              this.vedio.v_pic.url='';
          }
      }
    }
</script>