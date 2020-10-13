<template>
  <div class="no-modal">
    <!-- 弹出层 -->
    <transition
      name="animated"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <div class="modal" v-show="visible" @click.self="close">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" v-text="title"></h5>
              <span class="close" @click="close">&times;</span>
            </div>
            <div class="modal-body">
              <slot />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 遮盖层 -->
    <div
      v-show="mask && visible"
      class="modal-backdrop fade"
      :class="{ show: visible }"
    ></div>
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