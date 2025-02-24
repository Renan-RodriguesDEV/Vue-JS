## app.vue

```javascript
<template>
    <div id="app">
      <Cabecalho title="Minha Página" />
      <main>
        <p v-if="isVisible">Este é o conteúdo principal da página.</p>
      </main>
    </div>
  </template>

  <script>
  import cabecalho from './components/MeuCabecalho.vue';

  export default {
    components: { cabecalho },
    data(){
      return{
        isVisible:false
      }
    }
  };
  </script>

  <style>
  #app {
    font-family: Arial, sans-serif;
  }

  main {
    padding: 20px;
  }
  </style>
```

## MeuCabecalho.vue

```javascript
<template>
    <header class="cabecalho">
      <h1>{{ title }}</h1>
    </header>
  </template>

  <script>
  export default {
    name: "MeuCabecalho",
    props: {
      title: {
        type: String,
        default: "Meu Aplicativo"
      }
    }
  };
  </script>

  <style scoped>
  .cabecalho {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 15px 0;
  }

  .cabecalho h1 {
    margin: 0;
    font-size: 24px;
  }
  </style>
```
