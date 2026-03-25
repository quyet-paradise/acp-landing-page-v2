<template>
    <section class="hero">
        <img class="hero-image" src="/images/services/hero-image/hrt.jpg" alt="hrt">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="breadcrumb"><a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Hormone
                Replacement Therapy</div>
            <h1>Hormone Replacement Therapy</h1>
            <p class="hero-subtitle">Individually compounded hormone preparations — customized to your body, your lab
                results, and your prescriber's plan.</p>
            <p class="hero-subtitle" style="color:var(--dls-color-sunshine);font-weight:400;margin-top:8px;font-size:17px">Don't
                have a prescriber yet? Start with a hormone test. We'll guide you from there.</p>
            <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:36px">
                <a href="#hormone-packages" class="hero-cta">Book a Hormone Consultation<svg viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg></a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
    position: relative;
    height: 80vh;
    min-height: 580px;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .45) 100%);
}

.hero-content {
    position: absolute;
    bottom: 100px;
    left: 60px;
    right: 60px;
    color: var(--dls-color-creamlight);
    z-index: 2;
}

.breadcrumb {
    font-size: 12px;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 24px;
    opacity: .8;
}

.breadcrumb a {
    color: var(--dls-color-creamlight);
    text-decoration: none;
}

.breadcrumb a:hover {
    text-decoration: underline;
}

.breadcrumb span {
    margin: 0 8px;
    opacity: .6;
}

.hero h1 {
    font-family: 'SpeziaBookB';
    font-size: clamp(42px, 5.5vw, 72px);
    font-weight: 400;
    line-height: 1.06;
    max-width: 800px;
    color: var(--dls-color-sunshine);
}

.hero-subtitle {
    margin-top: 28px;
    font-size: 19px;
    line-height: 1.65;
    max-width: 620px;
    font-weight: 300;
    opacity: .92;
}

.hero-cta {
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .hero-content {
        left: 24px;
        right: 24px;
        bottom: 56px;
    }
}
</style>