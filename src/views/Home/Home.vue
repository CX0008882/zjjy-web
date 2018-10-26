<template>
  <div class="wrapper">
    <div class="tab">
      <mt-navbar v-model="selected" fixed>
        <mt-tab-item id="1">精品推荐</mt-tab-item>
        <mt-tab-item id="2">整合活动</mt-tab-item>
        <mt-tab-item id="3">特色活动</mt-tab-item>
        <mt-tab-item id="4">绘本</mt-tab-item>
        <mt-tab-item id="5">图片</mt-tab-item>
      </mt-navbar>
    </div>
    <recommend></recommend>
    <scrollView title="精选推荐" desc="更优质的贴心主题，更优质的教育~"/>
    <homeactive></homeactive>
    <huiben title="绘本专题" desc="更优质的课程主题，更贴心的教育~"></huiben>
    <pictiles></pictiles>
  </div>
</template>

<script>
  import classic from "@/views/Home/classic";
  import expert from "@/views/Home/expert";
  import major from "@/views/Home/major";
  import recommend from "@/views/Home/recommend";
  import pic from "@/views/Home/pic";
  import homeactive from "@/views/Active/ActiveHome";
  import scrollView from "@/components/scrollView"
  import MtTabbar from "../../../node_modules/mint-ui/packages/tabbar/src/tabbar";
  import MtTabContainer from "../../../node_modules/mint-ui/packages/tab-container/src/tab-container";
  import MtTabItem from "../../../node_modules/mint-ui/packages/tab-item/src/tab-item";
  import huiben from  "@/views/HuiBen/HomeList";
  import pictiles from "@/views/PicList/HomePic";
  export default {
    components: {
      MtTabItem,
      MtTabContainer,
      MtTabbar,
      classic,
      expert,
      major,
      recommend,
      pic,
      scrollView,
      homeactive,
      huiben,
      pictiles
    },
    data(){
      return {
        selected: "1",
      }
    },
    mounted(){
    },
    methods: {},
    watch: {
      selected(curVal, oldVal){
          if(curVal==2)
          {
              return;
          }
        var selector = "anchor-" + curVal;
        var anchor = document.getElementById(selector);
        document.documentElement.scrollTop = anchor.offsetTop-100
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .wrapper
    width 100%
    height 92%
    .mint-search
      height initial
    .mint-navbar .mint-tab-item.is-selected
      margin 0
      border-bottom none
      .tab
        height 53px
        width 375px
        font-size 0.13rem


</style>
