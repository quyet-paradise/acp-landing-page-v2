<template>
    <section class="benefits-section">
        <div class="benefits-inner">
            <div class="overline" data-aos="fade-up">Who Benefits</div>
            <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">Compounding Is for Everyone</h2>
            <p class="benefits-intro" data-aos="fade-up" data-aos-delay="200">From hormone optimization to pediatric care, compounding serves patients
                across every stage of life. Here are some of the areas where personalized medicine makes the biggest
                difference.</p>

            <div class="benefits-grid">
                <div class="benefit-card" data-aos="fade-up" data-aos-delay="200">
                    <h4>Hormone Therapy</h4>
                    <p>Bio-identical hormones customized in the exact strength and delivery method your body needs
                        creams, capsules, troches, or gels for menopause, andropause, and thyroid support.</p>
                </div>
                <div class="benefit-card" data-aos="fade-up" data-aos-delay="300">
                    <h4>Pediatric Patients</h4>
                    <p>Kid-friendly flavors, precise micro-dosing, and allergen-free formulations because children
                        deserve medicine designed for them, not scaled-down adult pills.</p>
                </div>
                <div class="benefit-card" data-aos="fade-up" data-aos-delay="300">
                    <h4>Dermatology</h4>
                    <p>Custom topical treatments for acne, eczema, psoriasis, and hyperpigmentation formulated with
                        the exact active ingredients and bases your skin needs.</p>
                </div>
                <div class="benefit-card" data-aos="fade-up" data-aos-delay="400">
                    <h4>Pain Management</h4>
                    <p>Targeted topical pain creams that deliver relief directly to the site reducing the need for
                        systemic medications and their side effects.</p>
                </div>
                <div class="benefit-card" data-aos="fade-up" data-aos-delay="400">
                    <h4>Sexual Health</h4>
                    <p>Discreet, customized formulations for both men and women  addressing intimate health concerns
                        with clinical precision and personal care.</p>
                </div>
                <div class="benefit-card" data-aos="fade-up" data-aos-delay="500">
                    <h4>LDN Therapy</h4>
                    <p>Low dose naltrexone in precise, individualized doses supporting patients with autoimmune
                        conditions, chronic pain, and inflammatory disorders.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.benefits-section {
    background: var(--dls-color-burgundy);
    color: var(--dls-color-linen);
    padding: var(--dls-1p5cm) 60px;
}

.benefits-inner {
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
}

.benefits-inner .overline {
    color: var(--dls-color-sunshine);
}

.benefits-inner .section-heading {
    color: var(--dls-color-lemonice);
    max-width: 600px;
}

.benefits-intro {
    font-size: 15.5px;
    line-height: 1.85;
    font-weight: 300;
    color: rgba(252, 249, 220, 0.7);
    max-width: 560px;
    margin-bottom: 60px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.benefit-card {
    background: rgba(252, 249, 220, 0.04);
    border: 1px solid rgba(252, 249, 220, 0.08);
    padding: 40px 28px;
    transition: background 0.3s, border-color 0.3s;
}

.benefit-card:hover {
    background: rgba(252, 249, 220, 0.07);
    border-color: rgba(252, 249, 220, 0.15);
}

.benefit-card h4 {
    font-family: 'SpeziaBookB';
    font-size: 24px;
    font-weight: 500;
    color: var(--dls-color-sunshine);
    margin-bottom: 12px;
    line-height: 1.25;
    letter-spacing: -1px;
}

.benefit-card p {
    font-size: 13.5px;
    line-height: 1.8;
    color: var(--dls-color-lemonice);
    font-weight: 300;
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {}
</style>