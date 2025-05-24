<template>
    <div>
        <h1>Lista de Alunos e Matrículas</h1>

        <div v-if="loading">Carregando dados...</div>

        <div v-else-if="error">Erro ao carregar os dados: {{ error }}</div>

        <div v-else>
            <div v-for="aluno in alunos" :key="aluno.id" class="aluno-card">
                <h2>{{ aluno.nome }} (Cód: {{ aluno.id }})</h2>

                <div v-if="aluno.disciplinas && aluno.disciplinas.length > 0">
                    <h3>Matrículas:</h3>
                    <ul>
                        <li v-for="disciplina in aluno.disciplinas" :key="disciplina.id">
                            {{ disciplina.nome }} (Cód: {{ disciplina.id }})
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <p>Não possui matrículas.</p>
                </div>
                <button @click="excluirAluno(aluno.id)">Excluir</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            alunos: [],
            loading: false,
            error: null
        };
    },

    mounted() {
        this.fetchAlunos();
    },

    methods: {
        async fetchAlunos() {
            this.loading = true;
            this.error = null;

            try {
                const response = await axios.get('/alunos');
                this.alunos = response.data;
            } catch (err) {
                console.error('Erro ao buscar alunos:', err);
            } finally {
                this.loading = false;
            }
        },
        async excluirAluno(id) {
            const res = await axios.delete(`/alunos/${id}`);
            if (res.status === 200) {
                this.alunos = this.alunos.filter(aluno => aluno.id !== id);
            } else {
                console.error('Erro ao excluir aluno:', res);
            }
        }
    }
};
</script>

<style scoped>
.aluno-card {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.aluno-card h2 {
    margin-top: 0;
    margin-bottom: 10px;
}

.aluno-card h3 {
    margin-top: 10px;
    margin-bottom: 5px;
}

.aluno-card ul {
    list-style: none;
    padding: 0;
}

.aluno-card li {
    margin-bottom: 5px;
}
</style>