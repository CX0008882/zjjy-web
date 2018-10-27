<template>
    <div class="carlist">
  <div class="headimag">
    <img src="../../assets/img/temp/ts.png" alt="">
  </div>

   <div class="coneotns">
      <p>
       特色活动
      </p>
     <table class="table">
       <tr>
         <td>图片位置</td>
           <td><span>标题</span><span>标题1</span><span>标题2</span></td>
           <td>价格 1</td>
       </tr>


     </table>
      
   </div>


 </div>

</template>

<script>
export default {
  
  data(){

  }

}
</script>


<style lang="stylus" scoped>
.carlist
position relative
  .headimag
    height 135px
    positio absolute
   
    &img 
     width 375px
     heig  128px
  .coneotns
     position absolute   
     width :335px
     border-style solid 
     border-width 1px
     margin-left 20px
     box-shadow:0 0 1px #000
     border-bottom 5px
     background-color #ffffff

     



</style>
