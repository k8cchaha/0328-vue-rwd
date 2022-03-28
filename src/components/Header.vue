<template>
  <header>
    <nav>
      <h1>Alex</h1>
      <a id="moblie_menu" href="javascript:;"></a>
      <div>
        <a href="javascript:;">RWD</a>
        <a href="javascript:;">VUEJS</a>
        <a href="javascript:;">REACTJS</a>
        <a href="javascript:;">HTML5</a>
        <a href="javascript:;">NODEJS</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  background-color: #373c3f;
  width: 100%;
  height: 97px;
}
header > nav {
  position: relative;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
}
header > nav > h1 {
  line-height: 97px;
  font-size: 18px;
  float: left;
  color: #fff;
  margin-right: 20px;
}
header > nav > div {
  width: 100%;
  height: 100%;
}
header > nav > div > a {
  display: block;
  line-height: 97px;
  font-size: 15px;
  float: left;
  color: #fff;
  padding: 0 10px;
}
a#moblie_menu {
  display: none;
}
</style>
