<template>
    <div class="sort">
        <div class="sort-label">
            <img v-if="sortActive" src="../../assets/Images/TeskariStrelka.jpg" alt="">
            <img v-else src="../../assets/Images/Strelka.jpg" alt="">
            <b>Сортировка по:</b>
            <span @click="displayOptions">{{
          this.$store.state.selectedOption
        }}</span>
        </div>
        <div class="sort-options" :class="{ show: Show, hide: Hide }">
            <ul>
                <template v-for="(option, index) in sortOptions" :key="index">
                    <li
                            v-if="option === this.$store.state.selectedOption"
                            class="active"
                            @click="chooseOption(option)"
                    >
                        {{ option }}
                    </li>
                    <li v-else @click="chooseOption(option)">{{ option }}</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SortByFilter",
    data() {
      return {
        Show: false,
        Hide: true,
        sortActive: false,
        sortOptions: ["популярности", "цене", "алфавиту"],
      }
    },
    methods: {
      chooseOption(option, pizzas) {
        this.$store.state.selectedOption = option
        let result;
        pizzas = this.$store.state.pizzas;
        if(option === "цене") {
          result = pizzas.sort((a, b) => (a.price > b.price ? -1 : 1));
        } else if(option === "алфавиту") {
          result = pizzas.sort((a, b) => (a.name > b.name ? 1: -1));
        } else {
          result = pizzas.sort((a, b) => (a.id > b.id ? 1 : -1));
        }
        this.$store.commit("GET_PIZZAS", result)
        this.displayOptions();
      },

      displayOptions() {
        this.Hide = !this.Hide;
        this.Show = !this.Show;
        this.sortActive = !this.sortActive;
      },
    },
  };
</script>

<style scoped>

</style>