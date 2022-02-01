<template>
  <div class="header">
    <div class="container">
      <router-link :to="{ name: 'MainPage' }">
        <div class="header-logo">
          <img src="../assets/Images/header-pizza.svg" alt="" class="header-pizza" />
          <div>
            <h1>PIZZA HOUSE</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </router-link>
      <div class="CartItems">
        <a href="#" class="btn-wrapper">
          <button class="button-cart" @click="this.$router.push('/cart')">
            <span> {{ totalPrice }} ₽</span>
            <div class="button__delimiter"></div>
            <img src="../assets/Images/CartImage.jpg" alt="" />
            <span>{{ totalQuantity }}</span>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartItems"]),

    totalPrice(items, result) {
      result = 0;
      items = this.$store.state.cartItems
      for(const elem of items) {
        result += elem.price * elem.quantity;
      }
      return result
    },
    totalQuantity(items, result) {
      result = 0;
      items = this.$store.state.cartItems
      for(const elem of items) {
        result += elem.quantity
      }
      return result
    },
  }
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #f6f6f6;
  padding: 40px 0;
}
.container {
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-logo {
  display: flex;
}

.header-logo img {
    margin-right: 15px;
}
.header-pizza {
  width: 38px;
}
a {
  text-decoration: none;
}

button {
  color: #fff;
  background-color: #fe5f1e;
  border-radius: 30px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out;
  border: 1px solid transparent;
  user-select: none;
}

h1 {
  color: #181818;
  font-size: 24px;
  font-weight: 800;
}

.header-logo p {
  color: #7b7b7b;
}

.button-cart {
    display: flex;
    align-items: center;
    line-height: 23px;
    padding: 12px 0px 12px 25px;
}

.button-cart img {
    width: 18%;
    margin-right: 8px;
    margin-bottom: 1px;
}

.button-cart span {
  font-weight: 600;
  font-size: 16px;
}

.button__delimiter {
    width: 1px;
    height: 25px;
    background-color: hsla(0,0%,100%,.25);
    margin-left: 14px;
    margin-right: 14px;
}
</style>
