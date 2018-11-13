import Vue from 'vue';
import VueRouter from 'vue-router';

import HelloWorld from '@/pages/HelloWorld.vue';
import Home from '@/pages/Home.vue';
import SearchIp from '@/pages/SearchIp.vue';
import Ramens from '@/pages/Ramens.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/search_ip',
      component: SearchIp
    },
    {
      path: '/ramens',
      component: Ramens
    }
  ]
});

export default router;
