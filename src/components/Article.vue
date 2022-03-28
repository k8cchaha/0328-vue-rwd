<template>
  <article>
    <div>
      <h3>Responsive Web Design</h3>
      <p>
        選用對的html5標籤除了在閱讀 html
        原始碼更加順暢外，也有助於google搜尋引擎排名順序，SEO效果的提升
      </p>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style>
article {
  width: 100%;
  height: 578px;
  background-image: url("~@/assets/images/banner.png");
  background-size: cover;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
article > div > h3 {
  text-align: center;
  font-size: 48px;
  color: #fff;
}
article > div > p {
  text-align: center;
  font-size: 14px;
  color: #fff;
  line-height: 3em;
}
</style>
