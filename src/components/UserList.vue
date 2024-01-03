<template>
  <div>
    <el-breadcrumb separator-class="cl-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="15">
        <el-col :span="8">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
      <el-table
          border stripe
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="index"
            label="用户名"
            width="60">
        </el-table-column>
        <el-table-column
            prop="username"
            label="用户名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="email"
            label="邮箱地址"
            width="170">
        </el-table-column>
        <el-table-column
            prop="mobile"
            label="电话"
            width="150">
        </el-table-column>
        <el-table-column
            prop="role_name"
            label="角色"
            width="120">
        </el-table-column>

        <el-table-column
            v-slot="scope"
            label="状态"
            width="120">
          <template>
            <el-switch
                v-model="scope.row.mg_status"
                active-color="#13ce66"
                inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
            label="操作">
          <el-button type="primary" icon="el-icon-edit" size="medium"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="medium"></el-button>
          <el-button type="warning" icon="el-icon-setting" size="medium"></el-button>
        </el-table-column>
      </el-table>
      <el-pagination

          @size-change="sizeChange"
          :current-page="pageInfo.pagenum"
          :page-sizes="[2,5, 10]"
          :page-size="pageInfo.pagesize"
          layout=" sizes, prev, pager, next, jumper"
          :total="10">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data(){
    return{
      pageInfo:{
        pagenum:1,
        pagesize:5,
      },
      tableData: [],
      userStatus:true,
    }
  },

  created() {
    this.getUserList();
  },
  methods: {
    sizeChange(size){
      console.log(size);
      this.pageInfo.pagesize=this.size;
      this.getUserList();
    },
    getUserList(){
      this.$axios.get('/user',{params:this.pageInfo}).then(res=>{
        // if(res.data.meta.status!==200){
        //   return this.$message.error(res.data.meta.msg);
        // }
        this.tableData=res.data.data.users;
      })
    }
  }
}
</script>

<style scoped>
.box-card{
  margin-top: 15px;
}
</style>