<template>
    <div class="home-quote">
        <div class="home-quote--title headline-1">Artisan empowers women to hold <br /> longevity in their own hands, <br /> preserving youthful vitality, <br /> endurance, and time.</div>
        <div class="book-consultation-btn">BOOK CONSULTATION</div>
        <div>
            <hr />
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
    .home-quote {
        width: 100%;
        padding: 64px 32px 0 32px;
        display: flex;
        flex-direction: column;
        gap: 32px;

        .book-consultation-btn {
            color: var(--dls-color-burgundy);
            border-radius: 4px;
            padding: 12px 16px;
            cursor: pointer;
            border: 1px solid var(--dls-color-burgundy);
            background: var(--dls-color-faf8de);
            width: fit-content;
            transition: all .3s ease;

            &:hover {
                background: var(--dls-color-sunlight);
                border: 1px solid var(--dls-color-sunlight);
            }
        }
    }
</style>