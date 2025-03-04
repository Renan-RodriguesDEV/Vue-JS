<template>
    <header class="cabecalho">
        <h1>{{ title }}</h1>
    </header>
</template>
<script>
export default {
    name: 'MeuCabecalho',  // Alterado de 'Cabecalho' para 'MeuCabecalho'
    props: {
        title: {
            type: String,
            default: "My Application"  // default agora está dentro da definição da prop
        }
    }
}
</script>
<style scoped>
.cabecalho {
    background-color: aquamarine;
    padding: 20px;
    text-align: center;
    color: white;
}

.cabecalho h1 {
    margin: 0;
    font-size: 24px;
}
</style>