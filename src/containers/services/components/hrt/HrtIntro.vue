<template>
    <section class="intro">
        <div class="intro-inner">
            <div>
                <p class="intro-text" data-aos="fade-up" data-aos-delay="100">Your hormones are as individual as you are. Your prescription should be too.</p>
            </div>
            <div class="intro-body" data-aos="fade-up" data-aos-delay="100">
                <p>Your body runs on chemical messengers called hormones. When those messengers drop too low or get out
                    of balance, you may experience changes in how you feel day to day.</p>
                <p>Hormone replacement therapy (HRT) uses plant-derived ingredients (from wild yam or soy) that are
                    structurally identical to the hormones your body naturally produces. Working with your prescriber,
                    our pharmacists compound each preparation to the exact dose, combination, and delivery form your
                    individual lab results and symptoms call for — something commercially manufactured products cannot
                    offer.</p>
            </div>
        </div>
        <div class="divider"></div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.intro {
    padding: 0 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.intro-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.intro-text {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(26px, 2.8vw, 40px);
    line-height: 1.35;
    color: var(--dls-color-burgundy);
    font-weight: 400;
    letter-spacing: -2px;
}

.intro-body {
    font-size: 17px;
    line-height: 1.8;
    font-weight: 300;
    color: var(--dls-color-burgundy);
}

.intro-body p+p {
    margin-top: 20px;
}

.divider {
    margin-top: var(--dls-1p5cm);
}

@media(max-width:1024px) {
    .intro-inner {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media(max-width:768px) {
    .intro {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>