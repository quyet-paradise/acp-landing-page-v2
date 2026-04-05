<template>
    <section class="hero">
        <img class="hero-image" src="/images/services/hero-image/weight-loss.jpg" alt=" hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="breadcrumb">
                <a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Weight Loss
            </div>
            <h1>No More Needles. Sublingual Weight Loss Compounding.</h1>
            <p class="hero-subtitle">A custom compounded sublingual formula — prepared to your prescriber's
                specifications and delivered under the tongue, with no injections required.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
    position: relative;
    height: 85vh;
    min-height: 580px;
    max-height: 900px;
    display: flex;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 100%);
}

.hero-content {
    position: absolute;
    bottom: 80px;
    left: 60px;
    right: 60px;
    color: var(--dls-color-creamlight);
    z-index: 2;
}

.breadcrumb {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 24px;
    opacity: 0.8;
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
    opacity: 0.6;
}

.hero h1 {
    font-family: "SpeziaBookB";
    font-size: clamp(42px, 5.5vw, 72px);
    font-weight: 400;
    line-height: 1.08;
    letter-spacing: -0.01em;
    max-width: 700px;
    color: var(--dls-color-pale);
}

.hero-subtitle {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.6;
    max-width: 580px;
    font-weight: 300;
    opacity: 0.9;
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .hero-content {
        left: 24px;
        right: 24px;
        bottom: 48px;
    }
}
</style>