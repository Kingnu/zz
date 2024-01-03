<template>
  <el-container class="inside_container">
    <el-header>
      <div class="header_div">
        <img src="../assets/img/logo.png">
        <span>家宠门诊后台管理系统</span>
      </div>
      <el-button @click="logout" type="info">退出登录</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isToggled?'64px':'200px'">
        <el-menu :unique-opened="true" background-color="dimgrey" text-color="white" :collapse="isToggled"
                 :default-active="active" :router ="true" :collapse-transition="false">
          <div data-v-519080fd="" class="toggle-button"  @click="toggle">|||</div>
          <el-submenu  v-for="item in menuList" :key="item.menu_id">
            <template slot="title">
              <i :class="iconObj[item.menu_id]"></i>
              <span>{{ item.menu_name }}</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {},

  data(){
    return{
      menuList:[
        {
          menu_id:1,
          menu_name:"宠物管理",
        },
        {
          menu_id:2,
          menu_name:"宠物管理",
        },
        {
          menu_id:3,
          menu_name:"宠物管理",
        },
        {
          menu_id:4,
          menu_name:"宠物管理",
        },
        {
          menu_id:5,
          menu_name:"宠物管理",
        },
      ],
      isToggled:false,
      iconObj:{
        1:"el-icon-user-solid",
        2:"el-icon-s-tools",
        3:"el-icon-s-shop",
        4:"el-icon-s-order",
        5:"el-icon-orange"
      },
      active:"",
    }
  },
  created() {
    // this.$axios.get("allmenu").then(
    //     response=>{
    //         this.menuList=response.data.data;
    //     }
    // )
    // this.active=window.sessionStorage.getItem("path")
  },
  methods:{
    logout(){
      this.$confirm("确定退出登录？ ","提示",{
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        type:"warning"
      }).then(()=>{
        this.$router.push("/");
        window.sessionStorage.clear();
      }).catch(()=>{
        return;
      })
    },
    toggle(){
      this.isToggled=!this.isToggled
    },
    // changeActive(value){
    //   window.sessionStorage.setItem("path",value);
    // }
  }
}
</script>

<style scoped>
.el-header{
  background-color: gray;
  font-size: 25px;
  color: azure;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-header img{
  width: 60px;
  height: 60px;
  margin-right: 20px;
}
.header_div{
  display: flex;
  align-items: center;
}
.el-aside{
  background-color: dimgrey;
}
.el-main{
  background-color: aliceblue;
}
.inside_container{
  height: 100%;
}
.el-aside span{
  margin-left: 10px;
}
.toggle-button{
  background-color: darkgrey;
  color: white;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
  letter-spacing: 4px;
}
</style>