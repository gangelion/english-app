import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue'
import QuizView from '@/views/QuizView.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/quiz-view', component: QuizView }
  ],
  mode: 'history',
});

export default router;
