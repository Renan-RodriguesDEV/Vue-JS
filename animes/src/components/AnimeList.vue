<template>
    <div>
        <h1>Lista de Animes</h1>
        <div v-if="loading">Carregando...</div>
        <ul v-else>
            <li v-for="anime in animes" :key="anime.id">
                {{ anime.nome }} - {{ anime.genero }} - {{ anime.autor }}
                <button @click="deleteAnime(anime.id)">Excluir</button>
                <button @click="fillForm(anime.id)">Editar</button>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'AnimeList',
    data() {
        return {
            animes: [],
            loading: true,
        };
    },
    methods: {
        async fetchAnimes() {
            try {
                const response = await axios.get('/animes');
                this.animes = response.data;
                console.log('Animes:', this.animes);
            } catch (error) {
                console.error('Erro ao buscar animes:', error);
            } finally {
                this.loading = false;
            }
        },
        async deleteAnime(id) {
            try {
                await axios.delete(`/animes/${id}`);
                this.fetchAnimes();
            } catch (error) {
                console.error('Erro ao excluir anime:', error);
            }
        },
        fillForm(id) {
            const anime = this.animes.find(a => a.id === id);
            this.$emit('edit-anime', anime);
        }
    },
    mounted() {
        this.fetchAnimes();
    },

}

</script>