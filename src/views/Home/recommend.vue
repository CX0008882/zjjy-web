<template>
  <div class="heads">

    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in recommend.swiperCourse" :key="item.id" class="item" >
        <img :src="item.imgSrc" alt="" class="image">
      </mt-swipe-item>
    </mt-swipe>

  <div>
</div>
  </div>
</template>

<script>

import {getRecommend} from '@/api/api'
export default {
  data(){
    return{
        recommend:{}
    }
  },
  components:{
  
  },
  mounted(){
    getRecommend().then(res=>{
      this.recommend= res;
    })
  },
  methods:{
   
  }
}
</script>

<style lang="stylus" scoped>
  .heads
    display block
    height 150px
    overflow hidden
    margin-top 40px;
    img
      width 335px
      height 150px
      border-radius:7px
   .clear{
     clear:both
   }
  .mint-swipe-item
     display block
     width 335px
     padding-left 18px



</style>

