<template>
    <section class="hero">
        <img src="/images/services/hero-image/hrt.jpg" alt="Woman applying heart-shaped lotion on skin"
            class="hero-image" style="object-position:center 20%">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="breadcrumb"><a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Hormone
                Replacement Therapy</div>
            <h1>Hormone Replacement Therapy</h1>
            <p class="hero-subtitle">Individually compounded hormone preparations — customized to your body, your lab
                results, and your prescriber's plan.</p>
            <a href="#" class="hero-cta">Book Consultation<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg></a>
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
    color: var(--dls-color-pale);
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
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 36px;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    padding: 18px 40px;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 60px;
    transition: transform .3s, box-shadow .3s;
}

.hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .25);
}

.hero-cta svg {
    width: 16px;
    height: 16px;
    transition: transform .3s;
}

.hero-cta:hover svg {
    transform: translateX(4px);
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