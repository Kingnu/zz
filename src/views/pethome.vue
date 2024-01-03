<template>
<div>
   <el-menu
       :default-active="activeIndex2"
       class="el-menu-demo"
       mode="horizontal"
       @select="handleSelect"
       background-color="#545c64"
       text-color="#fff"
       active-text-color="#ffd04b">
     <el-menu-item index="1">首页</el-menu-item>
     <el-submenu index="2">
       <template slot="title">关于我们</template>
       <el-menu-item index="2-1">品牌介绍</el-menu-item>
       <el-menu-item index="2-2">客户评价</el-menu-item>
       <el-menu-item index="2-3">选项3</el-menu-item>
       <el-submenu index="2-4">
         <template slot="title">aa</template>
         <el-menu-item index="2-4-1">选项1</el-menu-item>
         <el-menu-item index="2-4-2">选项2</el-menu-item>
         <el-menu-item index="2-4-3">选项3</el-menu-item>
       </el-submenu>
     </el-submenu>
     <el-submenu index="3">
       <template slot="title">关于家宠</template>
       <el-menu-item index="3-1">宠物寄养</el-menu-item>
       <el-menu-item index="3-2">家宠配偶</el-menu-item>
       <el-menu-item index="3-3">家宠领养</el-menu-item>
     </el-submenu>
     <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">门诊预约</a></el-menu-item>
    <div class="el-user">
      <el-button >个人中心</el-button>
      <el-button >退出登录</el-button>
    </div>

   </el-menu>
  <div class="block">
    <el-carousel height="450px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img  :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
 </div>


</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "pethome",
  data() {
    return {
      imgList:[
        {id:0,idView:require("@/assets/1.jpg")},
        {id:0,idView:require("@/assets/2.jpg")},
        {id:0,idView:require("@/assets/3.jpeg")},
        {id:0,idView:require("@/assets/4.jpeg")},

      ],
      activeIndex: '1',
      activeIndex2: '1',
    }

  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-user{
  margin-top: 11px;
  margin-left: 1200px;
}
.image{
  width: 80%;
  height: 450px;
}
</style>
