<template>
  <div class="tab" ref="tab">
    <h2>
      <span class="item_title">{{ title }}</span>
      <span class="item_desc">{{ desc }}</span>
    </h2>
    <ul class="tab_content" ref="tabWrapper">
      <li class="tab_item" v-for="item in itemList" ref="tabitem">
          <span ><img class="item-img" v-bind:src="item.imgSrc"></span>
          <span>{{item.title}}</span>
      </li>
      <!-- <li v-for="course in types.data" :key="course.id" class="course-detail" @click="changeToCoursedetails(course)">
          <img :src="course.imgSrc" alt="">
          <span class="title">{{course.title}}</span>
          <div class="relevent">
            <star :size="24" :score="course.starLevel" class="star"></star>
            <span class="starlevel">{{course.starLevel}}</span>
            <span class="learnnumber">{{course.learnNumber}}人学过</span>
            <span class="newprice">￥{{course.newPrice}}</span>
            <span class="oldprice" v-if="course.oldPrice">￥{{course.oldPrice}}</span>
          </div>
        </li> -->
        
    </ul>
  </div>
  </template>
  <script>
  import BScroll from 'better-scroll';
    export default {
      data() {
        return{
          itemList:[
                    {
                        "id": 10101,
                        "title": "10小时从0到1学习人工智能",
                        "imgSrc": "http://edu-image.nosdn.127.net/E5CAB39B274D3861AD662FDE77D785F2.jpg?imageView&thumbnail=450y250&quality=100",
                        "starLevel": 3.7,
                        "learnNumber": 312,
                        "newPrice": "15.30",
                        "oldPrice": "49.00",
                        "mp4Src": "http://pic.ibaotu.com/00/56/32/78G888piCyDu.mp4",
                        "mainMessage": "由浅入深的讲解Excel Power Pivot的基础知识，以及从数据获取、分析到展现的全过程，通过学习本课程，可以快速的通过Excel Power Pivot进行数据建模分析，作出让老板眼前一亮的企业级分析报告。",
                        "introduce": {
                            "courseIntroduce": "这是一堂厉害的课",
                            "fitPeople": "摄影爱好者",
                            "provider": {
                                "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2135429910,2001866011&fm=27&gp=0.jpg",
                                "name": "视觉摄影FUN及后期课堂",
                                "introduce": "是一个工作室"
                            },
                            "teacher": {
                                "imgSrc": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3028269206,4116848032&fm=27&gp=0.jpg",
                                "name": "雷波",
                                "introduce": "是一个老师"
                            }
                        }
                    },
                    {
                        "id": 10102,
                        "title": "人工智能时代的C++学习",
                        "imgSrc": "http://edu-image.nosdn.127.net/37AED3C5541A122EEF0B9B6C62F0D3C7.png?imageView&thumbnail=450y250&quality=100",
                        "starLevel": 4.7,
                        "learnNumber": 1660,
                        "newPrice": "14.90",
                        "mp4Src": "http://pic.ibaotu.com/00/56/32/78G888piCyDu.mp4",
                        "mainMessage": "C++ 一直都是最为主流的编程语言之一。其强大的性能及其较高的使用门槛让使用者对它又爱又恨。有人甚至开玩笑说：C++之父Bjarne Stroustrup 是为了提高程序员工资才创造了如此艰深又强大的语言。",
                        "introduce": {
                            "courseIntroduce": "这是一堂厉害的课",
                            "fitPeople": "摄影爱好者",
                            "provider": {
                                "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2135429910,2001866011&fm=27&gp=0.jpg",
                                "name": "视觉摄影FUN及后期课堂",
                                "introduce": "是一个工作室"
                            },
                            "teacher": {
                                "imgSrc": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3028269206,4116848032&fm=27&gp=0.jpg",
                                "name": "雷波",
                                "introduce": "是一个老师"
                            }
                        }
                    },
                    {
                        "id": 10103,
                        "title": "从零玩转Python大数据+人工智能-1",
                        "imgSrc": "http://edu-image.nosdn.127.net/21FDC91762B503378784D59C8D8E1309.jpg?imageView&thumbnail=450y250&quality=100",
                        "starLevel": 4.1,
                        "learnNumber": 223,
                        "newPrice": "11.40",
                        "oldPrice": "65.30",
                        "mp4Src": "http://pic.ibaotu.com/00/56/32/78G888piCyDu.mp4",
                        "mainMessage": "讲解了一些, 计算机编程相关的常识; 包括计算机的组成, 编程语言概念以及作用等等;适合完全对编程不了解, 跨行来学习的学员; 扩展入门",
                        "introduce": {
                            "courseIntroduce": "这是一堂厉害的课",
                            "fitPeople": "摄影爱好者",
                            "provider": {
                                "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2135429910,2001866011&fm=27&gp=0.jpg",
                                "name": "视觉摄影FUN及后期课堂",
                                "introduce": "是一个工作室"
                            },
                            "teacher": {
                                "imgSrc": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3028269206,4116848032&fm=27&gp=0.jpg",
                                "name": "雷波",
                                "introduce": "是一个老师"
                            }
                        }
                    },
                    {
                        "id": 10103,
                        "title": "从零玩转Python大数据+人工智能-1",
                        "imgSrc": "http://edu-image.nosdn.127.net/21FDC91762B503378784D59C8D8E1309.jpg?imageView&thumbnail=450y250&quality=100",
                        "starLevel": 4.1,
                        "learnNumber": 223,
                        "newPrice": "11.40",
                        "oldPrice": "65.30",
                        "mp4Src": "http://pic.ibaotu.com/00/56/32/78G888piCyDu.mp4",
                        "mainMessage": "讲解了一些, 计算机编程相关的常识; 包括计算机的组成, 编程语言概念以及作用等等;适合完全对编程不了解, 跨行来学习的学员; 扩展入门",
                        "introduce": {
                            "courseIntroduce": "这是一堂厉害的课",
                            "fitPeople": "摄影爱好者",
                            "provider": {
                                "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2135429910,2001866011&fm=27&gp=0.jpg",
                                "name": "视觉摄影FUN及后期课堂",
                                "introduce": "是一个工作室"
                            },
                            "teacher": {
                                "imgSrc": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3028269206,4116848032&fm=27&gp=0.jpg",
                                "name": "雷波",
                                "introduce": "是一个老师"
                            }
                        }
                    }
                    ,
                    {
                        "id": 10103,
                        "title": "从零玩转Python大数据+人工智能-1",
                        "imgSrc": "http://edu-image.nosdn.127.net/21FDC91762B503378784D59C8D8E1309.jpg?imageView&thumbnail=450y250&quality=100",
                        "starLevel": 4.1,
                        "learnNumber": 223,
                        "newPrice": "11.40",
                        "oldPrice": "65.30",
                        "mp4Src": "http://pic.ibaotu.com/00/56/32/78G888piCyDu.mp4",
                        "mainMessage": "讲解了一些, 计算机编程相关的常识; 包括计算机的组成, 编程语言概念以及作用等等;适合完全对编程不了解, 跨行来学习的学员; 扩展入门",
                        "introduce": {
                            "courseIntroduce": "这是一堂厉害的课",
                            "fitPeople": "摄影爱好者",
                            "provider": {
                                "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2135429910,2001866011&fm=27&gp=0.jpg",
                                "name": "视觉摄影FUN及后期课堂",
                                "introduce": "是一个工作室"
                            },
                            "teacher": {
                                "imgSrc": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3028269206,4116848032&fm=27&gp=0.jpg",
                                "name": "雷波",
                                "introduce": "是一个老师"
                            }
                        }
                    }
                    ,
                    {
                        "id": 10103,
                        "title": "从零玩转Python大数据+人工智能-1",
                        "imgSrc": "http://edu-image.nosdn.127.net/21FDC91762B503378784D59C8D8E1309.jpg?imageView&thumbnail=450y250&quality=100",
                        "starLevel": 4.1,
                        "learnNumber": 223,
                        "newPrice": "11.40",
                        "oldPrice": "65.30",
                        "mp4Src": "http://pic.ibaotu.com/00/56/32/78G888piCyDu.mp4",
                        "mainMessage": "讲解了一些, 计算机编程相关的常识; 包括计算机的组成, 编程语言概念以及作用等等;适合完全对编程不了解, 跨行来学习的学员; 扩展入门",
                        "introduce": {
                            "courseIntroduce": "这是一堂厉害的课",
                            "fitPeople": "摄影爱好者",
                            "provider": {
                                "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2135429910,2001866011&fm=27&gp=0.jpg",
                                "name": "视觉摄影FUN及后期课堂",
                                "introduce": "是一个工作室"
                            },
                            "teacher": {
                                "imgSrc": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3028269206,4116848032&fm=27&gp=0.jpg",
                                "name": "雷波",
                                "introduce": "是一个老师"
                            }
                        }
                    }
                    ,
                    {
                        "id": 10103,
                        "title": "从零玩转Python大数据+人工智能-1",
                        "imgSrc": "http://edu-image.nosdn.127.net/21FDC91762B503378784D59C8D8E1309.jpg?imageView&thumbnail=450y250&quality=100",
                        "starLevel": 4.1,
                        "learnNumber": 223,
                        "newPrice": "11.40",
                        "oldPrice": "65.30",
                        "mp4Src": "http://pic.ibaotu.com/00/56/32/78G888piCyDu.mp4",
                        "mainMessage": "讲解了一些, 计算机编程相关的常识; 包括计算机的组成, 编程语言概念以及作用等等;适合完全对编程不了解, 跨行来学习的学员; 扩展入门",
                        "introduce": {
                            "courseIntroduce": "这是一堂厉害的课",
                            "fitPeople": "摄影爱好者",
                            "provider": {
                                "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2135429910,2001866011&fm=27&gp=0.jpg",
                                "name": "视觉摄影FUN及后期课堂",
                                "introduce": "是一个工作室"
                            },
                            "teacher": {
                                "imgSrc": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3028269206,4116848032&fm=27&gp=0.jpg",
                                "name": "雷波",
                                "introduce": "是一个老师"
                            }
                        }
                    }
                    
            
                ]
        }
      },
      props:['title','desc'],
      created() {
        this.$nextTick(() => {
          this.InitTabScroll();
        });
      },
      methods:{
        InitTabScroll(){
          let width=0
          for (let  i = 0; i <this.itemList.length; i++) {
              width+=this.$refs.tabitem[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
          }
          this.$refs.tabWrapper.style.width=width+'px'
          this.$nextTick(()=>{
              if (!this.scroll) {
                this.scroll=new BScroll(this.$refs.tab, {
                  startX:0,
                  click:true,
                  scrollX:true,
                  scrollY:false,
                  eventPassthrough:'vertical'
                });
              }else{
                this.scroll.refresh()
              }
          });
        }
      }
    };
  </script>
  <style  scoped>
  .tab{
    width: 100vw;
    overflow: hidden;
    padding:5px;
  }
  .item_title {
    font-size:16px;
  }
  .item_desc{
    font-size:12px;
    color:#999;
    font-weight: 0;
  }
  .tab_content{
    list-style-type: none;
    display: flex;
    padding-left:0
  }
  .tab_item{
    flex: 1;
    width:125px;
    margin-right:20px;
  }  
  .tab_item .item-img {
    width:125px;
    height:85px;
  }
  </style>