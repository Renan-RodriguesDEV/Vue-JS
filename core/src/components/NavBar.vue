<script>
export default {
  name: 'NavBar',
  data() {
    return {

      navItems: [
        { name: 'Home', link: '/', icon: 'fas fa-home' },
        { name: 'Sobre', link: '/sobre', icon: 'fas fa-info-circle' },
        { name: 'Serviços', link: '/servicos', icon: 'fas fa-cogs' },
        { name: 'Contato', link: '/contatos', icon: 'fas fa-envelope' },
      ]

    }
  },
  props: {
    nome: {
      type: String
    }
  }
}
</script>
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <a href="/"><i class="logo">Welcome Cabaré {{ nome }}</i></a>
      </div>
      <ul class="nav-links">
        <!-- v-for para construir a lista a partir da variavel objeto navItems -->
        <li v-for="(item, index) in navItems" :key=index>
          <!-- utilização do v-bind para pegar os icones q estou iterando -->
          <a :href="item.link"><i :class="item.icon"></i>{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<!-- style com scoped para aplicar a estilização somente a esse componente -->
<style scoped>
.navbar {
  background: linear-gradient(#3b009b, #7621ff);
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  display: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo a {
  font-family: JetBrains Mono;
  font-size: 24px;
  font-weight: bold;
  color: #ffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo a:hover {
  color: #3b009b
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.nav-links a:hover {
  background-color: #ecf0f1;
  color: #34495e;
  transform: scale(1.05);
}

.nav-links a:active {
  transform: scale(1);
}
</style>