<template>
  <div class="container">
    <NavBar :nome="nome" />
    <div class="slider-container">
      <SlideBar :images="dbz" />
      <SlideBar :images="frieren" />
      <SlideBar :images="flash" />
    </div>
    <SideBar />
  </div>
</template>

<script>
// importação dos componentes 
import Swal from 'sweetalert2'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue';
import SlideBar from './components/SlideBar.vue';
import { dbz, frieren, zoom100 } from './assets/images';
export default {
  name: 'App',
  // registrando os componentes
  components: {
    NavBar, SideBar, SlideBar
  },
  data() {
    return { dbz: dbz, frieren: frieren, flash: zoom100, nome: '' }
  },
  mounted() {
    if (localStorage.getItem('nome') === null) {
      setTimeout(() => {
        Swal.fire({
          title: 'Digite seu nome',
          input: 'text',
          inputPlaceholder: 'Seu nome',
          showCancelButton: false,
          confirmButtonText: 'Enviar'
        }).then((result) => {
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
/* Configura o container para centralizar os componentes */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
  background: url('https://preview.redd.it/dan-da-dan-wallpapers-anime-v0-s51cg9eceqsd1.jpg?width=640&crop=smart&auto=webp&s=9734e01acdc07f0c7114be131be8d20631fff550')
}

/* Container dos sliders centralizados horizontalmente */
.slider-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
}
</style>