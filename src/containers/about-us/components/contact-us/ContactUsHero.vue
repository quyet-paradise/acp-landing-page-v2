<template>
    <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-pattern"></div>
        <div class="hero-content">
            <div class="breadcrumb"><a href="/">Home</a><span>/</span>Contact</div>
            <h1>Contact Us</h1>
            <p class="hero-subtitle">We'd love to hear from you — reach out anytime.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
    position: relative;
    height: 52vh;
    min-height: 420px;
    overflow: hidden;
    background: var(--dls-color-burgundy);
    background-image: url('/images/contact/banner.jpg');
    background-size: cover;
    background-position: center;
}

.hero-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(61, 30, 16, 0.45) 0%, rgba(107, 58, 42, 0.35) 50%, rgba(166, 124, 91, 0.3) 100%);
}

.hero-pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 20% 80%, rgba(232, 224, 110, .06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(196, 170, 139, .08) 0%, transparent 40%);
}

.hero-content {
    position: absolute;
    bottom: 72px;
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
    opacity: .7;
}

.breadcrumb a {
    color: var(--dls-color-creamlight);
}

.breadcrumb a:hover {
    text-decoration: underline;
}

.breadcrumb span {
    margin: 0 8px;
    opacity: .5;
}

.hero h1 {
    font-family: 'SpeziaBookB';
    font-size: clamp(40px, 5vw, 68px);
    font-weight: 400;
    line-height: 1.08;
    max-width: 750px;
    color: var(--dls-color-sunshine);
}

.hero-subtitle {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.65;
    max-width: 520px;
    font-weight: 300;
    opacity: .85;
}

@media(max-width:1024px) {}

@media(max-width:768px) {}
</style>