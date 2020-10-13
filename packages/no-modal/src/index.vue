<template>
  <div class="no-modal">
    <!-- 弹出层 -->
    <transition
      name="fade"
      :duration="700"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
    >
      <div class="modal" v-show="visible" @click.self="close">
        <div class="modal-dialog" :style="{ width: width, height: height }">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" v-text="title"></h5>
              <span class="close" @click="close">&times;</span>
            </div>
            <div class="modal-body">
              <slot />
            </div>
            <div class="modal-footer" v-if="$slots.footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 遮盖层 -->
    <transition :duration="700">
      <div
        v-show="mask && visible"
        class="modal-backdrop fade"
        :class="{ show: visible }"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "no-modal",
  props: {
    mask: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "400px",
    },
    height: {
      type: String,
      default: "400px",
    },
    // 进入动画
    enterActiveClass: {
      type: String,
      default: "animated fadeInDown",
    },
    // 离开动画
    leaveActiveClass: {
      type: String,
      default: "animated fadeOutUp",
    },
    // 标题
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="less">
.no-modal {
  .close {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>