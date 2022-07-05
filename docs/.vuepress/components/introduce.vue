<template>
  <div class="introduce_component">
    <img src="/small.png" alt="">
    <div class="intro_content">
      <h3>公众号:程序员成长指北</h3>
      <p>koala 学习成长之路</p>
    </div>
  </div>
</template>


<style scoped>
.introduce_component {
  display: flex;
  padding: 20px 0px;
  box-sizing: border-box;
  align-items: center;
}
.introduce_component img {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
.intro_content h3{
  font-size: 16px;
}

@media screen and (max-width: 789px) {
  .introduce_component img{
    display: none;
  }
}
</style>

