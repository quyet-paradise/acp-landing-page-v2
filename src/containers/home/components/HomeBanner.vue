<template>
    <div class="home-banner">
        <div class="home-banner--img">
            <img class="banner banner1" src="/images/home-banner/banner1.png" alt="banner">
            <img class="banner banner2" src="/images/home-banner/banner2.png" alt="banner">
        </div>

        <div class="home-banner--info">
            <div class="home-banner--info--title">
                <div class="title headline-1">Personalized <br /> Medicine. <br /> Ageless Beauty.</div>
                <div class="learnmore-btn">LEARN MORE</div>
            </div>

            <img class="home-banner--info--logo" src="/images/home-banner/logo.png" alt="logo">
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home-banner {
    width: 100%;
    height: 100%;
    position: relative;

    &--info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &--title {
            position: absolute;
            top: 64px;
            left: 64px;

            .title {
                color: var(--dls-color-sunlight);
                line-height: 100%;
            }

            .learnmore-btn {
                color: var(--dls-color-sunlight);
                text-decoration: underline;
                text-underline-offset: 5px;
                font-weight: 500;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 2%;
                width: fit-content;
                cursor: pointer;
                margin-top: 36px;
            }
        }

        &--logo {
            position: absolute;
            bottom: 36px;
            left: 50%;
            height: 298px;
            width: auto;
            transform: translate(-50%, 0);
        }
    }

    &--img {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 0;

        .banner {
            width: 50%;
        }
    }
}
</style>