<template>
    <div class="aux-header">
        <div class="aux-header--item link">PATIENT LOGIN</div>
        <div class="aux-header--item">|</div>
        <div class="aux-header--item link">PROVIDER LOGIN</div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.aux-header {
    width: 100%;
    padding: 24px 64px;
    display: flex;
    justify-content: flex-end;
    background: var(--dls-color-sunlight);
    align-items: center;
    gap: 8px;

    &--item {
        font-family: 'Jost';
        font-weight: 400;
        font-size: 16px;
        line-height: 145%;
        letter-spacing: -0.5%;
        color: var(--dls-color-burgundy);

        &.link {
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>