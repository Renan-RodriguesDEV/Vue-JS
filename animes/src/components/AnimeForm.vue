<template>
  <h2>Registre seus animes e mangas favoritos</h2>
  <form @submit.prevent="submitForm">
    <div>
      <label>Nome:</label>
      <input v-model="formData.nome" required />
    </div>

    <div>
      <label>Gênero:</label>
      <input v-model="formData.genero" required />
    </div>

    <div>
      <label>Autor:</label>
      <input v-model="formData.autor" required />
    </div>

    <button type="submit">{{ editingAnime ? 'Atualizar' : 'Adicionar' }}</button>
    <button v-if="editingAnime" type="button" @click="cancelEdit">Cancelar</button>
  </form>
</template>

<script>
export default {
  name: 'AnimeForm',
  data() {
    return {
      formData: {
        nome: '',
        genero: '',
        autor: ''
      }
    }
  },
  watch: {
    editingAnime: {
      handler(newVal) {
        if (newVal) {
          this.formData = { ...newVal };
        } else {
          this.resetForm();
        }
      },
      immediate: true
    }
  },
  props: {
    editingAnime: {
      type: Object,
      default: null
    }
  },
  methods: {

    submitForm() {
      this.$emit('save', this.formData);
      this.resetForm();

    },
    cancelEdit() {
      this.$emit('submit', null);
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        nome: '',
        genero: '',
        autor: ''
      };
    }
  }
};

</script>
<style scoped>
form {
  background: #23272a;
  color: #f1f1f1;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 12px #000a;
  max-width: 600px;
  /* Aumentado de 400px para 600px */
  margin: 1rem auto;
  /* Reduzido de 2rem para 1rem */
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.3rem;
  color: #ffb347;
  font-weight: bold;
  letter-spacing: 1px;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #181a1b;
  color: #f1f1f1;
  font-size: 1rem;
  transition: border 0.2s;
}

input:focus {
  border: 1.5px solid #ffb347;
  outline: none;
}

button {
  margin-top: 0.5rem;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  background: #4c8cff;
  color: #fff;
  transition: background 0.2s, color 0.2s;
}

button[type="submit"] {
  background: #4c8cff;
}

button[type="submit"]:hover {
  background: #2563eb;
}

button[type="button"] {
  background: #ff4c4c;
  margin-left: 0.5rem;
}

button[type="button"]:hover {
  background: #c0392b;
}

h2 {
  text-align: center;
  color: #ffb347;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  letter-spacing: 2px;
}
</style>