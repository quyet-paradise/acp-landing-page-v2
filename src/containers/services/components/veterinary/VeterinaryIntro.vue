<template>
    <section class="intro">
        <p class="intro-text" data-aos="fade-up">Every pet is unique. Their medicine should be too.</p>
        <p class="intro-body" data-aos="fade-up" data-aos-delay="100">When your cat spits out tablets, your dog rejects bitter liquids, your rabbit
            needs a micro-dose no manufacturer sells, or your horse requires a bulk compounded paste, Artisan can help.
            Working with your veterinarian's prescription, we compound medications into pet-friendly flavors, customized
            strengths, and delivery forms designed to make dosing less stressful for animals and their owners.</p>
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
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>