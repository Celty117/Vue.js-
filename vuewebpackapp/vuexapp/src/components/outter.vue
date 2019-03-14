<template>
  <div>
    我是outter组件拿到的：{{getOutterCount}}  <br>
    <button @click="oadd">outter组件---改变状态按钮</button>
    <button @click="oaddaction">outter组件---改变状态按钮（action）</button>
  </div>
</template>

<script>
export default {
  name:'outter',
  computed: {
    getOutterCount(){
      return this.$store.state.num
    },
  },
  methods:{
    oadd(){
      this.$store.commit('increase');
    },
    oaddaction(){
      this.$store.dispatch('decreaseAction')
    },
  },
}
</script>

<style scoped>

</style>