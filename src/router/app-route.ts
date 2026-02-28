import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/home/HomePage.vue')

const routes = [
    { 
        path: PATH.HOME, 
        name: ROUTE_NAME.HOME, 
        component: Home,
        meta: { title: ` ⊹ ${ROUTE_NAME.HOME}` }
    },
]

export default [
    ...routes,
]
