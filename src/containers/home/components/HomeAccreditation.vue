<template>
    <div class="home-accreditation">
        <div class="home-accreditation--title headline-1">Accreditation</div>
        <div class="home-accreditation--imgs">
            <img class="pcca" src="/images/accreditation/pcca.png" alt="pcca">
            <img class="apc" src="/images/accreditation/apc.png" alt="apc">
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

        .pcca {
            height: 135px;
            width: auto;
        }

        .apc {
            height: 165px;
            width: auto;
        }
    }
}
</style>