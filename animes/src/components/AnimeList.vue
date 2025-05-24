<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const animes = ref([]);
const loading = ref(true);

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

async function fetchAnimes() {
    try {
        const response = await api.get('/animes');
        animes.value = response.data;
    } catch (error) {
        console.error('Erro ao buscar animes:', error);
    } finally {
        loading.value = false;
    }
}

onMounted(fetchAnimes);

// eslint-disable-next-line no-undef
defineExpose({ fetchAnimes, animes });
</script>