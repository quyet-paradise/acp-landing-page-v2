<template>
    <div class="home-quote" data-aos="fade-up" data-aos-delay="200">
        <h2 class="home-quote--title">Artisan Pharmacy was built for women. Empowering you to reclaim vitality, extend
            your healthspan, and age beautifully, with formulations as individuals as you are.</h2>
        <div class="book-consultation-btn mt-32px" @click="goToPage(ROUTE_NAME.WHAT_IS_COMPOUNDING)">LEARN MORE</div>
        <div class="divider"></div>
    </div>
</template>

<script lang="ts" setup>
import { goToPage } from '@/utils/common-utils'
import { ROUTE_NAME } from '@/constants/route-constants'
</script>

<style lang="scss" scoped>
.home-quote {
    width: 100%;
    padding: var(--dls-2cm) 32px 0 32px;
    display: flex;
    flex-direction: column;
    max-width: var(--dls-max-width);
    margin: 0 auto;

    &--title {
        margin: 0;
        max-width: 70%;
    }

    .divider {
        margin-top: var(--dls-1p5cm);
    }

    @media (max-width: 1024px) {
        padding: 32px 32px 0 32px;

        &--title {
            letter-spacing: -2px;
            max-width: 100%;
        }

        .divider {
            margin-top: 32px;
        }
    }

    @media (min-width: 1921px) {
        max-width: 100%;
        padding: var(--dls-2cm) 98px 0 98px;

        &--title {
            line-height: 105%;
            letter-spacing: -7%;
            font-size: 76px;
        }
    }
}
</style>