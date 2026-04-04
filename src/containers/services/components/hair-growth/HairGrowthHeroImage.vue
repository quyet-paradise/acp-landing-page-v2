<template>
    <section class="hero">
        <img class="hero-image" src="/images/services/hero-image/hair-growth.jpg" alt="hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="breadcrumb">
                <a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Hair Growth
            </div>
            <h1>Hair Growth Compounding</h1>
            <p class="hero-subtitle">Individually compounded preparations tailored to your scalp, your biology, and your
                prescriber's plan — because one size never fits all.</p>
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
    filter: brightness(0.65);
    object-position: center 0%;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .45) 100%);
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
    letter-spacing: -.01em;
    max-width: 700px;
    color: var(--dls-color-pale);
}

.hero-subtitle {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.6;
    max-width: 600px;
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