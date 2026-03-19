<template>
    <section class="intro">
        <p class="intro-text" data-aos="fade-up">Your hair loss is unique. Your prescription should be too.</p>
        <p class="intro-body" data-aos="fade-up" data-aos-delay="100">
            Hair loss can stem from genetics, shifting hormones, autoimmune conditions, nutritional gaps, or everyday
            stress. Whether you're noticing a widening part, a receding hairline, or overall thinning, your prescriber
            may recommend a customized compounded preparation — tailored to the exact dose, combination, and delivery
            form your individual situation calls for.
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
    font-family: "SpeziaBookB";
    font-size: clamp(26px, 3vw, 42px);
    line-height: 1.35;
    color: var(--dls-color-burgundy);
    max-width: 900px;
    font-weight: 400;
}

.intro-body {
    margin-top: 32px;
    font-size: 17px;
    line-height: 1.75;
    max-width: 820px;
    font-weight: 300;
    color: var(--dls-color-burgundy);
}

.divider {
    margin-top: 80px;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .intro {
        padding: 64px 24px;
    }
}
</style>