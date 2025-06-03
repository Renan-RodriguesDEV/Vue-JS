<template>
  <div id="app">
    <AnimeForm @save="addAnime" :editing-anime="editingAnime" />
    <AnimeList ref="animeList" @edit-anime="setEditingAnime" />
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import AnimeForm from './components/AnimeForm.vue';
import AnimeList from './components/AnimeList.vue';
import axios from 'axios';

export default {
  components: {
    AnimeForm,
    AnimeList,
  },
  data() {
    return {
      editingAnime: null,
      animes: [{
        nome: '',
        genero: '',
        autor: ''
      }]
    };
  },
  methods: {
    setEditingAnime(anime) {
      this.editingAnime = anime;
    },
    addAnime(anime) {
      if (anime && anime.id) {
        axios.put(`/animes/${anime.id}`, anime)
          .then(() => {
            Swal.fire('Sucesso!', 'Anime atualizado com sucesso', 'sucess');
            this.editingAnime = null;
            this.$refs.animeList.fetchAnimes();
            // Scroll para o final da página
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          })
          .catch(error => {
            Swal.fire('Ops!', 'Erro ao atualizar anime!', 'error');
            console.error(error);
            // Scroll para o final da página
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          });
      } else if (anime) {
        console.log('Enviando:', anime);
        axios.post('/animes', anime)
          .then(() => {
            Swal.fire('Sucesso!', 'Anime enviado com sucesso', 'sucess');
            this.editingAnime = null;
            this.$refs.animeList.fetchAnimes();
          })
          .catch(error => {
            Swal.fire('Ops!', 'Erro ao adicionar anime!', 'error');
            console.error(error);
          });
      }
    },
    handleSubmit(animeData) {
      this.$emit('submit', animeData);
    },
    editAnime(anime) {
      this.editingAnime = { ...anime };
    },
    async deleteAnime(id) {
      try {
        await axios.delete(`/animes/${id}`);
        this.$refs.animeList.fetchAnimes();
      } catch (error) {
        console.error('Erro ao excluir anime:', error);
      }
    },
  },
};

</script>
<style scoped>
body {
  background: #181a1b;
}

div {
  background: #23272a;
  color: #f1f1f1;
  min-height: 100vh;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 12px #000a;
  max-width: 1200px;
  /* Aumentado de 700px para 1200px */
  margin: 1rem auto;
  /* Reduzido de 2rem para 1rem */
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #ffb347;
  letter-spacing: 2px;
  font-size: 2rem;
}

/* Ajuste para os componentes filhos ficarem centralizados */
.AnimeForm,
.AnimeList {
  margin-bottom: 2rem;
}

/* Scrollbar dark */
::-webkit-scrollbar {
  width: 8px;
  background: #23272a;
}

::-webkit-scrollbar-thumb {
  background: #181a1b;
  border-radius: 4px;
}
</style>