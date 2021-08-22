import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/app.css'
import IconBase from '@/assets/icons/IconBase.vue'
import IconHome from '@/assets/icons/IconHome.vue'
import IconQuestion from '@/assets/icons/IconQuestion.vue'
import IconBook from '@/assets/icons/IconBook.vue'
import IconAcademicCap from '@/assets/icons/IconAcademicCap.vue'
import IconPencil from '@/assets/icons/IconPencil.vue'
import IconUserGroup from '@/assets/icons/IconUserGroup.vue'
import IconLaravel from '@/assets/icons/IconLaravel.vue'


const app = createApp(App).use(router)

app.component('icon-base', IconBase)
app.component('icon-home', IconHome)
app.component('icon-question', IconQuestion)
app.component('icon-book', IconBook)
app.component('icon-academic-cap', IconAcademicCap)
app.component('icon-pencil', IconPencil)
app.component('icon-user-group', IconUserGroup)
app.component('icon-laravel', IconLaravel)

app.mount('#app')
