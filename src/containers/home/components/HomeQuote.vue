<template>
    <div class="home-quote">
        <div class="home-quote--title headline-1">Artisan Pharmacy was built for women. Empowering you to reclaim vitality, extend your healthspan, and age beautifully, with formulations as individuals as you are.</div>
        <div class="book-consultation-btn-v2">BOOK CONSULTATION</div>
        <div>
            <hr />
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
    .home-quote {
        width: 100%;
        padding: 64px 32px 0 32px;
        display: flex;
        flex-direction: column;
        gap: 32px;

        @media (max-width: 1440px) {
            &--title {
                font-size: 60px;
                line-height: 120%;
            }
        }

        @media (max-width: 1024px) {
            padding: 32px 32px 0 32px;

            &--title {
                font-size: 45px;
                letter-spacing: -3px;
            }
        }

        @media (max-width: 768px) {
            &--title {
                font-size: 24px;
                letter-spacing: -2px;
            }
        }
    }
</style>