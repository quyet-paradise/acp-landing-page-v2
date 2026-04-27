<template>
    <section class="why-ldn">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Why Do Prescribers Order LDN?</h2>
        <p class="why-ldn-sub" data-aos="fade-up" data-aos-delay="100">Common reasons healthcare providers prescribe compounded LDN</p>

        <div class="conditions-grid">
            <div class="condition-card" data-aos="fade-up" data-aos-delay="100">
                <div class="condition-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>
                <h3>Autoimmune Conditions</h3>
                <p>Hashimoto's, rheumatoid arthritis, psoriasis, Crohn's, ulcerative colitis</p>
            </div>
            <div class="condition-card" data-aos="fade-up" data-aos-delay="200">
                <div class="condition-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M18 20a6 6 0 0 0-12 0" />
                        <circle cx="12" cy="10" r="4" />
                        <path d="M2 12h2m16 0h2M12 2v2" />
                    </svg>
                </div>
                <h3>Pain-Related Concerns</h3>
                <p>Fibromyalgia, nerve pain, endometriosis, migraines</p>
            </div>
            <div class="condition-card" data-aos="fade-up" data-aos-delay="300">
                <div class="condition-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                </div>
                <h3>Energy &amp; Mood Concerns</h3>
                <p>Chronic fatigue, brain fog, long COVID recovery</p>
            </div>
            <div class="condition-card" data-aos="fade-up" data-aos-delay="400">
                <div class="condition-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
                    </svg>
                </div>
                <h3>Skin &amp; Gut Concerns</h3>
                <p>Eczema, hidradenitis, IBS, SIBO</p>
            </div>
        </div>

        <p class="fda-note" data-aos="fade-up">LDN is prescribed "off label." The FDA has not evaluated LDN for the above uses.
            Compounded LDN preparations are not FDA-approved. Individual experiences vary; your prescriber determines
            whether LDN is appropriate for your situation.</p>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.why-ldn {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.why-ldn h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.why-ldn-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-burgundylight);
    font-weight: 300;
    margin-bottom: 56px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.conditions-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
}

.condition-card {
    padding: 44px 32px;
    border: 1px solid var(--dls-color-border);
    border-right: none;
    transition: background 0.4s;
    text-align: center;
}

.condition-card:last-child {
    border-right: 1px solid var(--dls-color-border);
}

.condition-card:hover {
    background: rgba(200, 170, 139, 0.1);
}

.condition-icon {
    width: 52px;
    height: 52px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
}

.condition-icon svg {
    width: 22px;
    height: 22px;
    color: var(--dls-color-burgundy);
}

.condition-card h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
    line-height: 1.25;
}

.condition-card p {
    font-size: 16px;
    line-height: 1.6;
    color: var(--dls-color-burgundylight);
    font-weight: 300;
}

.fda-note {
    margin-top: 40px;
    text-align: center;
    font-size: 14px;
    font-style: italic;
    color: var(--dls-color-burgundylight);
    font-weight: 300;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

@media (max-width: 1024px) {
    .conditions-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .condition-card:nth-child(2) {
        border-right: 1px solid var(--dls-color-border);
    }
}

@media (max-width: 768px) {
    .why-ldn {
        padding: 64px 24px;
    }

    .condition-card {
        border-right: 1px solid var(--dls-color-border) !important;
    }

    .condition-card:last-child {
        border-bottom: 1px solid var(--dls-color-border);
    }
}
</style>