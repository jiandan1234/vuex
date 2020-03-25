<template>
  <div class="customer">
    <!-- 
      1.实现新增
      2.实现删除，但是不是带弹框
      3.实现查看
      4.未实现，修改、搜索功能
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
          <h3>客户名称：</h3>
          <label for="inputBox">
            <input type="text" id="inputBox" placeholder="请输入客户名称" />
          </label>
          <h3>地址：</h3>
          <label for>
            <input type="text" placeholder="请输入地址" />
          </label>
          <h3>邮编</h3>
          <label for>
            <input type="text" placeholder="请输入邮编" />
          </label>
          <div class="btn-con">
            <button type="button">查询</button>
            <button type="reset">重置</button>
            <button @click.prevent="add">新增</button>
          </div>
        </div>
      </div>
      <div class="list-wrap">
        <div class="list-con">
          <div class="list">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column fixed prop="id" label="序号" width="100"></el-table-column>
              <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="address" label="地址" width="300"></el-table-column>
              <el-table-column prop="zip" label="邮编" width="200"></el-table-column>
              <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                  <el-button type="text" size="small" @click="del(scope.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="change-list">
            <div>当前页面有{{}}</div>
          </div>
        </div>
      </div>
    </div>
    <div></div>

    <!-- 新增弹框 -->
    <div class="add-layer" v-if="addshow">
      <div class="add-wrap">
        <div class="add-title">新增</div>
        <div class="add-content">
          <div class="group">
            <h3>日期：</h3>
            <input type="date" name id v-model="obj.date" />
          </div>
          <div class="group">
            <h3>客户名称：</h3>
            <input type="text" name id v-model="obj.name" />
          </div>
          <div class="group">
            <h3>地址：</h3>
            <input type="text" name id v-model="obj.address" />
          </div>
          <div class="group">
            <h3>邮编：</h3>
            <input type="text" name id v-model="obj.zip" />
          </div>
          <button type="submit" @click="add()">确认</button>
          <button type="button" @click="addshow=false">取消</button>
        </div>
      </div>
    </div>

    <!-- 查看页面 -->
    <div class="show-layer" v-if="show">
      <div class="show-wrap">
        <div class="show-title">查看</div>
        <div class="show-content">
          <div class="group">
            <h3>日期：</h3>
            <input type="date" name id v-model="editData.date" />
          </div>
          <div class="group">
            <h3>客户名称：</h3>
            <input type="text" name id v-model="editData.name" />
          </div>
          <div class="group">
            <h3>地址：</h3>
            <input type="text" name id v-model="editData.address" />
          </div>
          <div class="group">
            <h3>邮编：</h3>
            <input type="text" name id v-model="editData.zip" />
          </div>
          <button type="button" @click="show=false">取消</button>
        </div>
      </div>
    </div>

    <!-- 修改选框 -->
    <div class="edit-layer" v-if="editshow">
      <div class="edit-wrap">
        <div class="edit-title">新增</div>
        <div class="edit-content">
          <div class="group">
            <h3>日期：</h3>
            <input type="date" name id v-model="obj.date" />
          </div>
          <div class="group">
            <h3>客户名称：</h3>
            <input type="text" name id v-model="obj.name" />
          </div>
          <div class="group">
            <h3>地址：</h3>
            <input type="text" name id v-model="obj.address" />
          </div>
          <div class="group">
            <h3>邮编：</h3>
            <input type="text" name id v-model="obj.zip" />
          </div>
          <button type="submit">确认</button>
          <button type="button" @click="addshow=false">取消</button>
        </div>
      </div>
    </div>
    <!-- 删除弹框 -->

    <!-- 删除提示框 -->

    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm(scope.$index)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Customer",
  data() {
    return {
      addshow: false,
      show: false,
      editshow: false,
      delVisible:false,
      alter: "",
      obj: {
        date: "",
        name: "",
        address: "",
        zip: ""
      },
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "流浪猫",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "毛小黑",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "小豆丁",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      editData: {}
    };
  },
  methods: {
    //查询按钮
    handleClick(row) {
      this.show = true;
      console.log(row);
      this.editData = {
        date: row.date,
        name: row.name,
        address: row.address,
        zip: row.zip,
        id: row.id
      };
    },
    add() {
      this.addshow = true;
      var _id = Math.max(
        ...this.tableData.map(function(v) {
          return v.id;
        })
      );
      this.tableData.map(function(v) {
        return v.id;
      });
      if (!this.obj.date || !this.obj.name || !this.obj.address) {
        this.alter = "提交成功";
      } else {
        this.tableData.push({
          date: this.obj.date,
          name: this.obj.name,
          address: this.obj.address,
          zip: this.obj.zip,
          id: _id
        });
        this.obj = {};
        this.addshow = false;
      }
    },
    update() {},
    del(index) {
      this.tableData.splice(index, 1);
    },
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
