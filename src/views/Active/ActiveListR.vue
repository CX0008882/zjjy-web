<template>
  <div class="ActiveList">

    <div class="contents">

      <div class="title">
        <span class="title1">大卫不可以</span>
        <span class="title2">第1周</span>
        <ul class="hubencontens" v-for="n in 3">
          <li v-for="n in list" class="itmlist">

            <div class="hubenitem"
                 v-bind:style="{backgroundImage:'url('+require('../../assets/huiben.png')+')',backgroundRepeat:'no-repeat'}">
              <span class="hubentype"><span>免费</span></span>
            </div>

            <div class="huibenmiaos">信息描述信去</div>

          </li>

        </ul>
      </div>

      <div class="title">
        <span class="title1">大卫不可以</span>
        <span class="title2">第2周</span>
        <ul class="hubencontens" v-for="n in 3">
          <li v-for="n in list" class="itmlist">
            <div class="hubenitem"
                 v-bind:style="{backgroundImage:'url('+require('../../assets/huiben.png')+')',backgroundRepeat:'no-repeat'}">
              <span class="hubentype"><span>免费</span></span>
            </div>

            <div class="huibenmiaos">信息描述信去玩儿</div>

          </li>
        </ul>
      </div>

    </div>
  </div>

</template>

<style scoped>
  .ActiveList {

  }

  .contents {
    height: 100%;
    padding-left:5px;

  }

  .title {
    margin-top: 15px;
    padding-top: 15px;
    display: block;
    clear: both;

  }

  .title1 {
    padding-left: 5px;

    font-size: 16px;

  }

  .title2 {
    margin-left: 210px;

  }



  .hubencontens {
    width: 340px;
    padding: 0px;
    margin: 0px;

  }

  .hubenitem {
    width: 160px;
    height: 102px;
    border-radius: 5px;
    overflow: hidden;
    background-size: 160px, 102px;
    margin-top: 5px;


  }

  .hubenitem img {
    width: 160px;
    height: 102px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 8px #000000

  }

  .itmlist {

    width: 160px;
    float: left;
    display: block;
    margin-left: 10px;
    margin-top: 15px;
  }

  .hubentype {

    margin-left: 100px;
    margin-top: 69px;
    background-color: #000000;
    opacity: 0.4;
    border-radius: 9px;
    display: block;
    width: 40px;
    height: 18px;
    text-align: center;
    font-size: 11px;
    color: white;
  }

  .hubentype span {
    color: white;
    opacity: 1;
    z-index: 1;
  }

  .huibenmiaos {

    padding-top: 5px;
    overflow: hidden;

  }

</style>
<script>
  import {InfiniteScroll} from 'mint-ui';

  export default{
    props: {
      typeId: {

        required: true
      },
      banber: {

        default: true
      }

    },

    mounted(){

      this.list = this.typeId;

    },
    data(){
      return {
        list: "1",
        busy: false,


      }
    },
    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          // let last =this.list;
          this.list = this.list + 100;

          this.loading = false;
        }, 2500);
      },


    },
    watch: {
      // 查询条件的变化
      typeId: function (val) {

        this.list = val;
      }

    }


  }


</script>


