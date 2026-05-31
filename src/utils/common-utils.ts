import router from '@/router'

export const goToPage = (routeName: string) => {
    router.push({name: routeName})
}

export const openBlankUrl = (url: string) => {
    window.open(url, '_blank')
}