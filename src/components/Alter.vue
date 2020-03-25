<template>
  <div class="alter" v-if="add">
    <div class="wrap-con">
      <div class="add-title">
        <span>新增</span>
      </div>
      <div class="header_right">
        <div @click="cancel" style="font-size:20px;float:right">x</div>
      </div>
      <div class="content">
        <div class="inp-con">
          <div class="inp">
            <span style="color:red">*</span>
            <span>供应商名称:</span>
            <input type="text"  v-model="obj1.name"/>
          </div>
          <div class="inp">
            <span style="color:red">*</span>
            <span style="margin-right:48px" v-model="obj1.address">地址:</span>
            <input type="text" />
          </div>
          <div style="margin-top:2px" class="inp">
            <span style="color:red">*</span>
            <span style="margin-right:5px" v-model="obj1.date">创建时间：</span>
            <input type="date" />
          </div>
        </div>
        <div class="btn-con">
          <button class="btn" @click="submit()">确定</button>
          <button class="btn" @click="cancel()">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alter",
  data() {
    return {
      props: ["headers","obj1"], //用于接收父组件传过来的数据
      add: true,
     
    };
  },
  methods: {
    // 调用并监听父类方法
    cancel() {
      this.$emit("cancel")
    },
   submit(data){
     this.$emit("add")
   }
  },
  watch:{
    tableData:function(){
      this.form=this.tableData
  }
    }
    
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alter {
  width: 100%;
  height: 100%;
}
.wrap-con {
  width: 25%;
  height: 35%;
  top: 30%;
  left: 50%;
  z-index: 1; /*为正值的时候在之上*/
  position: fixed;
  background: #cccccc;
}
.add-title {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.inp-con {
  height: 40%;
  margin: 15px;
}
.inp {
  margin: 10px;
}

.btn-con {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  margin: 10px;
  width: 50px;
  height: 30px;
  font-size: 14px;
}
.btn {
  background: #409eff;
  border: none;
  border-radius: 8px;
}
</style>
