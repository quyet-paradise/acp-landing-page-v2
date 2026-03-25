<template>
    <section class="safety-section section-pad">
        <div class="safety-grid">
            <div>
                <div class="overline" data-aos="fade-up">Quality & Safety</div>
                <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">Your Safety Is Our Standard</h2>
                <p class="section-body" data-aos="fade-up" data-aos-delay="200">We hold ourselves to the highest standards in the industry because the
                    medications we make are going into your body. Every step of our process is designed around patient
                    safety, regulatory compliance, and clinical excellence.</p>
                <div class="trust-badges" data-aos="fade-up" data-aos-delay="300">
                    <div class="trust-badge">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4" />
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                        USP 795 Compliant
                    </div>
                    <div class="trust-badge">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4" />
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                        USP 800 Compliant
                    </div>
                    <div class="trust-badge">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12l2 2 4-4" />
                            <circle cx="12" cy="12" r="9" />
                        </svg>
                        PCCA Member
                    </div>
                </div>
            </div>
            <div>
                <ul class="safety-list">
                    <li data-aos="fade-up" data-aos-delay="200">
                        <div class="safety-check"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13l4 4L19 7" />
                            </svg></div>
                        Pharmaceutical-grade chemicals sourced exclusively from FDA-registered suppliers
                    </li>
                    <li data-aos="fade-up" data-aos-delay="300">
                        <div class="safety-check"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13l4 4L19 7" />
                            </svg></div>
                        Dedicated, climate-controlled compounding lab with environmental monitoring
                    </li>
                    <li data-aos="fade-up" data-aos-delay="400">
                        <div class="safety-check"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13l4 4L19 7" />
                            </svg></div>
                        Thorough documentation for every batch Master Formulation Records, compounding logs, and
                        beyond-use dating
                    </li>
                    <li data-aos="fade-up" data-aos-delay="400">
                        <div class="safety-check"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13l4 4L19 7" />
                            </svg></div>
                        Final verification by our Pharmacist-in-Charge before any medication leaves the lab
                    </li>

                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.safety-section {
    background: var(--dls-color-linen);
}

.safety-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.safety-section .overline {
    color: var(--dls-color-olive);
}

.trust-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 36px;
}

.trust-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: var(--dls-color-white);
    border: 1px solid var(--dls-color-border);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--dls-color-burgundy);
}

.trust-badge svg {
    width: 14px;
    height: 14px;
    stroke: var(--dls-color-olive);
    fill: none;
    stroke-width: 2;
}

.safety-list {
    list-style: none;
    padding: 0;
}

.safety-list li {
    padding: 20px 0;
    border-bottom: 1px solid var(--dls-color-border);
    display: flex;
    gap: 16px;
    align-items: flex-start;
    font-size: 14.5px;
    line-height: 1.7;
    font-weight: 300;
    color: var(--dls-color-burgundy);
    opacity: 0.8;
}

.safety-list li:first-child {
    border-top: 1px solid var(--dls-color-border);
}

.safety-check {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
}

.safety-check svg {
    width: 20px;
    height: 20px;
    stroke: var(--dls-color-olive);
    fill: none;
    stroke-width: 2;
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .safety-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media (max-width: 600px) {}
</style>