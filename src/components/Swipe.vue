<template>
  <van-swipe :autoplay="10000" indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" class="img-size" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

export default {
  name: "Swipe",
  data() {
    return {
      images: [
        require("@/assets/images/0.jpg"),
        require("@/assets/images/1.jpg"),
        require("@/assets/images/2.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.img-size {
  height: 18%;
  width: 100%;
}
</style>

