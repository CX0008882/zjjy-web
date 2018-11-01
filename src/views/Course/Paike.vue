<template>
    <div class="warrp">
      <div class="content">
     <div><h2>就是爱表演</h2></div>
<div @click="openPicker">
<mt-cell
  title="开学时间"
  is-link
  :value="startime">
</mt-cell>
</div>

<mt-datetime-picker
  v-model="pickerVisible"
  ref="picker"
  type="date"
  @confirm="handleConfirm"
  year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日">
</mt-datetime-picker>
<div @click="showdays">
<mt-cell
  title="第一节课"
  is-link
  :value="mintimes">
</mt-cell>
</div>
<mt-popup
  v-model="popupVisible"
  position="right"
  closeOnClickModal="true" 
  popup-transition="popup-fade">
<mt-picker :slots="slots" @change="onValuesChange" showToolbar style="width: 7.5rem;" >
<div class="iteday">
<div @click="popupVisible = !popupVisible">取消</div>
<div>选择日期</div>
<div @click="popupVisible = !popupVisible">确定</div>
</div>
</mt-picker>
</mt-popup>
</div>
<div class="paike" @click="getCourseInfor">
  <span>一键排课</span>
</div>
    </div>
</template>
<style scoped>
.warrp{
  padding-left: 20px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction:column;
}
.iteday {
display: flex;
justify-content: center; 
border-bottom: 2px solid #ececec 
}
.iteday div{
   flex-grow:4;
   text-align: center;
   font-size: 20px;
   color: blue;
}

.content{
  flex: 1;
  -webkit-flex: 1;
}
 .paike{
    margin-top: 50px;
    width: 305px;
    height: 42px;
    border: 2px solid #ffffff;
    border-radius: 42px;
    text-align: center;
    font-size: 14px;
    background-image: -webkit-linear-gradient(140deg,#45A1FF, #45B7FF); 
    color: #ffffff;
    line-height:42px;
 }
 .paike span{
 
      

 }
</style>
<script>
import {formatDate} from '../../common/js/data.js';
export default {
  
  data(){
     
     return { 

        popupVisible:false,
        pickerVisible:new Date(),
        startime:'2018-08-08',
        mintimes:'',
        slots:[
        {flex: 1,
          values: ['星期一', '星期二', '星期三', '星期四', '星期五'],
          className: 'slot1',
          textAlign: 'right'
          } 
          , {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['上午', '下午'],
          className: 'slot3',
          textAlign: 'left'
        }
        ]
     }
  },
  methods: {
      onValuesChange(picker, values){
          
          if(values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
             }

          console.log(picker);
          console.log(values);

      },
      openPicker(){

          this.$refs.picker.open();
      },
      handleConfirm(val){
          var itm= formatDate(val, "yyyy-MM-dd");
           this.startime=itm;

      },

      showdays(){
           this.popupVisible=true;
      },
      getCourseInfor(){

          this.$router.push({path:'/mystudy'});
        

      }


  }
  
}
</script>
