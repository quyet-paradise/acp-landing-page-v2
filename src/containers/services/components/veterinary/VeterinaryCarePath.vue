<template>
    <section class="care-path">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">The Paws-itive Care Path</h2>

        <div class="path-steps">
            <div class="path-step" data-aos="fade-up" data-aos-delay="100">
                <div class="path-circle"><span>1</span></div>
                <h4>Prescription Arrives</h4>
                <p>Via e-fax, email, or paw-delivered script from your vet.</p>
            </div>
            <div class="path-step" data-aos="fade-up" data-aos-delay="200">
                <div class="path-circle"><span>2</span></div>
                <h4>Flavor &amp; Form Consult</h4>
                <p>We call you (or your clinic) to pick the perfect delivery method.</p>
            </div>
            <div class="path-step" data-aos="fade-up" data-aos-delay="300">
                <div class="path-circle"><span>3</span></div>
                <h4>Compound &amp; QC</h4>
                <p>State-of-the-art equipment ensures uniformity and sterility.</p>
            </div>
            <div class="path-step" data-aos="fade-up" data-aos-delay="400">
                <div class="path-circle"><span>4</span></div>
                <h4>Pack &amp; Dispatch</h4>
                <p>Chilled courier for heat-sensitive meds; overnight shipping available.</p>
            </div>
            <div class="path-step" data-aos="fade-up" data-aos-delay="500">
                <div class="path-circle"><span>5</span></div>
                <h4>Follow-Up</h4>
                <p>Refill reminders, dose adjustments, and side-effect triage.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.care-path {
    padding: var(--dls-2cm) 60px 0 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.care-path h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 64px;
}

.path-steps {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
    position: relative;
}

.path-steps::before {
    content: '';
    position: absolute;
    top: 36px;
    left: calc(10% + 18px);
    right: calc(10% + 18px);
    height: 1px;
    background: var(--dls-color-border);
}

.path-step {
    text-align: center;
    padding: 0 16px;
    position: relative;
    z-index: 1;
}

.path-circle {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: var(--dls-color-cream);
    border: 2px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    transition: border-color .3s, background .3s
}

.path-step:hover .path-circle {
    border-color: var(--dls-color-burgundylight);
    background: var(--dls-color-white);
}

.path-circle span {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 24px;
    color: var(--dls-color-burgundy);
}

.path-step h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 16px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
    line-height: 1.3;
    letter-spacing: -1px;
}

.path-step p {
    font-size: 13px;
    line-height: 1.55;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

@media(max-width:1024px) {
    .path-steps {
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }

    .path-steps::before {
        display: none;
    }
}

@media(max-width:768px) {
    .care-path {
        padding-left: 24px;
        padding-right: 24px;
    }

    .path-steps {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
}
</style>