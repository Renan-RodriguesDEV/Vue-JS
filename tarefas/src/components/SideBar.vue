<script>
export default {
    name: 'SideBar',
    props: {
        isVisible: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            icons: [
                { name: '', link: '', img: '' },
                { name: 'home', link: '/', img: 'fas fa-house-chimney' },
                { name: 'docs', link: '/docs', img: 'fas fa-book' },
                { name: 'help', link: '/help', img: 'fas fa-person' }
            ],
        }
    },


}
</script>
<template>
    <nav class="sidebar" v-show="isVisible">
        <div class="container">

            <ul class="side-links">
                <li v-for="(icon, idx) in icons" :key="idx">
                    <a :href="icon.link"><i :class="icon.img">{{ icon.name }}</i></a>
                </li>
            </ul>

        </div>
    </nav>
</template>
<style scoped>
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 80px;
    /* Aumentei um pouco a largura */
    background-color: #3a003e;
    padding: 10px 0;
    transition: width 0.3s ease;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* Garante largura total */
}

.logo {
    width: 40px;
    height: 40px;
    margin-bottom: 30px;
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
    /* Garante largura total */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
}

.side-links i {
    font-size: 1.2rem;
    /* Reduzi um pouco o tamanho */
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* Garante largura total */
}

.side-links a:hover {
    color: #ef7afc;
}

/* Nome do ícone */
.side-links i::after {
    content: attr(data-name);
    /* Mudança para usar data-name ao invés de class */
    font-size: 0.7rem;
    margin-top: 5px;
    font-family: sans-serif;
    /* Adiciona uma fonte consistente */
}
</style>
