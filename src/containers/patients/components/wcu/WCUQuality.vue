<template>
    <section class="quality-section section-pad">
        <div class="overline" data-aos="fade-up">Quality & Compliance</div>
        <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">Held to the Highest Standards</h2>
        <p class="section-body" data-aos="fade-up" data-aos-delay="200" style="max-width:600px;margin-bottom:12px">We don't cut corners. Every aspect of
            our operation from sourcing to compounding to final verification is designed around patient safety and
            regulatory excellence.</p>

        <div class="quality-grid">
            <div class="quality-card" data-aos="fade-up" data-aos-delay="200">
                <div class="quality-card-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg></div>
                <h4>USP 795 Compliant</h4>
                <p>Our lab meets all current United States Pharmacopeia standards for non-sterile compounding ensuring
                    consistency, potency, and purity in every formulation.</p>
            </div>
            <div class="quality-card" data-aos="fade-up" data-aos-delay="300">
                <div class="quality-card-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="9" />
                    </svg></div>
                <h4>USP 800 Compliant</h4>
                <p>Hazardous drug handling follows strict USP 800 protocols protecting our team, our patients, and the environment with proper engineering controls and PPE.</p>
            </div>
            <div class="quality-card" data-aos="fade-up" data-aos-delay="300">
                <div class="quality-card-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3v18" />
                        <path d="M3 12h18" />
                    </svg></div>
                <h4>Pharmaceutical-Grade &amp; Allergen-Conscious Ingredients</h4>
                <p>We source exclusively from FDA-registered suppliers every chemical meets or exceeds USP/NF purity
                    standards. We can compound formulations free from gluten, corn, soy, lactose, casein, dyes,
                    parabens, and other common allergens or sensitivities. If a commercial medication contains something
                    your body can't tolerate, we can make it without it.</p>
            </div>
            <div class="quality-card" data-aos="fade-up" data-aos-delay="400">
                <div class="quality-card-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg></div>
                <h4>Pharmacist Final Verification</h4>
                <p>No compound leaves our lab without the Pharmacist-in-Charge personally verifying the formulation,
                    weight, appearance, and labeling.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.quality-section {
    background: var(--dls-color-linen);
}

.quality-section .overline {
    color: var(--dls-color-olive);
}

.quality-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    margin-top: 56px;
    border: 1px solid var(--dls-color-border);
}

.quality-card {
    padding: 48px 32px;
    border-right: 1px solid var(--dls-color-border);
    border-bottom: 1px solid var(--dls-color-border);
    background: var(--dls-color-white);
    transition: background 0.3s;
}

.quality-card:nth-child(2n) {
    border-right: none;
}

.quality-card:nth-child(n+3) {
    border-bottom: none;
}

.quality-card:hover {
    background: var(--dls-color-linen);
}

.quality-card-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--dls-color-linen);
    border: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.quality-card-icon svg {
    width: 22px;
    height: 22px;
    stroke: var(--dls-color-olive);
    fill: none;
    stroke-width: 1.5;
}

.quality-card h4 {
    font-family: 'SpeziaBookB';
    font-size: 22px;
    font-weight: 500;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    line-height: 1.25;
    letter-spacing: -1px;
}

.quality-card p {
    font-size: 13.5px;
    line-height: 1.8;
    color: var(--dls-color-burgundy);
    opacity: 0.6;
    font-weight: 300;
}

@media (max-width: 1024px) {
    .quality-grid {
        grid-template-columns: 1fr;
    }

    .quality-card {
        border-right: none !important;
        border-bottom: 1px solid var(--dls-color-border) !important;
    }

    .quality-card:last-child {
        border-bottom: none !important;
    }
}

@media (max-width: 900px) {
    .quality-grid {
        grid-template-columns: 1fr;
    }

    .quality-card {
        border-right: none !important;
    }
}

@media (max-width: 600px) {}
</style>