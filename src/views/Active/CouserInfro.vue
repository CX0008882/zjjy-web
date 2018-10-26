<template>


  <div class="headcontent">

    <div class="head">
      <img src="../../assets/img/temp/ts.png"/>
    </div>
    <div class="tile">
      <div class="dims"><div class="labnam">就是爱表演</div><div class="infor">详情</div></div>
      <div class="itmsg">身临其境，导演认识</div>
      <div class="tyys"><span>大班</span><span>中班</span><span>小班</span> <div>已收藏</div></div>
    </div>

<div class="cousercontent">
  <div class="tab">
    <mt-navbar v-model="selected" fixed>
      <mt-tab-item id="1">小班</mt-tab-item>
      <mt-tab-item id="2">中班</mt-tab-item>
      <mt-tab-item id="3">大班</mt-tab-item>
    </mt-navbar>
  </div>
  <mt-tab-container v-model="selected">

    <mt-tab-container-item id="0"></mt-tab-container-item>
    <mt-tab-container-item id="1"></mt-tab-container-item>
  </mt-tab-container>
</div>


  </div>


</template>



<script>

  import MtTabContainerItem from "../../../node_modules/mint-ui/packages/tab-container-item/src/tab-container-item";
  import MtTabbar from "../../../node_modules/mint-ui/packages/tabbar/src/tabbar";
  import MtTabContainer from "../../../node_modules/mint-ui/packages/tab-container/src/tab-container";
  import MtTabItem from "../../../node_modules/mint-ui/packages/tab-item/src/tab-item";

  export default {

      data(){

          return{
              selected:1
          }

      },
    components:{

      MtTabItem,
      MtTabContainer,
      MtTabbar,
      MtTabContainerItem,

    }



  }

</script>


<style scoped>

  .cousercontent{

    clear: both;
    z-index: 1;
    position: absolute;
    width: 375px;


  }

   .tyys{
     margin-top: 10px;
     margin-left: 15px;

   }
   .tyys span{
     display: inline-block;
     margin-left: 10px;
     background-color: #ececec;
     border-radius: 3px;
   }
   .tyys div
   {
     display: inline-block;
     margin-left: 150px;
   }
  .itmsg{

    clear: both;
    margin-left: 15px;
    margin-top: 10px;
    font-size: 11px;

  }
  .headcontent{
    position: relative;
  }
  .head {

    position: absolute;
    z-index: 2;
  }

  .tile{

    border:1px solid #cccccc;
    display: block;
    width: 345px;
    height: 104px;
    box-shadow:0 0 1px #000;
    position: absolute;
    z-index: 3;
    background-color: white;
    top: 90px;
    left: 10px;
    border-radius: 7px;

  }

  .dims{
      display: block;
      margin-top: 15px;
      clear: both;

  }
  .labnam{

     font-size: 15px;
     margin-left: 15px;
     display: inline-block;
     width: 250px;
     float: left;

  }
  .infor{

     display: inline-block;
     width: 35px;


  }
  .head img {
    width: 375px;
    height: 160px;
    border-radius: 7px;
  }
</style>


