<template>
  <div class="  md:col-span-4 lg:col-span-4  justify-center items-center grid my-5" >
    <div class=" font-bold justify-center items-center grid ">
      {{ title }}
    </div>

    <div class="justify-center items-center grid my-2 cursor-pointer">
      <img :src="img" alt=""  :class="bgColor">
    </div>
    <div class="text-sm text-center my-2 px-4">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'img', 'bgColor', 'description']
}
</script>

<style>
/* Add your custom styles here */
</style>
