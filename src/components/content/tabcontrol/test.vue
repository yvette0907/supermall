<template>
<div class="tab-control">
<div class="tab-control-item" v-for="(item,index) in titles" :key='index' :class="{active: index === currenIndex}" @click='itemClick(index)'>
<span>{{item}}</span>
</div>
</div>
</template>

<script>
export default {
  name:'Test',
  data(){
   return {
     currenIndex:0,
   }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
     this.currenIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  height:40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
}
.tab-control-item{
  flex:1;
}
.tab-control-item span{
  padding:5px;
}
.active{
  color:red;
}
.active span{
  border-bottom: 3px solid red;
}
</style>
