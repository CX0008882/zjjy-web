<template>

  <div class="active" id="anchor-3">
    <div class="activehead">
    </div>

    <div class="expert" v-for="expert in experts" :key="expert.id">
      <a href="javascript:void(0)" @click="getCourseInfor" class="activea">
      <img :src="expert.imgSrc" alt="" class="avatar">
      <div class="expert-detail">
        <span class="name">{{expert.name}}</span>
        <span class="describe">{{expert.describe}}</span>
        <span class="number">{{expert.courseNumber}} <img src="../../assets/img/ear.png"/> {{expert.studentNumber}}次浏览</span>
      </div>
      </a>
    </div>
    <div class="labifnor" @click="getActive" >更多活动</div>
  </div>

</template>


<script>
  import {getExpert} from '@/api/api'
  export default {
    data(){
      return{
        experts:[]
      }
    },
    mounted(){
      getExpert().then(res=>{
        this.experts= res.experts;
      })
    },
    methods:{

      getCourseInfor:function(id){
        id=1;
        this.$router.push({path: '/course/couseInfo', params: {id: id}});

      },
      getActive(){
 
        this.$router.push({path:'/classify'});
 
      }

    }

  }
</script>


<style lang="stylus" scoped>
  .wrapper
    margin-bottom 2rem
    .title
      text-align left
      font-weight bolder
      font-size 0.4rem
      margin-left 0.5rem
    .expert
      width 10rem
      border-bottom 1px solid #F2F5F7
      &:active
        background-color #f2f4f7
      img
        width 110px
        height 70px
        border-radius 5%
        vertical-align top
        margin-left 0.3rem
        margin-top 0.3rem
      .expert-detail
        display inline-block
        margin 0.3rem
        font-size 0.4rem
        .name
          display block
          margin-bottom 0.2rem
          font-size 14px
        .describe
          display block
          margin-bottom 0.2rem
          color #8b8f97
        .number
          color #8b8f97
          img
            width 11px
            height 8px
      .recommend
        font-size 0.4rem
        margin 0.3rem
        text-align left
        color #8b8f97
        span
          color black
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
</style>



<style scoped>
  .activehead {
    display: block;
    height: 70px;
    width: auto;
    background-image: url("../../assets/img/active.png");
    background-repeat: no-repeat;
    background-size: 375px, 70px;
  }
  .activea{
  text-decoration:none;
  color:#333;
}

 .labifnor{
    
    text-align: center;
    vertical-align:middle;
    font-size: 11px;
    color: #CCCCCC;
    margin-top: 5px;
   

 }

</style>
