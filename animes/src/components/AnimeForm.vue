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

<script setup>
/* global defineProps, defineEmits */
import { ref, watch } from 'vue';

const props = defineProps(['editingAnime']);
const emit = defineEmits(['submit']);

const formData = ref({
  nome: '',
  genero: '',
  autor: ''
});

watch(() => props.editingAnime, (newVal) => {
  if (newVal) {
    formData.value = { ...newVal };
  } else {
    resetForm();
  }
});

function submitForm() {
  emit('submit', formData.value);
  resetForm();
}

function cancelEdit() {
  emit('submit', null);
  resetForm();
}

function resetForm() {
  formData.value = {
    nome: '',
    genero: '',
    autor: ''
  };
}
</script>