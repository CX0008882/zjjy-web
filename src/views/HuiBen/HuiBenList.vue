<template>
  <div class="hbheads">
    <div class="huibena" id="huibena">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <ul class="hubencontens">
          <li v-for="n in list" class="itmlist">
            <a href="javascript:void(0)" @click="gethuibenifnro">
            <div class="hubenitem"
                 v-bind:style="{backgroundImage:'url('+require('../../assets/huiben.png')+')',backgroundRepeat:'no-repeat'}">
              <span class="hubentype"><span>免费</span></span>
            </div>

            </a>
            <div class="huibenmiaos">信息描述信去玩儿群翁人</div>

          </li>

        </ul>
      </div>
    </div>

  </div>

</template>

<script>
  import {InfiniteScroll} from 'mint-ui';

  export default{

    props: ['typeId'],

    mounted(){

      this.list = this.typeId;

    },
    data(){
      return {
       // list: this.typeId,
        busy: false,
        list: "2"

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
      gethuibenifnro:function(id){

        id=1;
        this.$router.push({path: '/huiben/huibeninfor', params: {id: id}});


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

<style scoped>
  .hbheads {
    margin-top: 3px;

  }

  .hubencontens {
    width: 284px;
    padding: 0px;
    margin: 0px;

  }

  .hubenitem {
    width: 125px;
    height: 80px;
    border-radius: 5px;
    overflow: hidden;
    background-size: 125px, 80px;
    margin-top: 5px;
  }

  .hubenitem img {
    width: 125px;
    height: 80px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow:0px 0px 8px #000000

  }

  .itmlist {

    width: 125px;
    float: left;
    display: block;
    margin-left: 5px;
  }

  .hubentype {

    margin-left: 80px;
    margin-top: 50px;
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

  }
</style>
