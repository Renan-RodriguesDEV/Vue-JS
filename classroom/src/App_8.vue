<template>
    <div>
        <button :class="buttonClass" @click="toggleButton"><i :class="iconClass"></i>{{ buttonText }}</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleButton() {
            this.isActive = !this.isActive;
        }
    },
    computed: {
        buttonClass() {
            return this.isActive ? 'btn-active' : 'btn-inactive'
        },
        iconClass() {
            return this.isActive ? 'fas fa-check' : 'fas fa-times'
        },
        buttonText() {
            return this.isActive ? 'Ativo' : 'Inativo'
        }
    }
}
</script>
<style scoped>
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn-active {
    background-color: green;
    color: white;
}

.btn-inactive {
    background-color: red;
    color: white;
}

i {
    font-size: 18px;
}
</style>