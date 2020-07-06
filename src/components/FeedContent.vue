  <!-- 首页摘要 -->
<template>
  <div class="RichContent-wrapper">
    <div class="RichContent-inner">
      <template v-if="!isRead">
        <b>{{author}}:</b>
        {{summary}}
        <span 
          class="ContentItem-more"
          @click="isRead = !isRead"
        >阅读全文</span>
        <span class="iconfont icon-arrow-down"></span>
      </template>
      <rich-content v-else @collapseText="isRead = !isRead"></rich-content>
  
      
    </div>
  </div>
</template>
<script>
import RichContent from "@/components/RichContent.vue";
export default {
  name: "feed-content",
  components: {
    RichContent
  },
  props:{
    author:String,
    summary:String
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