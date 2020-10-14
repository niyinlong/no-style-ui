<template>
  <div id="app">
    <button @click="showMessage">showMessage</button>
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
    showMessage(e){
     this.$Message({message:'1234',type:'danger'});
    }
  },
  created(){
    // 
  }
};
</script>

<style lang="less">
</style>
