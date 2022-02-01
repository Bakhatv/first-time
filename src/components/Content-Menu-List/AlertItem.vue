<template>
    <transition name="alert">
        <div class="alert" v-show="show">
            <div class="item">
                <img :src="imageUrl" alt="">
                <div class="item-details">
                    <div class="item-info">
                        <div class="align">
                            <h2 class="item-name">{{name}} ({{quantity}} шт.)</h2>
                            <h3 class="type">({{type}}, {{size}} см.)</h3>
                        </div>
                        <div>
                            <h3 class="item-price">{{price}} ₽</h3>
                        </div>
                    </div>
                    <p class="added">Добавлено в корзину!</p>
                    <p class="item-guide">Эта пицца великолепна!</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  /* eslint-disable */
  import {mapGetters} from "vuex";
  export default {
    name: "AlertItem",
    data() {
      return {
        name: "",
        price: 0,
        quantity: 0,
        imageUrl: "",
        type: "",
        size: 0,
        show: false,
      };
    },
    mounted() {
      this.emitter.on("item", data => {
        this.setDetails(data)
        this.setPrice(data, this.cartItems);
      });

      this.emitter.on("show", data => {
        this.show = data
        setTimeout(() => this.show = false, 3000);
      });
    },

    updated() {
      this.setPrice();

    },
    methods: {
      setDetails(data) {
        this.name = data.name;
        this.imageUrl = data.imageUrl;
        this.type = data.type;
        this.size = data.size;
      },

      setPrice(data, cartItems) {
        for(const elem of cartItems) {
          if(elem.name === data.name && elem.type === data.type && elem.size === data.size) {
            this.quantity = elem.quantity
            this.price = elem.price * this.quantity;
          }
        }
      },
    },
    computed: {
      ...mapGetters(["cartItems"]),
    },
  };
</script>

<style scoped>
    .alert {
        position: fixed;
        right: 15%;
        top: 20%;
        padding: 10px;
        width: 960px;
    }

    .alert-enter-active, .alert-leave-active {
        transition: opacity 0.5s ease;
    }

    .alert-enter-from, .alert-leave-to  {
        opacity: 0;
    }

    .item {
        display: flex;
    }

    .item-details {
        width: 100%;
        background-color: antiquewhite;
    }

    .item img {
        max-width: 200px;
    }

    .item-info {
        margin-left: 50px;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }

    .added {
        position: absolute;
        right: 15px;
        bottom: 25px;
        font-size: 18px;
    }

    .align {
        text-align: center;
    }

    .item-guide {
        margin-top: 45px;
        margin-left: 60px;
        font-size: 18px;
        font-weight: 700;
    }

    .item-price {
        margin-right: 10px;
    }
</style>