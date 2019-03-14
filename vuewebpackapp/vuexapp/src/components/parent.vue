<template>
  <div>
    <span>我是父组件</span>
    ----{{fromSonMsg}}
    <br>
    我是父组件拿到的全局状态：{{getCount}} <hr>
    <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
  </div>
</template>

<script>
import son from "./son";

export default {
  name: "parent",
  data: function() {
    return {
      toSonMsg: "我是你父亲",
      fromSonMsg: ""
    };
  },
  components: {
    son
  },
  methods: {
    getMsgFromSon: function(value) {
      this.fromSonMsg = value;
    }
  },
  computed: {
    getCount() {
      return this.$store.state.num;
    }
  }
};
</script>

<style scoped>
</style>
