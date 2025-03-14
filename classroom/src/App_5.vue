<template>
    <div class="container">
        <img class="img" :src="imageUrl" alt="Adolf">
    </div>
</template>
<script>
export default {
    data() {
        return {
            imageUrl: 'https://th.bing.com/th/id/R.9e05f51f456a92ff7ce572f528a63ee3?rik=OX7zE1soMvShOA&pid=ImgRaw&r=0'
        }
    }
};
</script>
<style>
.img {
    width: 50%;
    height: auto;
    object-fit: cover;
    display: block;
    max-width: 100%;
    
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(purple,grey);
    font-family: Arial, sans-serif;
}
</style>