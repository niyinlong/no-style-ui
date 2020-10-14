<template>
  <div class="no-message alert" :class="className" v-if="show">
    <i class="fa" :class="faClassName"></i> {{ message }}
  </div>
</template>

<script>
export default {
  name: "no-message",
  computed: {
    faClassName() {
      let str = "";
      switch (this.type) {
        case "success":
          str = "fa-check-circle";
          break;
        case "danger":
          str = "fa-times-circle";
          break;
        case "warning":
          str = "fa-exclamation-circle";
          break;
        case "info":
          str = "fa-info-circle";
          break;
        default:
          break;
      }
      return str;
    },
    className() {
      return `alert-${this.type}`;
    },
  },
  props: {},
  data() {
    return {
      message: "",
      type: "success",
      show: true,
    };
  },
  created() {
    // 接受传递的参数
    let { message, type } = this.$options;
    if (message) {
      this.message = message;
    }
    if (type) {
      this.type = type;
    }
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2000);
  },
};
</script>

<style lang="less">
.no-message {
  &.alert {
    position: fixed;
  }
  display: inline-block;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>