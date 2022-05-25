<script setup>
import FButton from './components/FButton.vue';
import FLink from './components/FLink.vue';
import { useCounterStore } from './stores/custom';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { counter } = storeToRefs(store);

function handleClick() {
  // console.log('clicked that button');
  store.incrementCount();
}
</script>

<template>
  <nav>
    <f-link to="/">Home</f-link>
    <f-link to="/about">About</f-link>
  </nav>
  <f-button @click="handleClick">Click me</f-button>
  <p>{{ counter }}</p>
  <router-view />
</template>

<style>
body {
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
