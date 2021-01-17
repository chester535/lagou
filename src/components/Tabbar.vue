<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item to="/">
      <span>职位</span>
      <template #icon="props">
        <img :src="props.active ? icon.job_active : icon.job_inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/about">
      <span>公司</span>
      <template #icon="props">
        <img
          :src="props.active ? icon.company_active : icon.company_inactive"
        />
      </template>
    </van-tabbar-item>

    <van-tabbar-item dot>
      <span>消息</span>
      <template #icon="props">
        <img :src="props.active ? icon.msg_active : icon.msg_inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span>课程</span>
      <template #icon="props">
        <img
          :src="props.active ? icon.education_active : icon.education_inactive"
        />
      </template>
    </van-tabbar-item>
    <van-tabbar-item dot>
      <span>我</span>
      <template #icon="props">
        <img :src="props.active ? icon.my_active : icon.my_inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>



<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
      icon: {
        job_active: require("@/assets/images/tabbar_ic_job_sel.png"),
        job_inactive: require("@/assets/images/tabbar_ic_job_nor.png"),
        company_active: require("@/assets/images/tabbar_ic_company_sel.png"),
        company_inactive: require("@/assets/images/tabbar_ic_company_nor.png"),
        msg_active: require("@/assets/images/tabbar_ic_msg_sel.png"),
        msg_inactive: require("@/assets/images/tabbar_ic_msg_nor.png"),
        education_active: require("@/assets/images/tabbar_ic_education_sel.png"),
        education_inactive: require("@/assets/images/tabbar_ic_education_nor.png"),
        my_active: require("@/assets/images/tabbar_ic_my_sel.png"),
        my_inactive: require("@/assets/images/tabbar_ic_my_nor.png"),
      },
    };
  },
};
</script>