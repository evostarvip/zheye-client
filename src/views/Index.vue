<template>
  <div class="Topstory-container">
    <div class="Topstory-mainColumn">
      <div  v-for="(item,index) in feedList" :key="index">
           <feed-item :feedList="item"></feed-item>
      </div>
    </div>
    <div class="GlobalSideBar">
      <global-side-bar></global-side-bar>
    </div>
    
  </div>
</template>
<script>
import FeedItem from "@/components/FeedItem.vue";
import GlobalSideBar from "@/components/GlobalSideBar.vue";
export default {
  name: "index",
  components: {
    FeedItem,
    GlobalSideBar,
  },
  data() {
    return {
     feedList:[
       {
         title:"计算机学生在大学里应该以数据结构为重还是技术为重",
         author:"1号回答者",
         summary:"很多人简历里面写熟悉某某框架，其实不算是优势，重点还在于原理。 数据结构和算法是面试的重点，链表，二叉树，图，队列，堆栈等数据结构... ",
         actions:{
           reviewNum:20,
           isAgree:false,
           agreeNum:20,
           isDisagree:true,
           isLike:false,
           isCollect:false
         }
       },
        {
         title:"计算机学生在大学里应该以数据结构为重还是技术为重",
         author:"1号回答者",
         summary:"很多人简历里面写熟悉某某框架，其实不算是优势，重点还在于原理。 数据结构和算法是面试的重点，链表，二叉树，图，队列，堆栈等数据结构... ",
         actions:{
           reviewNum:20,
           isAgree:true,
           agreeNum:20,
           isDisagree:false,
           isLike:true,
           isCollect:true
         }
        },
        {
         title:"计算机学生在大学里应该以数据结构为重还是技术为重",
         author:"1号回答者",
         summary:"很多人简历里面写熟悉某某框架，其实不算是优势，重点还在于原理。 数据结构和算法是面试的重点，链表，二叉树，图，队列，堆栈等数据结构... ",
         actions:{
           reviewNum:20,
           isAgree:false,
           agreeNum:20,
           isDisagree:true,
           isLike:false,
           isCollect:true
         }
       }
     ]
    };
  },
  methods:{
  }
};
</script>
<style lang="scss" scoped>
.Topstory-container {
  display: flex;
  width: 1000px;
  padding: 0 16px;
  margin: 10px auto;
}
.Topstory-mainColumn {
  width: 654px;
}
.GlobalSideBar {
  margin-left: 10px;
  flex: 1;
}

</style>