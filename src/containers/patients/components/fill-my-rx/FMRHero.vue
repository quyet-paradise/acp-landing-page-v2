<template>
    <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-pattern"></div>
        <div class="hero-content">
            <div class="breadcrumb" data-aos="fade-up"><a href="/">Home</a><span class="sep">›</span><a href="#">Patients</a><span
                    class="sep">›</span><span>Fill My Rx</span></div>
            <div class="hero-badge" data-aos="fade-up" data-aos-delay="100">Patients</div>
            <h1 data-aos="fade-up" data-aos-delay="200">Fill My Rx</h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="300">Need a refill or ready to transfer your prescriptions? Submit your request
                below and we'll take care of the rest.</p>
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
    align-items: flex-end;
    overflow: hidden;
    background: url("/images/patients/fill-my-rx-banner.jpg") center/cover no-repeat;
}

.hero-bg {
    position: absolute;
    inset: 0;
    background: none;
}

.hero-pattern {
    position: absolute;
    inset: 0;
    opacity: 0;
}

.hero::after {
    content: '';
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    border: 1px solid rgba(250, 248, 222, .08);
    right: -40px;
    top: -60px;
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: 80px 64px 64px;
    max-width: 760px;
}

.breadcrumb {
    font-size: 13px;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: rgba(55, 18, 19, .5);
    margin-bottom: 24px;
}

.breadcrumb a {
    color: rgba(55, 18, 19, .5);
    transition: color .2s;
    text-decoration: none;
}

.breadcrumb a:hover {
    color: rgba(55, 18, 19, .7);
    text-decoration: underline;
}

.breadcrumb span.sep {
    margin: 0 8px;
}

.hero-badge {
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
    margin-bottom: 20px;
}

.hero h1 {
    font-family: 'SpeziaBookB';
    font-size: clamp(40px, 5vw, 60px);
    font-weight: 400;
    line-height: 1.1;
    color: var(--dls-color-burgundy);
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 17px;
    line-height: 1.7;
    color: rgba(55, 18, 19, .65);
    max-width: 560px;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .hero {
        min-height: 360px;
    }

    .hero-content {
        padding: 60px 24px 48px;
    }
}
</style>