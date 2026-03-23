<template>
    <section class="hero">
        <img class="hero-image" src="/images/services/hero-image/dermatology.jpg" alt="hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="breadcrumb"><a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Dermatology
            </div>
            <h1>Dermatology Compounding</h1>
            <p class="hero-subtitle">Individually compounded preparations matched to your diagnosis, your skin type, and
                your tolerance — dispensed in elegant, soft-luxury apothecary packaging.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
    position: relative;
    height: 70vh;
    min-height: 520px;
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
    background: linear-gradient(180deg, rgba(0, 0, 0, .05) 0%, rgba(0, 0, 0, .45) 100%);
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
    font-family: "SpeziaBookB";
    font-size: clamp(40px, 5vw, 68px);
    font-weight: 400;
    line-height: 1.08;
    max-width: 700px;
    color: var(--dls-color-sunshine);
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