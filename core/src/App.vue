<template>
  <div class="container">
    <NavBar :nome="nome" />
    <div class="slider-container">
      <!-- Slide bar passando props atraves do v-bind -->
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
  // objetos e variaveis 
  data() {
    return { dbz: dbz, frieren: frieren, flash: zoom100, nome: '' }
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