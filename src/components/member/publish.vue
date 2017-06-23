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
                    <el-form-item label="上传视频" >
                        <div id="vedioContainer">
                            <el-button id="selecteVedio" type="primary">选择视频<i class="el-icon-upload el-icon--right"></i></el-button>
                        </div>


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
        mounted(){
            var uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',      // 上传模式，依次退化
                browse_button: 'selecteVedio',         // 上传选择的点选按钮，必需
                // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
                // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
                // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
                // uptoken : '<Your upload token>', // uptoken是上传凭证，由其他程序生成
                 uptoken_url: 'http://127.0.0.1:9090/index.php/vedio/uptoken',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
                // uptoken_func: function(file){    // 在需要获取uptoken时，该方法会被调用
                //    // do something
                //    return uptoken;
                // },
                get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
                // downtoken_url: '/downtoken',
                // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
                // unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
                 save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
                domain: 'jthinkpro',     // bucket域名，下载资源时用到，必需
                container: 'vedioContainer',             // 上传区域DOM ID，默认是browser_button的父元素
                max_file_size: '500mb',             // 最大文件体积限制
                flash_swf_url: '../plupload/Moxie.swf',  //引入flash，相对路径
                max_retries: 3,                     // 上传失败最大重试次数
                dragdrop: true,                     // 开启可拖曳上传
                drop_element: 'vedioContainer',          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb',                  // 分块上传时，每块的体积
                auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
                //x_vars : {
                //    查看自定义变量
                //    'time' : function(up,file) {
                //        var time = (new Date()).getTime();
                // do something with 'time'
                //        return time;
                //    },
                //    'size' : function(up,file) {
                //        var size = file.size;
                // do something with 'size'
                //        return size;
                //    }
                //},
                filters : {

                    // Specify what files to browse for
                    mime_types: [
                        {title : "flv files", extensions : "flv"}, // 限定flv后缀上传格式上传
                        {title : "Video files", extensions : "flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4"}, // 限定flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4后缀格式上传
                        {title : "Image files", extensions : "jpg,gif,png"}, // 限定jpg,gif,png后缀上传
                        {title : "Zip files", extensions : "zip"} // 限定zip后缀上传
                    ]
                },
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            // 文件添加进队列后，处理相关的事情
                        });
                    },
                    'BeforeUpload': function(up, file) {
                        // 每个文件上传前，处理相关的事情
                    },
                    'UploadProgress': function(up, file) {
                        // 每个文件上传时，处理相关的事情
                    },
                    'FileUploaded': function(up, file, info) {
                        // 每个文件上传成功后，处理相关的事情
                        // 其中info是文件上传成功后，服务端返回的json，形式如：
                        // {
                        //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                        //    "key": "gogopher.jpg"
                        //  }
                        // 查看简单反馈
                        // var domain = up.getOption('domain');
                        // var res = parseJSON(info);
                        // var sourceLink = domain +"/"+ res.key; 获取上传成功后的文件的Url
                    },
                    'Error': function(up, err, errTip) {
                        //上传出错时，处理相关的事情
                    },
                    'UploadComplete': function() {
                        //队列文件处理完毕后，处理相关的事情
                    },
                    'Key': function(up, file) {
                        // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                        // 该配置必须要在unique_names: false，save_key: false时才生效
                        var key = "";
                        // do something with key here
                        return key
                    }
                }
            });
        }
        ,
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