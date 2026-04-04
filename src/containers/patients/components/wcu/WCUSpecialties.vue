<template>
    <section class="specialties-section">
        <div class="specialties-inner">
            <div class="overline" data-aos="fade-up">What We Specialize In</div>
            <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">Personalized Care Across Every Specialty</h2>
            <p class="specialties-intro" data-aos="fade-up" data-aos-delay="200">Our clinical focus areas reflect where compounding makes the most meaningful difference in patients' lives.</p>

            <div class="specialties-grid">
                <div class="specialty-card" data-aos="fade-up" data-aos-delay="200">
                    <h4>Hormone Replacement Therapy</h4>
                    <p>Bio-identical hormones in the exact strength and form your body needs creams, capsules, troches, or gels for menopause, andropause, and thyroid support.</p>
                    <a href="#" class="learn-link">Learn More <svg viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a>
                </div>
                <div class="specialty-card" data-aos="fade-up" data-aos-delay="300">
                    <h4>Pediatric Compounding</h4>
                    <p>Precise dosing, allergen-free formulas, and kid-friendly flavors because children deserve medicine designed for them.</p>
                    <a href="#" class="learn-link">Learn More <svg viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a>
                </div>
                <div class="specialty-card" data-aos="fade-up" data-aos-delay="300">
                    <h4>Dermatology</h4>
                    <p>Custom topicals for acne, eczema, psoriasis, and hyperpigmentation the right active, the right base, the right result.</p>
                    <a href="#" class="learn-link">Learn More <svg viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a>
                </div>
                <div class="specialty-card" data-aos="fade-up" data-aos-delay="400">
                    <h4>Pain Management</h4>
                    <p>Targeted topical pain creams that deliver relief directly to the site reducing dependence on systemic medications.</p>
                    <a href="#" class="learn-link">Learn More <svg viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a>
                </div>
                <div class="specialty-card" data-aos="fade-up" data-aos-delay="400">
                    <h4>Low Dose Naltrexone</h4>
                    <p>Precisely dosed LDN for autoimmune conditions, chronic pain, and inflammatory disorders an emerging therapy with growing clinical evidence.</p>
                    <a href="#" class="learn-link">Learn More <svg viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a>
                </div>
                <div class="specialty-card" data-aos="fade-up" data-aos-delay="500">
                    <h4>Sexual Health</h4>
                    <p>Discreet, customized formulations for both men and women addressing intimate health with clinical expertise and personal care.</p>
                    <a href="#" class="learn-link">Learn More <svg viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.specialties-section {
    background: var(--dls-color-redclay);
    color: var(--dls-color-linen);
    padding: var(--dls-1p5cm) 60px;
    margin-top: var(--dls-2cm);
}

.specialties-inner {
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
}

.specialties-inner .overline {
    color: var(--dls-color-sunshine);
}

.specialties-inner .section-heading {
    color: var(--dls-color-lemonice);
    max-width: 600px;
}

.specialties-intro {
    font-size: 15.5px;
    line-height: 1.85;
    font-weight: 300;
    color: rgba(252, 249, 220, 0.7);
    max-width: 560px;
    margin-bottom: 60px;
}

.specialties-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.specialty-card {
    background: rgba(252, 249, 220, 0.04);
    border: 1px solid rgba(252, 249, 220, 0.08);
    padding: 40px 28px;
    transition: background 0.3s, border-color 0.3s;
}

.specialty-card:hover {
    background: rgba(252, 249, 220, 0.07);
    border-color: rgba(252, 249, 220, 0.15);
}

.specialty-card h4 {
    font-family: 'SpeziaBookB';
    font-size: 24px;
    font-weight: 500;
    color: var(--dls-color-sunshine);
    margin-bottom: 12px;
    line-height: 1.25;
}

.specialty-card p {
    font-size: 13.5px;
    line-height: 1.8;
    color: var(--dls-color-lemonice);
    font-weight: 300;
}

.specialty-card .learn-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 16px;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--dls-color-sunshine);
    opacity: 0.7;
    transition: opacity 0.2s;
}

.specialty-card:hover .learn-link {
    opacity: 1;
}

.specialty-card .learn-link svg {
    width: 14px;
    height: 14px;
    stroke: var(--dls-color-sunshine);
    fill: none;
    stroke-width: 2;
    transition: transform 0.2s;
}

.specialty-card:hover .learn-link svg {
    transform: translateX(3px);
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .specialties-grid {
        grid-template-columns: 1fr;
    }

    .specialties-section {
        padding: 72px 28px;
    }
}

@media (max-width: 600px) {}
</style>