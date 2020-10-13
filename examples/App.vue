<template>
  <div id="app">
  
    <no-button icon="fa-user" type="primary">12345</no-button>
    <no-button icon="fa-user" type="primary" :disabled="false" @click="onClick"
      >弹窗{{ show }}</no-button>
    <div @click="show=!show;">{{show}}</div>
    <no-modal :visible.sync="show" title="标题"> 弹窗内容 </no-modal>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods:{
    onClick(e){
      console.log(e);
    }
  }
};
</script>

<style lang="less">
</style>
