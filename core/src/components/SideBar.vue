<script>
export default {
    name: 'SideBar',
    data() {
        return {
            icons: [
                { name: '', link: '', img: '' },
                { name: '', link: '', img: '' },
                { name: 'home', link: '/', img: 'fas fa-house-chimney' },
                { name: 'mangas', link: '/mangas', img: 'fas fa-book-open' },
                { name: 'animes', link: '/animes', img: 'fas fa-tv' },
                { name: 'hentais', link: '/hentais', img: 'fas fa-video' },
                { name: 'heroes', link: '/heroes', img: 'fas fa-user-secret' },
                { name: 'kwai', link: '/kwai', img: 'fas fa-camera-retro' },
            ],
            isVisible: true,
        }
    },
    // Define propriedades computadas (com cache).
    computed: {
        toggleContainerStyle() {
            return {
                left: this.isVisible ? '80px' : '0px'
            }
        },
        toggleBtnClass() {
            return this.isVisible ? 'fas fa-angle-double-left' : 'fas fa-angle-double-right'
        },
    },
    // funcções a executar no v-on
    methods: {
        // caso a funçao seja chamada o v-show é alterado
        toggleSidebar() {
            this.isVisible = !this.isVisible;
        }
    }
}
</script>

<template>
    <nav class="sidebar" v-show="isVisible">
        <div class="container">
            <ul class="side-links">
                <!-- v-for para iterar sobre os icones -->
                <li v-for="(icon, idx) in icons" :key="idx">
                    <a :href="icon.link">
                        <i :class="icon.img" :data-name="icon.name"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Alterar o style do container de toggle -->
    <div class="toggle-container" :style="toggleContainerStyle">
        <!-- v-on para chamar a função ao clickar -->
        <button class="toggle-btn" @click="toggleSidebar">
            <i :class="toggleBtnClass"></i>
        </button>
    </div>
</template>
<!-- style com scoped para aplicar a estilização somente a esse componente -->
<style scoped>
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 80px;
    background: linear-gradient(rgba(59, 0, 155, 0.521), rgba(118, 33, 255, 0.493));
    padding: 10px 0;
    transition: width 0.3s ease;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.side-links {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.side-links li {
    width: 100%;
    padding: 10px 0;
    text-align: center;
}

.side-links a {
    color: #ffffff;
    text-decoration: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
}

.side-links i {
    font-size: 1.2rem;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

/* Nome do ícone */
.side-links i::after {
    content: attr(data-name);
    font-size: 0.7rem;
    margin-top: 5px;
    font-family: sans-serif;
}

.side-links a:hover {
    color: #ef7afc;
}

/* Botão de toggle posicionado dinamicamente */
.toggle-container {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
}

.toggle-btn {
    background-color: transparent;
    border: none;
    color: gray;
    cursor: pointer;
    font-size: 1rem;
}

.toggle-btn:hover {
    color: #ef7afc;
}
</style>
