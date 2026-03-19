import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/home/HomePage.vue')

const HormoneReplacementTherapyService = () => import('@/containers/services/HormoneReplacementTherapyService.vue')
const LowDoseNaltrexoneService = () => import('@/containers/services/LowDoseNaltrexoneService.vue')
const SexualHealthService = () => import('@/containers/services/SexualHealthService.vue')
const WeightLossService = () => import('@/containers/services/WeightLossService.vue')
const HairGrowthService = () => import('@/containers/services/HairGrowthService.vue')
const DermatologyService = () => import('@/containers/services/DermatologyService.vue')

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
        path: PATH.LOW_DOSE_NALTREXONE_SERVICE, 
        name: ROUTE_NAME.LOW_DOSE_NALTREXONE_SERVICE, 
        component: LowDoseNaltrexoneService,
        meta: { title: ` ⊹ ${ROUTE_NAME.LOW_DOSE_NALTREXONE_SERVICE}` }
    },
    { 
        path: PATH.SEXUAL_HEALTH_SERVICE, 
        name: ROUTE_NAME.SEXUAL_HEALTH_SERVICE, 
        component: SexualHealthService,
        meta: { title: ` ⊹ ${ROUTE_NAME.SEXUAL_HEALTH_SERVICE}` }
    },
    { 
        path: PATH.WEIGHT_LOSS_SERVICE, 
        name: ROUTE_NAME.WEIGHT_LOSS_SERVICE, 
        component: WeightLossService,
        meta: { title: ` ⊹ ${ROUTE_NAME.WEIGHT_LOSS_SERVICE}` }
    },
    { 
        path: PATH.HAIR_GROWTH_SERVICE, 
        name: ROUTE_NAME.HAIR_GROWTH_SERVICE, 
        component: HairGrowthService,
        meta: { title: ` ⊹ ${ROUTE_NAME.HAIR_GROWTH_SERVICE}` }
    },
    { 
        path: PATH.DERMATOLOGY_SERVICE, 
        name: ROUTE_NAME.DERMATOLOGY_SERVICE, 
        component: DermatologyService,
        meta: { title: ` ⊹ ${ROUTE_NAME.DERMATOLOGY_SERVICE}` }
    },
    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: PATH.HOME,
    },
]

export default [
    ...routes,
]
