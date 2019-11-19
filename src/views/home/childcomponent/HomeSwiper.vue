<template>
<swiper>
  <swiper-item v-for="(item,index) in banner" :key="index">
    <a :href="item.link">
    <img :src="item.image" alt="">
    </a>
  </swiper-item>
</swiper>
</template>

<script>
// import {Swiper,SwiperItem} from '../../../components/common/swiper'
import Swiper from '../../../components/common/swiper/Swiper';
import SwiperItem from '../../../components/common/swiper/SwiperItem'
export default {
  name:'HomeSwiper',
  props:{
    banner:{
    type:Array,
    default() {
    return []
    }
}
  },
  data(){
   return {

   }
  },
  components:{
      Swiper,
      SwiperItem
  }
}
</script>

<style scoped>

</style>
