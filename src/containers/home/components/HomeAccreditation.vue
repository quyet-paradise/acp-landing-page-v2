<template>
    <div class="home-accreditation" data-aos="fade-up" data-aos-delay="200">
        <h2 class="home-accreditation--title">Proud Member Of</h2>
        <div class="home-accreditation--imgs">
            <img class="apc" src="/images/accreditation/apc.png" alt="apc">
            <img class="ldn" src="/images/accreditation/ldn.png" alt="ldn">
            <img class="pcca" src="/images/accreditation/pcca.png" alt="pcca">
        </div>
    </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.home-accreditation {
    width: 100%;
    padding: var(--dls-2cm) 32px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: var(--dls-max-width);
    margin: 0 auto;

    &--title {
        text-align: center;
        margin: 0;
    }

    &--imgs {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 64px;

        .pcca, .apc, .ldn {
            height: 72px;
            width: auto;
        }
    }

    @media (max-width: 1024px) {}

    @media (max-width: 425px) {}

    @media (min-width: 1921px) {
        max-width: 100%;
        padding: var(--dls-2cm) 98px;

        &--title {
            font-size: 76px;
            line-height: 105%;
            letter-spacing: -7%;
        }

        &--imgs {
            .pcca, .apc, .ldn {
                height: 135px;
            }
        }
    }
}
</style>