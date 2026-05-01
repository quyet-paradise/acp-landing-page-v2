<template>
    <section class="cta-editorial">
        <h2 class="headline-2" data-aos="fade-up">Ready to experience <em>compounding</em> done differently?</h2>
        <p data-aos="fade-up" data-aos-delay="100">Schedule a consultation with our team and discover how personalized medication can make
            a real difference.</p>
        <a href="javascript:void(0)" @click="goToPage(ROUTE_NAME.CONTACT_US_PAGE)" class="cta-btn" data-aos="fade-up" data-aos-delay="200">Contact Us</a>
    </section>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import { goToPage } from '@/utils/common-utils'
</script>

<style lang="scss" scoped>
.cta-editorial {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    text-align: center;
}

.cta-editorial h2 {
    max-width: 700px;
    margin: 0 auto;
}

.cta-editorial h2 em {
    font-style: italic;
    color: var(--dls-color-redclay);
}

.cta-editorial p {
    font-family: var(--dls-font-jost);
    font-size: 16px;
    line-height: 145%;
    letter-spacing: 0.1em;
    color: var(--dls-color-burgundy);
    margin-top: 20px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    padding: 22px 48px;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 60px;
    transition: transform .3s, box-shadow .3s;
    margin-top: 24px;
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(63, 18, 8, .2);
}

.cta-btn svg {
    width: 16px;
    height: 16px;
    transition: transform .3s;
}

.cta-btn:hover svg {
    transform: translateX(4px);
}

@media (max-width: 1024px) {
    .cta-editorial {
        padding: 80px 60px;
    }
}

@media (max-width: 768px) {
    .cta-editorial {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>