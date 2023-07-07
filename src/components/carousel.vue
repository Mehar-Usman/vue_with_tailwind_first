<template>
  <carousel :autoplay="5000" wrapAround :items-to-show="1">
    <slide v-for="slide in images" :key="slide">
      <div>
        <img :src="slide.src" :alt="slide.alt" class="w-full h-auto" />
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  data() {
    return {
      images: [
        { src: 'https://www.yellowcabtrenton.com/img/slider_photo/slide1.jpg', alt: 'Image 1' },
        { src: 'https://www.yellowcabtrenton.com/img/slider_photo/slide2.jpg', alt: 'Image 2' },
        { src: 'https://www.yellowcabtrenton.com/img/slider_photo/slide3.jpg', alt: 'Image 3' }
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style scoped>
.carousel {
  overflow: hidden;
  position: relative;
}

.carousel-inner {
  display: flex;
}

.carousel-item {
  flex: 0 0 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-item.active {
  transform: translateX(0);
}

.carousel-item:not(.active) {
  transform: translateX(100%);
}
</style>
