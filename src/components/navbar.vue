<template>
  <nav class="bg-black md:px-0 sm:px-0 lg:px-40 xl:px-40 sm:py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-2">
        <!-- Logo -->
        <div class="md:block hidden items-center">
          <img class="h-25 w-25" src="https://www.yellowcabtrenton.com/img/logo.png" alt="Logo">
        </div>

        <!-- Buttons (shown on small screens only) -->

        <!-- Menu items -->
        <div class="hidden md:flex sm:items-center">
          <div class="ml-4 space-x-4">
            <a v-for="item in navbarItems" :key="item" href="#" class="text-gray-300 text-gray hover:text-orange px-2 py-2 rounded-md md:text-sm font-medium">{{ item }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden lg:hidden text-center">
      <div class="flex justify-center sm:justify-start my-8">
        <img class="h-25 w-25 sm:h-auto sm:w-auto" src="https://www.yellowcabtrenton.com/img/logo.png" alt="Logo">
      </div>
      <a href="#" class="block my-2">
        <button class="text-white bg-orange px-3 py-2 rounded-md text-sm font-medium w-7/12">
          Click to Call Now
        </button>
      </a>
      <a href="#" class="block my-2">
        <button class="text-black px-3 py-2 rounded-md text-sm font-medium w-7/12 set-bg-btn my-2.5">
          Order a Yellow cab
        </button>
      </a>
      <!--   Add Separator  -->
      <div class="my-2 border-t border-orange mx-6"></div>
      <!--=========== Toggler button (for mobile) ==============-->
      <div class="flex justify-center">
        <button @click="toggleMenu" type="button" :class="buttonClasses">
          Menu
        </button>
      </div>
    </div>

    <!-- ============== Mobile menu (hidden by default)  ==============-->
    <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navbarItems" :key="item" href="#" class="text-gray hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium ">{{ item }}</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      navbarItems: ['HOME', 'ABOUT', 'BOOKING', 'SPECIAL', 'CABS', 'CAREER', 'LOST&FOUND', 'CONTACT'],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  computed: {
    buttonClasses() {
      return [
        'text-white',
        'focus:outline-none',
        'focus:text-white',
        'w-11/12',
        'px-6',
        'rounded',
        'mb-4',
        'p-2',
        this.isMenuOpen ? 'bg-orange' : '',
      ];
    },
  },
};
</script>

<style scoped>
.set-bg-btn {
  background-color: #f5f5f5;
}
</style>