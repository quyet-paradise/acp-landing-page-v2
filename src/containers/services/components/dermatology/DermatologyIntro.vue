<template>
    <section class="intro">
        <p class="intro-text" data-aos="fade-up">Your skin is unique. Your prescription should be too.</p>
        <p class="intro-body" data-aos="fade-up" data-aos-delay="100">
            When your prescriber determines that a customized dermatology preparation is right for you, Artisan
            compounds it to their exact specifications. Working under USP &lt;795&gt;/&lt;800&gt;, we fine-tune active
            ingredients, strengths, bases, and packaging so each prescription matches your diagnosis, skin type, and
            tolerance — in forms and combinations not commercially available.
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