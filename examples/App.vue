<template>
  <div id="app">
    <no-button-group size="sm">
      <no-button icon="fa-user" type="primary">12345</no-button>
      <no-button icon="fa-user" type="primary">12345</no-button>
    </no-button-group>
   
    <router-view />
  </div>
</template>

<style lang="less">
@import url("../packages/style/bootstrap.css");
</style>
