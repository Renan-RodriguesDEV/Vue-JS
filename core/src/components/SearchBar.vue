<template>
    <div class="search-container">
        <div class="input-wrapper">
            <i class="fas fa-search icon" /><input class="input" type="text" :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" placeholder="find by name..." />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: ['modelValue']
}
</script>

<style scoped>
.search-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    color: #ffffff;
    /* Remova estilos de posicionamento fixo e fundo, se não forem necessários */
    padding: 10px;
}



.input-wrapper {
    position: relative;
    width: 200px;
    /* Ajuste o tamanho conforme necessário */
}

.input-wrapper .icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 18px;
    color: #ffffff;
}

.input-wrapper input {
    width: 100%;
    padding: 8px 8px 8px 35px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    background: transparent;
}

.input-wrapper input::placeholder {
    color: #cccccc;
}
</style>
