<!-- 详情页回答列表 -->
<template>
  <div class="ListItem">
    <rich-content></rich-content>
    <feed-actions @changeReview="isReview=!isReview" :actions="answerList.actions"></feed-actions>
    <transition name="fade">
      <comment v-if="isReview"></comment>
    </transition>
  </div>
</template>
<script>
import RichContent from "@/components/RichContent.vue";
import FeedActions from "@/components/FeedActions.vue";
import Comment from "@/components/Comment.vue";

export default {
  name: "feed-item",
  components: {
    RichContent,
    FeedActions,
    Comment
  },
  props: {
    answerList: Object
  },
  data() {
    return {
      isReview: false
    };
  },
  methods: {
    changeReview() {
      console.log("changeReview");
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/css/config";
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.TopstoryItem {
  background: #fff;
  border-bottom: 1px solid #f0f2f7;
  padding: 20px;
  .ContentItem-title {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>