<template>
  <div>
    <span>
      我是子组件
    </span>---{{msg}} <br>
    我是子组件拿到的全局状态：{{getNum}}
    <button @click="sendMsgToFa">点击</button> <br>
    <button @click="sadd">子组件---改变状态按钮</button>
    <button @click="saddaction">子组件---改变状态按钮（action）</button>
  </div>
</template>

<script>
export default {
  name:'son',
  data:function(){
    return{
      ToFatherMsg:'我是你的son'
    }
  },
  props:{
    msg:{
      type: String,
      default:'',
    }
  },
  methods:{
    sendMsgToFa(){
      this.$emit('handle',this.ToFatherMsg)
    },
    sadd(){
      this.$store.commit('increase');
    },
    saddaction(){
      this.$store.dispatch('decreaseAction')
    },
  },
  computed: {
    getNum(){
      return this.$store.state.num
    }
  },
}
</script>

<style scoped>

</style>