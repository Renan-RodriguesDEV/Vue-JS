<template>
    <div id="app">
        <Cabecalho title="My Page" /> <!-- Removido o > extra -->
        <main>
            <p v-show="isVisible">Este é o main content</p>
        </main>
    </div>
</template>

<script>
import Cabecalho from "./components/MeuCabecalho.vue"
export default {
    name: "App",
    components: {
        Cabecalho
    },
    data() {  // Alterado de data: para data()
        return {
            isVisible: true
        }
    }
}
</script>
<style>
#app {
    font-family: Jetbrains Mono;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    columns: 2;
}

main {
    padding: 20px;
    background: linear-gradient(#750099, #ff0011);
}
</style>