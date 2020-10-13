<template>
  <button
    type="button"
    class="no-button"
    :class="className"
    :disabled="disabled"
  >
    <i v-if="loading" class="fa fa-spinner fa-pulse"></i>
    <i v-else-if="icon" class="fa" :class="icon"></i>
    <slot />
  </button>
</template>

<script>
export default {
  name: "no-button",
  props: {
    // loading 效果
    loading: {
      type: Boolean,
      default: false,
    },
    // 图标
    icon: {
      type: String,
      default: "",
    },
    // 类型
    type: {
      type: String,
      default: "default",
    },
    // 线框
    outline: {
      type: Boolean,
      default: false,
    },
    // 大小
    size: {
      type: String,
      default: "normal",
    },
    // block
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    className() {
      let style = ["btn"];
      if (this.outline) {
        style.push(`btn-outline-${this.type}`);
      } else {
        style.push(`btn-${this.type}`);
      }

      if (this.size) {
        style.push(`btn-${this.size}`);
      }

      if (this.block) {
        style.push("btn-block");
      }
      return style;
    },
  },
};
</script>

<style lang="less">
.no-button {
  .fa {
    margin-right: 0.2rem;
  }
}
</style>