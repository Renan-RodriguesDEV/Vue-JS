<template>
  <div>
    <h1>Lista de Animes</h1>
    <AnimeForm :editingAnime="editingAnime" @submit="handleSubmit" />
    <AnimeList ref="animeList" @edit="editAnime" @delete="deleteAnime" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AnimeForm from './components/AnimeForm.vue';
import AnimeList from './components/AnimeList.vue';
import axios from 'axios';

const editingAnime = ref(null);
const animeList = ref();

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

async function handleSubmit(animeData) {
  try {
    if (animeData.id) {
      await api.put(`/animes/${animeData.id}`, animeData);
    } else {
      await api.post('/animes', animeData);
    }
    animeList.value.fetchAnimes();
    editingAnime.value = null;
  } catch (error) {
    console.error('Erro ao salvar anime:', error);
  }
}

function editAnime(anime) {
  editingAnime.value = { ...anime };
}

async function deleteAnime(id) {
  try {
    await api.delete(`/animes/${id}`);
    animeList.value.fetchAnimes();
  } catch (error) {
    console.error('Erro ao excluir anime:', error);
  }
}
</script>