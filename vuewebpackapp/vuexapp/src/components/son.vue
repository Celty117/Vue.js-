<template>
  <div>
    <span>
      我是子组件
    </span>---{{msg}} <br>
    我是子组件拿到的全局状态：{{getNum}}
    <button @click="sendMsgToFa">点击</button>
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
    }
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