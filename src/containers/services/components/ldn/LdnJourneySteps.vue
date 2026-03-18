<template>
    <section class="journey">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Your 4-Step LDN Journey</h2>

        <div class="journey-steps">
            <div class="journey-step" data-aos="fade-up" data-aos-delay="100">
                <div class="step-circle"><span>1</span></div>
                <h4>Prescriber Orders LDN</h4>
                <p>Your healthcare provider determines if LDN is appropriate and writes a prescription. We can supply
                    dosing templates to your prescriber.</p>
            </div>
            <div class="journey-step" data-aos="fade-up" data-aos-delay="200">
                <div class="step-circle"><span>2</span></div>
                <h4>Send It Our Way</h4>
                <p>Your prescriber sends the script via e-script or fax directly to our pharmacy.</p>
            </div>
            <div class="journey-step" data-aos="fade-up" data-aos-delay="300">
                <div class="step-circle"><span>3</span></div>
                <h4>Select Form &amp; Flavor</h4>
                <p>Our pharmacist coordinates with you and your prescriber to prepare the right formulation.</p>
            </div>
            <div class="journey-step" data-aos="fade-up" data-aos-delay="400">
                <div class="step-circle"><span>4</span></div>
                <h4>Delivered to Your Door</h4>
                <p>Receive your tailor-made LDN — compounded fresh, shipped directly to you.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.journey {
    padding: 100px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.journey h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(30px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 64px;
}

.journey-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
}

.journey-steps::before {
    content: '';
    position: absolute;
    top: 36px;
    left: calc(12.5% + 18px);
    right: calc(12.5% + 18px);
    height: 1px;
    background: var(--dls-color-border);
    z-index: 0;
}

.journey-step {
    text-align: center;
    padding: 0 24px;
    position: relative;
    z-index: 1;
}

.step-circle {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: var(--dls-color-cream);
    border: 2px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    transition: border-color 0.3s, background 0.3s;
}

.journey-step:hover .step-circle {
    border-color: var(--dls-color-burgundylight);
    background: var(--dls-color-white);
}

.step-circle span {
    font-family: 'SpeziaBookB';
    font-size: 26px;
    color: var(--dls-color-burgundy);
    line-height: 1;
}

.journey-step h4 {
    font-family: 'SpeziaBookB';
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    line-height: 1.3;
    letter-spacing: -1px;
}

.journey-step p {
    font-size: 16px;
    line-height: 1.6;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

@media (max-width: 1024px) {
    .journey-steps {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    .journey-steps::before {
        display: none;
    }
}

@media (max-width: 768px) {
    .journey {
        padding: 64px 24px;
    }

    .journey-steps {
        grid-template-columns: 1fr;
        gap: 36px;
    }
}
</style>