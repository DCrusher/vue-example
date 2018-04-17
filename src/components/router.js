import VueRouter from 'vue-router'

const FractionsCalculator = () => import('components/Fractions/FractionsCalculator/FractionsCalculator')
const SocketList = () => import('components/Sockets/CommentsList/CommentsList')

const Home = { template: '<div>home</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/socket', component: SocketList },
    { path: '/fractions', component: FractionsCalculator }
  ]
})

export default router
