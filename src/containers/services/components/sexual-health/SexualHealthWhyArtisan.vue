<template>
    <section class="why-artisan">
        <div class="why-artisan-inner">
            <div>
                <div
                    style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--dls-color-sunshine);font-weight:500;margin-bottom:8px;">
                    THE ARTISAN DIFFERENCE</div>
                <h2 data-aos="fade-up">Why Compound for Sexual Health?</h2>
                <p data-aos="fade-up" data-aos-delay="100">Your prescriber may determine that a customized compounded preparation is appropriate for your
                    individual needs. Compounding allows us to prepare the exact strength, delivery form, and ingredient
                    combination your prescriber orders — in formulations not available from commercial manufacturers.
                </p>
            </div>
            <div class="why-points">
                <div class="why-point" data-aos="fade-up" data-aos-delay="100">
                    <div class="why-point-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <div>
                        <h4>Pharmacist-Guided</h4>
                        <p>Direct access to our team for questions, dose adjustments, and ongoing support.</p>
                    </div>
                </div>
                <div class="why-point" data-aos="fade-up" data-aos-delay="100">
                    <div class="why-point-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M4.5 16.5c-1.5 1.38-2 2.5-2 3.5 0 2.5 3.5 2.5 3.5 0 0-1-.5-2-2-3.5M12 2v8m0 0l3-3m-3 3L9 7" />
                            <circle cx="12" cy="17" r="5" />
                        </svg>
                    </div>
                    <div>
                        <h4>Precision Dosing</h4>
                        <p>Custom strengths compounded to your prescriber's exact specifications.</p>
                    </div>
                </div>
                <div class="why-point" data-aos="fade-up" data-aos-delay="100">
                    <div class="why-point-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </div>
                    <div>
                        <h4>Discreet &amp; Comfortable</h4>
                        <p>Multiple forms — creams, troches, sprays — so you choose what fits your life.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.why-artisan {
    background: var(--dls-color-olive);
    padding: var(--dls-1p5cm) 60px;
    position: relative;
    overflow: hidden;
}

.why-artisan::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(255, 253, 245, 0.1);
    border-radius: 50%;
}

.why-artisan-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.why-artisan h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-lemonice);
    margin-bottom: 28px;
}

.why-artisan p {
    font-size: 24px;
    line-height: 108%;
    letter-spacing: 0;
    color: var(--dls-color-lemonice);
    font-weight: 300;
}

.why-points {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.why-point {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 28px;
    background: rgba(255, 253, 245, 0.08);
    border-radius: 12px;
    border: 1px solid rgba(255, 253, 245, 0.1);
    transition: background 0.3s;
}

.why-point:hover {
    background: rgba(255, 253, 245, 0.14);
}

.why-point-icon {
    width: 44px;
    height: 44px;
    background: rgba(255, 253, 245, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.why-point-icon svg {
    width: 20px;
    height: 20px;
    color: var(--dls-color-sunshine);
}

.why-point h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 18px;
    font-weight: 400;
    color: var(--dls-color-lemonice);
    margin-bottom: 4px;
    margin-top: 0;
    letter-spacing: -1px;
}

.why-point p {
    font-size: 14px;
    line-height: 1.55;
    color: rgba(255, 253, 245, 0.7);
    letter-spacing: .5px;
    margin: 0;
}

@media (max-width: 1024px) {
    .why-artisan-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}

@media (max-width: 768px) {
    .why-artisan {
        padding: 64px 24px;
    }
}
</style>