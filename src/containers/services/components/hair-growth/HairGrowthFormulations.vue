<template>
    <section class="formulations">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Formulations</h2>
        <p class="formulations-sub" data-aos="fade-up" data-aos-delay="100">Your prescriber selects the delivery form — we can reformulate if your
            needs change</p>

        <div class="form-grid">
            <div class="form-item" data-aos="fade-up" data-aos-delay="100">
                <h4>Scalp Solutions &amp; Foams</h4>
                <p>Dry fast, non-greasy, dropper or metered-foam pumps</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="200">
                <h4>Lotion &amp; Cream Bases</h4>
                <p>Alcohol-free, ideal for sensitive or post-transplant scalps</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="300">
                <h4>Sublingual Troches</h4>
                <p>Micro-dosed finasteride or spironolactone without first-pass metabolism</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="400">
                <h4>Oral Capsules</h4>
                <p>Low-dose minoxidil or dutasteride in vegetarian or gelatin shells</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="500">
                <h4>Medicated Shampoo</h4>
                <p>Ketoconazole 2% + caffeine 1% + saw-palmetto in sulfate-free base</p>
            </div>
        </div>

        <p class="form-custom" data-aos="fade-up">Have a sensitivity to propylene glycol? Need a rosemary-scented base? <em>We'll reformulate.</em></p>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.formulations {
    padding: var(--dls-2cm) 60px 0 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.formulations h2 {
    font-family: "SpeziaBookB";
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.formulations-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-bottom: 56px;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
}

.form-item {
    padding: 40px 24px;
    border: 1px solid var(--dls-color-border);
    border-right: none;
    text-align: center;
    transition: background .3s;
}

.form-item:last-child {
    border-right: 1px solid var(--dls-color-border);
}

.form-item:hover {
    background: rgba(200, 170, 139, .1);
}

.form-item h4 {
    font-family: "SpeziaBookB";
    font-size: 17px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    line-height: 1.3;
    letter-spacing: -1px;
}

.form-item p {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

.form-custom {
    text-align: center;
    margin-top: 36px;
    font-size: 15px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    line-height: 1.6;
}

.form-custom em {
    color: var(--dls-color-burgundylight);
}

@media(max-width:1024px) {
    .form-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .form-item:nth-child(3) {
        border-right: 1px solid var(--dls-color-border);
    }
}

@media(max-width:768px) {
    .formulations {
        padding: 64px 24px;
    }

    .form-grid {
        grid-template-columns: 1fr 1fr;
    }

    .form-item {
        border-right: 1px solid var(--dls-color-border) !important;
    }
}
</style>