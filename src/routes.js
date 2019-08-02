import Home from './components/Home.vue'
import Login from './components/Login.vue'
import FilmComment from './components/Film/FilmComment.vue'


export const routes = [
  {path: "/", name: "homeLink", component: Home},
  {path: "/Login", name: "loginLink", component: Login},
  {path: "/FilmComment", name: "commentLink", component: FilmComment},
]
