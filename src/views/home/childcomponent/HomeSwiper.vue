<template>
  <mt-swipe :auto="4000" class="swipe">
    <mt-swipe-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    Swipe,
    SwipeItem
  }
};
</script>

<style scoped>
.swipe {
  height: 168px;
}
.swipe img {
  width: 100%;
}
</style>
