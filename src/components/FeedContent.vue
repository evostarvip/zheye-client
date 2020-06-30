<template>
  <div class="RichContent-wrapper">
    <div class="RichContent-inner">
      <b>用户1:</b>
      很多人简历里面写熟悉某某框架，其实不算是优势，重点还在于原理。 数据结构和算法是面试的重点，链表，二叉树，图，队列，堆栈等数据结构...
      <span class="ContentItem-more">阅读全文</span>
      <span class="iconfont icon-arrow-down"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "feed-content"
};
</script>
<style lang='scss' scoped>
.RichContent-inner {
  margin-top: 9px;
  .ContentItem-more {
    margin-left: 4px;
    color: #175199;
  }
  .icon-arrow-down{
    color: #175199;
    font-size: 18px;
    font-weight: 600;

  }
}
</style>