<script setup>
// eslint-disable-next-line no-undef
defineProps(['href', 'to']);
</script>

<template>
  <a v-if="href" :href="href" class="f-link">
    <slot />
  </a>
  <router-link v-if="to" :to="to" class="f-link">
    <slot />
  </router-link>
</template>

<style scoped>
.f-link {
  color: inherit;
}
</style>
