<template>
    <section class="candidate-section">
        <div class="candidate-inner">
            <div>
                <div class="section-label">ELIGIBILITY</div>
                <h2 data-aos="fade-up">Who May Be Prescribed This?</h2>
                <ul class="candidate-list">
                    <li data-aos="fade-up" data-aos-delay="100">Your prescriber determines eligibility based on your individual health
                        profile, which may include BMI and weight-related health concerns</li>
                    <li data-aos="fade-up" data-aos-delay="200">Adults whose prescriber recommends compounded sublingual medication as part
                        of a broader wellness plan including nutrition &amp; movement</li>
                    <li data-aos="fade-up" data-aos-delay="300">Your prescriber will screen for contraindications including pregnancy,
                        breastfeeding, and potential medication interactions</li>
                </ul>
            </div>
            <div class="expect-card" data-aos="fade-up">
                <h3>What to Expect</h3>
                <div class="expect-item">
                    <div class="expect-num">1.</div>
                    <p><strong>Custom compounding:</strong> We prepare the exact dose, flavor, and form your prescriber
                        orders.</p>
                </div>
                <div class="expect-item">
                    <div class="expect-num">2.</div>
                    <p><strong>Ongoing monitoring:</strong> Your prescriber tracks your progress and adjusts your
                        prescription as needed.*</p>
                </div>
                <div class="expect-item">
                    <div class="expect-num">3.</div>
                    <p><strong>Pharmacist support:</strong> Our team is available for refill coordination, questions,
                        and prescriber communication.</p>
                </div>
                <p
                    style="font-size:13px; font-style:italic; color:var(--dls-color-burgundy); margin-top:18px; font-weight:300;">
                    *Compounded preparations are not FDA-approved. Individual experiences vary. Your prescriber
                    determines whether this therapy is appropriate for you.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.candidate-section {
    padding: var(--dls-2cm) 60px 0 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.candidate-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.candidate-section h2 {
    font-family: "SpeziaBookB";
    font-size: clamp(30px, 3vw, 42px);
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 40px;
}

.candidate-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.candidate-list li {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    font-size: 16px;
    line-height: 1.6;
    font-weight: 300;
}

.candidate-list li::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--dls-color-taupe);
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 8px;
}

.expect-card {
    background: var(--dls-color-cream);
    padding: 48px;
    border-radius: 16px;
    border: 1px solid var(--dls-color-border);
}

.expect-card h3 {
    font-family: "SpeziaBookB";
    font-size: 26px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 32px;
}

.expect-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 18px 0;
    border-bottom: 1px solid var(--dls-color-border);
}

.expect-item:last-child {
    border-bottom: none;
}

.expect-num {
    font-family: "SpeziaBookB";
    font-size: 20px;
    color: var(--dls-color-taupe);
    flex-shrink: 0;
    width: 28px;
}

.expect-item strong {
    font-weight: 500;
    color: var(--dls-color-burgundy);
}

.expect-item p {
    font-size: 15px;
    line-height: 1.4;
    font-weight: 300;
    margin: 0;
}

@media (max-width: 1024px) {
    .candidate-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}

@media (max-width: 768px) {
    .candidate-section {
        padding: 64px 24px;
    }
}
</style>