<template>

  <div class="head">
    <img src="../../assets/img/activeh.png"/>

    <div class="tiles">
      <div class="tilesname"><span>不好，身上长条纹了</span><span>标签</span></div>
      <div class="labe">
        <span>中班</span>
        <span>语言</span>
      </div>
      <div class="timess">
        <span>1231321流量次数</span>
        <span class="soou">已收藏</span>
        <span class="tp">投屏</span>
      </div>

    </div>
    <div class="dislist">
      <scrollView title="操作卡" desc=""/>
    </div>

    <div>
      <div class="tab">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">基本信息</mt-tab-item>
          <mt-tab-item id="2">活动过程</mt-tab-item>
          <mt-tab-item id="3">培训视频</mt-tab-item>
        </mt-navbar>
      </div>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="contenlist">
            <div><span>绘本解读</span>
              <br/>
              价值观表里如一 表里如一 按时发大水发暗室逢灯阿斯顿发离开家啊收费
            </div>
            <div><span>活动目标</span>
              <br>
              价值观表里如一 表里如一 按时发大水发暗室逢灯阿斯顿发离开家啊收费
            </div>
            <div><span>教具清单</span>
              <br/>
              价值观表里如一 表里如一 按时发大水发暗室逢灯阿斯顿发离开家啊收费
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div class="boot">
      <span>已收藏</span>
      <div class="btbar">
        <span>加入购物车</span>
        <span>购买</span>
      </div>
    </div>


  </div>


</template>

<script>
  import scrollView from "@/components/scrollView"
  import MtTabContainerItem from "../../../node_modules/mint-ui/packages/tab-container-item/src/tab-container-item";
  import MtTabbar from "../../../node_modules/mint-ui/packages/tabbar/src/tabbar";
  import MtTabContainer from "../../../node_modules/mint-ui/packages/tab-container/src/tab-container";

  export default {

    components: {

      scrollView,
      MtTabContainer,
      MtTabbar,
      MtTabContainerItem,

    },

    data() {

      return {
        selected: "1"
      }

    }

  }


</script>

<style scoped>

  .boot span {
    margin-top: 20px;
    display: inline-block;
    font-size: 13px;
    margin-left: 10px;
  }

  .btbar {
    display: inline-block;
    margin-left: 120px;
    height: 42px;
    width: 124px;
    border-radius: 21px;
  }

  .boot {
    height: 62px;
    border-bottom: 1px solid #ecececec;
    display: inline-block;
    text-align: center;
    margin-top: 13px;
    margin-left: 20px;

  }

  .contenlist {
    margin-top: 10px;
    padding-left: 12px;
    font-size: 12px;

  }

  .contenlist span {

    font-size: 15px;
  }

  .soou {

    margin-left: 15px;
    display: inline-block;
  }

  .timess {

    margin-top: 25px;
    display: inline-block;
  }

  .timess span {
    margin-left: 10px;

  }

  .labe {
    margin-top: 10px;

  }

  .labe span {

    background-color: #ececec;
    border-radius: 3px;
    margin-left: 15px;
    font-size: 11px;

  }

  .tilesname {
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 15px;
  }

  h2 {
    text-align: center;
  }

  img {
    width: 375px;
    height: 200px;
  }

  .tiles {

    width: 100%;
    height: 104px;
    border-bottom: 2px dashed #F8F8F8

  }

  .dislist {

    border-bottom: 2px dashed #F8F8F8
  }

  .head {

  }


</style>
