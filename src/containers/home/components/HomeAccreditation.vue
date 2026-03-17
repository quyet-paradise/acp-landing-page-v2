<template>
    <div class="home-accreditation" data-aos="fade-up" data-aos-delay="500">
        <h1 class="home-accreditation--title">Proud Member Of</h1>
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
    padding: 32px 32px 120px 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: var(--dls-max-width);
    margin: 0 auto;

    &--title {
        text-align: center;
    }

    &--imgs {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 64px;

        .pcca, .apc, .ldn {
            height: 150px;
            width: auto;
        }
    }

    @media (max-width: 1024px) {
        &--imgs {
            .pcca, .apc, .ldn {
                height: 100px;
            }
        }
    }

    @media (max-width: 425px) {
        &--title {
            font-size: 28px;
        }
    }
}
</style>