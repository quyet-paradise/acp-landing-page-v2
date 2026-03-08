<template>
    <div class="home-banner">
        <div class="home-banner--img">
            <div class="banner banner-1"></div>
            <div class="banner banner-2"></div>
        </div>

        <div class="home-banner--info">
            <div class="home-banner--info--title">
                <div class="title headline-1">Personalized <br /> Medicine. <br /> Ageless Beauty.</div>
                <div class="learnmore-btn">LEARN MORE</div>
            </div>

            <img id="logoScaling" class="home-banner--info--logo" src="/images/home-banner/logo.png" alt="logo">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const scrollPosition = ref<number>(0)

const handleScroll = () => {
    scrollPosition.value = window.scrollY || window.pageYOffset
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

watch(scrollPosition, (newValue) => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const logoScaling = document.getElementById('logoScaling')

    if (width < 1024) return
    
    if (logoScaling) {
        // React to the scroll position changes
        if (newValue >= 100 && newValue < 200) {
            logoScaling.style.height = '270px'
            logoScaling.style.left = '45%'
            logoScaling.style.bottom = '60px'
        } else if (newValue >= 200 && newValue < 300) {
            logoScaling.style.height = '240px'
            logoScaling.style.left = '40%'
            logoScaling.style.bottom = '75px'
        } else if (newValue >= 300 && newValue < 400) {
            logoScaling.style.height = '210px'
            logoScaling.style.left = '35%'
            logoScaling.style.bottom = '90px'
        } else if (newValue >= 400 && newValue < 500) {
            logoScaling.style.height = '180px'
            logoScaling.style.left = '30%'
            logoScaling.style.bottom = '105px'
        } else if (newValue >= 500 && newValue < 600) {
            logoScaling.style.height = '150px'
            logoScaling.style.left = '25%'
            logoScaling.style.bottom = '120px'
        } else if (newValue >= 600 && newValue < 700) {
            logoScaling.style.height = '120px'
            logoScaling.style.left = '20%'
            logoScaling.style.bottom = '135px'
        } else if (newValue >= 700 && newValue < 800) {
            logoScaling.style.height = '90px'
            logoScaling.style.left = '15%'
            logoScaling.style.bottom = '150px'
        } else if (newValue >= 800 && newValue < 1200) {
            logoScaling.style.height = '60px'
            logoScaling.style.left = '10%'
            logoScaling.style.bottom = '165px'
        } else {
            logoScaling.style.height = '298px'
            logoScaling.style.left = '50%'
            logoScaling.style.bottom = '36px'
        }
    }
})
</script>

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
            flex: 1 0 50%;
            height: 90vh;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            &.banner-1 {
                background-image: url('/images/home-banner/banner1.png');
            }

            &.banner-2 {
                background-image: url('/images/home-banner/banner2.png');
            }
        }
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

                .title {
                    font-size: 45px;
                }

                .learnmore-btn {
                    font-size: 15px;
                    margin-top: 24px;
                }
            }

            &--logo {
                height: 105px;
            }
        }

        &--img {
            .banner {
                flex: 1 0 100%;
                height: 700px;

                &.banner-1 {
                    display: none;
                }
            }
        }
    }
}
</style>