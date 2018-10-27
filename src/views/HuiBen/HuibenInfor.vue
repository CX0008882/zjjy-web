<template>
  <div class="warry">
    <div class="title">
      <div class="titelpic">
        <img src="../../assets/img/activeh.png"/>
      </div>
      <div class="titledes">这里是描述这里是描述</div>
      <div class="tiemsp"><span>标签1</span><span>标签2</span><span>标签3</span></div>
      <div>
        <span class="teyso"><i class="icon"></i>免费</span>
        <span class="tesim">收藏</span>
        <span>投屏</span>
      </div>
    </div>
    <div>
    <scrollView title="操作卡" desc=""></scrollView>
   </div>

    <h2>基本信息</h2>

    <div>
      asdfsadfasdfasdf

      asdfasdf
      asdfas
      asdf
      asdf
      asdfas

    </div>
  </div>

</template>
<script>
  import scrollView from "@/components/scrollView"

  export  default {

    components:{

      scrollView


    }


  }


</script>

<style lang="stylus" scoped>
  .warry
    background-color white
    padding-left 20px
    padding-top 10px
    .title
      height 313px
      .titelpic
        margin: 0 auto
        text-align center
      img
        width 335px
        height 188px
        display block
      .titledes
        font-size 15px
        font-weight bold
        margin-top 10px
      .tiemsp
        margin-top 2px
      span
        margin-left 10px
        background-color #ececec
        border-radius 5px
        font-size 11px
        display -moz-inline-box
        display inline-block
        width 40px
        text-align center
        margin-top 5px
      .teyso
        color #FF6B4E
        font-weight bold
        background-color white
        font-size 18px
        width 37px
        height 13px
      .tesim
        margin-left 175px
        background-color white
      .tesim + span
        background-color white
      .imgloc
        width 17px
        height 16px
      p
       font-size 18px



</style>
