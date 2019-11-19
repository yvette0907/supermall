<template>
<div id="home">
<nav-bar class="nav-color">
  <div slot="center">购物街</div>
</nav-bar>
<home-swiper :banner='banner' />
<recomend-view :recommend='recommend'/>
</div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childcomponent/HomeSwiper'
import RecomendView from './childcomponent/RecomendView'

import {getHomeMultidata} from '../../network/home'


export default {
  name:'Home',
  data(){
   return {
     banner:[],
     dKeyword:[],
     keywords:[],
     recommend:[]
   }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecomendView
  },
  created(){
    //1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.banner.list;
      this.dKeyword = res.data.dKeyword.list;
      this.keywords = res.data.list;
      this.recommend = res.data.recommend.list;
    })
  },
  methods: {
       startTimer() {
	      this.$refs.swiper && this.$refs.swiper.startTimer()
      },
      stopTimer() {
        this.$refs.swiper && this.$refs.swiper.stopTimer()
      },
	    imageLoaded() {
      	if (!this.isLoaded) {
      		this.$emit('swiperLoaded')
          this.isLoaded = true
        }
	    }
  },
}
</script>

<style scoped>
.nav-color{
  background-color:rgb(250, 148, 148);
  color: white;
}
</style>
