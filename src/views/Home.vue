<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/images/logo.png" /> -->
    <van-row>
      <van-col span="3">推荐</van-col>
      <van-col span="3">附近</van-col>
      <van-col span="3">最新</van-col>
      <van-col span="3" offset="9">
        <router-link to="/area">杭州</router-link> |
      </van-col>
      <van-col span="3"> 筛选</van-col>
    </van-row>
    <Swipe />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Swipe from "@/components/Swipe.vue";
// import Area from "@/components/Area.vue";
import Vue from "vue";
import { Col, Row } from "vant";
Vue.use(Col);
Vue.use(Row);

export default {
  // name: "Home",
  components: {
    HelloWorld,
    Swipe,
    // Area,
  },
};
</script>
