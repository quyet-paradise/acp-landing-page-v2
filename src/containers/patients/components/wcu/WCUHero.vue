<template>
    <section class="hero">
        <div class="hero-image"></div>
        <div class="hero-texture"></div>
        <div class="hero-grain"></div>
        <div class="hero-content">
            <div class="breadcrumb">
                <a href="/">Home</a><span class="sep">/</span>
                <a href="#">About Us</a><span class="sep">/</span>
                <span>Why Choose Us</span>
            </div>
            <h1 data-aos="fade-up">Pharmacy the Way <em>It Should Be</em></h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100" style="color: #FFFFFF">At Artisan, you're not a number. You're a person and your medication should be made for you, not the masses.</p>
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
    position: absolute;
    inset: 0;
    background:
        url("/images/patients/why-choose-us-banner.jpg");
    background-size: cover;
    background-position: center;
}

.hero-texture {
    display: none;
}

.hero-grain {
    display: none;
}

.hero-content {
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 60px;
    right: 60px;
    z-index: 2;
    max-width: var(--dls-max-width-2);
}

.breadcrumb {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(63, 18, 8, 0.45);
    margin-bottom: 28px;
}

.breadcrumb a {
    color: rgba(63, 18, 8, 0.6);
    transition: color 0.2s;
    text-decoration: none;
}

.breadcrumb a:hover {
    color: var(--dls-color-burgundy);
    text-decoration: underline;
}

.breadcrumb .sep {
    margin: 0 10px;
    opacity: 0.4;
}

.hero h1 {
    color: var(--dls-color-pale);
    max-width: 780px;
}

.hero h1 em {
    font-style: italic;
    color: var(--dls-color-sunshine);
}

.hero-subtitle {
    margin-top: 24px;
    font-size: 17px;
    line-height: 1.7;
    max-width: 500px;
    font-weight: 300;
    color: rgba(63, 18, 8, 0.7);
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .hero {
        min-height: 400px;
    }

    .hero-content {
        left: 28px;
        right: 28px;
    }
}

@media (max-width: 600px) {}
</style>