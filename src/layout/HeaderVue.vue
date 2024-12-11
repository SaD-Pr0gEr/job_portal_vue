<template>
  <header class="header">
    <LogoVue></LogoVue>
    <div class="links">
      <div class="mid-links">
        <BaseLink
          v-for="(link, idx) in headerMidLinks"
          :link="link"
          :key="idx"
        ></BaseLink>
      </div>
      <div class="auth-links">
        <BaseLink
          v-for="(link, idx2) in headerAuthLinks"
          :key="idx2"
          :link="link"
        ></BaseLink>
        <BaseLink
          class="button header-button-link"
          v-for="(link, idx3) in buttonLinks"
          :key="idx3"
          :link="link"
          :classes="{ types: ['buttonLink'] }"
        ></BaseLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import LogoVue from "@/components/LogoVue.vue";
import { defineComponent } from "vue";
import { Link } from "@/components/links/types";
import BaseLink from "@/components/links/BaseLink.vue";

export default defineComponent({
  name: "HeaderVue",
  components: { BaseLink, LogoVue },
  data() {
    return {
      headerMidLinks: [
        { text: "Главная", link: { name: "home" }, routerLink: true },
        { text: "Найти", link: "#!", routerLink: false },
        { text: "Опубликовать", link: "#!", routerLink: false },
      ] as Link[],
      headerAuthLinks: [
        { text: "Войти", link: "#!", routerLink: false },
      ] as Link[],
      buttonLinks: [
        { text: "Регистрация", link: "#!", routerLink: false },
      ] as Link[],
    };
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_abstract/mixins"

.header
  margin-top: 50px
  @include flexMixin($alignItems: flex-end, $columnGap: 90px)

  & .logo
    width: 15%
    font-size: 56px
    font-weight: bold
    align-items: flex-end
    line-height: .9
    letter-spacing: 2px

  & .links
    width: 85%
    @include flexMixin($justifyContent: space-between)

    & a
      font-size: 32px
      font-weight: 500

    & .mid-links
      @include flexMixin($columnGap: 60px)

    & .auth-links
      @include flexMixin($columnGap: 50px)

    & .header-button-link
      padding: 10px 30px
</style>
