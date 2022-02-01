<template>
  <h2 class="content-pizza-menu-title">Все пиццы</h2>
  <div class="content-pizza-menu">
    <PizzaItem
      v-for="(item, index) in pizzas"
      :item="item"
      :index="index"
      :key="item.id"
    />
  </div>
</template>

<script>
/* eslint-disable */
  import { mapGetters } from "vuex";
  import PizzaItem from "./PizzaItem";

  export default {
    components: { PizzaItem },
    computed: {
      ...mapGetters(["pizzas"]),
      ...mapGetters(["cartItems"]),
    },
    created() {
      this.$store.dispatch("getPizzasFromApi");
    }
  };
</script>

<style scoped>
    @import "../../assets/MyCss/ContentMenuList.css";
</style>
