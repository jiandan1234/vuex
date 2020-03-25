<template>
  <div class="home" style="width:100%;height:100%;">
    <!-- 最上方 -->
    <div class="top-connent" style="background-color: #409EFF;">
      <div style="width:100%;background-color: #636363; overflow: hidden">
        <span
          class="demonstration"
          style="float:left;padding-top:10px;color:white;margin-left:1%"
        >网站首页</span>
        <span
          class="demonstration"
          style="float:left;padding:5px;color:white;margin-left:2%;width:15%"
        >
          <el-input
            placeholder="请输入"
            icon="search"
            v-model="searchCriteria"
            :on-icon-click="handleIconClick"
          ></el-input>
        </span>
        <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link" style="color:white">
              admin
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </div>
    <!-- 下方 -->
    <div class="btm-connent">
      <div class="lef-menu">
        <el-radio-group v-model="isCollapse" style="margin: 20px;">
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
                <router-link to="/supplier">
                  <el-menu-item index="1-1">供应商</el-menu-item>
                </router-link>
                <router-link to="/customer">
                  <el-menu-item index="1-2">客户</el-menu-item>
                </router-link>
                <router-link to="/demo">
                  <el-menu-item index="1-2">demo</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
         
    
        </el-menu>
      </div>

      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false,
      searchCriteria: ""
    };
  },
  methods: {
    handleIconClick(ev) {
      console.log(ev);
    },
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
.home {
  border: 5px solid black;
  width: 100%;
  height: 100%;
}
.top-connent {
  width: 100%;
  height: 7%;
}
.btm-connent {
  width: 100%;
  height: 93%;
  display: flex;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  /* border: 5px solid yellow; */
}
.lef-menu {
  width: 15%;
  height: 100%;
  border: 1px solid red;
}
.right-content {
  width: 85%;
  height: 100%;
  border: 2px solid red;
}
</style>
