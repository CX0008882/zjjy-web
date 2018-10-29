<template>
  <div class="ActiveList">

    <div class="contents">

      <div class="title">
        <ul class="hubencontens" v-for="n in 5">
          <li v-for="n in list" class="itmlist">
            <div class="hubenitem" v-bind:style="{backgroundImage:'url('+require('../../assets/huiben.png')+')',backgroundRepeat:'no-repeat',fixed: 'top'}"></div>
            <div class="huibenmiaos"> 
                <span class="title1">戏曲特色</span>
                <span class="title2">身临其境，导演人生</span>
                <span class="title3"><span>中班</span><span>小班</span></span>
            </div>

           <div class="paike">
            <img src="../../assets/icon/paikeloc.png" alt="" @click="getpaike(1)" >
           </div>

          </li>
        </ul>
      </div>

    </div>
  </div>

</template>
<style scoped>
.hubencontens{
    padding-inline-start:0px;
    margin-left: 0px;
}
  .ActiveList {
    
    

  }

  .title {
    margin-top: 15px;
    padding-top: 15px;
    display: block;
    clear: both;
  }

  .title1 {
      display: inline-block;
      font-size: 14px;
      
  }
  .title2 {
    
      display: inline-block;
      font-size: 11px;
      color: #999999;
      margin-top: 10px;


  }
  .title3{

      display: inline-block;
      margin-top: 10px;
      text-align: center;
    
  }
 .title3 span
 {
     background-color: #ececec;
     margin-left: 10px;
     display: inline-block;
     width: 40px;
     height: 18px;
     border-radius: 9px;
     text-align: center;
  
    


 } 
  .paike {
     display: inline-block;
     width: 68px
  }
  .paike input{
      visibility: hidden;
  }
  .paike img{
     
     width: 68px;
     height: 25px;

  }

  .hubenitem {
    width: 110px;
    height: 70px;
    border-radius: 5px;
    overflow: hidden;
    background-size: 125px, 70px;
    display: inline-block;
    vertical-align:top;

  }

  .hubenitem img {
    width: 110px;
    height: 70px;
    border-radius: 5px;
    overflow: hidden;
    display: block;

  }

  .itmlist {
    list-style: none;
  
  }

  .hubentype {

    margin-left: 80px;
    margin-top: 50px;
    background-color: #000000;
    opacity: 0.4;
    border-radius: 9px;
    display: block;
    width: 40px;
    height: 18px;
    text-align: center;
    font-size: 11px;
    color: white;
  }

  .hubentype span {
    color: white;
    opacity: 1;
    z-index: 1;
  }

  .huibenmiaos {
    width: 152px;
    overflow: hidden;
    display: inline-block;
    margin-left: 5px

  }

</style>
<script>
  import {InfiniteScroll} from 'mint-ui';
   import {formatDate} from '../../common/js/data.js';
  export default{
    props: {
      typeId: {

        required: true
      },
      banber: {
        default: true
      }
    },

    mounted(){
      this.list = this.typeId;

    },
    data(){
      return {
        list: "5",
        busy: false,
      }
    },
    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          // let last =this.list;
          this.list = this.list + 100;

          this.loading = false;
        }, 2500);
      },
       getpaike(key){

           this.$router.push({ path: "/Course/paike" });
            
        }
    },
    watch: {
      // 查询条件的变化
      typeId: function (val) {

        this.list = val;
      }
    }
  }


</script>


