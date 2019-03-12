<template>
  <div class="hello">
    <h1>Hello Earth</h1>
    <h2>Essential Links</h2>
    <h3>{{$route.params.earthmsg}}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: "HelloEarth",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: chocolate;
}
</style>
