<template>
  <div class="content" v-if="this.$store.state.cartItems.length != 0">
      <div class="cart">
        <div class="cart-top">
          <h2 class="content-title">
            <img src="../../assets/Images/CartPageKorz.jpg" alt="" class="korzinka" />
            Корзина
          </h2>
          <div class="cart-clear" @click="deleteAllItems()">
            <img src="../../assets/Images/CartPageRub.jpg" alt="" class="rubbish" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div class="content-items">
          <CartList v-for="(item, index) in cartItems"
          :item="item"
          :key="item.id"
          :index="index"/>
        </div>
        <div class="cart-bottom">
          <div class="cart-bottom-details">
            <span>
              Всего пицц: <b>{{ totalQuantity }} шт.</b>
            </span>
            <span>
              Сумма заказа:
              <b :style="{ color: '#fe5f1e' }"
                >{{ totalPrice }} ₽</b
              >
            </span>
          </div>
          <div class="cart-bottom-buttons">
            <router-link
              :to="{ name: 'MainPage' }"
              @click="clearCart()"
              class="router"
            >
              <button class="cart-action return-button return">
                <span>Вернуться назад</span>
              </button>
            </router-link>
            <button class="cart-action pay-button">
              <span>Оплатить сейчас</span>
            </button>
          </div>
        </div>
      </div>
  </div>
  <div class="content" v-else>
    <div class="container container-cart">
      <div class="cart cart-empty">
        <h2>
          Корзина пустая
          <i>😕</i>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src="../../assets/Images/EmptyCart.png" alt="" />
        <router-link
          :to="{ name: 'MainPage' }"
          class="router"
          @click="clearCart()"
        >
          <button class="cart-action return-button return">
            <span>Вернуться назад</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import CartList from "./CartList.vue";

export default {
  components: {
    CartList
  },
  data() {
    return {
      show: false,
    };
  },

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
  },
  methods: {
    clearCart() {
      this.$store.state.cartItems = []
    },

    deleteAllItems() {
      let result = window.confirm("Вы действительно хотите удалить?");
      if(result) {
        this.clearCart()
      }
    },
  },
};
</script>


<style scoped>
@import "../../assets/MyCss/CartPage.css";
</style>