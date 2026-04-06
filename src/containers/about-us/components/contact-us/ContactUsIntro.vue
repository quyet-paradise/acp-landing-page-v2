<template>
    <section class="intro">
        <div class="intro-inner">
            <div class="intro-headline" data-aos="fade-up">Your health journey begins with a <em>conversation</em>.</div>
            <div class="intro-body" data-aos="fade-up" data-aos-delay="100">
                <p>At Artisan Compounding Pharmacy, every relationship starts with listening. Whether you're exploring
                    hormone therapy, need a pediatric formulation, or want to learn more about personalized compounding
                    — we're here to guide you.</p>
                <p>Reach out by phone, email, or the form below. We will respond within one business day.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.intro {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.intro-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.intro-headline {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(26px, 2.8vw, 40px);
    line-height: 1.35;
    color: var(--dls-color-burgundy);
    font-weight: 400;
}

.intro-headline em {
    font-style: italic;
    color: var(--dls-color-redclay);
}

.intro-body {
    font-size: 17px;
    line-height: 1.8;
    font-weight: 300;
}

.intro-body p+p {
    margin-top: 20px;
}

@media(max-width:1024px) {
    .intro-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}

@media(max-width:768px) {
    .intro {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>