<template>
    <section class="hero">
        <img class="hero-image" src="/images/services/hero-image/ldn.jpg" alt="hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="breadcrumb">
                <a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Low-Dose Naltrexone
            </div>
            <h1>Low-Dose Naltrexone (LDN)</h1>
            <p class="hero-subtitle">A compounded low-dose preparation — customized by our pharmacists to your
                prescriber's exact specifications, in the form and strength that fits your needs.</p>
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
    filter: brightness(0.75);
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(61, 30, 16, 0) 0%, rgba(61, 30, 16, 0.45) 100%);
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
    font-family: 'SpeziaBookB';
    font-size: clamp(40px, 5vw, 68px);
    font-weight: 400;
    line-height: 1.08;
    letter-spacing: -0.01em;
    max-width: 750px;
    color: var(--dls-color-sunlight);
}

.hero-subtitle {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.6;
    max-width: 600px;
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