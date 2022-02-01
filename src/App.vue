<template>
  <div id="app">
    <div class="wrapper">
        <Header></Header>
        <Content></Content>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Content from "./components/Content";
export default {
  components: {
    Header,
    Content,
  },
  name: "App",
};
</script>

<style scoped>
  .wrapper {
    width: calc(100vw - 100px);
    height: 100%;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 10px;
    max-width: 1400px;
  }
</style>
