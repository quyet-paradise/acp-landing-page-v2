import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/home/HomePage.vue')

const HormoneReplacementTherapyService = () => import('@/containers/services/HormoneReplacementTherapyService.vue')

const routes = [
    { 
        path: PATH.HOME, 
        name: ROUTE_NAME.HOME, 
        component: Home,
        meta: { title: ` ⊹ ${ROUTE_NAME.HOME}` }
    },
    { 
        path: PATH.HORMONE_REPLACEMENT_THERAPY_SERVICE, 
        name: ROUTE_NAME.HORMONE_REPLACEMENT_THERAPY_SERVICE, 
        component: HormoneReplacementTherapyService,
        meta: { title: ` ⊹ ${ROUTE_NAME.HORMONE_REPLACEMENT_THERAPY_SERVICE}` }
    },
    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: PATH.HOME,
    },
]

export default [
    ...routes,
]
