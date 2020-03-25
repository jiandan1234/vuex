<template>
  <div class="customer">
    <!-- 
      1.实现新增
      2.实现删除，但是不是带弹框
      3.实现查看
      4.未实现，修改、搜索功能
      5.准备实现新增、修改、查看使用一个弹框https://segmentfault.com/a/1190000020144222
      6.el-table中:height="tableHeight"可以改变表格不展示全屏，表格高度自适应
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
            <input type="text" id="inputBox" placeholder="请输入客户名称" v-model="search" />
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
            <button @click="add()">新增</button>
          </div>
        </div>
      </div>
      <div class="list-wrap">
        <div class="list-con">
          <div class="list">
            <el-table
              :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
              border
              style="width: 100%"
              :height="tableHeight"
            >
              <el-table-column fixed prop="id" label="序号" width="100"></el-table-column>
              <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="address" label="地址" width="300"></el-table-column>
              <el-table-column prop="zip" label="邮编" width="200"></el-table-column>
              <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                  <el-button type="text" size="small" @click="del(scope.$index,scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="block">
            <span class="demonstration">完整功能</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="200"
            ></el-pagination>
          </div>
          <!-- <div class="change-list">
            <div>当前页面有{{}}</div>
          </div>-->
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <el-dialog :title="dialogTitle" width="50%" :visible.sync="iconFormVisible">
      <el-form :inline="true" :model="editData" class="demo-form-inline">
        <el-form-item label="日期">
          <el-input type="date" v-model="editData.date" placeholder="日期"></el-input>
        </el-form-item>
        <el-form-item label="客户名称">
          <el-input v-model="editData.name" placeholder="客户名称"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="editData.address" placeholder="地址"></el-input>
        </el-form-item>
        <el-form-item label="邮编">
          <el-input v-model="editData.zip" placeholder="邮编"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="iconFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Customer",
  data() {
    return {
      iconFormVisible: false,
      dialogTitle: "增加",
      rowIndex: null,
      addshow: false,
      show: false,
      editshow: false,
      delVisible: false,
      alter: "",
      search: "",
      datas: [],
      editData: {},
      pageSize: 30,
      currentPage: 1,
      currentTotal: 1,
      tableHeight: 400,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  created() {
    this.gettableData();
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页${val}条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    gettableData() {
      let that = this;
      this.$axios.get("/customer/tabledata").then(res => {
        console.log("gettabledata", res);
        this.datas = res.data.datas;
      });
    },
    //查询按钮
    handleClick(row) {
      this.iconFormVisible = true;
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
      this.iconFormVisible = true;
      this.dialogTitle = "新增";
      var _id = Math.max(
        ...this.datas.map(function(v) {
          return v.id;
        })
      );
      this.datas.push({
        date: this.editData.date,
        name: this.editData.name,
        address: this.editData.address,
        zip: this.editData.zip,
        id: _id
      });
      this.editData = {};
    },
    // 弹框确认
    submit() {
      if (this.dialogTitle == "编辑") {
        this.datas.splice(this.rowIndex, 1, this.editData);
        this.iconFormVisible = false;
        return;
      }
      this.datas.splice(0, 0, this.editData);
      this.iconFormVisible = false;
    },
    // 删除
    del(index, row) {
      this.$confirm(`确认删除${row.name}吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error"
      }).then(() => {
        this.datas.splice(index, 1);
      });
    },
    handleEdit(row) {
      console.log(row);
      this.dialogTitle = "编辑";
      this.iconFormVisible = true;
      this.editData = {
        date: row.date,
        name: row.name,
        address: row.address,
        zip: row.zip,
        id: row.id
      };
    }
  },
  computed: {
    tableData() {
      const search = this.search;
      if (search) {
        return this.datas.filter(data => {
          return Object.keys(data).some(key => {
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.datas;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.tablebox {
}
.tablebox th {
  padding: 0 !important;
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
