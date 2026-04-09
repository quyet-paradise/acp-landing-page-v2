<template>
    <div class="home-banner" data-aos="zoom-in">
        <div class="home-banner--img">
            <img class="banner banner-1" src="/images/home-banner/banner1.png" alt="banner-1">
            <img class="banner banner-2" src="/images/home-banner/banner2.png" alt="banner-2">
        </div>

        <div class="home-banner--info">
            <div class="home-banner--info--title">
                <h1 class="title">Personalized <br /> Medicine. <br /> Ageless Beauty.</h1>
                <!-- <div class="learnmore-btn">LEARN MORE</div> -->
            </div>

            <img id="logoScaling" class="home-banner--info--logo" src="/images/home-banner/logo.png" alt="logo">
        </div>

        <div class="home-banner--overlay"></div>
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
        z-index: 2;

        &--title {
            position: absolute;
            top: 64px;
            left: 64px;

            .title {
                color: var(--dls-color-pale);
                margin: 0;
            }

            .learnmore-btn {
                color: var(--dls-color-sunlight);
                text-decoration: underline;
                text-underline-offset: 5px;
                font-weight: 500;
                font-size: 19px;
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
            transform: translateX(-50%);
            scale: 1;
            opacity: 1;
            
            animation: fade-out-logo linear forwards;
            animation-timeline: view();
        }
    }

    &--img {
        width: 100%;
        height: calc(100vh - var(--dls-aux-header-height));
        display: flex;
        gap: 0;

        .banner {
            flex: 1 0 50%;
            width: 50%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    }

    &--overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .45) 100%);
    }

    @keyframes fade-out-logo {
        30% { opacity: 1; left: 50%; bottom: 36px; scale: 1; }
        100% { opacity: 0; left: -25%; bottom: -150px; scale: 0; }
    }

    @media (max-width: 1024px) {
        &--info {
            &--logo {
                height: 200px;
            }
        }
    }

    @media (max-width: 768px) {
        &--info {
            &--title {
                left: 32px;
            }

            &--logo {
                height: 105px;
            }
        }

        &--img {
            .banner {
                flex: 1 0 100%;
                width: 100%;

                &.banner-1 {
                    display: none;
                }
            }
        }
    }

    @media (min-width: 1921px) {
        &--info {
            &--title {
                top: 98px;
                left: 98px;
            
                .title {
                    font-size: 76px;
                    line-height: 105%;
                    letter-spacing: -7%;
                }
            }
        }
    }
}
</style>