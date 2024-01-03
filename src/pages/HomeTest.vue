<template>
  <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b">
    <!-- 一级菜单 -->
    <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
      <!-- 一级菜单模板 -->
      <template slot="title">
        <!-- 图标 -->
        <i class="el-icon-location"></i>
        <!-- 文本 -->
        <span>{{item.authName}}</span>
      </template>
      <!-- 二级子菜单 -->
<!--      <el-menu-item :index="subItem.id+''" v-for="subItem in item.children" :key="subItem.id">-->
<!--        &lt;!&ndash; 二级菜单模板 &ndash;&gt;-->
<!--        <template slot="title">-->
<!--          &lt;!&ndash; 图标 &ndash;&gt;-->
<!--          <i class="el-icon-location"></i>-->
<!--          &lt;!&ndash; 文本 &ndash;&gt;-->
<!--          <span>{{subItem.authName}}</span>-->
<!--        </template>-->
<!--      </el-menu-item>-->
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "HomeTest",
  data() {
    return {
      // 左侧菜单数据
      menuList: null
    }
  },
  created() {
    // 在created阶段请求左侧菜单数据
    this.getMenuList()
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList() {
      // 发送请求获取左侧菜单数据
      const { data: res } = await this.$http.get('menu')
      // if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>