<script setup>
// eslint-disable-next-line no-undef
defineEmits(['click']);
</script>

<template>
  <button @click="$emit('click')" class="f-button">
    <slot />
  </button>
</template>

<style scoped>
.f-button {
  color: inherit;
}
.f-button:hover {
  cursor: pointer;
}
</style>
