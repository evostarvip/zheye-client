<template>
  <div class="RichContent-wrapper">
    <div class="RichContent-inner">
      <template v-if="!isRead">
        <b>用户1:</b>
        很多人简历里面写熟悉某某框架，其实不算是优势，重点还在于原理。 数据结构和算法是面试的重点，链表，二叉树，图，队列，堆栈等数据结构...
        <span 
          class="ContentItem-more"
          @click="isRead = !isRead"
        >阅读全文</span>
        <span class="iconfont icon-arrow-down"></span>
      </template>
      <rich-content v-else @collapseText="isRead = !isRead"></rich-content>
      <feed-actions></feed-actions>
    </div>
  </div>
</template>
<script>
import RichContent from "@/components/RichContent.vue";
import FeedActions from "@/components/FeedActions.vue";

export default {
  name: "feed-content",
  components: {
    RichContent,
    FeedActions
  },
  data() {
    return {
      isRead: false
    };
  }
};
</script>
<style lang='scss' scoped>
.RichContent-inner {
  font-size: 15px;
  margin-top: 9px;
  .ContentItem-more {
    margin-left: 4px;
    color: #175199;
    font-size: 14px;
    cursor: pointer;
  }
  .icon-arrow-down {
    color: #175199;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>