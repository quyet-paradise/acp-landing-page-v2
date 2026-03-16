<template>
    <div class="home-accreditation">
        <div class="home-accreditation--title headline-1">Proud Member Of</div>
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
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    &--title {
        text-align: center;
    }

    &--imgs {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 32px;

        .pcca, .apc, .ldn {
            height: 135px;
            width: auto;
        }
    }

    @media (max-width: 1024px) {
        &--title {
            font-size: 48px;
        }
    }

    @media (max-width: 768px) {
        &--title {
            font-size: 36px;
        }

        &--imgs {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>