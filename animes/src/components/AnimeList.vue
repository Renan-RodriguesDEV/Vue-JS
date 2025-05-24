<script setup>
/* global defineExpose */
import { ref, onMounted } from 'vue';
import axios from 'axios';

const animes = ref([]);
const loading = ref(true);

async function fetchAnimes() {
    try {
        const response = await axios.get('/animes');
        animes.value = response.data;
        console.log('Animes:', animes.value);
    } catch (error) {
        console.error('Erro ao buscar animes:', error);
    } finally {
        loading.value = false;
    }
}

onMounted(fetchAnimes);

defineExpose({ fetchAnimes, animes });
</script>