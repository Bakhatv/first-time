<template>
    <div class="price-list">
        <div class="price">от {{ item.price }} ₽</div>
        <button
                class="add-to-cart"
                v-on:click="addToCart(item, selectedSize, selectedType)"
        >
            <span class="add-increment">+</span>
            <span>Добавить</span>
            <i v-if="counter > 0">{{ counter }}</i>
        </button>
    </div>
</template>

<script>
  /* eslint-disable */
  import { mapGetters } from "vuex";

  export default {
    props: [
      "item",
      "selectedSize",
      "selectedType"
    ],
    data() {
      return {
        count: 1,
        variants: ["тонкая", "традиционная"],
        price: 0,
        counter: 0
      };
    },
    computed: {
      ...mapGetters(["cartItems"]),
    },
    methods: {
      addToCart(item, selectedSize, selectedType) {
        let show = true;
        this.counter++;
        let chosenItem = {
          name: item.name,
          imageUrl: item.imageUrl,
          price: item.price,
          type: this.variants[selectedType],
          size: selectedSize,
          quantity: this.count
        };
        this.$store.dispatch("setPizzaToCart", chosenItem);
        this.emitter.emit("item", chosenItem);
        this.emitter.emit("show", show);
      },
    },
  };
</script>

<style scoped>
    .add-increment {
        font-size: 26px;
        margin-right: 2px;
        margin-bottom: 2px;
    }
</style>