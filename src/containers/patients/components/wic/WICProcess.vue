<template>
    <section class="process-section section-pad">
        <div class="overline" data-aos="fade-up">How It Works</div>
        <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">From Prescription to Pickup</h2>
        <p class="section-body" data-aos="fade-up" data-aos-delay="200" style="max-width:580px;margin-bottom:12px">Getting started with compounded
            medication is simple. Here's what to expect.</p>

        <div class="process-steps">
            <div class="process-step" data-aos="fade-up" data-aos-delay="100">
                <div class="step-num">01</div>
                <h4>Prescription</h4>
                <p>Your healthcare provider writes a prescription tailored to your needs. They can send it to us by fax,
                    e-prescribe, phone, or you can bring it in person.</p>
            </div>
            <div class="process-step" data-aos="fade-up" data-aos-delay="200">
                <div class="step-num">02</div>
                <h4>Consultation</h4>
                <p>Our pharmacist reviews your prescription, discusses any questions with your provider, and confirms
                    the best formulation strength, base, flavor, and dosage form.</p>
            </div>
            <div class="process-step" data-aos="fade-up" data-aos-delay="300">
                <div class="step-num">03</div>
                <h4>Compounding</h4>
                <p>Your medication is hand-prepared in our USP 795 compliant lab using pharmaceutical-grade ingredients.
                    Every batch is documented and verified for quality.</p>
            </div>
            <div class="process-step" data-aos="fade-up" data-aos-delay="400">
                <div class="step-num">04</div>
                <h4>Pickup or Ship</h4>
                <p>Your compound is ready typically within 24 to 48 hours. Pick up at our Tustin pharmacy or have it
                    shipped directly to your door.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.process-section {
    background: var(--dls-color-white);
    border-top: 1px solid var(--dls-color-border);
    border-bottom: 1px solid var(--dls-color-border);
}

.process-section .overline {
    color: var(--dls-color-redclay);
}

.process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    margin-top: 56px;
}

.process-step {
    padding: 0 36px 0 0;
    position: relative;
}

.process-step:not(:last-child) {
    border-right: 1px solid var(--dls-color-border);
    padding-right: 36px;
    margin-right: 0;
}

.process-step:not(:first-child) {
    padding-left: 36px;
}

.step-num {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 64px;
    font-weight: 300;
    color: var(--dls-color-taupe);
    opacity: 0.35;
    line-height: 1;
    margin-bottom: 16px;
}

.process-step h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 22px;
    font-weight: 500;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
    line-height: 1.25;
    letter-spacing: -1px;
}

.process-step p {
    font-size: 13.5px;
    line-height: 1.8;
    color: var(--dls-color-burgundy);
    opacity: 0.65;
    font-weight: 300;
}

@media (max-width: 1024px) {
    .process-steps {
        grid-template-columns: repeat(2, 1fr);
    }

    .process-step:not(:last-child) {
        border-right: none;
        padding-right: 0;
    }

    .process-step:not(:first-child) {
        padding-left: 0;
    }

    .process-step {
        padding: 0 0 36px;
        border-bottom: 1px solid var(--dls-color-border);
        margin-bottom: 36px;
    }
}

@media (max-width: 900px) {}

@media (max-width: 600px) {
    .process-steps {
        grid-template-columns: 1fr;
    }
}
</style>