// src/main.ts
import './style.css';
// @ts-ignore: Vue SFC import - project has appropriate tooling but TS can't find the declaration here
import App from './App.vue';
import { createApp } from 'vue';
import Lenis from 'lenis';
import router from './router';

// smooth scroll
const lenis = new Lenis({
  duration: 0.8,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

const app = createApp(App);
app.use(router);
app.mount('#app');

export { raf, lenis };