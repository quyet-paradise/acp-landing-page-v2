<template>
    <section class="why-section">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Why Go Sublingual?</h2>
        <div class="benefits-grid">
            <div class="benefit-card" data-aos="fade-up" data-aos-delay="100">
                <div class="benefit-num">01</div>
                <h3>Zero Needles</h3>
                <p>Eliminate injection anxiety, bruising, and disposal hassles entirely.</p>
            </div>
            <div class="benefit-card" data-aos="fade-up" data-aos-delay="200">
                <div class="benefit-num">02</div>
                <h3>Sublingual Delivery</h3>
                <p>The sublingual route offers an alternative to injections, utilizing the blood supply under the tongue
                    for absorption.</p>
            </div>
            <div class="benefit-card" data-aos="fade-up" data-aos-delay="300">
                <div class="benefit-num">03</div>
                <h3>Daily Micro Dosing</h3>
                <p>Your prescriber may order daily micro doses compounded to your individual specifications, offering a
                    customized dosing schedule.</p>
            </div>
            <div class="benefit-card" data-aos="fade-up" data-aos-delay="400">
                <div class="benefit-num">04</div>
                <h3>Travel Ready</h3>
                <p>Compact dropper vial means no refrigeration during the day, no carrying syringes.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.why-section {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.why-section h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 60px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
}

.benefit-card {
    padding: 48px 36px;
    border: 1px solid var(--dls-color-border);
    border-right: none;
    transition: background 0.4s;
    position: relative;
}

.benefit-card:last-child {
    border-right: 1px solid var(--dls-color-border);
}

.benefit-card:hover {
    background: rgba(200, 170, 139, 0.1);
}

.benefit-num {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 48px;
    color: var(--dls-color-taupe);
    opacity: 0.4;
    line-height: 1;
    margin-bottom: 20px;
}

.benefit-card h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 22px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 14px;
    line-height: 1.25;
}

.benefit-card p {
    font-size: 15px;
    line-height: 1.65;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

@media (max-width: 1024px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .benefit-card:nth-child(2) {
        border-right: 1px solid var(--dls-color-border);
    }

    .benefit-card:nth-child(3),
    .benefit-card:nth-child(4) {
        border-top: none;
    }
}

@media (max-width: 768px) {
    .why-section {
        padding: 64px 24px;
    }

    .benefits-grid {
        grid-template-columns: 1fr;
    }

    .benefit-card {
        border-right: 1px solid var(--dls-color-border) !important;
    }

    .benefit-card:last-child {
        border-bottom: 1px solid var(--dls-color-border);
    }
}
</style>