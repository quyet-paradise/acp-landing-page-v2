<template>
    <section class="intro">
        <p class="intro-text" data-aos="fade-up">
            Small dose. Customized for you.
        </p>
        <p class="intro-body" data-aos="fade-up" data-aos-delay="100">
            Naltrexone was first approved in 50 mg tablets to block opioids. At just 0.5–6 mg — about one-tenth the
            original amount — low-dose naltrexone (LDN) is prescribed "off label" by healthcare providers for a variety
            of individual patient needs. Because LDN is not commercially available in low-dose forms, compounding allows
            your prescriber to order the exact strength and delivery form suited to your situation.
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
    font-family: 'SpeziaBookB';
    font-size: clamp(26px, 3vw, 42px);
    line-height: 1.35;
    color: var(--dls-color-burgundy);
    max-width: 900px;
    font-weight: 400;
    margin: 0;
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
    margin-top: var(--dls-1p5cm);
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .intro {
        padding: 64px 24px;
    }
}
</style>