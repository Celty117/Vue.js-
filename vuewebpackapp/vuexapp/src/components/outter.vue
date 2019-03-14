<template>
  <div>
    我是outter组件拿到的：{{getOutterCount}}
  </div>
</template>

<script>
export default {
  name:'outter',
  computed: {
    getOutterCount(){
      return this.$store.state.num
    }
  },
}
</script>

<style scoped>

</style>