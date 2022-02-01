<template>
    <div class="cart-item">
        <div class="cart-item-img">
            <img :src="item.imageUrl" alt="" />
        </div>
        <div class="cart-item-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.type }} тесто, {{ item.size }} см.</p>
        </div>
        <div class="cart-item-count">
            <div class="dekrement button-outline" @click="dekrement(item)">
                <span>-</span>
            </div>
            <b class="item-quantity">{{ item.quantity }}</b>
            <div class="inkrement button-outline" @click="inkrement(item)">
                <span>+</span>
            </div>
        </div>
        <div class="cart-item-price">
            <b class="item-price">{{ item.quantity * item.price }} ₽</b>
        </div>
        <div class="button-outline cart-item-remove" @click="removeItem(item, index)">
            <span>x</span>
        </div>
    </div>
</template>

<script>
  export default {
    props: ["item", "index"],
    name: "CartList",
    data() {
      return {
        quantity: 0,
      }
    },
    methods: {
      dekrement(item) {
        if(item.quantity > 1) {
          item.quantity--;
        }
        this.quantity = item.quantity;
      },

      inkrement(item) {
        item.quantity++;
        this.quantity = item.quantity
    },

      removeItem(item, index) {
        let result = window.confirm("Вы действительно хотите удалить?");
        if(result) {
          this.$store.state.cartItems.splice(index, 1)
          if(this.$store.state.cartItems.length === 0) {
            this.$store.state.totalQuantity = 0
            this.$store.state.totalPrice = 0
          }
        }
      },
    },
   };
</script>
