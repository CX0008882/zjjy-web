<template>

  <div class="picview">
    <div class="picconten">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <ul class="hubencontens">
          <li v-for="n in 10" class="itmlist">
            <a href="javascript:void(0)" @click="getpicinfor">
              <div class="hubenitem"
                   v-bind:style="{backgroundImage:'url('+require('../../assets/se.png')+')',backgroundRepeat:'no-repeat'}">
                <span class="hubentype">免费</span>
              </div>
            </a>
          </li>

        </ul>
      </div>

    </div>
  </div>

</template>


<script>
  export default {

    data() {
      return {
        list: "5"
      }
    },

    methods: {

      getpicinfor: function () {

        this.$router.push({path: "/PicList/picList"});

      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
 //        list = list + 100;
//        let last = this.list[this.list.length - 1];
//        for (let i = 1; i <= 10; i++) {
//          this.list.push(last + i);
//        }
          this.loading = false;
        }, 2500);

      }
    }


  }

</script>


<style scoped>
  .picview {

  }

  .hubencontens {
    width: 284px;
    padding: 0px;
    margin: 0px;

  }

  .hubenitem {
    width: 64px;
    height: 64px;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 5px;
    background-position: center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    text-align: center;
    color: #000000;
    line-height: 60px;
    opacity: 0.85;
  }

  .hubenitem img {
    width: 64px;
    height: 64px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 8px #000000

  }

  .itmlist {

    width: 89px;
    float: left;
    display: block;
    margin-left: 5px;
    margin-top: 35px;
  }

  .hubentype {

    color: white;
  }

  .hubentype span {
    color: white;
    opacity: 1;
    z-index: 1;
  }

  .picconten {
    width: 284px;
    padding: 0px;
    margin: 0px;

  }

</style>
