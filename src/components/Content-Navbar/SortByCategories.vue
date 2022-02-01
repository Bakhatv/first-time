<template>
    <div class="categories">
        <ul>
            <template v-for="(cat, index) in categories" :key="index">
                <template v-if="index === indexOfActive">
                    <li :class="{ active: isActive }" @click="changeActiveness(index)" v-on:click="checkOption()">
                        {{ cat }}
                    </li>
                </template>
                <template v-else>
                    <li :class="{ active: inActive }" @click="changeActiveness(index)" v-on:click="checkOption()">
                        {{ cat }}
                    </li>
                </template>
            </template>
        </ul>
    </div>
</template>

<script>
  import EventService from "../../services/EventList.js";

  export default {
    name: "SortByCategories",
    data() {
      return {
        categories: [
          "Все",
          "Мясные",
          "Вегетарианские",
          "Гриль",
          "Острые",
          "Закрытые"
        ],
        isActive: true,
        indexOfActive: 0,
        inActive: false,
        sortedArray: []
      };
    },
    methods: {
      async changeActiveness(index) {
        let pizzas = await EventService.getPizzas();
        this.checkOption(pizzas);
        this.indexOfActive = index;
        this.sortedArray = pizzas.filter(elem => {
          if (elem.category === index - 1 && index > 0) {
            return elem;
          } else if (index === 0) {
            return elem;
          }
        });
        this.$store.commit("GET_PIZZAS", this.sortedArray);
      },

      checkOption(pizzas) {
        if(pizzas) {
          let option = this.$store.state.selectedOption;
          if (option === "цене") {
            pizzas.sort((a, b) => (a.price > b.price ? -1 : 1));
          } else if (option === "алфавиту") {
            pizzas.sort((a, b) => (a.name > b.name ? 1 : -1));
          } else {
            pizzas.sort((a, b) => (a.id > b.id ? 1 : -1));
          }
          this.$store.commit("GET_PIZZAS", pizzas);
        }
      }
    }
  };
</script>