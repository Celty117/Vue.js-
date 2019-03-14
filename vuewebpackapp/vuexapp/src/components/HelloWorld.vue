<template>
  <div class="hello">
    <parent></parent>
    <hr>
    <out></out>
  </div>
</template>

<script>
import parent from './parent';
import out from './outter';

export default {
  components: {
    parent,
    out
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
