<template>
    <section class="zen-hero">
        <div class="zen-hero-content">
            <div class="breadcrumb" data-aos="fade-up"><a href="/">Home</a><span>›</span><a
                    href="#">Services</a><span>›</span>Hormone Consultation</div>
            <h1 data-aos="fade-up" data-aos-delay="100">Pause.<br>Breathe.<br>Let's begin.</h1>
            <div class="hero-line" data-aos="fade-up" data-aos-delay="200"></div>
            <p class="hero-sub" data-aos="fade-up" data-aos-delay="300">Forget everything outside. This is your moment. Sit down, take a sip of tea, and let's gently discover what's happening inside your body — together, at your pace.</p>

        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.zen-hero {
    min-height: 92vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    padding: 100px 40px 120px;
    position: relative;
    overflow: hidden;
    background:url("/images/services/hormone-consultation.jpg") center/cover no-repeat;
}

.zen-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: none;
    z-index: 1;
}

.zen-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: none;
    z-index: 1;
}

.zen-hero-content {
    position: relative;
    z-index: 2;
    max-width: 600px;
    padding-left: 40px
}

.zen-hero .breadcrumb {
    font-size: 11px;
    letter-spacing: .14em;
    text-transform: uppercase;
    margin-bottom: 40px;
    opacity: .8;
    font-weight: 400;
    position: relative;
    z-index: 1;
    color: var(--dls-color-sunshine);
}

.zen-hero .breadcrumb a {
    color: var(--dls-color-sunshine);
    text-decoration: none
}

.zen-hero .breadcrumb a:hover {
    text-decoration: underline
}

.zen-hero .breadcrumb span {
    margin: 0 8px;
    opacity: .5
}

.zen-hero h1 {
    font-family: 'SpeziaBookB';
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 400;
    line-height: 1.12;
    color: var(--dls-color-pale);
    margin-bottom: 28px;
    letter-spacing: -.01em;
    text-shadow: 0 2px 12px rgba(0, 0, 0, .3);
    position: relative;
    z-index: 1;
}

.zen-hero .hero-line {
    width: 48px;
    height: 1px;
    background: var(--dls-color-redclay);
    opacity: .4;
    margin-bottom: 28px;
    position: relative;
    z-index: 1;
}

.zen-hero .hero-sub {
    font-size: 17px;
    line-height: 1.85;
    color: var(--dls-color-sunshine);
    font-weight: 300;
    max-width: 480px;
    margin-bottom: 40px;
    text-shadow: 0 1px 8px rgba(0, 0, 0, .2);
    position: relative;
    z-index: 1;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .zen-hero {
        min-height: 70vh;
        padding: 60px 24px 80px;
    }
}
</style>