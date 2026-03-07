<template>
    <div class="home-commitment--wrapper">
        <div class="home-commitment">
            <div class="home-commitment--left" :style="{ backgroundImage: `url(${currentCommitment.bg})` }">
                <img class="img" :src="currentCommitment.img" alt="img">
            </div>

            <div class="home-commitment--right">
                <div class="header">
                    <div class="name">OUR COMMITTMENT</div>
                    <div class="title">{{ currentCommitment.title }}</div>
                </div>
                <div class="content">
                    <div class="content--detail headline-3">{{ currentCommitment.content }}</div>

                    <div class="book-consultation-btn-v2">BOOK CONSULTATION</div>
                </div>

                <img @click="handleNext" class="next-btn" src="@/assets/images/commitment/right-arrow.svg" alt="right-arrow">
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
        title: 'Finest Ingredients For You',
        bg: '/images/commitment/bg/bg-1.png',
        img: commitment1,
        content: 'We compound with high-quality traceable ingredients from rigorously evaluated manufacturers. Expect complete transparency about ingredients, pricing, and independent third-party testing.'
    },
    {
        id: 1,
        title: 'Unhurried, Pharmacist-Led Care',
        bg: '/images/commitment/bg/bg-2.png',
        img: commitment2,
        content: 'You set the pace. We make time for you. Our pharmacists walk you through the details of your customized wellness plan. We’ll answer your every question, follow up, no rushed appointments, ever.'
    },
    {
        id: 2,
        title: 'Formulated For Your Body',
        bg: '/images/commitment/bg/bg-3.png',
        img: commitment3,
        content: 'Your care plan is crafted hand-in-hand with your physician and dosed to best fit your wellness needs. We make hard-to-find medications easy.'
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

    .home-commitment {
        width: 100%;
        display: flex;
        min-height: 1200px;

        &--left {
            flex: 1 0 50%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            overflow: hidden;

            .img {
                position: absolute;
                width: 70%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }

        &--right {
            flex: 1 0 50%;
            padding: 32px;
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
                    font-size: 16px;
                    line-height: 250%;
                    letter-spacing: -0.5%;
                    color: var(--dls-color-burgundy);
                    border-bottom: 1px solid var(--dls-color-burgundy);
                }

                .title {
                    font-family: 'SpeziaBookB';
                    font-size: 60px;
                    line-height: 105%;
                    letter-spacing: -7%;
                    color: var(--dls-color-burgundy);
                }
            }

            .content {
                display: flex;
                flex-direction: column;
                gap: 32px;

                &--detail {
                    width: 100%;
                    max-width: 680px;
                    line-height: 105%;
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
}
</style>