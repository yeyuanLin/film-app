import Home from './components/Home.vue'
import Login from './components/Login.vue'
import WriteComment from './components/WriteComment.vue'




export const routes = [
  {path: "/", name: "homeLink", component: Home},
  {path: "/Login", name: "loginLink", component: Login},
  {path: "/WriteComment", name: "loginLink", component: WriteComment},
]
