<template>
    <div class="home-services--wrapper" data-aos="fade-up" data-aos-delay="200">
        <div class="home-services">
            <div class="home-services--left">
                <img v-if="currentService" class="image" :src="currentService?.img" alt="img">
                <div v-if="currentService" class="desc">{{ currentService?.desc }}</div>
                <div v-if="currentService" class="learnmore-btn" @click="goToPage(currentService?.route)">LEARN MORE</div>
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
import hrt from '@/assets/images/services/icons/hrt.png'
import ldn from '@/assets/images/services/icons/ldn.png'
import sexual from '@/assets/images/services/icons/sexual.png'
import weightLoss from '@/assets/images/services/icons/weight-loss.png'
import hairGrowth from '@/assets/images/services/icons/hair-growth.png'
import dermatology from '@/assets/images/services/icons/dermatology.png'
import pediatrics from '@/assets/images/services/icons/pediatrics.png'
import veterinary from '@/assets/images/services/icons/veterinary.png'
import { ref } from 'vue'
import { goToPage } from '@/utils/common-utils'
import { ROUTE_NAME } from '@/constants/route-constants'

type Service = {
    id: number,
    name: string,
    img: string,
    desc: string,
    route: string
}

const services: Service[] = [
    {
        id: 0,
        name: 'Hormone Replacement Therapy',
        img: hrt,
        desc: 'Help restore hormonal balance to reignite energy, lift mood, sharpen focus, deepen sleep, and revive sexual vitality, so you can be yourself again.',
        route: ROUTE_NAME.HORMONE_REPLACEMENT_THERAPY_SERVICE
    },
    {
        id: 1,
        name: 'Low-Dose Naltrexone (LDN)',
        img: ldn,
        desc: 'Gently supports your immune system, calms inflammation, and helps you feel clearer and more resilient day to day.',
        route: ROUTE_NAME.LOW_DOSE_NALTREXONE_SERVICE
    },
    {
        id: 2,
        name: 'Sexual Health for Men & Women',
        img: sexual,
        desc: 'Help men and women boost desire, performance, comfort, and confidence - so intimacy feels natural, enjoyable, and truly you again.',
        route: ROUTE_NAME.SEXUAL_HEALTH_SERVICE
    },
    {
        id: 3,
        name: 'Weight Loss',
        img: weightLoss,
        desc: 'Help you lose weight steadily by quieting cravings, boosting metabolism, and giving you more energy.',
        route: ROUTE_NAME.WEIGHT_LOSS_SERVICE
    },
    {
        id: 4,
        name: 'Hair Growth',
        img: hairGrowth,
        desc: 'Help bring back thicker, fuller hair - so you love what you see in the mirror.',
        route: ROUTE_NAME.HAIR_GROWTH_SERVICE
    },
    {
        id: 5,
        name: 'Dermatology',
        img: dermatology,
        desc: 'Target your skin’s root issues - acne, dark spots, rosacea, aging, and scars - so your skin looks radiant, glowing and visibly renewed.',
        route: ROUTE_NAME.DERMATOLOGY_SERVICE
    },
    {
        id: 6,
        name: 'Pediatrics',
        img: pediatrics,
        desc: 'We take off the hard work for you by making medicine easier for kids - right dose, kid-friendly flavor, and gentler options.',
        route: ROUTE_NAME.PEDIATRICS_SERVICE
    },
    {
        id: 7,
        name: 'Veterinary',
        img: veterinary,
        desc: 'Makes meds easier for your furry best friend with pet-safe doses in yummy, easy-to-give flavors.',
        route: ROUTE_NAME.VETERINARY_SERVICE
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
    padding: var(--dls-2cm) 32px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    height: 100%;
    overflow: hidden;

    .home-services {
        width: 100%;
        display: flex;
        border-radius: 30px;
        overflow: hidden;
        height: 630px;

        &--left {
            flex: 1 0 50%;
            background: var(--dls-color-sandy);
            padding: 10px 50px;
            display: flex;
            flex-direction: column;
            gap: 32px;
            align-items: center;
            justify-content: center;

            .image {
                width: auto;
                height: 40%;
            }

            .desc {
                line-height: 105%;
                text-align: center;
                font-family: 'SpeziaBookB';
                font-size: 24px;
                color: var(--dls-color-burgundy);
                letter-spacing: -2px;
                min-height: calc(3.15em);
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
            background: var(--dls-color-pottersclay);
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
                justify-content: space-between;
                height: 100%;

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
                        // text-decoration: underline;
                        text-decoration-thickness: 2px;
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .home-services {
            flex-direction: column;
            height: 80vh;

            &--left {
                padding: 16px 64px;
                height: 50%;

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
            }

            &--right {
                padding: 16px 32px;
            }
        }
    }

    @media (max-width: 425px) {}
}
</style>