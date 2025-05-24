<template>
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