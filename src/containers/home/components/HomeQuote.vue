<template>
    <div class="home-quote" data-aos="fade-up" data-aos-delay="200">
        <h2 class="home-quote--title">Artisan Pharmacy was built for women. Empowering you to reclaim vitality, extend your healthspan, and age beautifully, with formulations as individuals as you are.</h2>
        <div class="book-consultation-btn mt-32px">CONTACT US</div>
        <div class="divider"></div>
    </div>
</template>

<script lang="ts" setup></script>

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
    }
</style>