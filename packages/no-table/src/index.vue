<template>
  <table class="no-table table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "no-table",
  props:{
      data:{
          type:Array,
          default(){
              return [];
          }
      }
  },
  data() {
    return {
        // 头部
        headers:[],
        // 列表数据
        list:[]
    };
  },
  methods: {},
  created(){
      console.log(this.$slots.default);
  }
};
</script>