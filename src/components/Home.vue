<template>
  <div class="home" style="width:100%;height:100%;">
    <el-container style="height: 500px; border: 1px solid #eee">
      <!-- 左侧 -->
      <el-aside width="200px" style="background-color: #B3C0D1">
        <!-- 注意加router，否则导航不会被激活 -->
        <el-menu :default-openeds="['1']" default-active="/home" router>
          <div class="ms">
            <router-link to="/home">
            <h3 style="color:#000;">后台管理系统</h3>
            </router-link>
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-custom"></i>人员管理
            </template>
            <el-menu-item index="perinfo">人员信息</el-menu-item>
            <el-menu-item index="perview">人员统计</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-truck item"></i>车辆管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">车辆信息</el-menu-item>
              <el-menu-item index="2-2">车辆统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-grid item"></i>物资管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">设备管理</el-menu-item>
              <el-menu-item index="3-2">手套管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-check item"></i>证件管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">证件信息</el-menu-item>
              <el-menu-item index="4-2">证件统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting item"></i>基本信息管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">参数配置</el-menu-item>
              <el-menu-item index="4-2">客户管理</el-menu-item>
              <el-menu-item index="4-2">供应商管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-container class="top-con">
        <Header />
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Allcomponent/hearder";
export default {
  components: {
    Header
  },
  name: "Home",
  data() {
    return {
       input: '',
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
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
    },
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  border: 5px solid red;
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-container {
  height: 100% !important;
}
.top-con {
  display: flex;
  flex-direction: column;
}
.el-aside {
  color: #333;
  height: 100% !important;
}
.inp-con {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.inp {
  display: flex;
  width: 300px;
  margin: 10px;
}
.text {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border:1px solid red; */
}
.ms {
  width: auto;
  height: 40px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #000 ！important;
}
</style>
