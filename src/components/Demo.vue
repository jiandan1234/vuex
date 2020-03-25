<template>
  <div class="customer">
    <!-- 
      1.实现新增
      2.实现删除，但是不是带弹框
      3.实现查看
      4.未实现，修改、搜索功能
      5.准备实现新增、修改、查看使用一个弹框https://segmentfault.com/a/1190000020144222
    -->
    <div class="pag-title">
      <span>客户信息</span>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 内容部分 -->
    <div class="content">
      <div class="search-wrap">
        <div class="search-con">
          <ul>
            <li style="border:1px solid yellow;">
              <h3 class="F7">下拉框选择案例</h3>
              <div class="por" style="border:5px solid red">
                <div class="selectBox" style="width: 400px;border:1px solid red;">
                  <div class="selectBox_show" v-on:click.stop="arrowDown">
                    <i class="icon icon_arrowDown"></i>
                    <p title="请选择">{{unitName}}</p>
                    <input type="hidden" name="unit" v-model="unitModel" />
                  </div>
                  <div
                    class="selectBox_list"
                    v-show="isShowSelect"
                    style="max-height: 240px; width: 398px; display: block;"
                  >
                    <div class="selectBox_listLi" v-for="(item, index) in dataList" @click.stop="select(item, index)"
                    >{{item.value}}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      isShowSelect: false,
      dataList: [
        { key: -1, value: "请选择" },
        { key: 0, value: "苹果" },
        { key: 1, value: "香蕉" }
      ],
      unitName: "请选择",
      unitModel: ""
    };
  },
  methods: {
    arrowDown() {
      this.isShowSelect = !this.isShowSelect;
    },
    select(item, index) {
      this.isShowSelect = false;
      console.log(item);
      console.log(index);
      this.unitModel = index;
      this.unitName = item.value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customer {
  width: 100%;
  height: 100%;
  /* border: 1px solid #000; */
  background-color: #eeeeee;
}
.pag-title {
  width: 100%;
  height: 10%;
  /* border: 1px solid #000; */
}
.content {
  width: 100%;
  height: 90%;
  border: 1px solid #000;
}
.search-wrap {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-con {
  width: 90%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.list-wrap {
  width: 100%;
  height: 80%;
  /* border: 1px solid yellowgreen; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-con {
  width: 90%;
  height: 100%;
  /* border: 3px solid greenyellow; */
  background-color: #fff;
}
.list {
  width: 100%;
  height: 90%;
  /* border:1px solid #000; */
}
.change-list {
  width: 90%;
  height: 10%;
  /* border: 1px solid red; */
}
.add-layer {
  width: 300px;
  height: 300px;
  position: fixed;
  top: 300px;
  left: 600px;
  background-color: #808080;
  z-index: 1;
}
.show-layer {
  width: 300px;
  height: 300px;
  position: fixed;
  top: 300px;
  left: 600px;
  background-color: #808080;
  z-index: 1;
}
</style>
