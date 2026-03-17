<template>
    <section class="program">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">How Our HRT Program Works</h2>

        <div class="program-steps">
            <div class="program-step" data-aos="fade-up" data-aos-delay="100">
                <div class="ps-circle"><span>1</span></div>
                <h4>Consultation</h4>
                <p>We listen to your symptoms, wellness goals, and medical history to understand your individual
                    situation.</p>
            </div>
            <div class="program-step" data-aos="fade-up" data-aos-delay="200">
                <div class="ps-circle"><span>2</span></div>
                <h4>Doctor &amp; Pharmacist Partnership</h4>
                <p>Therapy begins with a prescription from your provider. We collaborate closely with your prescriber
                    and monitor through lab work.</p>
            </div>
            <div class="program-step" data-aos="fade-up" data-aos-delay="300">
                <div class="ps-circle"><span>3</span></div>
                <h4>Testing &amp; Evaluation</h4>
                <p>A hormone panel helps your prescriber identify what's out of balance and determine the appropriate
                    course of action.</p>
            </div>
        </div>
        <div class="program-row2">
            <div class="program-step" data-aos="fade-up" data-aos-delay="400">
                <div class="ps-circle"><span>4</span></div>
                <h4>Custom Compounding</h4>
                <p>We prepare the exact dose and combination your prescriber orders, in your preferred delivery form —
                    cream, gel, lozenge, capsule, suppositories, or patch.</p>
            </div>
            <div class="program-step" data-aos="fade-up" data-aos-delay="500">
                <div class="ps-circle"><span>5</span></div>
                <h4>Follow-Up &amp; Fine-Tuning</h4>
                <p>Your prescriber repeats labs and adjusts your formula as needed. We reformulate according to their
                    updated instructions.</p>
            </div>
            <div class="program-step" data-aos="fade-up" data-aos-delay="600">
                <div class="ps-circle"><span>6</span></div>
                <h4>Ongoing Support</h4>
                <p>Your dedicated pharmacist is here for refills, questions, and coordination with your prescriber — for
                    as long as you need us.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.program {
    padding: 100px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.program h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 64px;
}

.program-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    position: relative;
}

.program-steps::before {
    content: '';
    position: absolute;
    top: 40px;
    left: calc(16.66% + 20px);
    right: calc(16.66% + 20px);
    height: 1px;
    background: var(--dls-color-border);
}

.program-step {
    text-align: center;
    padding: 0 20px;
    position: relative;
    z-index: 1;
}

.ps-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--dls-color-cream);
    border: 2px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    transition: border-color .3s, background .3s;
}

.program-step:hover .ps-circle {
    border-color: var(--dls-color-burgundy);
    background: var(--dls-color-white);
}

.ps-circle span {
    font-family: 'SpeziaBookB';
    font-size: 26px;
    color: var(--dls-color-burgundy);
}

.program-step h4 {
    font-family: 'SpeziaBookB';
    font-size: 18px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    line-height: 1.3;
}

.program-step p {
    font-size: 14px;
    line-height: 1.6;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

.program-row2 {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    position: relative;
}

.program-row2::before {
    content: '';
    position: absolute;
    top: 40px;
    left: calc(16.66% + 20px);
    right: calc(16.66% + 20px);
    height: 1px;
    background: var(--dls-color-border);
}

@media(max-width:1024px) {
    .program-steps,
    .program-row2 {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    .program-steps::before,
    .program-row2::before {
        display: none;
    }
}

@media(max-width:768px) {
    .program-steps,
    .program-row2 {
        grid-template-columns: 1fr;
        gap: 32px;
    }
}
</style>