<script setup>
import FButton from './components/FButton.vue';
import FLink from './components/FLink.vue';
import { useCounterStore } from './stores/custom';
import { storeToRefs } from 'pinia';
import { getRoot } from './blogApi/requests';

async function handleGetRequest() {
  try {
    const res = await getRoot();
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
}

const store = useCounterStore();
const { counter, name, isAdmin } = storeToRefs(store);
</script>

<template>
  <nav>
    <f-link to="/">Home</f-link>
    <f-link to="/about">About</f-link>
  </nav>
  <h1>{{ name }}</h1>
  <f-button @click="store.incrementCount" v-if="isAdmin">Click me</f-button>
  <f-button @click="handleGetRequest">Get root</f-button>
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
