/* eslint-disable */
<script>
export default {
    name: 'ImageSlider',
    data() {
        return {
            images: [
                "https://wallpapers.com/images/hd/kawaii-anime-cat-fyhhydnii35w556x.jpg",
                "https://img.freepik.com/fotos-premium/papeis-de-parede-e-imagens-de-gato-com-olhos-verdes-para-seu-desktop-telefone-tablet-e-celular_899894-31674.jpg?w=360",
                "https://wallpapers.com/images/hd/kawaii-anime-cat-i3dbj1zfk4j5i0ju.jpg"],
            index: 0,

        }
    },
    methods: {
        prev() {
            if (this.index === 0) {
                this.index = this.images.length - 1
            } else {
                this.index = (this.index - 1) % this.images.length
            }
        },
        next() {
            if (this.index === this.images.length - 1) {
                this.index = 0
            } else {
                this.index = (this.index + 1) % this.images.length
            }
        }
    },
    // mounted() {
    //     setInterval(() => this.next(), 10_000)
    // }
}
</script>
<template>
    <div class="slider">
        <div class="slides" :style="{ transform: `translateX(-${index * 100}%)` }">
            <div class="slide" v-for="(image, i) in images" :key="i">
                <img :src="image" alt="Gatinho fofo">
            </div>
        </div>
        <!--  -->
        <button class="previous" @click="prev">&lt;</button>
        <!--  -->
        <button class="next" @click="next">&gt;</button>
    </div>
</template>
<style scoped>
.slider {
    position: relative;
    /* width: 600px;
    height: 300px; */
    overflow: hidden;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(177, 0, 0, 0.5), rgba(249, 72, 255, 0.5));
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Botões */
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

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
    max-height: 300px;
    display: block;
    margin: auto;
}
</style>