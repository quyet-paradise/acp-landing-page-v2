<template>
    <section class="hero">
        <img src="/images/services/hero-image/veterinary.jpg" alt="hero-image" class="hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="breadcrumb"><a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Veterinary
            </div>
            <h1>Veterinary Compounding</h1>
            <p class="hero-subtitle">Pet-friendly flavors, precise strengths, and stress-free delivery forms — because every animal deserves medicine made for them.</p>
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
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(1);
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(61, 30, 16, .08) 0%, rgba(61, 30, 16, .72) 100%);
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
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(38px, 5vw, 64px);
    font-weight: 400;
    line-height: 1.1;
    max-width: 750px;
    color: var(--dls-color-pale);
}

.hero-subtitle {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.6;
    max-width: 620px;
    font-weight: 300;
    opacity: .9;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .hero-content {
        left: 24px;
        right: 24px;
        bottom: 48px;
    }
}
</style>