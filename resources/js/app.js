import './bootstrap';
import { createApp } from 'vue';
import router from "./router";

const app = createApp({});

import IndexComponent from './components/IndexComponent.vue';
app.component('index-component', IndexComponent);

app.use(router).mount('#app');
