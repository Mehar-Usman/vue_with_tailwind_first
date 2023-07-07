<template>
  <div class="md:col-span-6">
    <div class="font-bold text-2xl">
      FEATURES
    </div>
    <div class="font-bold mt-2">
      AUGUE PULVINAR AUCTOR. LOREM IPSUM DOLOR SIT
    </div>
      <div class="flex" v-for="item in iconWithText" :key="item">
        <div class="mt-0.5 text-amber-600">
          <fa class="h-2 w-4"  :icon="['fas' , 'star']"/>
        </div>
        <div class="ml-3 mt-2 text-xs ">
          {{item}}
        </div>
      </div>
  </div>
</template>
<script>

  export default {
    props:['iconWithText'],
  }
</script>