/* eslint-disable */
import { createStore } from "vuex";
import EventService from "../services/EventList.js"

export default createStore({
  state: {
    pizzas: [],
    cartItems: [],
    chosenItems: [],
    selectedOption: "популярности",
    chosenItem: null,
  },
  mutations: {
    GET_PIZZAS(state, pizzas) {
      state.pizzas = pizzas
    },

    SET_ITEMS(state, result) {
      state.cartItems = result;
    },
  },
  actions: {
    async getPizzasFromApi(ctx) {
      let pizzas = await EventService.getPizzas();
      ctx.commit("GET_PIZZAS", pizzas)
    },

    setPizzaToCart({state, commit}, chosenItem) {
      let chosenItems = state.chosenItems;
      let flag = state.chosenItems.some(item => {
        return item.name === chosenItem.name && item.type === chosenItem.type && item.size === chosenItem.size;
      });
      if(!flag) {
        state.chosenItems.push(chosenItem);
      } else {
        state.chosenItems.map(item => {
          if(item.name === chosenItem.name && item.type === chosenItem.type && item.size === chosenItem.size) {
            item.quantity++;
          }
        });
      }
      commit("SET_ITEMS", chosenItems);
    },
  },
  getters: {
    pizzas(state) {
      return state.pizzas;
    },
    cartItems(state) {
      return state.cartItems;
    },
  },
});
