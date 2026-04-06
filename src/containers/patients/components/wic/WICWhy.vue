<template>
    <section class="why-section">
        <div class="why-inner">
            <div class="overline" data-aos="fade-up">Why Compounding</div>
            <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">When One Size Doesn't Fit All</h2>
            <div class="why-grid">
                <div class="why-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="card-num">01</div>
                    <h4>Allergies &amp; Sensitivities</h4>
                    <p>Commercial medications often contain dyes, preservatives, gluten, lactose, or other fillers that
                        cause reactions. Compounding removes the problem ingredient while keeping the medicine
                        effective.</p>
                </div>
                <div class="why-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="card-num">02</div>
                    <h4>Dosage Adjustments</h4>
                    <p>Children, elderly patients, and those with unique metabolic needs often require doses that don't
                        exist commercially. Compounding allows precise, individualized dosing.</p>
                </div>
                <div class="why-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="card-num">03</div>
                    <h4>Discontinued Medications</h4>
                    <p>When a manufacturer stops producing a medication that works for you, compounding can often
                        recreate it so your treatment continues without disruption.</p>
                </div>
                <div class="why-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="card-num">04</div>
                    <h4>Difficulty Swallowing</h4>
                    <p>Pills aren't for everyone. Compounding can transform a tablet into a flavored liquid, topical
                        cream, troche, or suppository whatever form works best for the patient.</p>
                </div>
                <div class="why-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="card-num">05</div>
                    <h4>Combination Therapies</h4>
                    <p>Multiple medications can sometimes be combined into a single dosage form, simplifying complex
                        regimens and improving adherence.</p>
                </div>
                <div class="why-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="card-num">06</div>
                    <h4>Flavor &amp; Palatability</h4>
                    <p>Getting children (or pets) to take their medicine is easier when it comes in a flavor they love.
                        We can add natural flavoring to make medication less of a battle.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.why-section {
    background: var(--dls-color-burgundy);
    color: var(--dls-color-linen);
    padding: var(--dls-1p5cm) 60px;
}

.why-inner {
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
}

.why-inner .overline {
    color: var(--dls-color-sunshine);
}

.why-inner .section-heading {
    color: var(--dls-color-lemonice);
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    margin-top: 60px;
    border-top: 1px solid rgba(252, 249, 220, 0.1);
}

.why-card {
    padding: 44px 32px;
    border-bottom: 1px solid rgba(252, 249, 220, 0.1);
    border-right: 1px solid rgba(252, 249, 220, 0.1);
    transition: background 0.4s;
}

.why-card:nth-child(3n) {
    border-right: none;
}

.why-card:hover {
    background: rgba(248, 238, 159, 0.03);
}

.why-card .card-num {
    font-family: var(--dls-font-spezia-book-b);
    font-weight: 300;
    color: var(--dls-color-taupe);
    opacity: 0.3;
    line-height: 1;
    margin-bottom: 16px;
}

.why-card h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-weight: 500;
    font-size: 21px;
    color: var(--dls-color-lemonice);
    margin-bottom: 12px;
    line-height: 1.3;
    letter-spacing: -1px;
}

.why-card p {
    font-size: 13.5px;
    line-height: 1.8;
    color: rgba(252, 249, 220, 0.55);
    font-weight: 300;
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .why-grid {
        grid-template-columns: 1fr;
    }

    .why-card {
        border-right: none !important;
    }
}

@media (max-width: 600px) {}
</style>