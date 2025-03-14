<template>
    <div>
        <div :class="{ active: isActive, 'text-bold': isBold, 'text-red': isRed }">
            Este é um exemplo com multiplas classes dinamicas
        </div>
        <button @click="toggleActive">Alternar Active</button>
        <button @click="toggleBold">Alternar Bold</button>
        <button @click="toggleRed">Alternar Red</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: true,
            isBold: false,
            isRed: true
        }
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        },
        toggleBold() {
            this.isBold = !this.isBold;
        },
        toggleRed() {
            this.isRed = !this.isRed;
        }
    }
}
</script>
<style scoped>
.active {
    visibility: hidden;
}

.text-bold {
    font-weight: bold;
}

.text-red {
    color: red;
}

button {
    margin: 5px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #e0e0e0;
}

button:active {
    background-color: #d0d0d0;
}
</style>