<template>
    <div class="home-facility--wrapper" data-aos="fade-up" data-aos-delay="500">
        <div class="home-facility">
            <div class="home-facility--title">
                <img @click="scrollLeft" class="left-btn" src="@/assets/images/facility/left-btn.svg" alt="left-btn">
                <h1 class="name">Our Facility</h1>
                <img @click="scrollRight" class="right-btn" src="@/assets/images/facility/right-btn.svg" alt="right-btn">
            </div>

            <div class="home-facility--content">
                <div class="slider" id="scrollable">
                    <div class="slider--blocks">
                        <div class="slider--blocks--item">
                            <img class="facility-1" src="/images/facility/facility-1.png" alt="facility">
                            <img class="facility-2" src="/images/facility/facility-2.png" alt="facility">
                        </div>

                        <div class="slider--blocks--item">
                            <img class="facility-1" src="/images/facility/facility-1.png" alt="facility">
                            <img class="facility-2" src="/images/facility/facility-2.png" alt="facility">
                        </div>

                        <div class="slider--blocks--item">
                            <img class="facility-1" src="/images/facility/facility-1.png" alt="facility">
                            <img class="facility-2" src="/images/facility/facility-2.png" alt="facility">
                        </div>

                        <div class="slider--blocks--item">
                            <img class="facility-1" src="/images/facility/facility-1.png" alt="facility">
                            <img class="facility-2" src="/images/facility/facility-2.png" alt="facility">
                        </div>

                        <div class="slider--blocks--item cheat-item"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const scrollLeft = () => {
    const scrollContainer: any = document.getElementById('scrollable')

    if (scrollContainer) {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' })
    }

}

const scrollRight = () => {
    const scrollContainer: any = document.getElementById('scrollable')

    if (scrollContainer) {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' })
    }
}
</script>

<style lang="scss" scoped>
.home-facility--wrapper {
    width: 100%;
    max-width: var(--dls-max-width);
    margin: 0 auto;

    .home-facility {
        width: 100%;
        padding: 64px 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;

        &--title {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 32px;

            .left-btn, .right-btn {
                cursor: pointer;
            }
        }

        &--content {
            width: 100%;

            .slider {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                align-self: stretch;
                overflow-x: auto;
                scroll-behavior: smooth;
                width: calc(100vw - ((100vw - 100%) / 2));

                &::-webkit-scrollbar {
                    display: none; /* Hide scrollbar */
                }

                &--blocks {
                    display: flex;
                    align-items: flex-start;
                    gap: 150px;

                    &--item {
                        width: 700px;
                        height: 600px;
                        position: relative;

                        &.cheat-item {
                            width: 560px;
                        }

                        .facility-1 {
                            height: 70%;
                            width: auto;
                            position: absolute;
                            top: 0;
                            right: 0;
                        }

                        .facility-2 {
                            height: 70%;
                            width: auto;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .home-facility {
            padding: 32px 100px;

            &--title {
                gap: 24px;
            }

            &--content {
                .slider {
                    &--blocks {
                        gap: 100px;
                        
                        &--item {
                            width: 600px;
                            height: 500px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .home-facility {
            padding: 32px 50px;

            &--title {
                gap: 16px;
            }

            &--content {
                .slider {
                    &--blocks {
                        gap: 50px;
                        
                        &--item {
                            width: 450px;
                            height: 400px;

                            &.cheat-item {
                                width: 300px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 425px) {
        .home-facility {
            &--title {
                .name {
                    font-size: 28px;
                }
            }
        }
    }
}
</style>