<template>
<div>    
<div class="warrp">
<div class="head"><div class="list">已添加账号</div><div class="imtss"> <img src="../../../assets/icon/edit2.png" alt=""><span>完成</span></div></div>   

<div class="item">
    <div class="lefti">
   <p><span style="color:#333333; font-size: 15px;">李笑来</span> <span><img style="width:42px;height:15px" src="../../../assets/icon/teach.png" alt=""></span> </p>
    <p style="margin-top:10px">手机号：123414312312312</p>
    </div>
    <div class="righle">
       <span><p><img src="../../../assets/icon/edit.png" alt=""></p><p>编辑</p></span>
       <span><p><img src="../../../assets/icon/del.png" alt=""></p><p>删除</p></span>
    </div>
</div>
<div class="item">
    <div class="lefti">
   <p><span style="color:#333333; font-size: 15px;">李笑来</span> <span><img style="width:42px;height:15px" src="../../../assets/icon/teach.png" alt=""></span> </p>
    <p style="margin-top:10px">手机号：123414312312312</p>
    </div>
    <div class="righle">
       <span><p><img src="../../../assets/icon/edit.png" alt=""></p><p>编辑</p></span>
       <span><p><img src="../../../assets/icon/del.png" alt=""></p><p>删除</p></span>
    </div>
</div>
<div class="item">
    <div class="lefti">
   <p><span style="color:#333333; font-size: 15px;">李笑来</span> <span><img style="width:42px;height:15px" src="../../../assets/icon/teach.png" alt=""></span> </p>
    <p style="margin-top:10px">手机号：123414312312312</p>
    </div>
    <div class="righle">
       <span><p><img src="../../../assets/icon/edit.png" alt=""></p><p>编辑</p></span>
       <span><p><img src="../../../assets/icon/del.png" alt=""></p><p>删除</p></span>
    </div>

</div>
</div>

<div>


  <mt-popup class="sharePopup" v-model="popupVisible" position="center">
    <div class="addimtes">
      <span><h2>添加教师账号</h2></span> <span @click="addacount"  style="margin-right:10px;float: right;margin-top: 20px;"><img src="../../../assets/icon/close.png" height="12" width="12"/></span>
   <mt-field label="" placeholder="请输入用户名" ></mt-field>
   <mt-field label="" placeholder="请输入手机号" type="tel"></mt-field>
   <div class="itemssh">
       <div class="saveints">保存</div> <div class="addsave">保存并新增</div>
 
   </div>
  </div>
  </mt-popup>
</div>
<div class="btnadd clearfloat" @click="addacount">添加教师账号</div>

</div>

</template>

<script>

export default {
    data(){
      return {

         popupVisible:false,

      }
    },
    methods: {

         addacount(){

            if(this.popupVisible)
            {
              this.popupVisible=false;
            }else
            {
              this.popupVisible=true;
            }

         }
    }


}
</script>


<style scoped>
.warrp{

    padding-left: 20px;
    padding-right: 36px;
    padding-top: 20px;
}
.warrp p{
    margin: 0 auto;
    padding: 0 auto;
}
.lefti{
    flex: 2;
}
.righle{
   flex: 1;
}
.righle img{
   width: 12px;
   height: 12px;

}
.righle span {
    display: inline-block;
    margin-left: 10px;

}
.righle p{
   
  margin-bottom: 0px;
  margin-top: 7px;
  margin-left: 10px;
}

.item{

   width: 100%;
   height: 82px;
    -webkit-box-shadow: rgba(204, 204, 204, 0.3) 0px 0px 20px; 
   -moz-box-shadow: rgba(204, 204, 204, 0.3) 0px 0px 20px; 
   box-shadow: rgba(204, 204, 204, 0.3) 0px 0px 20px; 
   background: white; 
   border-radius: 7px;
   margin-top: 20px;
   padding-left: 15px;
   padding-top: 20px;
   display: flex;
   justify-content: flex-start;
   align-content: center;

}
.imtss{
   float: right;
   color: #24AAFF;
   font-size: 12px;
   display: inline-block;
   }
.list {
    display: inline-block;
}   
.imtss img{
    width: 12px;
    height: 12px;
    margin-right: 4px;
}

.btnadd{

   height: 50px;
   line-height: 50px;
   width: 100%;
   background-image: -webkit-linear-gradient(140deg,#45A1FF, #45B7FF); 
   text-align: center;
   position:fixed;
   bottom: 0px;
   color: white;
   font-size: 16px;

}
.addimtes{
    
    width: 305px;
    height: 251px;
    text-align: center;
}
.addimtes span{

     display: inline-block;

}

</style>

<style>

 .mint-field-core::-webkit-input-placeholder{
     color: #CCCCCC;
     font-size: 13px;
 }   
 .mint-field-core::-moz-placeholder{

     color: #CCCCCC;
     font-size: 13px;
 }
 .mint-field-core:-ms-input-placeholder{

     color: #CCCCCC;
     font-size: 13px;
 }
.itemssh div {
   
    width:115px;
    height: 35px;
    border: 1px solid #EDEDF2;
    display:inline-block;
    text-align: center;
    border-radius:8px;
    line-height:35px;
    margin-left:5px;
}
.itemssh{
   
    margin-top:40px;
}
.addsave{

  background-color: #F5F5F8;


}


</style>
