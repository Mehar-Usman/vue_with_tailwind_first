<template>
  <div>
    <div class="grid grid-cols-12 bg-gray">
      <!-- First column -->
      <div class="md:col-span-8 lg:col-span-8 sm:col-span-8 items-center justify-center gap-3 hidden sm:flex">
        <a v-for="item in items" :key="item" :href="item.href" class="text-white hover:text-orange">{{ item.text }}</a>
      </div>
      <!-- Second column -->
      <div class="md:col-span-4 lg:col-span-4 sm:col-span-4 justify-center items-center hidden sm:flex">
        <div v-for="icon in socialLinks" :key="icon" class="p-1 hover:bg-black transition ease-in-out delay-75 duration-300 text-white bg-orange px-1">
          <fa class="h-3 w-4" :icon="['fab', icon]"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      items : [
        { text: 'Call (609)396-8181', href: '#' },
        { text: '1-877-YLOWCAB(9569222)', href: '#' },
        { text: 'Order a cab online', href: '#' }
      ],
      socialLinks : ['twitter', 'facebook-f', 'google-plus-g']
    }
  }
}
</script>
