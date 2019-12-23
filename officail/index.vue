<template>
  <div class="content">
    <ul class="format">
      <li><el-tooltip place="top" content="保存"><button class="btn b"><i class="iconfont icon-baocun-tianchong"></i></button></el-tooltip></li>
      <li><el-tooltip place="top" content="发送"><button class="btn b"><i class="iconfont icon-send"></i></button></el-tooltip></li>
      <li><el-tooltip place="top" content="提醒"><button class="btn b"><i class="iconfont icon-tixing"></i></button></el-tooltip></li>
      <li><el-tooltip place="top" content="预览"><button class="btn b"><i class="iconfont icon-yulan large"></i></button></el-tooltip></li>
    </ul>
    <el-form ref="form" class="form" :model="form" label-width="120px"> 
      <el-form-item label="标题:">
        <el-input v-model="form.title" size="mini" class="input_mini"></el-input>
      </el-form-item>
      <el-form-item label="操作类型:">
        <el-radio-group v-model="form.type">
          <el-radio label="核稿"></el-radio>
          <el-radio label="审核"></el-radio>
          <el-radio label="签发"></el-radio>
          <el-radio label="征求意见"></el-radio>
          <el-radio label="办理"></el-radio>
        </el-radio-group>
        <el-checkbox-group v-model="form.forbid" class="forbid">
          <el-checkbox label="禁止该文件转发" name="forbid"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="操作人员:">
        <el-input v-model="form.operator" size="mini" class="input_mini"></el-input><el-button type="primary" size="mini" @click="addShow">浏览</el-button>
      </el-form-item>
      <el-form-item label="分阅人员:">
        <el-input v-model="form.read" size="mini" class="input_mini"></el-input><el-button type="primary" size="mini" @click="addShow">浏览</el-button>
      </el-form-item>
      <el-form-item label="选择上传文件:">
        <el-button @click="uploadClick">点击上传文件</el-button>
      </el-form-item>
       <mavon-editor v-model="article"/>
    </el-form>
    <upload ref="upload"></upload>
    <addFriends ref="addFriends"></addFriends>
  </div>
</template>

<script>
import upload from './modules/upload'
import addFriends from './modules/addFriends'
export default {
  name:"",
  components: {
    upload,
    addFriends
  },
  data() {
    return {
      form:{
        type:'审核',
        title:'',
        operator:'',
        read:'',
        forbid:[]
      },
      article:'',
      showUpload:false
    };
  },
  created() {
  },
  computed: {},
  methods: {
    uploadClick(){
      this.$refs.upload.dialog = true
    },
    addShow(){
      this.$refs.addFriends.dialog = true
    }
  },
};
</script>

<style scoped>
.large{
  font-size:20px;
}
.format{
  list-style: none;
  background: #37474f;
  height: 50px;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-left: 10px;
}
.format > li{
  float: left;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
 .btn{
  border-radius: 2px;
  background: white;
  border:0;
  border-color:white;
  width: 30px;
  height: 30px;
  -webkit-transition:  0.3s;
	transition:  0.3s;
}
.btn::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 30px;
	height: 30px;
	border-radius: inherit;
	z-index: -1;
	box-shadow: inset 0 0 0 15px #37474f;
	/* -webkit-transform: scale3d(0.9, 0.9, 1);
	transform: scale3d(0.9, 0.9, 1); */
	-webkit-transition: box-shadow 0.3s, -webkit-transform 0.3;
	transition: box-shadow 0.3s, transform 0.3s;
}
.btn.b {
	color: #37474f;
}
.btn:hover {
  background: #37474f;
  cursor:pointer;
  box-shadow: inset 0 0 0 2px white;
}
.btn.b::before {
  box-shadow: inset 0 0 0 15px #fff;
	-webkit-transition: box-shadow 0.3s, -webkit-transform 0.3;
  
	transition: box-shadow 0.3s, transform 0.3s;
}
.btn.b:hover::before {
	background: #fff;
}
.btn:hover i {
  color:white;
}
.btn.b:hover::before {
	box-shadow: inset 0 0 0 2px #37474f;
	-webkit-transform: scale3d(1, 1, 1);
	transform: scale3d(1, 1, 1);
}
.el-form{
  max-height: 100%;
  border: 1px solid #ccc;
  padding: 20px;
}
.forbid{
  position: absolute;
  right: 0px;
  top: 0;
}
.input_mini{
  width: 90%;
  padding-right: 20px;
}
</style>
