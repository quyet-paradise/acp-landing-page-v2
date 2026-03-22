<template>
    <section class="cta-editorial">
        <h2 data-aos="fade-up">Ready to experience <em>compounding</em> done differently?</h2>
        <p data-aos="fade-up" data-aos-delay="100">Schedule a consultation with our team and discover how personalized medication can make
            a real difference.</p>
        <a href="#" class="cta-btn" data-aos="fade-up" data-aos-delay="200">Contact Us<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg></a>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.cta-editorial {
    padding: 120px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    text-align: center;
}

.cta-editorial h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.15;
    max-width: 700px;
    margin: 0 auto;
}

.cta-editorial h2 em {
    font-style: italic;
    color: var(--dls-color-redclay);
}

.cta-editorial p {
    font-size: 17px;
    line-height: 1.7;
    font-weight: 300;
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
    background: var(--dls-color-burgundy);
    color: var(--dls-color-sunshine);
    padding: 22px 48px;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 60px;
    transition: transform .3s, box-shadow .3s;
    margin-top: 40px;
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