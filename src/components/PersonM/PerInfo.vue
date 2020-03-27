<template>
  <div class="personinfo">
    <el-container>
      <el-main>
        <!-- 搜索框 -->
        <div class="inp-con">
          <div class="inp">
            <span class="text" style="width:60px;">姓名:</span>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="inp">
            <span class="text" style="width:60px;">姓名:</span>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="inp">
            <span class="text" style="width:60px;">姓名:</span>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
          <div class="inp">
            <el-button type="info" round>查 询</el-button>
            <el-button type="success" round>新 增</el-button>
          </div>
        </div>
        <!-- 表格部分 -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
          <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
              <el-button type="text" @click="handleEdit(scope.row.id)" size="small">编辑</el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "PerInfo",
  data() {
    return {
      input: "",
      tableData: [
        {
          id:1,
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        
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
    },
    handleEdit(id){
      console.log(id)
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personinfo {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100% !important;
}
.top-con {
  display: flex;
  flex-direction: column;
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