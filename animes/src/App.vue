<template>
  <div id="app">
    <AnimeForm @save="addAnime" :editing-anime="editingAnime" />
    <AnimeList ref="animeList" @edit-anime="setEditingAnime" />
  </div>
</template>

<script>
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
            alert('Anime atualizado com sucesso');
            this.editingAnime = null;
            this.$refs.animeList.fetchAnimes();
          })
          .catch(error => {
            alert('Erro ao atualizar anime!');
            console.error(error);
          });
      } else if (anime) {
        console.log('Enviando:', anime);
        axios.post('/animes', anime)
          .then(() => {
            alert('Anime enviado com sucesso');
            this.editingAnime = null;
            this.$refs.animeList.fetchAnimes();
          })
          .catch(error => {
            alert('Erro ao adicionar anime!');
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
<style>
#app {
  background: #181a1b;
  min-height: 100vh;
}
</style>
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
  max-width: 700px;
  margin: 2rem auto;
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