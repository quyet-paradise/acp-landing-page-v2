<template>
    <section class="safety-section">
        <div class="safety-inner" data-aos="fade-up">
            <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                    stroke-width="1.5" fill="none" />
                <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z"
                    stroke="currentColor" stroke-width="1.5" fill="none" />
                <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                    fill="none" />
                <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <h2>Important Information</h2>
            <p>Compounded preparations are not FDA-approved. As with any medication, side effects are possible. Your
                prescriber will discuss potential risks and benefits based on your individual health profile. Our
                pharmacist team is available to coordinate with your prescriber regarding any questions or concerns
                throughout your therapy.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.safety-section {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.safety-inner {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 60px 80px;
    text-align: center;
    max-width: 860px;
    margin: 0 auto;
}

.safety-section h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(26px, 2.5vw, 34px);
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 24px;
    letter-spacing: -1px;
}

.safety-section p {
    font-size: 16px;
    line-height: 1.7;
    font-weight: 300;
    max-width: 640px;
    margin: 0 auto;
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .safety-section {
        padding: 64px 24px;
    }

    .safety-inner {
        padding: 40px 24px;
    }
}
</style>