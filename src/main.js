import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import yellowCab from './pages/yellowCab.vue'; // Import the new page

import { FontAwesomeIcon  } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';



/* add icons to the library */
library.add(fas ,fab );



import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'yellowCab', component: yellowCab }, // Add the new route
    ],
});

createApp(App)
    .use(router)
    .component('fa', FontAwesomeIcon).mount('#app');
