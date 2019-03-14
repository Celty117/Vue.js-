import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建状态仓库,state和Store单词不能改
export default new Vuex.Store({
  state: {
    num: 88,
  },
  mutations: {
    //定义状态改变函数
    increase: function (state) {
      state.num++;
    },
    decrease(val) {
      val.num = val.num - 20;
    }
  },
  actions: {
    // eee为上下文对象
    decreaseAction(eee) {
      // actions中只能对mutation进行操作
      eee.commit('decrease');
    }
  },
  getters: {
    getNum(s) { //对返回的数据
      return s.num > 0 ? s.num : 0
    }
  }
})