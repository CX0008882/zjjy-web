<template>
  <div class="heads">

    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in recommend.swiperCourse" :key="item.id" class="item" >
        <img :src="item.imgSrc" alt="" class="image" @click="changeToCoursedetails(item)">
      </mt-swipe-item>
    </mt-swipe>

  <div>
</div>
  </div>
</template>

<script>
import star from '@/components/star/star'
import {getRecommend} from '@/api/api'
import socorll from '@/components/soclle'
export default {
  data(){
    return{
        recommend:{}
    }
  },
  components:{
    star,
    socorll,
  },
  mounted(){
    getRecommend().then(res=>{
      this.recommend= res;
    })
  },
  methods:{
    changeToCoursedetails(course){
      this.$router.push({path:"/home/coursedetails" , query:{id:course.id}})
    },
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

