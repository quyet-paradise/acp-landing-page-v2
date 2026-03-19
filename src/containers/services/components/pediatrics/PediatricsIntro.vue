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
    padding: 100px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.intro-text {
    font-family: "SpeziaBookB";
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
    max-width: 820px;
    font-weight: 300;
}

.divider {
    width: 100%;
    height: 1px;
    background: var(--dls-color-border);
    margin-top: 80px;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .intro {
        padding: 64px 24px;
    }
}
</style>