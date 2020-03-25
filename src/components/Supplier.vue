<template>
  <div class="supplier" v-cloak>
    <div class="pag-title">
      <span>供应商信息</span>
    </div>

    <!-- 上部分搜索框 -->
    <div class="sp-top-con">
      <div class="con">
        <!-- 搜索内容 -->
        <div class="sp-search">
          <span class="adv-search">高级搜索</span>
          <form>
            <span>供应商名称:</span>
            <label for="inputBox">
              <input type="text" class="inp" placeholder="标题"/>
            </label>
            <span>地址:</span>
            <label for="inputBox">
              <input type="text" class="inp" placeholder="发布人" />
            </label>
            <span>创建时间:</span>
            <label for="inputBox">
              <input type="date" placeholder="发布时间"/>
            </label>
          </form>
        </div>

        <!-- 查询重置按钮 -->
        <div class="button-con">
          <button type="button" class="btn-search btn">查询</button>
          <button type="reset" class="btn-reset btn">重置</button>
          <button @click="add()" class="btn">{{headers}}</button>
        </div>
      </div>
    </div>
    <!-- 下部分内容部分 -->
    <div class="sp-btm-con">
      <div class="list">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="id" width="50" label="序号" ></el-table-column>
          <el-table-column prop="name" label="供应商名称" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          <el-table-column label="创建日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        <alter v-if="addshow" @cancel="cancels()" :obj1="obj1" @add="add()"></alter>
        <!-- <table border="1" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <td>序号</td>
              <td>标题</td>
              <td>发布人</td>
              <td>发布日期</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,i) in list" :key="i">
              <td>{{i+1}}-{{item.id}}</td>
              <td>{{item.title}}</td>
              <td>{{item.fabu}}</td>
              <td>{{item.date}}</td>
              <td>
                <span class="edit" @click="edit(item)">编辑</span>
                <span class="del" @click="del(i)">删除</span>
                <button>查询</button>
              </td>
            </tr>
          </tbody>
        </table>-->

        <!-- 弹框 -->
        <!-- <div id="layer" v-if="layer">
          <div class="mask">
            <div>
              编辑
              <span @click="layer=false">x</span>
            </div>
            <div class="content">
              <input type="text" placeholder="标题" v-model="editData.title" />
              <input type="text" placeholder="发布人" v-model="editData.fabu" />
              <input type="date" placeholder="发布时间" v-model="editData.date" />
              <button @click="updata()">更新</button>
              <button @click="layer=true">取消</button>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Alter from "@/components/Alter"
export default {
  components:{
  Alter
  },
  data() {
    el: ".supplier";
    return {
      addshow:false,
      headers:"新增",
      editData: {},
      obj1:{
        date:"",
        name:"",
        address:""
      },
      tableData: [
        {
          id:1,
          date: "2016-05-03",
          name: "华为",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:2,
          date: "2016-05-02",
          name: "苹果",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:3,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:4,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:5,
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:6,
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id:7,
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  created() {},
  mounted() {},
  methods: {
    add() {
      this.addshow=true;
      
      // 必填的判断条件
      if (!this.obj1.data || !this.obj1.name || !this.obj.address) return;
      var _id =
        Math.max(
          ...this.tableData.map(function(v) {
            return v.id;
          })
        ) + 1; //id的最大值+1,...就是把数组变成1,2,3，7
      this.tableData.map(function(v){
        return v.id
      })//可以直接返回数组[1,2,3,7]
      // 最大值this.list.Math.max(1,2,3,7)不能直接返回，要调用后返回，没有map好用
      this.tableData.push({
        data: this.obj1.data,
        name: this.obj.name,
        address: this.obj.address,
        // id:this.list.length+1,//这样写有弊端，就是如果中间删除数据后，在添加数据id会重复
        id: _id
      });
      this.obj1 = {};
      this.headers="新增";
    },

    // del(i) {
    //   //删除数据
    //   this.list.splice(i, 1);
    // },
    // edit(item) {
    //   //编辑数组
    //   this.layer = !this.layer; //弹层显示出来
    //   // this.editData=item;//浅拷贝，这样会导致编辑框内容，列表中内容也跟着变化
    //   // 深拷贝 浅拷贝
    //   // 深拷贝：变量，对应的值改变了，原有值没改变
    //   // 浅拷贝 引用的关系 this.editData的值发生变化，item也跟着变化，
    //   // item值变了，editData也发生变化，数组，对象都是浅拷贝
    //   this.editData = {
    //     title: item.title,
    //     fabu: item.fabu,
    //     date: item.date,
    //     id: item.id
    //   };
    // },

    // updata() {
    //   //确认更新
    //   for (var i = 0; i < this.list.length; i++) {
    //     if (this.list[i].id == this.editData.id) {
    //       this.list[i] = this.editData;
    //       this.layer = false; //弹层隐藏
    //     }
    //   }
    // },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    cancels(){
      this.addshow=false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.supplier {
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
.pag-title {
  width: 100%;
  min-height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.sp-top-con {
  width: 100%;
  height: 15%;
  background-color: #eee;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.con {
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: #fff;
}

.sp-search {
  width: 75%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sp-search .adv-search {
  width: 100px;
  font-size: 24px;
  margin: 15px;
}
.sp-search .inp {
  width: 148.85px;
  height: 24px;
  margin-left: 3px;
}
.button-con {
  width: 25%;
  height: 50%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
}
.btn {
  width: 20%;
  height: 70%;
  margin: 10px;
  background-color: #409eff;
  color: #fff;
  border: none;
}
.sp-btm-con {
  width: 100%;
  height: 70%;
  /* border: 1px solid black; */
}
#layer {
  width: 200px;
  height: 200px;
  top: 500px;
  left: 500px;
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}
.sp-btm-con .list {
  width: 90%;
  height: 80%;
  /* border: 1px solid black; */
  text-align: center;
  margin: 0 auto;
}
/* .sp-btm-con .list table {
  width: 100%;
  height: 100%;
  border: 1px solid black;
}
.sp-btm-con td {
  width: 200px;
  height: 30px;
  text-align: center;
  vertical-align: 30px;
} */

.block {
  width: 100%;
  height: 20%;
  /* border:1px solid blue; */
  padding-left: 60px;
}
.block .fenye {
  padding-top: 20px;
}
</style>
