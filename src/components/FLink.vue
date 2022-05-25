<script setup>
// eslint-disable-next-line no-undef
defineProps(['href', 'to']);
</script>

<template>
  <a :href="href" v-if="href">
    <slot />
  </a>
  <<router-link v-if="to" :to="to"></router-link>
</template>

<style scoped></style>
