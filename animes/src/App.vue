<template>
  <div>
    <h1>Lista de Animes</h1>
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