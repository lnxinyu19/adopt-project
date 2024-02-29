import '@/assets/style.css'
import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import App from '@/App.vue'
import router from '@/router/index'
import MyPlugin from '@/plugins/Loading'

import { faHashtag, faTags, faVenusMars, faPaw } from '@fortawesome/free-solid-svg-icons'

library.add(faHashtag, faTags, faVenusMars, faPaw)


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(MyPlugin)

app.mount('#app')
