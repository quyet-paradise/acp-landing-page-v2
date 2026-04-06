<template>
    <div class="home-comment--wrapper" data-aos="fade-up" data-aos-delay="200">
        <div class="home-comment">
            <div class="home-comment--top">
                <div class="title">WHAT CLIENTS ARE SAYING:</div>
                <div class="book-consultation-btn">CONTACT US</div>
            </div>

            <div class="home-comment--content" data-aos="fade-down">
                <div class="content">{{ currentComment.content }}</div>
                <div class="name">{{ currentComment.name }}</div>

                <div class="btns">
                    <img @click="onPrevBtn" class="prev-btn" src="@/assets/images/comment/prev-btn.svg" alt="prev">
                    <img @click="onNextBtn" class="next-btn" src="@/assets/images/comment/next-btn.svg" alt="next">
                </div>
            </div>

            <div class="divider"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type Comment = {
    id: number,
    content: string,
    name: string
}

const comments: Comment[]  = [
    {
        id: 0,
        content: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.”',
        name: 'CLIENT NAME HERE 1'
    },
    {
        id: 1,
        content: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.”',
        name: 'CLIENT NAME HERE 2'
    },
    {
        id: 2,
        content: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.”',
        name: 'CLIENT NAME HERE 3'
    }
]

const currentComment = ref<Comment>(comments[0])

const onPrevBtn = () => {
    if (currentComment.value?.id === 0) {
        currentComment.value = comments[comments.length - 1]
    } else {
        currentComment.value = comments[currentComment.value?.id - 1]
    }
}

const onNextBtn = () => {
    if (currentComment.value?.id === comments.length - 1) {
        currentComment.value = comments[0]
    } else {
        currentComment.value = comments[currentComment.value?.id + 1]
    }
}
</script>

<style lang="scss" scoped>
.home-comment--wrapper {
    width: 100%;
    padding: 0 32px;
    max-width: var(--dls-max-width);
    margin: 0 auto;

    .home-comment {
        width: 100%;
        background: var(--dls-color-orangebrown);
        border-radius: 30px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 48px;

        &--top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid var(--dls-color-sunlight);
            border-bottom: 1px solid var(--dls-color-sunlight);
            padding: 12px 0;

            .title {
                font-family: var(--dls-font-jost);
                font-weight: 400;
                font-size: 19px;
                color: var(--dls-color-sunlight);
                line-height: 105%;
            }
        }

        &--content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 32px;

            .content {
                max-width: 860px;
                text-align: center;
                color: var(--dls-color-sunlight);
                font-family: var(--dls-font-spezia-book-b);
                font-size: 48px;
                line-height: 120%;
                letter-spacing: -3px;
            }

            .name {
                font-family: var(--dls-font-jost);
                font-weight: 400;
                font-size: 24px;
                color: var(--dls-color-sunlight);
                line-height: 145%;
                letter-spacing: -0.5%;
            }

            .btns {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 16px;

                .prev-btn, .next-btn {
                    cursor: pointer;
                }
            }
        }

        .divider {
            background: var(--dls-color-sunlight);
        }
    }

    @media (max-width: 768px) {
        .home-comment {
            padding: 32px;
            gap: 32px;

            &--top {
                .title {
                    font-size: 16px;
                }

                .book-consultation-btn {
                    display: none;
                }
            }

            &--content {
                gap: 24px;

                .content {
                    font-size: 28px;
                    line-height: 120%;
                    letter-spacing: -1.5px;
                }

                .name {
                    font-size: 16px;
                }
            }
        }
    }

    @media (max-width: 425px) {
        .home-comment {
            &--content {
                .content {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>