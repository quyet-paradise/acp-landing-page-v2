<template>
    <section class="cta-section">
        <h2 data-aos="fade-up">Ready to experience <em>pharmacy</em> done differently?</h2>
        <p data-aos="fade-up" data-aos-delay="100">Schedule a consultation with our pharmacist and discover how personalized medication can make
            a difference.</p>
        <div class="book-consultation-btn" @click="goToPage(ROUTE_NAME.CONTACT_US_PAGE)" data-aos="fade-up" data-aos-delay="200">CONTACT US</div>
    </section>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import { goToPage } from '@/utils/common-utils'
</script>

<style lang="scss" scoped>
.cta-section {
    padding: var(--dls-2cm) 60px;
    background: var(--dls-color-linen);
    text-align: center;
}

.cta-section h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(30px, 4vw, 52px);
    font-weight: 300;
    color: var(--dls-color-burgundy);
    line-height: 1.2;
    max-width: 700px;
    margin: 0 auto 20px;
}

.cta-section h2 em {
    font-style: italic;
    color: var(--dls-color-redclay);
}

.cta-section p {
    font-size: 15px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    opacity: 0.6;
    font-weight: 300;
    max-width: 480px;
    margin: 0 auto 40px;
}

.cta-section .book-consultation-btn {
    margin: 0 auto;
    padding: 22px 48px;
    border-radius: 9999px;
    border: none;
    font-size: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 500;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    transition: transform .3s, box-shadow .3s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(63, 18, 8, .25);
        opacity: 1;
        text-decoration: none;
    }
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .cta-section {
        padding: 60px 28px;
    }
}

@media (max-width: 600px) {}
</style>