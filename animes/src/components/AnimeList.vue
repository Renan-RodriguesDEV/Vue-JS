<template>
    <div>
        <h1>Seus animes e mangas</h1>
        <div v-if="loading">Carregando...</div>
        <ul v-else>
            <li v-for="anime in animes" :key="anime.id">
                {{ anime.nome }} - {{ anime.genero }} - {{ anime.autor }}
                <span class="btn-group">
                    <button class="btn excluir" @click="deleteAnime(anime.id)">Excluir</button>
                    <button class="btn editar" @click="fillForm(anime.id)">Editar</button>
                </span>
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
<style scoped>
.anime-list-container {
    background: #181a1b;
    color: #f1f1f1;
    min-height: 100vh;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 12px #000a;
    max-width: 600px;
    margin: 2rem auto;
}

h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #ffb347;
    letter-spacing: 2px;
}

.loading {
    text-align: center;
    color: #ffb347;
    font-size: 1.2rem;
}

.anime-list {
    list-style: none;
    padding: 0;
}

.anime-item {
    background: #23272a;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 4px #0005;
    transition: background 0.2s;
}

.anime-item:hover {
    background: #2c3136;
}

.anime-info {
    flex: 1;
}

.btn-group {
    display: flex;
    gap: 0.5rem;
}

button {
    padding: 0.5rem 1.2rem;
    border: none;
    border-radius: 999px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s, color 0.2s;
    margin-left: 0.5rem;
}

.btn.excluir {
    background: #ff4c4c;
    color: #fff;
}

.btn.excluir:hover {
    background: #c0392b;
}

.btn.editar {
    background: #27ae60;
    color: #fff;
}

.btn.editar:hover {
    background: #219150;
}
</style>