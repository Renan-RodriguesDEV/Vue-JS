<template>
  <div class="app">
    <div class="sides">
      <div class="side" v-for="(imagem, i) in images" :key="i" :style="{ transform: `translateX(-${index * 100}%)` }">
        <img :src="imagem" alt=""></div>
    </div>
    <button @click="prev">Anterior</button>
    <button @click="next">Proxima</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://wallpapers.com/images/hd/kawaii-anime-cat-fyhhydnii35w556x.jpg",
        "https://img.freepik.com/fotos-premium/papeis-de-parede-e-imagens-de-gato-com-olhos-verdes-para-seu-desktop-telefone-tablet-e-celular_899894-31674.jpg?w=360",
        "https://wallpapers.com/images/hd/kawaii-anime-cat-i3dbj1zfk4j5i0ju.jpg"], index: 0
    }
  },
  methods: {
    prev() {
      this.index = (this.index - 1) % this.images.length;
    },
    next() {
      this.index = (this.index + 1) % this.images.length;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}

.sides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.side {
  min-width: 100%;
  flex: 1 0 100%;
}

img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
