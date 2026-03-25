<template>
    <section class="hero">
        <div class="hero-image"></div>
        <div class="hero-texture"></div>
        <div class="hero-grain"></div>
        <div class="hero-content">
            <div class="breadcrumb">
                <a href="/">Home</a><span class="sep">/</span>
                <a href="#">Patients</a><span class="sep">/</span>
                <span>What is Compounding?</span>
            </div>
            <h1 class="anim">The Art of <em>Personalized</em> Medicine</h1>
            <p class="hero-subtitle anim d1">Compounding is pharmacy the way it was meant to be medications crafted specifically for you, by a pharmacist who knows your name.</p>
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
        linear-gradient(180deg, rgba(63, 18, 8, 0.02) 0%, rgba(63, 18, 8, 0.15) 50%, rgba(63, 18, 8, 0.65) 100%),
        url("/images/services/hero-image/ldn.jpg");
    background-size: cover;
    background-position: center 40%;
}

.hero-texture {
    display: none;
}

.hero-grain {
    position: absolute;
    inset: 0;
    opacity: 0.08;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px;
}

.hero-content {
    position: absolute;
    bottom: 80px;
    left: 60px;
    right: 60px;
    z-index: 2;
    max-width: 1200px;
}

.breadcrumb {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(252, 249, 220, 0.5);
    margin-bottom: 28px;
}

.breadcrumb a {
    color: rgba(252, 249, 220, 0.7);
    transition: color 0.2s;
    text-decoration: none;
}

.breadcrumb a:hover {
    color: var(--dls-color-linen);
    text-decoration: underline;
}

.breadcrumb .sep {
    margin: 0 10px;
    opacity: 0.4;
}

.hero h1 {
    font-family: 'SpeziaBookB';
    font-size: clamp(44px, 6vw, 80px);
    font-weight: 300;
    line-height: 1.06;
    color: var(--dls-color-linen);
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
    color: rgba(252, 249, 220, 0.75);
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .hero {
        min-height: 400px;
    }

    .hero-content {
        left: 28px;
        right: 28px;
        bottom: 48px;
    }
}

@media (max-width: 600px) {}
</style>