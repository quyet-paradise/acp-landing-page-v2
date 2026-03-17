import { createRouter, createWebHistory } from "vue-router"
import appRoute from "./app-route"
import AOS from 'aos'

const router = createRouter({
    history: createWebHistory(),
    routes: [...appRoute],
    scrollBehavior(to) { // Removed unused parameters
        if (!to.query?.view) {
            return { top: 0, behavior: 'instant' }
        }
    }
});

const DEFAULT_TITLE = "Artisan Compounding Pharmacy"
router.beforeEach((to, _, next) => { // Removed unused 'from' parameter
    document.title = `${DEFAULT_TITLE}${to.meta?.title || ""}`

    // This re-initializes AOS on every page navigation
    AOS.init({
        // Global settings:
        disable: false,
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease-out-quad', // default easing for AOS animations
        once: false, // whether animation should only happen once
    })
    
    next()
});

export default router
