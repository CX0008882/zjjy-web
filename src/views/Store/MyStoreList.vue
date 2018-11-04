<template>
<div class="warrp">

  <div class="tab">
      <mt-navbar v-model="selected" fixed>
        <mt-tab-item id="1">系列活动</mt-tab-item>
        <mt-tab-item id="2">活动</mt-tab-item>
        <mt-tab-item id="3">绘本</mt-tab-item>
        <mt-tab-item id="4">图片</mt-tab-item>
      </mt-navbar>
    </div>

<div class="contents">
<mt-tab-container v-model="selected">

    <mt-tab-container-item id="1">

     <ActiveList :typeId="huibentypes"></ActiveList>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ActiveList :typeId="huibentypes"></ActiveList>
        </mt-tab-container-item>
        <mt-tab-container-item id="3" style="margin-top: 16px;">
          <HuiBenList  :typeId="huibentypes"></HuiBenList>
        </mt-tab-container-item>

        <mt-tab-container-item id="4">
          <picList  :typeId="huibentypes"></picList>
        </mt-tab-container-item>

      </mt-tab-container>

</div>
</div>

</template>


<style scoped>
.contents
 {
     display: flex;
     justify-content: center;
     margin: auto 0;
     margin-top: 35px

 }



</style>

<script>

import HuiBenList from "@/views/HuiBen/HuiBenList"
import ActiveList from  "@/views/Active/ActiveList";
import picList from  "@/views/PicList/picList";
export default {
    data() {
    return {
      classes: [],
      nowClass:{},
      selected: "1",
      huibentypes:"1"
    };
    },

    components: {

    HuiBenList,
    ActiveList,
    picList
      
    }
}

</script>

