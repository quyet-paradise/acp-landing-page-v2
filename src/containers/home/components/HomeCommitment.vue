<template>
    <div class="home-commitment--wrapper" data-aos="fade-up" data-aos-delay="200">
        <div class="home-commitment">
            <div class="home-commitment--left" :style="{ backgroundImage: `url(${currentCommitment.bg})` }">
                <img class="img" :src="currentCommitment.img" alt="img">
            </div>

            <div class="home-commitment--right">
                <div class="header">
                    <div class="name">OUR COMMITMENT</div>
                    <div class="title">{{ currentCommitment.title }}</div>
                </div>
                <div class="content">
                    <div class="content--detail">{{ currentCommitment.content }}</div>

                    <div class="book-consultation-btn">CONTACT US</div>
                </div>

                <img @click="handleNext" class="next-btn" src="@/assets/images/facility/right-btn.svg" alt="right-arrow">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import commitment1 from '/images/commitment/img/img-1.png'
import commitment2 from '/images/commitment/img/img-2.png'
import commitment3 from '/images/commitment/img/img-3.png'

type Commitment = {
    id: number,
    title: string,
    bg: string,
    img: string
    content: string
}

const commitments: Commitment[] = [
    {
        id: 0,
        title: 'Relationship-first',
        bg: '/images/commitment/bg/bg-1.png',
        img: commitment1,
        content: 'In a world of 15-minute doctor visits and impersonal chain pharmacies, Artisan offers consultations, follow-ups, and genuine partnership in each patient’s health journey.'
    },
    {
        id: 1,
        title: 'Finest Ingredients',
        bg: '/images/commitment/bg/bg-2.png',
        img: commitment2,
        content: 'We compound exclusively with high-quality ingredients from rigorously vetted suppliers — free from unnecessary fillers, additives, and common allergens including corn, soy, lactose, dairy, casein, dyes, parabens, sulfates, and preservatives.'
    },
    {
        id: 2,
        title: 'Formulated for Your Body',
        bg: '/images/commitment/bg/bg-3.png',
        img: commitment3,
        content: 'The “Artisan” promise. Our name is our brand. Every compound is handcrafted, quality-checked, and tailored to the individual. This isn’t a factory; it’s a workshop.'
    }
]

const currentCommitment = ref<Commitment>(commitments[0])

const handleNext = () => {
    if (currentCommitment.value?.id === commitments.length - 1) {
        currentCommitment.value = commitments[0]
    } else {
        currentCommitment.value = commitments[currentCommitment.value?.id + 1]
    }
}
</script>

<style lang="scss" scoped>
.home-commitment--wrapper {
    width: 100%;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 0 32px;

    .home-commitment {
        width: 100%;
        display: flex;
        height: 70vh;

        &--left {
            flex: 1 0 50%;
            background-color: var(--dls-color-sky);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            overflow: hidden;

            .img {
                position: absolute;
                width: 50%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        &--right {
            flex: 1 0 50%;
            padding: 16px 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;

            .header {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 32px;

                .name {
                    width: 100%;
                    font-family: 'Jost';
                    font-weight: 400;
                    font-size: 19px;
                    line-height: 250%;
                    letter-spacing: -0.5%;
                    color: var(--dls-color-burgundy);
                    border-bottom: 1px solid var(--dls-color-burgundy);
                }

                .title {
                    font-family: 'SpeziaBookB';
                    font-size: 42px;
                    line-height: 105%;
                    letter-spacing: -3px;
                    color: var(--dls-color-burgundy);
                }
            }

            .content {
                display: flex;
                flex-direction: column;
                gap: 32px;

                &--detail {
                    width: 100%;
                    line-height: 105%;
                    font-family: 'SpeziaBookB';
                    font-size: 24px;
                    color: var(--dls-color-burgundy);
                    letter-spacing: -1.5px;
                }
            }

            .next-btn {
                cursor: pointer;
                position: absolute;
                right: 32px;
                top: 50%;
                transform: translate(0, -50%);
            } 
        }
    }

    @media (max-width: 1024px) {
        .home-commitment {
            &--left {
                flex: 1 0 40%;

                .img {
                    width: 70%;
                }
            }

            &--right {
                flex: 1 0 60%;
                padding: 16px;

                .header {
                    gap: 16px;
                }

                .content {
                    gap: 16px;

                    &--detail {
                        font-size: 24px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .home-commitment {
            flex-direction: column-reverse;

            &--left {
                flex: 1 0 60%;

                .img {
                    width: 50%;
                }
            }

            &--right {
                flex: 1 0 40%;
                gap: 16px;

                .header {
                    .title {
                        font-size: 28px;
                    }
                }

                .content { 
                    &--detail {
                        font-size: 18px;
                        letter-spacing: -1px;
                    }
                }

                .next-btn {
                    right: -20px;
                }
            }
        }
    }
}
</style>