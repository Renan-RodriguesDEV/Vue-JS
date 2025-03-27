<template>
  <div class="container">
    <NavBar :nome="nome" />
    <div class="slider-container">
      <!-- Slide bar passando props atraves do v-bind -->
      <SlideBar :images="dbz" />
      <SlideBar :images="frieren" />
      <SlideBar :images="zoom100" />
      <!-- segunda linha -->
      <SlideBar :images="hells_paradise" />
      <SlideBar :images="naruto" />
      <SlideBar :images="marvel_villains" />
      <!-- terceira linha -->
      <SlideBar :images="marvel_heroes" />
      <SlideBar :images="dc_villains" />
      <SlideBar :images="dc_heroes" />
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
import { dbz, dc_heroes, dc_villains, frieren, hells_paradise, marvel_heroes, marvel_villains, naruto, zoom100 } from './assets/images';
export default {
  name: 'App',
  // registrando os componentes
  components: {
    NavBar, SideBar, SlideBar
  },
  // objetos e variaveis 
  data() {
    return { dbz, dc_heroes, dc_villains, frieren, hells_paradise, marvel_heroes, marvel_villains, naruto, zoom100, nome: '' }
  },
  // método chamado quando o componente estiver pronto para ser renderizado
  mounted() {
    // se nome no localStorage for null, pede para o usuário digitar o nome
    if (localStorage.getItem('nome') === null) {
      // espera 3s para exibir o modal
      setTimeout(() => {
        // exibe o modal
        Swal.fire({
          title: 'Digite seu nome',
          input: 'text',
          inputPlaceholder: 'Seu nome',
          showCancelButton: false,
          confirmButtonText: 'Enviar'
        }).then((result) => {
          // se o resultado for um texto válido, salva no localStorage e exibe uma confirmação
          this.nome = result.value || 'Visitante'
          localStorage.setItem('nome', this.nome)
          Swal.fire(`Bem vindo, ${this.nome}!`)
        })
        // tempo de espera 3s
      }, 3000)

    }
  }
}
</script>
<!-- style com scoped para aplicar a estilização somente a esse componente -->
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
  background: url('https://preview.redd.it/dan-da-dan-wallpapers-anime-v0-s51cg9eceqsd1.jpg?width=640&crop=smart&auto=webp&s=9734e01acdc07f0c7114be131be8d20631fff550');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

/* Container dos sliders centralizados horizontalmente */
.slider-container {
  display: flex;
  flex-wrap: wrap;
  /* Permite que os itens quebrem a linha */
  justify-content: center;
  gap: 20px;
  width: 100%;
}
</style>