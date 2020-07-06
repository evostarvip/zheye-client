  <!-- 文章回答展开内容 -->
<template>
  <div class="RichContent">
    <div class="AuthorInfo">
      <img src="https://pic3.zhimg.com/71bd66aba6bf36075a6a3c9d383fe64d_s.jpg" class="AuthorAvatar" />
      <span class="AuthorName">小螺号</span>
    </div>
    <div class="RichContent-votes">1,422人赞同了该回答</div>
    <div
      class="RichContent-text"
    >我在悉尼认识不少中国人，之前的专业五花八门，艺术/会计/英语/建筑都有，都转计算机了。也看不出有什么编程天赋，就是凑或着过的样子。转行的原因就是搞计算机钱多，工作轻松。放弃原来的专业痛苦吗？当他们发现专业对口的工作机会少钱少加班多后，就领悟到编程一点都不痛苦了。你现在觉得编程痛苦，是因为还是青少年，荷尔蒙过多，容易多愁善感。把小问题无限放大。上文提到的人都有一定工作经验，被社会大学教育过，考虑问题比较实际。编程就是一门手艺而已。有的人干得快一点，有的人干得慢一点。反正只要你高中毕业，基本的逻辑思维有，就能靠这个挣钱。我在澳洲看了很多本地所谓专业程序员，总是把布尔表达式搞反，这样的人连高中水准也没有，照样混得不错。</div>
  <div class="RichContent-time">编辑于06-06</div>
  <div class="CollapsedText" @click="$emit('collapseText')">
    <span >收起</span>
    <span class="iconfont icon-arrow-up"></span>
  </div>
 
  </div>
</template>
<script>
export default {
  name: "rich-content"
};
</script>
<style lang='scss' scoped>
@import "../assets/css/config";
.RichContent {
  position: relative;
  font-size: 15px;
  .AuthorInfo {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #444444;
    .AuthorAvatar {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
  .RichContent-votes{
    padding-top: 10px;
    font-size: 14px;
    color:$fontColor;
  }
  .RichContent-text{
    margin-top: 9px;
  }
  .RichContent-time{
    font-size: 14px;
    color: $fontColor;
    margin-top: 10px;
  }
  .CollapsedText{
    position: absolute;
    right: 10px;
    bottom: -35px;
    color: $fontColor;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>