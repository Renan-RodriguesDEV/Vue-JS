<template>
    <div :class="{ active: isActive }">Está é uma execução de classe dinamica
        <button @click="toggleActive">Alterar classe</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: true
        };

    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    }
}
</script>
<style scoped>
.active {
    background-color: red;
    padding: 10px;
    border: 1px solid white;
    margin: auto;
}
</style>