<template>
  <div class="TopstoryItem">
    <div class="ContentItem-title">计算机学生在大学应该以数据结构算法为重还是技术为重？</div>
     <feed-content  ></feed-content>
    <feed-actions @changeReview="isReview=!isReview"></feed-actions>
    <transition name="fade">
      <comment v-if="isReview"></comment>
    </transition>
  </div>
</template>
<script>
import FeedContent from "@/components/FeedContent.vue"
import FeedActions from "@/components/FeedActions.vue";
import Comment from "@/components/Comment.vue";

export default {
  name: "feed-item",
  components:{
      FeedContent,
      FeedActions,
      Comment
  },
  data(){
    return{
      isReview:false,
      
    }
  },
  methods:{
    changeReview(){
      console.log("changeReview")
    }
  }
};
</script>
<style lang='scss' scoped>
@import '../assets/css/config';
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.TopstoryItem{
    background: #fff;
    border-bottom: 1px solid #f0f2f7;
    padding: 20px;
    .ContentItem-title{
        font-size: 18px;
        font-weight: 600;
    }
}
</style>