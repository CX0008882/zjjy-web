<template>
  <div class="wrapper">

    <div class="tab">
      <mt-navbar v-model="selected" fixed>
        <mt-tab-item id="1">整合活动</mt-tab-item>
        <mt-tab-item id="2">特色活动</mt-tab-item>
        <mt-tab-item id="3">绘本</mt-tab-item>
        <mt-tab-item id="4">图片</mt-tab-item>
      </mt-navbar>
    </div>
    <ul class="left">
      <li v-for="(item, index) in classes" :key="item.id" class="left-class" :class="item.isClick?'active':''" @click="changeTitle(index)">
        <span class="title">{{item.title}}</span>
      </li>
    </ul>
    <div class="right">

      <mt-tab-container v-model="selected">

        <mt-tab-container-item id="0">

        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="Ahead" >
            <img src="../assets/img/activeh.png"/>
            <a href="#"></a>
          </div>
          <ActiveList :typeId="huibentypes"></ActiveList>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <HuiBenList  :typeId="huibentypes"></HuiBenList>
        </mt-tab-container-item>

        <mt-tab-container-item id="4">
          <picList  :typeId="huibentypes"></picList>
        </mt-tab-container-item>

      </mt-tab-container>



    </div>

  </div>
</template>

<script>
import search from "@/components/search"
import { getClassify } from "@/api/api"
import MtTabContainerItem from "../../node_modules/mint-ui/packages/tab-container-item/src/tab-container-item";
import MtTabbar from "../../node_modules/mint-ui/packages/tabbar/src/tabbar";
import MtTabContainer from "../../node_modules/mint-ui/packages/tab-container/src/tab-container";
import MtTabItem from "../../node_modules/mint-ui/packages/tab-item/src/tab-item";
import HuiBenList from "@/views/HuiBen/HuiBenList"
import ActiveList from  "@/views/Active/ActiveList";
import picList from  "@/views/PicList/picList";
export default {
  data() {
    return {
      classes: [],
      nowClass:{},
      selected: "2",
      huibentypes:"1"
    };
  },
  components: {
    search,
    MtTabItem,
    MtTabContainer,
    MtTabbar,
    MtTabContainerItem,
    HuiBenList,
    ActiveList,
    picList
  },
  methods: {
    changeToSearch() {

      this.$router.push({ path: "home/search" });
    },
    changeTitle(key) {         //改变css样式（当前点亮）

      this.huibentypes=key;

      //console.log(this.typeId);
      let classes = this.classes;
      for (let item of classes) {
        item.isClick = false;
      }
      classes[key].isClick = true;
      this.nowClass = classes[key];
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
          list=list+100;
//        let last = this.list[this.list.length - 1];
//        for (let i = 1; i <= 10; i++) {
//          this.list.push(last + i);
//        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted() {
    getClassify().then(res => {
      // console.log(res);
      let classes = res;
      for (let item of classes) {
        // this.$set(item, "isClick", false);
        item.isClick = false
      }
      classes[0].isClick = true;
      this.classes = classes
      this.nowClass = classes[0];
    });
  },
  watch: {
    selected(curVal, oldVal){

        //this.huibentypes=curVal;  //概不
    }
    }
};
</script>

<style lang="stylus" scoped>
.wrapper
  position fixed
  height 92%
  width 100%
  overflow scroll
  .search
    position fixed
    overflow hidden
  .mint-search
    height initial
  .mint-navbar .mint-tab-item.is-selected
      margin 0
      border-bottom none
      .tab
        height 53px
        width 375px
        font-size 0.13rem

  .left
    position fixed
    width 80px
    height 100%
    background-color #f7f9fc
    margin 0
    padding 0
    list-style-type none
    margin-top 1.28rem
    .left-class
      height 1.4506rem
      font-size 0.354rem
      line-height 1.4506rem
      text-align left
      .title
        display block
        margin-left 0.42667rem
      &.active
        background-color white
        font-weight bolder
        position relative
        &:before
          content ''
          position absolute
          width 0.128rem
          height 1.4506rem
          background-color white
  .right
    width 7rem
    // margin 1rem
    margin-left 2.45rem
    margin-top 1.28rem
    margin-right 0.42666rem
    margin-bottom 0.85332rem
    .image
      display inline-block
      width 6.61323rem
      &> img
        width 6.61323rem
        height 2.56rem
    .right-class
      list-style-type none
      margin 0
      padding 0
      margin-top 0.42666rem
      .head
        font-weight bolder
        display block
        position relative
        &:after
          border solid 1px black
          border-bottom-width 0
          border-left-width 0
          content ' '
          top 55%
          position absolute
          width 7px
          height 7px
          -webkit-transform translateY(-50%) rotate(45deg)
          transform translateY(-50%) rotate(45deg)
      .someclass
        &>li
          flex 1
          display inline-block
          margin-top 0.42666rem
          margin-right 0.085332rem
        .detail
          width 2.048rem
          height 0.7111rem
          line-height 0.7111rem
          // margin
          display block
          border 1px solid #d5dae7
          border-radius 0.42667rem
          text-align center
          font-size 0.34134rem
          &:active
            background-color #f2f4f7

     .Ahead img
       width: 265px;
       height: 110px;
       border-radius: 7px;
</style>

