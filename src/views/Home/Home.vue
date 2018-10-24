<template>
  <div class="wrapper">
    <div class="tab">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">特色活动</mt-tab-item>
        <mt-tab-item id="2">整合活动</mt-tab-item>
        <mt-tab-item id="3">特色活动</mt-tab-item>
        <mt-tab-item id="4">绘本</mt-tab-item>
        <mt-tab-item id="5">图片</mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <scrollView title="精选推荐" desc="更优质的贴心主题，更优质的教育" />
        <!-- <recommend/> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <classic/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <major/>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <expert/>
      </mt-tab-container-item>
       <mt-tab-container-item id="5">
        <pic/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import classic from "@/views/Home/classic";
import expert from "@/views/Home/expert";
import major from "@/views/Home/major";
import recommend from "@/views/Home/recommend";
import pic from "@/views/Home/pic";

import scrollView from "@/components/scrollView"

export default {
  components: {
    classic,
    expert,
    major,
    recommend,
    pic,
    scrollView
  },
  data(){
    return{
      selected: "1",
    }
  },
  mounted(){
  },
  methods:{
    changeToSearch(){
      this.$router.push({path:'home/search'});
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  // position fixed
  width 100%
  height 92%
  .mint-search
      height initial
  .mint-navbar .mint-tab-item.is-selected
    margin 0
    // position relative
    // .serch
    //   position absolute
    //   top: 0
    //   margin: 0 auto 
    .tab
      height 53px
      width 375px
      font-size 0.13 rem
    // background-color red
    // display flex
    // justify-content center 
    // align-items center 
    // .tab-item
    //   flex:1
    //   background-color blue
  // .router
  //   height 400px
</style>
