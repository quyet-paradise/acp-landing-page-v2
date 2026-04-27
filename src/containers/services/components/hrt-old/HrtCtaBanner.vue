<template>
    <div class="cta-banner">
        <div>
            <h2>Ready to Explore Personalized Hormone Therapy?</h2>
            <p>Schedule a consultation with our team. We'll work alongside your prescriber to compound a preparation tailored to your individual needs.</p>
        </div>
        <a href="javascript:void(0)" @click="goToPage(ROUTE_NAME.CONTACT_US_PAGE)" class="cta-btn">Book Consultation</a>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import { goToPage } from '@/utils/common-utils'
</script>

<style lang="scss" scoped>
.cta-banner {
    margin: 0 auto var(--dls-2cm) auto;
    max-width: var(--dls-max-width);
    background: var(--dls-color-burgundylight);
    border-radius: 20px;
    padding: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    position: relative;
    overflow: hidden;
}

.cta-banner::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 350px;
    height: 350px;
    border: 1px solid rgba(255, 253, 245, .06);
    border-radius: 50%;
}

.cta-banner::after {
    content: '';
    position: absolute;
    bottom: -120px;
    right: -80px;
    width: 300px;
    height: 300px;
    border: 1px solid rgba(255, 253, 245, .04);
    border-radius: 50%;
}

.cta-banner h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(28px, 3.2vw, 42px);
    font-weight: 400;
    color: var(--dls-color-sunshine);
    line-height: 1.2;
    max-width: 520px;
    position: relative;
    z-index: 1;
    margin: 0;
}

.cta-banner p {
    font-size: 16px;
    line-height: 1.6;
    color: var(--dls-color-lemonice);
    font-weight: 300;
    margin-top: 16px;
    max-width: 480px;
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    padding: 20px 44px;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 60px;
    transition: transform .3s, box-shadow .3s;
    position: relative;
    z-index: 1;
    flex-shrink: 0;
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .2);
}

.cta-btn svg {
    width: 16px;
    height: 16px;
    transition: transform .3s;
}

.cta-btn:hover svg {
    transform: translateX(4px);
}

@media (max-width:1400px) {
    .cta-banner {
        margin: 32px;
    }
}

@media(max-width:1024px) {
    .cta-banner {
        flex-direction: column;
        text-align: center;
        padding: 56px 48px;
    }
}

@media(max-width:768px) {
    .cta-banner {
        margin: 24px;
        padding: 40px 24px;
        border-radius: 16px;
    }
}
</style>