<template>
  <div>
    <span>我是父组件</span>
    ----{{fromSonMsg}}
    <br>
    我是父组件拿到的全局状态：{{getCount}} <br>
    <button @click="padd">父组件---改变状态按钮</button>
    <button @click="paddaction">父组件---改变状态按钮（action）</button> <hr>
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
    },
    padd(){
      this.$store.commit('increase');
    },
    paddaction(){
      this.$store.dispatch('decreaseAction')
    }
  },
  computed: {
    getCount() {
      // return this.$store.state.num;
      return this.$store.getters.getNum;
    }
  }
};
</script>

<style scoped>
</style>
