<template>
  <img alt="Vue logo"
    src="https://th.bing.com/th/id/OIP.cVcFuxFJIcj1Bo2sxc3h-QHaIV?w=172&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7">
  <HelloWorld msg="Bem vindo ao Counter" />
  <MyCounter :counter="counter" />
  <IncrementBtn @increment="increment" :disabled="false" />
  <DecrementBtn @decrement="decrement" :disabled="false" />
</template>

<script>
import DecrementBtn from './components/DecrementBtn.vue';
import HelloWorld from './components/HelloWorld.vue'
import IncrementBtn from './components/IncrementBtn.vue';
import MyCounter from './components/MyCounter.vue';

export default {
  name: 'App',
  components: {
    HelloWorld, MyCounter, IncrementBtn, DecrementBtn
  },
  data() {
    return { counter: parseInt(localStorage.getItem('counter')) || 0, }
  },
  methods: {
    increment() {
      this.counter++;
      // this.saveToLocalStorage()
      localStorage.setItem('counter', this.counter);
    },
    decrement() {
      if (this.counter > 0) {
        this.counter--;
        // this.saveToLocalStorage()
        localStorage.setItem('counter', this.counter);
      } else {
        alert("Counter is number invalid, not a number negative!!!");
      }

    },
    saveToLocalStorage() {
      localStorage.setItem('counter', this.counter);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  columns: 2;
}

body {
  background: linear-gradient(#750099, #ff0011);
}
</style>
