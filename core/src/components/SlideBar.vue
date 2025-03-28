<script>
export default {
    name: 'SlideBar',
    // props do objeto recebido com imagens
    props: {
        images: {
            type: Array,
        }
    },
    data() {
        return {

            index: 0
        }
    },
    methods: {
        prev() {
            if (this.index === 0) {
                this.index = this.images.length - 1;
            }
            else {
                this.index--
            }
        },
        next() {
            if (this.index === this.images.length - 1) {
                this.index = 0;
            } else {
                this.index++
            }
        }
    },
    // função chamada quando o elemeneto é montado
    mounted() {
        // executa next() a cada 5s
        setInterval(() => this.next(), 5_000)
    }
}
</script>

<template>
    <div class="slider">
        <div class="slides" :style="{ transform: `translateX(-${index * 100}%)` }">
            <div class="slide" v-for="(image, i) in images" :key="i">
                <img :src="image.link" :alt="image.title">
            </div>
        </div>
        <!-- v-on para chamar funções com @click -->
        <button class="previous" @click="prev">&lt;</button>
        <button class="next" @click="next">&gt;</button>
    </div>
</template>
<!-- style com scoped para aplicar a estilização somente a esse componente -->
<style scoped>
.slider {
    position: relative;
    width: 100%;
    max-width: 400px;
    max-height: 650px;
    /* Largura média e limitada para não ultrapassar outros componentes */
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px;
    background: transparent;
}

.slides {
    margin-top: 65px;
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
}

img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
}

.previous,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
}

.previous {
    left: 10px;
}

.next {
    right: 10px;
}
</style>
