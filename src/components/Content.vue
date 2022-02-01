<template>
  <div class="content" v-if="$route.path == '/'">
    <div class="container">
      <ContentNavBar />
      <ContentMenuList />
      <AlertItem></AlertItem>
    </div>
  </div>
  <div class="content" v-else-if="$route.path == '/cart'">
    <div class="container container-cart">
      <CartPage />
    </div>
  </div>
  <div class="content" v-else>
    <ErrorPage></ErrorPage>
  </div>
</template>

<script>
  /* eslint-disable */
import ContentNavBar from "./Content-Navbar/ContentNavBar.vue";
import ContentMenuList from "./Content-Menu-List/ContentMenuList.vue";
import CartPage from "../routePages/Cart/CartPage.vue";
import ErrorPage from "../routePages/ErrorPage.vue";
import AlertItem from "./Content-Menu-List/AlertItem.vue";
export default {
  components: {
    ContentNavBar,
    ContentMenuList,
    CartPage,
    ErrorPage,
    AlertItem,
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

.content {
  padding: 40px 0;
}
</style>
