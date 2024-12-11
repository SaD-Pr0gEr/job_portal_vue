<template>
  <div class="logo">
    <img src="@/assets/img/logo.svg" alt="logo">
    <p>kreate</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LogoVue",
})
</script>

<style scoped lang="sass">
@import "@/assets/sass/_abstract/mixins"

.logo
  @include flexMixin($columnGap: 6px)
</style>
