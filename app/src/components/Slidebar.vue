<template>
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(-${indice * 100}%)` }">
        <div v-for="(imagem, i) in imagens" :key="i" class="slide">
          <img :src="imagem" alt="Imagem do slider">
        </div>
      </div>
  
      <!-- Botões de navegação -->
      <button @click="anterior" class="prev">❮</button>
      <button @click="proximo" class="next">❯</button>
    </div>
  </template>
  
  <script>
  export default {
  name:"Slider",
  //  dados como variaveis ficam em data
  data(){
    return {
      imagens:[
    "https://i.pinimg.com/736x/17/03/fe/1703fe47ae205402daf17719e840d00c.jpg",
    "https://wallpapers.com/images/featured/estetica-de-gato-fofo-988xxiyoes3e7vzw.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjipsySDzbfF_1CmBqquOtZk8_psaW1-iVig&s"
      ],
      indice:0
    }
  },
  // funções do vue js ficam em methods na tag script
  methods:{
    proximo(){
      this.indice = ( this.indice+1)% this.imagens.length
    },
    anterior(){
      this.indice = ( this.indice-1)% this.imagens.length
    }
  },
  mounted(){
    setInterval(() => {
      this.proximo();
    }, 3000);
  }
  }
  /*
  // import { ref, onMounted } from "vue";

  const imagens = ref([
    "https://via.placeholder.com/600x300/ff5733/ffffff?text=Slide+1",
    "https://via.placeholder.com/600x300/33ff57/ffffff?text=Slide+2",
    "https://via.placeholder.com/600x300/3357ff/ffffff?text=Slide+3"
  ]);
  
  const indice = ref(0);
  
  // Funções para navegar
  const proximo = () => {
    indice.value = (indice.value + 1) % imagens.value.length;
  };
  
  const anterior = () => {
    indice.value = (indice.value - 1 + imagens.value.length) % imagens.value.length;
  };
  
  // Troca automática de slides a cada 3s
  onMounted(() => {
    setInterval(proximo, 3000);
  });
  */ 
  // Lista de imagens
  
  </script>
  
  <style scoped>
  .slider {
    position: relative;
    width: 600px;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    min-width: 100%;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Botões */
  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
  }
  
  .prev { left: 10px; }
  .next { right: 10px; }
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
    max-height: 300px;
    display: block;
    margin: auto;
  }
  </style>
  