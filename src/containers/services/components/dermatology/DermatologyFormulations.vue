<template>
    <section class="formulations">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Formulations</h2>
        <p class="formulations-sub" data-aos="fade-up" data-aos-delay="100">Every base is dye-free, fragrance-optional, and can be tailored for vegan, nut-free, or propylene-glycol–free needs</p>

        <div class="form-grid">
            <div class="form-item" data-aos="fade-up" data-aos-delay="100">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 2v20M2 12h20" />
                    </svg>
                </div>
                <h4>Airless Pumps &amp; Foams</h4>
                <p>Ideal for large areas &amp; scalp application</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="200">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <h4>Fast-Dry Gels &amp; Serums</h4>
                <p>Vanish under makeup with no residue</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="300">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </div>
                <h4>Rich Creams &amp; Ointments</h4>
                <p>Maximal occlusion for fissured or thick plaques</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="400">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>
                <h4>Lacquers &amp; Sticks</h4>
                <p>Target nails, peri-oral spots, or travel-friendly touch-ups</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="500">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                </div>
                <h4>Medicated Washes</h4>
                <p>Precise contact-time for seborrheic dermatitis or body acne</p>
            </div>
        </div>

        <p class="form-note" data-aos="fade-up">All bases are dye-free, fragrance-optional, and can be tailored for vegan, nut-free, or propylene-glycol–free requirements.</p>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.formulations {
    padding: 100px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.formulations h2 {
    font-family: "SpeziaBookB";
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.formulations-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-bottom: 56px;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
}

.form-item {
    padding: 40px 24px;
    border: 1px solid var(--dls-color-border);
    border-right: none;
    text-align: center;
    transition: background .3s;
}

.form-item:last-child {
    border-right: 1px solid var(--dls-color-border);
}

.form-item:hover {
    background: rgba(200, 170, 139, .1);
}

.form-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 16px;
    border-radius: 50%;
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-icon svg {
    width: 20px;
    height: 20px;
    color: var(--dls-color-burgundy);
}

.form-item h4 {
    font-family: "SpeziaBookB";
    font-size: 17px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    line-height: 1.3;
    letter-spacing: -1px;
}

.form-item p {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

.form-note {
    text-align: center;
    margin-top: 40px;
    font-size: 15px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
}

@media(max-width:1024px) {
    .form-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .form-item:nth-child(3) {
        border-right: 1px solid var(--dls-color-border);
    }
}

@media(max-width:768px) {
    .formulations {
        padding: 64px 24px;
    }

    .form-grid {
        grid-template-columns: 1fr 1fr;
    }

    .form-item {
        border-right: 1px solid var(--dls-color-border) !important;
    }
}
</style>