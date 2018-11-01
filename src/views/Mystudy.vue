<template>
  <div class="warrp" id="mystude">
    <div class="head"  v-bind:style="{backgroundImage:'url('+require('../assets/icon/kebiao.png')+')',backgroundRepeat:'no-repeat'}">
      <div class="daytime">
      <span class="daylab">17</span>
        <div class="daye">
          <p>星期二</p>
          <p>2081-08-08</p>
        </div>
       </div>
    </div>
<div>
    <div class="mydatas" id="mydatas" v-show="myShow" >
      <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      :markDate=arr></Calendar>

        <div class="icosm" @click="showwweks" v-show="myShow">
            <img src="../assets/icon/shouchangm.png" alt="">

        </div>
    </div>
    

      <div id="myweeksday" v-show="weekShow">

     <div data-v-824b0b00="" class="wh_content_all"> <div data-v-824b0b00="" class="wh_content"><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_top_tag">
          日
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_top_tag">
          一
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_top_tag">
          二
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_top_tag">
          三
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_top_tag">
          四
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_top_tag">
          五
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_top_tag">
          六
        </div></div></div> <div data-v-824b0b00="" class="wh_content"><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_item_date">
          1
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_item_date">
          2
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_item_date">
          3
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_item_date">
          4
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_item_date">
          5
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_item_date">
          6
        </div></div><div data-v-824b0b00="" class="wh_content_item"><div data-v-824b0b00="" class="wh_item_date">
          7
        </div></div></div>
        
        <div class="icosm" @click="showwweks" @v-show="myShow">
            <img src="../assets/icon/shangjiantou.png" alt="">

        </div>
        </div>

      </div>
  
    </div>
    <div class="mycourselist">
      <h2>上午</h2>
     
         <div class="expert" v-for="expert in experts" :key="expert.id">
           <span class="imyst"></span>
      <a href="javascript:void(0)" @click="getCourseInfor" class="activea">
      <img :src="expert.imgSrc" alt="" class="avatar">
      <div class="expert-detail">
        <span class="name">{{expert.name}}</span>
        <span class="describe">{{expert.describe}}</span>
      </div>
      </a>

       </div>
        
       <h2>下午</h2>
    </div>
  

  </div>
</template>

<script>
import Calendar from 'vue-calendar-component';
import {getExpert} from '@/api/api'
export default {

  data(){
      return {
        arr:['2018/10/13'],
        myShow:false,
        weekShow:true,
        experts:[]

      }

    },
    mounted(){
      getExpert().then(res=>{
        this.experts= res.experts;
      })
    },
  components: {
    
    Calendar 

  },
  methods: {
    
     clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    },
    getCourseInfor:function(id){
        id=1;
        this.$router.push({path: '/course/couseInfo', params: {id: id}});

      },
      showwweks(){
         
          if(this.myShow){

            this.weekShow=true;
            this.myShow=false;
          }else{
           
            this.myShow=true;
            this.weekShow=false;
 
          }
      }



  } 




}
</script>
<style lang="stylus">
#mystude
.wrapper
  margin:0 auto
  .wh_content_all
    background-color: #ffffff
    .wh_content_item
     color:#666666
     .wh_isToday
       border:1px solid #3BABF2
       background-color:white
       color: #3BABF2
      .wh_chose_day  
        background-color #FF7632
        color :#ffffff
   .wh_content_li   
        color:#414141
        font-size :13px;
      .wh_jiantou2
         border-top: 1px solid  #cccccc
         border-right: 1px solid #cccccc 
      .wh_jiantou1
         border-top: 1px solid  #cccccc
         border-left : 1px solid #cccccc       
      
  .title
      text-align left
      font-weight bolder
      font-size 0.4rem
      margin-left 0.5rem
    .expert
      width 10rem
      border-left 3px solid #e7f6ff
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
          color #333333
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
.head {
  background-size: 375px 160px;
  height: 160px;
}
.daytime{
  padding-top: 90px;
  padding-left: 20px;
  color: white;

}
.daylab{

    font-size: 40px;
    display: inline-block
  
}
.daye{
    font-size: 12px;
    display: inline-block;
    margin-left: 5px;
}
.daye p {

    margin: 0 auto;
}
.mycourselist{

   padding-left: 20px;
   padding-right: 20px;

}

.imyst{
          position: absolute;
          width :5.5px;
          height: 6px;
          border-radius: 5.5px;
          background-color:#e7f6ff;
          border: 1.5px solid #3babf2;
          margin-left: -5px;
          margin-top: 35px;
}
.icosm{

     height: 10px;
     width: 15px;
     display: block;
     margin-left: 180px;

}
.icosm img{
      width: 8px;
      height: 8px;

}
</style>

