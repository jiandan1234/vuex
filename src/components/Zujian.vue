<template>
  <div>
    <div id="modal" v-show="showModal">
      <div class="modal-mask" :class="maskBack"></div>
      <div class="modal-body">
        <div class="modal__hd">
          <h3 class="modal__hd_text" v-if="title">{{title}}</h3>
          <slot v-else name="modal__hd"></slot>
        </div>
        <div class="modal__bd">
          <p class="modal__bd_text" v-if="msg&&type === 'alert'">{{msg}}</p>
          <div v-else-if="msg&&type === 'confirm'" class="input_box">
            <input type="text" :placeholder="msg" name="userid" ref="modalval" />
          </div>
          <slot v-else name="modal__bd"></slot>
        </div>
        <div v-if="type === 'confirm'" class="modal__ft flex">
          <button class="btn modal__btn modal__btn_primary" @click="confirm()">支付</button>
          <button class="btn modal__btn modal__btn_default" @click="closes();geAlert(0)">申请退款</button>
        </div>
        <div v-else-if="type === 'alert'" class="modal__ft">
          <div class="btna modal__btn modal__btn_default" @click="queren()">确认</div>
          <div class="btna border_right modal__btn modal__btn_default" @click="quxiao()">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    closes() {
      this.showModal = false;
      this.type = "alert";
      this.title = "add";
      this.msg = "";
      this.maskBack = "";
    },
    opens(type, title, msg) {
      this.showModal = true;
      this.type = type;
      this.title = title;
      this.msg = msg;
      this.$emit("oper");
    },
    confirm() {
      this.$emit("on-confirm");
      this.closes();
    },
    getVal() {
      if (this.$refs.modalval) {
        return this.$refs.modalval.value;
      }
    },
    setMaskClass(back) {
      this.maskBack = back || "maskBackNo";
    }
  }
};
</script>

<style lang="less" scoped>
.modal-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.maskBackNo {
  background: inherit;
}
.modal-body {
  position: fixed;
  z-index: 1000;
  width: 12rem;
  top: 10rem;
  height: 7.3rem;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
}
.modal__bd {
  padding: 0 1.6em 0.8em;
  word-wrap: break-word;
  word-break: break-all;
  color: #999;
}
.modal__hd_text {
  padding: 1.3em 1.6em 0.5em;
}
.modal__bd_text {
  font-size: 0.3rem;
  line-height: 1rem;
}

.input_box input {
  height: 0.6rem;
  border: 1px solid #d9d9d9;
  border-radius: .1rem;
  padding: 0 0.3rem;
  width: 70%;
}

.modal__ft {
  position: fixed;
  left: 0;
  bottom: 0;
  line-height: 0.8rem;
  font-size: 0.35rem;
  width: 100%;
}
.modal__ft:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #ccc;
  color: #d5d5d6;
  transform-origin: 0 0;

  transform: scaleY(0.5);
}
.modal__btn {
    position: relative;
    /* display: block; */
    font-size: .3rem;
    color: #fff;
    width: 50%;
    height: 1.7rem;
    /* border-radius: 1rem; */
    /* margin: 0 auto; */
    line-height: 1.7rem;
}
.border_right{
      border-right: 1px solid #e5e5e5;
      box-sizing: border-box;
}
.modal__btn_primary,
.modal__btn_alert {
      background-color: #fff;
      
    /* color: #fa0; */
    font-size: .6rem;
    width: 50%;
}
.modal__btn_default {
  color: #ffaa00;
  font-size: 0.6rem;
  float: right;
}
.modal__btn_alert {
  width: 100%;
  height: 1rem;
}
.modal__btn:after {
  content: " ";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  box-sizing: border-box;
  border-radius: .2rem;
}
</style>