<template>
  <div class="container">
    <NavBar />
    <SideBar class="side" :isVisible="showSidebar" />
    <button class="toggle-button" @click="toggleSidebar">
      <i class="fas fa-bars"></i>
    </button>
    <ImageSlider class="slider" />
  </div>
</template>

<script>
import ImageSlider from './components/Slider.vue';
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: { ImageSlider, SideBar, NavBar },
  data() {
    return {
      showSidebar: true
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }


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

.toggle-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
}

.toggle-button:hover {
  color: #ef7afc;
}
</style>
