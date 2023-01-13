import { createApp } from 'vue' // импорт vue
import App from './App.vue' // импорт главного файла vue
import router from './router' // импорт router(маршрутов)

createApp(App).use(router).mount('#app') //создание экземпляра
