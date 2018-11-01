<template>
<div class="warry">
    <div class="header"><img src="../../assets/icon/cwyz.png" alt=""></div>
     <div class="content"> 
       
        <mt-field label="姓名" placeholder="请输入你的姓名（2-12位）" id="tymsd" ></mt-field>
    
        <mt-cell title="手机号"  value="15710003652"></mt-cell>
        <div>
        <mt-cell title="所在城市" value="请选择您的城市" is-link></mt-cell> 
        </div>
        <div class="tysm">

       <mt-field label="园所名称" placeholder="请输入您所的名称" ></mt-field>
        </div>


        <div class="divsum">

         <input type="button" value="提交" id="btsum">

         <label for="btsum"></label>
        </div>
     </div>

  </div>
</template>



<script>

export default {
    
methods: {
    getzyz(){

       this.$router.push('/');

    }


    }
}

</script>

<style scoped>
.warry{
    margin: auto 0;
   
}
.content{
 padding-left: 20px;
 padding-right: 20px;

}
.header {
   height: 170px;
   overflow: hidden
}
.header img
{
   width:375px;
   height: 175px;
  
}

.divsum{

   width: 305px;
   height: 42px;
   border-radius: 21px;
   background-color: #F5F5F8;
   color: #999999;
   text-align: center;
   margin-top: 10px;
   margin-left: 10px;
   padding-top: 10px;

}
.mint-cell{
    min-height: 54px;
    font-size:15px;

 
}

</style>

