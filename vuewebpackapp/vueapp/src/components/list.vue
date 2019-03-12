<!--  -->
<template>
  <ul>
    <li>
      <router-link :to="{name:'helloworld',params:{worldmsg:'世界你好'}}">Hello World</router-link>
    </li>
    <li>
      <router-link :to="{name:'helloearth',params:{earthmsg:'地球你好'}}">Hello Earth</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list"
};
</script>

<style scoped>
</style>