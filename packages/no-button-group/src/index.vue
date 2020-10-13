<template>
  <div class="btn-group" :class="className" role="group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "no-button-group",
  props: {
    // 大小
    size: {
      type: String,
      default: "normal",
    },
  },
  computed: {
    className() {
      let style = [];
      if (this.size) {
        style.push(`btn-group-${this.size}`);
      }
      return style;
    },
  },
};
</script>