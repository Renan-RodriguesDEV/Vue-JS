<template>
  <div class="container">
    <div class="header">
      <NavBar :nome="nome" />
      <SearchBar class="small-search-bar" v-model="searchQuery" />
    </div>

    <div class="slider-container">
      <!-- Slide bar passando props atraves do v-bind -->
      <SlideBar v-if="filteredDbz.length" :images="filteredDbz" />
      <SlideBar v-if="filteredFrieren.length" :images="filteredFrieren" />
      <SlideBar v-if="filteredZoom100.length" :images="filteredZoom100" />
      <SlideBar v-if="filteredHellsParadise.length" :images="filteredHellsParadise" />
      <SlideBar v-if="filteredNaruto.length" :images="filteredNaruto" />
      <SlideBar v-if="filteredMarvelVillains.length" :images="filteredMarvelVillains" />
      <SlideBar v-if="filteredMarvelHeroes.length" :images="filteredMarvelHeroes" />
      <SlideBar v-if="filteredDcVillains.length" :images="filteredDcVillains" />
      <SlideBar v-if="filteredDcHeroes.length" :images="filteredDcHeroes" />
    </div>
    <SideBar />
  </div>
  <footer>
    <!-- Footer se mantem sem barra de busca -->
  </footer>
</template>

<script>
// importação dos componentes 
import Swal from 'sweetalert2'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue';
import SlideBar from './components/SlideBar.vue';
import SearchBar from './components/SearchBar.vue';
import { dbz, dc_heroes, dc_villains, frieren, hells_paradise, marvel_heroes, marvel_villains, naruto, zoom100 } from './assets/images';
export default {
  name: 'App',
  // registrando nomes dos componentes importados
  components: {
    NavBar, SideBar, SlideBar, SearchBar
  },
  // props do objeto recebido com imagens
  data() {
    return { dbz, dc_heroes, dc_villains, frieren, hells_paradise, marvel_heroes, marvel_villains, naruto, zoom100, nome: '', searchQuery: '' }
  },
  // Define propriedades computadas (com cache).
  computed: {
    filteredDbz() {
      if (!this.searchQuery) return this.dbz
      return this.dbz.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    filteredFrieren() {
      if (!this.searchQuery) return this.frieren
      return this.frieren.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    filteredZoom100() {
      if (!this.searchQuery) return this.zoom100
      return this.zoom100.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    filteredHellsParadise() {
      if (!this.searchQuery) return this.hells_paradise
      return this.hells_paradise.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    filteredNaruto() {
      if (!this.searchQuery) return this.naruto
      return this.naruto.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    filteredMarvelVillains() {
      if (!this.searchQuery) return this.marvel_villains
      return this.marvel_villains.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    filteredMarvelHeroes() {
      if (!this.searchQuery) return this.marvel_heroes
      return this.marvel_heroes.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    filteredDcVillains() {
      if (!this.searchQuery) return this.dc_villains
      return this.dc_villains.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    filteredDcHeroes() {
      if (!this.searchQuery) return this.dc_heroes
      return this.dc_heroes.filter(image => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  // executa a função quando o componente é montado
  // caso o nome não esteja no localStorage, ele pede para o usuário digitar o nome
  mounted() {
    if (localStorage.getItem('nome') === null) {
      // setTimeout para dar delay de 3s
      // para o usuário não ficar confuso com o alerta logo de cara
      setTimeout(() => {
        Swal.fire({
          title: 'Digite seu nome',
          input: 'text',
          inputPlaceholder: 'Seu nome',
          showCancelButton: false,
          confirmButtonText: 'Enviar'
        }).then((result) => {
          // se o usuário não digitar nada, o nome é 'Visitante'
          // se o usuário digitar, o nome é o que ele digitou
          this.nome = result.value || 'Visitante'
          localStorage.setItem('nome', this.nome)
          Swal.fire(`Bem vindo, ${this.nome}!`)
        })
      }, 3000)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  background: url('https://images.hdqwalls.com/download/japanese-temple-illustration-pu-1920x1080.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
}

.small-search-bar {
  position: absolute;
  top: 0;
  right: 25px;
  width: 200px;
  z-index: 1100;
  /* maior que 1000 */
  text-align: end;
  margin-right: 2.5%;
}


.slider-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
}
</style>
