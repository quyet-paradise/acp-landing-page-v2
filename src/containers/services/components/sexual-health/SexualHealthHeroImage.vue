<template>
    <section class="hero">
        <img class="hero-image" src="/images/services/hero-image/sexual-health.jpg" alt="hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="breadcrumb">
                <a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Sexual Health
            </div>
            <h1>Sexual Health for Men &amp; Women</h1>
            <p class="hero-subtitle">Individually compounded preparations — customized to your prescriber's
                specifications in doses, combinations, and delivery forms not commercially available.</p>
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
    filter: none;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 100%);
}

.hero-content {
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
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
    max-width: 800px;
    color: var(--dls-color-pale);
}

.hero-subtitle {
    margin-top: 28px;
    font-size: 19px;
    line-height: 1.65;
    max-width: 620px;
    font-weight: 300;
    opacity: 0.92;
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .hero-content {
        left: 24px;
        right: 24px;
        bottom: 56px;
    }
}
</style>