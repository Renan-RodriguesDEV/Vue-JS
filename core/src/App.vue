<template>
  <div class="container">
    <NavBar :nome="nome" />
    <div class="slider-container">
      <SlideBar :images="dbz" />
      <SlideBar :images="frieren" />
      <SlideBar :images="dbz" />
    </div>
    <SideBar />
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue';
import SlideBar from './components/SlideBar.vue';
export default {
  name: 'App',
  components: {
    NavBar, SideBar, SlideBar
  },
  data() {
    return {
      nome: '',
      dbz: [
        "https://th.bing.com/th/id/OIP.Qtw6I2dyvhQjUfUMQoKGfAAAAA?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.w43zPitdCAYmrVBPz1yn9QHaNK?w=900&h=1600&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.6I1eyivDQN_pQ7xM8-ijaAHaNK?w=1152&h=2048&rs=1&pid=ImgDetMain"
      ],
      frieren: [

        "https://th.bing.com/th/id/OIP.Qtw6I2dyvhQjUfUMQoKGfAAAAA?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.lWHbcTYWKHkEdnlscf5PMwHaLf?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.saM2d6xg6jML5kKaSUzjowHaG7?rs=1&pid=ImgDetMain"
      ]
    }
  },
  mounted() {
    Swal.fire({
      title: 'Digite seu nome',
      input: 'text',
      inputPlaceholder: 'Seu nome',
      showCancelButton: false,
      confirmButtonText: 'Enviar'
    }).then((result) => {
      this.nome = result.value || 'Visitante'
      Swal.fire(`Bem vindo, ${this.nome}!`)
    })
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
  background-color: #595959;
}

/* Container dos sliders centralizados horizontalmente */
.slider-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
}
</style>