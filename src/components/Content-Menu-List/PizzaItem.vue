<template>
  <div class="pizza-block">
    <img class="pizza-menu-image" :src="item.imageUrl" alt="" />
    <h4 class="pizza-name">{{ item.name }}</h4>
    <div class="selector">
      <ul>
        <template v-for="(variant, index) in variants" :key="index">
          <li
            @click="selectType(index)"
            v-if="item.types.includes(index) && selectedType == index"
            class="active"
          >
            {{ variant }}
          </li>
          <li @click="selectType(index)" v-else-if="item.types.includes(index)">
            {{ variant }}
          </li>
          <li v-else class="disabled">
            {{ variant }}
          </li>
        </template>
      </ul>
      <ul>
        <template v-for="(size, index) in sizes" :key="index">
          <li
            @click="selectSize(size)"
            v-if="item.sizes.includes(size) && selectedSize == size"
            class="active"
          >
            {{ size }}
          </li>
          <li @click="selectSize(size)" v-else-if="item.sizes.includes(size)">
            {{ size }}
          </li>
          <li v-else class="disabled">
            {{ size }}
          </li>
        </template>
      </ul>
    </div>
    <AddCartButton
      :item="item"
      :selectedSize="selectedSize"
      :selectedType="selectedType"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddCartButton from "./AddCartButton";

export default {
  props: ["item"],
  data() {
    return {
      selectedType: 0,
      selectedSize: 0,
      variants: ["тонкая", "традиционная"],
      sizes: [26, 30, 40],
    };
  },
  created() {
    this.selectedType = this.item.types[0];
    this.selectedSize = this.item.sizes[0];
  },
  methods: {
    selectType(index) {
      this.selectedType = index;
    },
    selectSize(index) {
      this.selectedSize = index;
    },
  },

  computed: {
    ...mapGetters(["cartItems"]),
  },
  components: {
    AddCartButton,
  },
};
</script>

<style scoped>
@import "../../assets/MyCss/ContentMenuList.css";
</style>
