<template>
<div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <span>{{item.title}}</span>
        </a>
    </div>
</div>
</template>

<script>
export default {
  name:'RecomendView',
  data(){
   return {

   }
  },
  props:{
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style scoped>
.recommend{
    display: flex;
    width:100%;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    font-size: 14px;
}
.recommend-item{
    flex:1;
    text-align: center;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>
