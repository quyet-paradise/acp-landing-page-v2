import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/home/HomePage.vue')

// const HormoneReplacementTherapyService = () => import('@/containers/services/HormoneReplacementTherapyService.vue')
const HormoneReplacementTherapyServiceOld = () => import('@/containers/services/HRTServiceOld.vue')
const LowDoseNaltrexoneService = () => import('@/containers/services/LowDoseNaltrexoneService.vue')
const SexualHealthService = () => import('@/containers/services/SexualHealthService.vue')
const WeightLossService = () => import('@/containers/services/WeightLossService.vue')
const HairGrowthService = () => import('@/containers/services/HairGrowthService.vue')
const DermatologyService = () => import('@/containers/services/DermatologyService.vue')
const PediatricsService = () => import('@/containers/services/PediatricsService.vue')
const VeterinanyService = () => import('@/containers/services/VeterinaryService.vue')
const OurTeam = () => import('@/containers/about-us/OurTeam.vue')
const OurFacility = () => import('@/containers/about-us/OurFacility.vue')
const ProfessionalPartnership = () => import('@/containers/about-us/ProfessionalPartnership.vue')
const Faq = () => import('@/containers/about-us/Faq.vue')
const ContactUs = () => import('@/containers/about-us/ContactUs.vue')
const WhatIsCompounding = () => import('@/containers/patients/WhatIsCompounding.vue')
const WhyChooseUs = () => import('@/containers/patients/WhyChooseUs.vue')
const HormoneTherapyConsultation = () => import('@/containers/consultation/HormoneTherapyConsultation.vue')
const ContactUsPage = () => import('@/containers/contact-us/ContactUs.vue')

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
        component: HormoneReplacementTherapyServiceOld,
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
        path: PATH.PEDIATRICS_SERVICE, 
        name: ROUTE_NAME.PEDIATRICS_SERVICE, 
        component: PediatricsService,
        meta: { title: ` ⊹ ${ROUTE_NAME.PEDIATRICS_SERVICE}` }
    },
    { 
        path: PATH.VETERINARY_SERVICE, 
        name: ROUTE_NAME.VETERINARY_SERVICE, 
        component: VeterinanyService,
        meta: { title: ` ⊹ ${ROUTE_NAME.VETERINARY_SERVICE}` }
    },
    { 
        path: PATH.OUR_TEAM, 
        name: ROUTE_NAME.OUR_TEAM, 
        component: OurTeam,
        meta: { title: ` ⊹ ${ROUTE_NAME.OUR_TEAM}` }
    },
    { 
        path: PATH.OUR_FACILITY, 
        name: ROUTE_NAME.OUR_FACILITY, 
        component: OurFacility,
        meta: { title: ` ⊹ ${ROUTE_NAME.OUR_FACILITY}` }
    },
    { 
        path: PATH.PROFESSIONAL_PARTNERSHIP, 
        name: ROUTE_NAME.PROFESSIONAL_PARTNERSHIP, 
        component: ProfessionalPartnership,
        meta: { title: ` ⊹ ${ROUTE_NAME.PROFESSIONAL_PARTNERSHIP}` }
    },
    { 
        path: PATH.FAQ, 
        name: ROUTE_NAME.FAQ, 
        component: Faq,
        meta: { title: ` ⊹ ${ROUTE_NAME.FAQ}` }
    },
    { 
        path: PATH.CONTACT_US, 
        name: ROUTE_NAME.CONTACT_US, 
        component: ContactUs,
        meta: { title: ` ⊹ ${ROUTE_NAME.CONTACT_US}` }
    },
    { 
        path: PATH.WHAT_IS_COMPOUNDING, 
        name: ROUTE_NAME.WHAT_IS_COMPOUNDING, 
        component: WhatIsCompounding,
        meta: { title: ` ⊹ ${ROUTE_NAME.WHAT_IS_COMPOUNDING}` }
    },
    { 
        path: PATH.WHY_CHOOSE_US, 
        name: ROUTE_NAME.WHY_CHOOSE_US, 
        component: WhyChooseUs,
        meta: { title: ` ⊹ ${ROUTE_NAME.WHY_CHOOSE_US}` }
    },
    { 
        path: PATH.HORMONE_THERAPY_CONSULTATION, 
        name: ROUTE_NAME.HORMONE_THERAPY_CONSULTATION, 
        component: HormoneTherapyConsultation,
        meta: { title: ` ⊹ ${ROUTE_NAME.HORMONE_THERAPY_CONSULTATION}` }
    },
    { 
        path: PATH.CONTACT_US_PAGE, 
        name: ROUTE_NAME.CONTACT_US_PAGE, 
        component: ContactUsPage,
        meta: { title: ` ⊹ ${ROUTE_NAME.CONTACT_US_PAGE}` }
    },
    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: PATH.HOME,
    },
]

export default [
    ...routes,
]
