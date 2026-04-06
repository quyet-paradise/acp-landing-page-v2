<template>
    <section class="zen-invitation">
        <div class="zen-invitation-inner">
            <h2 data-aos="fade-up">No rush. No pressure.<br>Just clarity.</h2>
            <p data-aos="fade-up" data-aos-delay="100">You don't need a prescription, a referral, or even a plan. Just a quiet conversation with someone who listens — and the right tools to understand what your body is telling you.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.zen-invitation {
    padding: var(--dls-2cm) 40px;
    text-align: center;
    background: var(--dls-color-creamlight);
    position: relative;
}

.zen-invitation::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, transparent, var(--dls-color-border));
}

.zen-invitation-inner {
    max-width: 640px;
    margin: 0 auto;
}

.zen-invitation h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(24px, 3vw, 38px);
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 24px;
    line-height: 1.2;
}

.zen-invitation p {
    font-size: 17px;
    line-height: 1.85;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .zen-invitation {
        padding: 64px 24px;
    }
}
</style>