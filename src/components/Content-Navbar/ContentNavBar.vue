<template>
    <div class="content-top-item">
        <SortByCategories></SortByCategories>
        <SortByOption></SortByOption>
    </div>
</template>

<script>
  import SortByOption from "./SortByFilter.vue";
  import SortByCategories from "./SortByCategories.vue";

  export default {
    components: {
      SortByOption,
      SortByCategories
    }
  };
</script>

<style scoped>
    @import "../../assets/MyCss/ContentNavBar.css";
</style>
