<template>
    <div class="home-services--wrapper" data-aos="fade-up" data-aos-delay="200">
        <div class="home-services">
            <div class="home-services--left">
                <img v-if="currentService" class="image" :src="currentService?.img" alt="img">
                <div v-if="currentService" class="desc">{{ currentService?.desc }}</div>
                <div v-if="currentService" class="learnmore-btn">LEARN MORE</div>
            </div>
            <div class="home-services--right">
                <img class="bg" src="@/assets/images/services/fountain-path.png" alt="bg">

                <div class="title">EXPLORE OUR SERVICES</div>

                <div class="service-list">
                    <div 
                        v-for="item in services" 
                        :key="item.id" 
                        class="service-list--item"
                        :class="{ 'is-active-item': currentService?.id === item?.id }"
                        @mouseenter="handleEnter(item?.id)"
                        @mouseleave="handleLeave()">
                        {{ item?.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import waterfall from '@/assets/images/services/waterfall.png'
import woman from '@/assets/images/services/woman.png'
import { ref } from 'vue'

type Service = {
    id: number,
    name: string,
    img: string,
    desc: string
}

const services: Service[] = [
    {
        id: 0,
        name: 'Hormone Replacement Therapy',
        img: waterfall,
        desc: 'Help restore hormonal balance to reignite energy, lift mood, sharpen focus, deepen sleep, and revive sexual vitality, so you can be yourself again.'
    },
    {
        id: 1,
        name: 'Low-Dose Naltrexone (LDN)',
        img: waterfall,
        desc: 'Gently supports your immune system, calms inflammation, and helps you feel clearer and more resilient day to day.'
    },
    {
        id: 2,
        name: 'Sexual Health for Men & Women',
        img: woman,
        desc: 'Help men and women boost desire, performance, comfort, and confidence - so intimacy feels natural, enjoyable, and truly you again.'
    },
    {
        id: 3,
        name: 'Weight Loss',
        img: waterfall,
        desc: 'Help you lose weight steadily by quieting cravings, boosting metabolism, and giving you more energy.'
    },
    {
        id: 4,
        name: 'Hair Growth',
        img: waterfall,
        desc: 'Help bring back thicker, fuller hair - so you love what you see in the mirror.'
    },
    {
        id: 5,
        name: 'Dermatology',
        img: waterfall,
        desc: 'Target your skin’s root issues - acne, dark spots, rosacea, aging, and scars - so your skin looks radiant, glowing and visibly renewed.'
    },
    {
        id: 6,
        name: 'Pediatrics',
        img: waterfall,
        desc: 'We take off the hard work for you by making medicine easier for kids - right dose, kid-friendly flavor, and gentler options.'
    },
    {
        id: 7,
        name: 'Veterinary',
        img: waterfall,
        desc: 'Makes meds easier for your furry best friend with pet-safe doses in yummy, easy-to-give flavors.'
    }
]

const currentService = ref<Service | null>(services[0])

const handleEnter = (id: number) => {
    currentService.value = services[id]
}
const handleLeave = () => {
    //todo
} 
</script>

<style lang="scss" scoped>
.home-services--wrapper {
    width: 100%;
    padding: 64px 32px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    height: 70vh;
    overflow: hidden;

    .home-services {
        width: 100%;
        display: flex;
        border-radius: 30px;
        overflow: hidden;
        height: 100%;

        &--left {
            flex: 1 0 50%;
            background: var(--dls-color-c8a682);
            padding: 10px 50px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;
            justify-content: center;

            .image {
                width: 40%;
                height: auto;
            }

            .desc {
                line-height: 105%;
                text-align: center;
                font-family: 'SpeziaBookB';
                font-size: 24px;
                color: var(--dls-color-burgundy);
                letter-spacing: -2px;
            }

            .learnmore-btn {
                font-family: 'Jost';
                font-size: 19px;
                color: var(--dls-color-burgundy);
                font-weight: 500;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &--right {
            flex: 1 0 50%; 
            position: relative;
            overflow: hidden;
            background: var(--dls-color-95583c);
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 32px 48px;

            .bg {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, 0);
                width: 80%;
                z-index: 0;
                height: 100%;
            }

            .title {
                font-family: 'Jost';
                font-weight: 400;
                line-height: 250%;
                letter-spacing: -0.5%;
                font-size: 19px;
                color: var(--dls-color-sunlight);

                border-bottom: 1px solid var(--dls-color-sunlight);
                z-index: 1;
                position: relative;
            }

            .service-list {
                z-index: 1;
                display: flex;
                flex-direction: column;
                gap: 16px;

                &--item {
                    font-family: 'SpeziaBookB';
                    font-size: 27px;
                    font-weight: 400;
                    line-height: 120%;
                    letter-spacing: -7%;
                    color: var(--dls-color-sunlight);
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                        text-decoration-thickness: 2px;
                    }

                    &.is-active-item {
                        text-decoration: underline;
                        text-decoration-thickness: 2px;
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        height: 90vh;

        .home-services {
            flex-direction: column;

            &--left {
                padding: 16px 64px;
                height: 50%;

                .image {
                    width: 25%;
                }

                .desc {
                    font-size: 20px;
                    letter-spacing: -1.5px;
                }

                .learnmore-btn {
                    font-size: 16px;
                }
            }

            &--right {
                gap: 16px;
                padding: 16px 64px;
                height: 50%;

                .title {
                    font-size: 16px;
                    line-height: 150%;
                }

                .service-list {
                    &--item {
                        font-size: 16px;
                    }
                }

                .bg { 
                    height: auto;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .home-services {
            &--left {
                padding: 16px 32px;

                .image {
                    width: 30%;
                }
            }

            &--right {
                padding: 16px 32px;
            }
        }
    }

    @media (max-width: 425px) {
        .home-services {
            &--left {
                .image {
                    width: 40%;
                }
            }
        }
    }
}
</style>