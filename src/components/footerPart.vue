<template>
  <div class=" border-b border-zinc-200 hover:border-b hover:border-amber-500 ease-in-out transition delay-300  duration-100" >
    <img :src="footerImg" alt=""  >
    <div class="text-center font-bold md:text-xs my-2" >
      {{caption}}
    </div>
  </div>
</template>
<script>
export default {
  props:['footerImg','caption']
}
</script>
<style scoped>
.for-border-color{
  //color: #f3f3f3;
}
</style>