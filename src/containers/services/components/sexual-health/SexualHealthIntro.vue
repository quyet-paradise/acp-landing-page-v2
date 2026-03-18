<template>
    <section class="intro">
        <p class="intro-text" data-aos="fade-up">
            Intimacy is more than a moment — it's a pillar of overall wellness.
        </p>
        <p class="intro-body" data-aos="fade-up" data-aos-delay="100">
            When hormones, circulation, or other factors are involved, your prescriber may determine that a customized
            compounded preparation is appropriate. Our pharmacists work with your prescriber to compound the exact dose,
            combination, and delivery form ordered — in formulations not available from commercial manufacturers.
        </p>
        <div class="divider"></div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.intro {
    padding: 100px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.intro-text {
    font-family: 'SpeziaBookB';
    font-size: clamp(26px, 3vw, 42px);
    line-height: 1.35;
    color: var(--dls-color-burgundy);
    max-width: 920px;
    font-weight: 400;
}

.intro-body {
    margin-top: 32px;
    font-size: 17px;
    line-height: 1.75;
    max-width: 800px;
    font-weight: 300;
    color: var(--dls-color-burgundy);
}

.divider {
    margin-top: 80px;
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .intro {
        padding: 64px 24px;
    }
}
</style>