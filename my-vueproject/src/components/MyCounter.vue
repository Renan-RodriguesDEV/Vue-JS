<template>
  <div class="counter">
    <h1>{{ counter }}</h1>
  </div>
</template>

<script>

export default {
  name: 'MyCounter',
  props: {
    counter: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  font-size: 3rem;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
}
</style>