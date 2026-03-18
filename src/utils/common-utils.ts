import router from '@/router'

export const goToPage = (routeName: string) => {
    router.push({name: routeName})
}