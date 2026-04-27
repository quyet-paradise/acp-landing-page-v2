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
    padding: var(--dls-2cm) 60px 0 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.intro-text {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
    max-width: 920px;
    margin: 0;
}

.intro-body {
    margin-top: 32px;
    font-size: 24px;
    line-height: 108%;
    letter-spacing: 0;
    max-width: 800px;
    font-weight: 300;
    color: var(--dls-color-burgundy);
}

.divider {
    margin-top: var(--dls-1p5cm);
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .intro {
        padding: 64px 24px;
    }
}
</style>