<template>
    <section class="hero">
        <div class="breadcrumb"><a href="/">Home</a><span>›</span>Contact Us</div>
        <h1 data-aos="fade-up">How Can We Help?</h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">Whether you're exploring hormone therapy or have a question about our
            compounding services, we're here for you.</p>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
    position: relative;
    background: var(--dls-color-burgundy);
    padding: var(--dls-2cm) 60px;
    text-align: center;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -140px;
    right: -140px;
    width: 550px;
    height: 550px;
    border: 1px solid rgba(255, 253, 245, .06);
    border-radius: 50%;
}

.hero::after {
    content: '';
    position: absolute;
    bottom: -180px;
    left: -100px;
    width: 450px;
    height: 450px;
    border: 1px solid rgba(255, 253, 245, .04);
    border-radius: 50%;
}

.hero .breadcrumb {
    font-size: 12px;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 28px;
    opacity: .6;
    color: var(--dls-color-creamlight);
    position: relative;
    z-index: 1;
}

.hero .breadcrumb a {
    color: var(--dls-color-creamlight);
    text-decoration: none;
}

.hero .breadcrumb a:hover {
    text-decoration: underline;
}

.hero .breadcrumb span {
    margin: 0 8px;
    opacity: .6;
}

.hero h1 {
    font-family: 'SpeziaBookB';
    font-size: clamp(42px, 5.5vw, 72px);
    font-weight: 400;
    line-height: 1.1;
    color: var(--dls-color-sunshine);
    max-width: 700px;
    margin: 0 auto 20px;
    position: relative;
    z-index: 1;
}

.hero-subtitle {
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 253, 245, .75);
    font-weight: 300;
    max-width: 560px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .hero {
        padding: 64px 24px 56px;
    }
}
</style>