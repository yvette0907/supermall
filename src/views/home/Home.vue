<template>
<div id="home">
<nav-bar class="nav-color">
  <div slot="center">购物街</div>
</nav-bar>
</div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
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
    NavBar
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
  }
}
</script>

<style scoped>
.nav-color{
  background-color:rgb(250, 148, 148);
  color: white;
}
</style>
