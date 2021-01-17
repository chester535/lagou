<template>
  <van-popup v-model="show">内容</van-popup>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);

export default {
  name: "Area",
  data() {
    return {
      show: true,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
</style>

