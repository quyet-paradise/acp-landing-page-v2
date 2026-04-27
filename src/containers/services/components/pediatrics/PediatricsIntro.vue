<template>
    <section class="intro">
        <p class="intro-text" data-aos="fade-up">Turning dose-time battles into easy victories.</p>
        <p class="intro-body" data-aos="fade-up" data-aos-delay="100">
            Swallowing a bitter pill or refusing to take medicine isn't the only hurdle parents face. Dyes that trigger sensitivities, chalky tablets cut into crumbs — all of these can stand between a child and the care they need. Our pharmacists work with your child's prescriber to compound each preparation in the exact dose, flavor, and form ordered — customized to your child's individual needs.
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
    max-width: 950px;
    margin: 0;
}

.intro-body {
    margin-top: 32px;
    font-size: 24px;
    line-height: 108%;
    letter-spacing: 0;
    max-width: 820px;
    font-weight: 300;
    color: var(--dls-color-burgundy);
}

.divider {
    margin-top: var(--dls-1p5cm);
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .intro {
        padding: 64px 24px;
    }
}
</style>