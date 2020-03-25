<template>
  <div class="index">
    <div class="lef-menu">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>

        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">基础信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/supplier">供应商</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">参数管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>人员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">证件管理</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>倒班管理</span>
          </template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">
          <i class="el-icon-truck"></i>
          <span slot="title">资源管理</span>
        </el-menu-item>
      </el-menu>
      
      
    </div>
    <div class="right-content">

    </div>
home
  </div>
</template>

<script>
export default {
  name:index,
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  width: 15%;
  height:100% ;
  border: 1px solid red;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border: 1px solid red;
}
.lef-menu{
  width: 100%;
  height: 100%;
  border: 1px solid black;

}

</style>
