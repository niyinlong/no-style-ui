<template>
  <div id="app">
  
   <no-table>

     <no-table-column prop="name">
       <template >12334</template>
     </no-table-column>

   </no-table>
   
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
