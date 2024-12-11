<template>
  <router-link :to="link.link" :class="classes?.types" v-if="link?.routerLink">
    {{ link.text }}
  </router-link>
  <a :href="link?.link" :class="classes?.types" v-else>{{ link.text }}</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "vue/dist/vue";
import { Link, LinkTypes } from "@/components/links/types";

export default defineComponent({
  name: "BaseLink",
  props: {
    link: Object as PropType<Link>,
    classes: {
      type: Object as PropType<LinkTypes>,
      default() {
        return { types: ["link"] };
      },
    },
  },
});
</script>

<style scoped lang="sass">
@import "@/assets/sass/_abstract/vars"
@import "@/assets/sass/_abstract/mixins"

.link
  color: $defaultLinkColor

  &:visited
    color: $defaultLinkVisitedColor

.buttonLink
  color: $defaultButtonColor
  background-color: $defaultButtonBgColor

  &:visited
    color: $defaultButtonVisitedColor
</style>
