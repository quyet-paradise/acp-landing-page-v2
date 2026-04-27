<template>
    <section class="intro">
        <p class="intro-text" data-aos="fade-up">
            No injections, no sharps, no weekly clinic visits. A personalized compounded preparation — customized to the
            dose, flavor, and form your prescriber orders for your individual needs.
        </p>
        <p class="intro-note" data-aos="fade-up" data-aos-delay="100">*This compounded medication is prepared exclusively for you pursuant to a valid
            prescription.</p>
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
    max-width: 900px;
    margin: 0;
}

.intro-note {
    margin-top: 32px;
    font-style: italic;
    font-size: 14px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
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