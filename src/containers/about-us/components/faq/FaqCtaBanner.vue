<template>
    <section class="cta-section">
        <h2 data-aos="fade-up">Still have questions? <em>We're here to help.</em></h2>
        <p data-aos="fade-up" data-aos-delay="100">Schedule a consultation with our pharmacist and discover how personalized medication can make
            a difference.</p>
        <a href="#" class="cta-btn" data-aos="fade-up" data-aos-delay="200">
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </a>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.cta-section {
    padding: var(--dls-1p5cm) 60px;
    background: var(--dls-color-burgundy);
    text-align: center;
    margin-bottom: var(--dls-2cm);
}

.cta-section h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(30px, 4vw, 52px);
    font-weight: 300;
    color: var(--dls-color-linen);
    line-height: 1.2;
    max-width: 700px;
    margin: 0 auto 20px;
}

.cta-section h2 em {
    font-style: italic;
    color: var(--dls-color-sunshine);
}

.cta-section p {
    font-size: 15px;
    line-height: 1.7;
    color: rgba(252, 249, 220, 0.65);
    font-weight: 300;
    max-width: 480px;
    margin: 0 auto 40px;
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 36px;
    border: 1px solid var(--dls-color-linen);
    color: var(--dls-color-linen);
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.3s;
    text-decoration: none;
}

.cta-btn:hover {
    background: var(--dls-color-linen);
    color: var(--dls-color-burgundy);
}

.cta-btn svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s;
}

.cta-btn:hover svg {
    transform: translateX(4px);
}

@media (max-width: 900px) {
    .cta-section {
        padding: 60px 28px;
    }
}

@media (max-width: 600px) {}
</style>