<template>
  <HeaderVue class="container"></HeaderVue>
  <router-view />
</template>

<script lang="ts">
import HeaderVue from "@/layout/HeaderVue.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { HeaderVue },
});
</script>

<style lang="sass">
@import "@/assets/sass/base"
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
</style>
