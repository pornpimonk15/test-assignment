<template>
  <v-footer class="footer">
    <div class="footer-content">
      <span class="px-2">© 2022 Pornpimon</span>
      <v-icon color="white">mdi-heart</v-icon>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background: #b24592;
  background: -webkit-linear-gradient(to right, #f15f79, #b24592);
  background: linear-gradient(to right, #f15f79, #b24592);
}
.footer-content {
  flex: 1;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
}
</style>
