<script setup>
// eslint-disable-next-line no-undef
defineProps({ text: String });
// eslint-disable-next-line no-undef
defineEmits(['click']);
</script>

<template>
  <button @click="$emit('click')" v-text="text" class="f-button" />
</template>

<style scoped>
.f-button:hover {
  cursor: pointer;
}
</style>
