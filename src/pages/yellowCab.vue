<template>
  <!--================ Start Header Part =====================-->
  <top-header/>
  <!--================ End Header Part =====================-->

  <!--================ Start Navbar =====================-->
  <navbar/>
  <!--================ End Navbar =====================-->

  <!--================ start Carousel =====================-->
  <carousel/>
  <!--================ End Carousel =====================-->

  <!--================ start Welcome page of yellow cab =====================-->
  <div class="grid  gap-4 lg:px-36 px-6">
    <div class="md:col-span-12 sm:grid-cols-12 text-3xl font-bold text-center my-6 ">
      WELCOME TO <span class="text-orange">YELLOW CAB</span> TRENTON
    </div>
    <div class="md:col-span-12 sm:justify-center text-center mb-5">
      Welcome to the Yellow Cab of Trenton, NJ. We are committed to provide you excellent, fast, secure, and reliable
      taxi service. To experience the best taxi service in Trenton, Call (609)396-8181 or 1-877-YLOWCAB(9569222) or
      Order a cab online
    </div>
    <card-yellow
        v-for="card in cards"
        :key="card"
        :title="card.title"
        :img="card.img"
        :desc="card.desc"
        :bgColor="card.bgColor"
        :description="card.description"
    />
    <div class="items-center justify-center grid md:col-span-12 mb-8 ">
      <img class="cursor-pointer" src="https://www.yellowcabtrenton.com/img/order-now.png">
    </div>
    <div class="md:col-span-6 mt-3">
      <features-yellow
          :icon-with-text="features"
      />
    </div>
    <div class="md:col-span-6 mt-3">
      <div class="text-2xl font-bold">
        BEST RATES TO TRENTON
      </div>
      <div class="font-bold text-1xl mt-2">
        WHEELCHAIR ACCESSIBLE VEHICLE AVAILABLE
      </div>
      <div>
        <img src="	https://www.yellowcabtrenton.com/img/yellowcabtrenton.png">
      </div>
    </div>
    <div
        class="bg-orange md:col-span-12 py-2 px-6 italic hover:bg-black hover:text-white border-l-4 hover:border-amber-500">
      In the event that you have lost an item in one of our cabs, please call us immidiately at 609-396-8181. The sooner
      we hear from you, the greater our chances of having your property returned to you quickly.
    </div>
  </div>
  <!--================ End Welcome page of yellow cab =====================-->


  <!--================ Start footer Part =====================-->
  <div class="bg-zinc-200">
    <div class="grid md:grid-cols-4 lg:px-36 px-6 gap-6 py-12">
      <footer-part
          v-for="item in footerImages"
          :key="item"
          :footer-img="item.footerImg"
          :caption="item.caption"
      />
    </div>
    <div class="grid bg-set-footer-part grid-cols-12 lg:px-36 px-8 md:py-4 pt-3">
      <div
          class="flex items-center  md:col-span-8 col-span-12 sm:col-span-12  text-white font-bold text-xl text-center ">
        24/7 SATISFY ALL YOUR TRANSPORTATION NEEDS
      </div>
      <div class="flex items-center md:justify-end justify-center md:col-span-4 col-span-12 sm:col-span-12 mt-4">
        <img class="w-22 lg:w-100 md:w-100 cursor-pointer"
             src="https://www.yellowcabtrenton.com/img/rider-university.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="grid grid-cols-12 lg:px-36 px-6 py-3">
    <div class="md:col-span-6 col-span-12 text-center md:text-start ">
      <span class="text-gray  text-xs ">© Copyright 2012 By <a href="#" class="text-black"> Yellow Cab trenton.com</a> All rights reserved. </span>
    </div>
    <div class="md:col-span-6 col-span-12 text-center  md:text-end">
      <span class="text-gray text-xs">Design by <a href="#" class="text-black"> FiberTech Computer & Web Solutions LLC</a> </span>
    </div>
  </div>
  <!--================ End Footer Part =====================-->

</template>
<script>
import Carousel from "../components/carousel.vue";
import CardYellow from "../components/cardYellow.vue";
import FeaturesYellow from "../components/featuresYellow.vue";
import FooterPart from "../components/footerPart.vue";
import Navbar from "../components/navbar.vue";
import TopHeader from "../components/TopHeader.vue";

export default {
  name: "yellowCab",
  // Call the Component Here
  components: {
    TopHeader,
    Navbar,
    FooterPart,
    FeaturesYellow,
    CardYellow,
    Carousel
  },


  data() {
    return {
      isMenuOpen: false,
      cards: [
        {
          title: 'ABOUT US',
          img: 'https://www.yellowcabtrenton.com/img/large_icons/portfolio3.png',
          description: 'Yellow Cab Taxi is the largest Cab company in city of Trenton. We utilize safest most comfortable vehicles to provide passengers the highest quality of service. We are professionals and have been in business since 1920.',
          class: 'col-span-3',
          bgColor: 'bg-orange'
        },
        {
          title: 'OUR SERVICES',
          img: 'https://www.yellowcabtrenton.com/img/large_icons/settings3.png',
          description: 'If you are in need of any of the special services, please do not hesitate to let our Customer Service Agents know when you are placing your telephone order. Our Agents are always delighted to assist you.',
          bgColor: 'bg-orange'
        },
        {
          title: 'ONLINE RESERVATIONS',
          img: 'https://www.yellowcabtrenton.com/img/large_icons/mess3.png',
          description: 'Simply fill out the information form and your reservation will be sent directly to our customer service and dispatch center. All of the required information must be included in order for your reservation to be processed. Enjoy your trip!',
          bgColor: 'bg-orange'
        },
      ],
      features: [
        'Open 24/7 including hollidays',
        'Prompt Courteous Service',
        'Corporate Accounts Welcome',
        'All Major Airports & Train Stations',
        'All Attractions & Amusement Parks',
        'Early Morning Reservations Accepted',
        'Clean Air Conditioned Vehicles',
        'All Major Credit Cards Accepted',
        'Professional Courteous & Punctual Drivers',
      ],
      footerImages: [
        {
          footerImg: '\thttps://www.yellowcabtrenton.com/img/portfolio/item2.jpg',
          caption: 'DODGE DURANGO TAXI'
        },
        {
          footerImg: '\https://www.yellowcabtrenton.com/img/portfolio/item1.jpg',
          caption: 'DODGE DURANGO TAXI'
        }, {
          footerImg: '\thttps://www.yellowcabtrenton.com/img/portfolio/item3.jpg',
          caption: 'DODGE DURANGO TAXI'
        },
        {
          footerImg: 'https://www.yellowcabtrenton.com/img/portfolio/item9.jpg',
          caption: 'DODGE DURANGO TAXI'
        },
      ]
    };
  },
}
</script>

<style scoped>
/* Optional style write here */
.bg-set-footer-part {
  background-color: #4a4a4a;
}
</style>
