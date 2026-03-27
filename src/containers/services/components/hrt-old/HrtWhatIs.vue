<template>
    <section class="what-is">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">What Makes Compounded HRT Different?</h2>
        <p class="what-is-sub" data-aos="fade-up" data-aos-delay="100">Commercially manufactured hormones come in fixed
            doses and limited forms.
            Compounded preparations are built around you.</p>

        <div class="what-is-grid">
            <div class="what-is-card" data-aos="fade-up" data-aos-delay="100">
                <div class="wic-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg></div>
                <h3>Personalized Dosing</h3>
                <p>Your prescriber determines the exact dose based on your lab work and symptoms. We compound to those
                    specifications — not a one-size-fits-all tablet.</p>
            </div>
            <div class="what-is-card" data-aos="fade-up" data-aos-delay="200">
                <div class="wic-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg></div>
                <h3>Multiple Hormones, One Prescription</h3>
                <p>When your prescriber orders a combination — for example estradiol, estriol, progesterone, and
                    testosterone — we can compound them into a single preparation for convenience.</p>
            </div>
            <div class="what-is-card" data-aos="fade-up" data-aos-delay="300">
                <div class="wic-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg></div>
                <h3>Flexible Delivery Forms</h3>
                <p>Topical creams/gels, sublingual lozenges, oral capsules, suppositories, or patch — your prescriber
                    selects the form that best fits your individual needs.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.what-is {
    padding: 0 60px var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.what-is h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.what-is-sub {
    text-align: center;
    font-size: 16px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 780px;
    margin: 0 auto 56px;
}

.what-is-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.what-is-card {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 40px 32px;
    text-align: center;
    transition: transform .3s, box-shadow .3s;
}

.what-is-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(61, 30, 16, .07);
}

.wic-icon {
    width: 56px;
    height: 56px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: var(--dls-color-burgundy);
    display: flex;
    align-items: center;
    justify-content: center;
}

.wic-icon svg {
    width: 24px;
    height: 24px;
    color: var(--dls-color-white);
}

.what-is-card h3 {
    font-family: 'SpeziaBookB';
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
    line-height: 1.25;
}

.what-is-card p {
    font-size: 14.5px;
    line-height: 1.65;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

@media(max-width:1024px) {
    .what-is-grid {
        grid-template-columns: 1fr;
    }
}

@media(max-width:768px) {
    .what-is {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>