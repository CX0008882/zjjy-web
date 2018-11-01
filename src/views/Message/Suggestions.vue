<template>
    <div class="warrp">
       
     <textarea name="" id=""  rows="10" placeholder="请描述你的反馈内容...(500字以内)" class="textarea-inherit"></textarea>
     
     <div class="items">
     <mt-field label="" placeholder="请输入你的邮箱，以便我们联系你" type="email" ></mt-field>

      </div>
     <div class="summits"><input type="button" value="提交"></div>
     <div class="lastlab">
            <p>若有疑问,可以咨询</p>
            <p style="color:#3BABF2">baiyunlin@zhengjijiye.com</p>

     </div>
    </div>


</template>

<style scoped>

.warrp{

    background-color: #F8F8F8;
    position:fixed;
    height :100%;
  

}
.items{

   margin-top: 10px;

}
.summits{
   
     width: 335px;
     height: 42px;
     background-color: #e8e8e8;
     border-radius: 21px;
     text-align: center;
     margin-top: 50px;
     margin-left: 20px;
     margin-right: 20px;
     display: -webkit-flex;
    display: flex;
     -webkit-align-items: center;
     align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 16px;
     

}
.lastlab{
     
    position: fixed;
    bottom: 10%;
    text-align: center;
    margin:auto;
    left:0;
    right:0;
   
    

}
 .textarea-inherit {
        width: 100%;
        overflow: auto;
        word-break: break-all;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        box-sizing: border-box;
    }

 .textarea-inherit::-webkit-input-placeholder{
     color: #CCCCCC;
     font-size: 13px;
 }   
 .textarea-inherit::-moz-placeholder{

     color: #CCCCCC;
     font-size: 13px;
 }
 .textarea-inherit:-ms-input-placeholder{

     color: #CCCCCC;
     font-size: 13px;
 }
 
</style>
<style>


.mint-field-core::-webkit-input-placeholder{

     color: #cccccc;
     font-size:13px;

 }

</style>
