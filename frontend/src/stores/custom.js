import { defineStore } from 'pinia';

export const useCounterStore = defineStore('main', {
  state: () => ({ counter: 0, name: 'Joe', isAdmin: true }),
  actions: {
    incrementCount() {
      this.counter++;
    },
  },
});
