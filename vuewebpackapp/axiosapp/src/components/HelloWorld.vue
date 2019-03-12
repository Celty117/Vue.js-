<template>
  <div class="hello">
    <h3>我是axiosAPP</h3>
    <button @click="getData">GET方式发送请求</button>、
    <button @click="getData">POST方式发送请求</button>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import qs from "qs";
Vue.prototype.$http = axios;

export default {
  name: "HelloWorld",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 10
          }
        })
        .then(response => {
          this.items = response.data.data;
          console.log(response.data.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    postData() {
      this.$http
        .post(url,qs.stringify({
            page: 1,
            limit: 10
          }))
        .then(response => {
          this.items = response.data.data;
          console.log(response.data.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
