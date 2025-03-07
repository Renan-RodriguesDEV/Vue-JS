<template>
  <div class="container">
    <SideBar class="side" />
    <ImageSlider class="slider" />
  </div>
</template>

<script>
import ImageSlider from './components/Slider.vue';
import SideBar from './components/SideBar.vue'
export default {
  components: { ImageSlider, SideBar }
}
</script>

<style>
.container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.side {
  align-content: center;

}

.slider {
  align-content: center;
  margin: 5% auto;
  background-color: #f89dff;
}
</style>
