<template>
    <section class="hero">
        <div class="hero-pattern"></div>
        <div class="hero-content">
            <div class="breadcrumb">
                <a href="/">Home</a><span class="sep">/</span><span>FAQ</span>
            </div>
            <h1 data-aos="fade-up">Frequently Asked Questions</h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">Everything you need to know about compounding, our process, and how we can
                help.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
    position: relative;
    padding: 160px 60px 140px;
    background: var(--dls-color-burgundy);
    overflow: hidden;
    min-height: 520px;
    background-image: url('/images/faq/banner.jpg');
    background-size: cover;
    background-position: center;
    min-height: 380px;
}

.hero-pattern {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(63, 18, 8, 0.35) 0%, rgba(81, 31, 32, 0.25) 50%, rgba(63, 18, 8, 0.30) 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
}

.breadcrumb {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(252, 249, 220, 0.5);
    margin-bottom: 32px;
}

.breadcrumb a {
    color: rgba(252, 249, 220, 0.7);
    transition: color 0.2s;
}

.breadcrumb a:hover {
    color: var(--dls-color-linen);
}

.breadcrumb .sep {
    margin: 0 10px;
    opacity: 0.4;
}

.hero h1 {
    font-family: 'SpeziaBookB';
    font-size: clamp(48px, 6vw, 80px);
    font-weight: 300;
    line-height: 1.08;
    color: var(--dls-color-sunshine);
    max-width: 800px;
}

.hero-subtitle {
    margin-top: 24px;
    font-size: 17px;
    line-height: 1.7;
    max-width: 520px;
    font-weight: 300;
    color: rgba(252, 249, 220, 0.7);
}

@media (max-width: 900px) {
    .hero {
        padding: 100px 28px 80px;
        min-height: 400px;
    }
}

@media (max-width: 600px) {}
</style>