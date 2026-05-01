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
    background-color: var(--dls-color-burgundy);
    background-image: url('/images/contact/contact-us-hero-image.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: var(--dls-2cm) 60px;
    text-align: left;
    overflow: hidden;
    height: 85vh;
    min-height: 580px;
    max-height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    color: var(--dls-color-pale);
    position: relative;
    z-index: 1;
}

.hero .breadcrumb a {
    color: var(--dls-color-pale);
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
    color: var(--dls-color-pale);
    max-width: 700px;
    position: relative;
    z-index: 1;
}

.hero-subtitle {
    font-size: 18px;
    line-height: 1.7;
    color: var(--dls-color-pale);
    font-weight: 300;
    max-width: 560px;
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