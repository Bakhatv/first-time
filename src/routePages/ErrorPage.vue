<template>
  <div class="error">
    <h1>Error 404. Oops!</h1>
    <h3>Page you are trying to find is not here.</h3>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style scoped>
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
