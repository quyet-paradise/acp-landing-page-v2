<template>
    <section class="conditions">
        <div class="conditions-inner">
            <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                style="color:var(--dls-color-sunshine);opacity:.5">
                <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                    stroke-width="1.5" fill="none" />
                <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z"
                    stroke="currentColor" stroke-width="1.5" fill="none" />
                <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                    fill="none" />
                <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <h2 data-aos="fade-up">Conditions Prescribers Order Compounded Preparations For</h2>
            <p class="conditions-sub" data-aos="fade-up" data-aos-delay="100">Common dermatology concerns where customized compounding offers unique
                formulation options</p>

            <div class="cond-grid">
                <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="cond-name">Acne &amp; Oily Skin</div>
                    <div class="cond-forms">
                        <span class="cond-pill">Fast-dry gels</span>
                        <span class="cond-pill">Alcohol-free creams</span>
                        <span class="cond-pill">Leave-on foams</span>
                    </div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="cond-name">Rosacea &amp; Facial Redness</div>
                    <div class="cond-forms">
                        <span class="cond-pill">Non-comedogenic creams</span>
                        <span class="cond-pill">Metered-pump lotions</span>
                    </div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="cond-name">Melasma &amp; Hyperpigmentation</div>
                    <div class="cond-forms">
                        <span class="cond-pill">Silky serums</span>
                        <span class="cond-pill">Anhydrous sticks</span>
                    </div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="cond-name">Eczema &amp; Atopic Dermatitis</div>
                    <div class="cond-forms">
                        <span class="cond-pill">Ointments</span>
                        <span class="cond-pill">Steroid-sparing creams</span>
                        <span class="cond-pill">Liposomal lotions</span>
                    </div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="cond-name">Psoriasis &amp; Chronic Plaques</div>
                    <div class="cond-forms">
                        <span class="cond-pill">High-adherence ointments</span>
                        <span class="cond-pill">Foaming scalp sprays</span>
                    </div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="cond-name">Scars &amp; Post-Procedure Care</div>
                    <div class="cond-forms">
                        <span class="cond-pill">Quick-set gels</span>
                        <span class="cond-pill">Roll-on sticks</span>
                        <span class="cond-pill">Occlusive sheets</span>
                    </div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="700">
                    <div class="cond-name">Fungal Skin &amp; Nail Infections</div>
                    <div class="cond-forms">
                        <span class="cond-pill">Pen-brush lacquers</span>
                        <span class="cond-pill">Water-resistant creams</span>
                        <span class="cond-pill">Spray powders</span>
                    </div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="800">
                    <div class="cond-name">Photo-Aging &amp; Fine Lines</div>
                    <div class="cond-forms">
                        <span class="cond-pill">Time-release night creams</span>
                        <span class="cond-pill">Custom-strength serums</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.conditions {
    background: var(--dls-color-olive);
    padding: var(--dls-1p5cm) 60px;
    position: relative;
    overflow: hidden;
}

.conditions::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(255, 253, 245, .1);
    border-radius: 50%;
}

.conditions::after {
    content: '';
    position: absolute;
    bottom: -160px;
    left: -80px;
    width: 400px;
    height: 400px;
    border: 1px solid rgba(255, 253, 245, .06);
    border-radius: 50%;
}

.conditions-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.conditions h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    color: var(--dls-color-lemonice);
    text-align: center;
    margin-bottom: 16px;
}

.conditions-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-lemonice);
    font-weight: 300;
    margin-bottom: 56px;
}

.cond-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.cond-card {
    background: rgba(255, 253, 245, .08);
    border: 1px solid rgba(255, 253, 245, .12);
    border-radius: 14px;
    padding: 32px 24px;
    transition: background .3s, transform .3s;
}

.cond-card:hover {
    background: rgba(255, 253, 245, .15);
    transform: translateY(-3px);
}

.cond-name {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 19px;
    font-weight: 400;
    color: var(--dls-color-lemonice);
    margin-bottom: 14px;
    line-height: 1.25;
}

.cond-forms {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.cond-pill {
    display: inline-block;
    padding: 5px 12px;
    background: rgba(255, 253, 245, .1);
    border-radius: 20px;
    font-size: 11px;
    font-weight: 400;
    color: var(--dls-color-sunshine);
    letter-spacing: .02em;
}

@media(max-width:1024px) {
    .conditions h2 {
        letter-spacing: -1.5px;
    }

    .cond-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:768px) {
    .conditions {
        padding: 64px 24px;
    }

    .cond-grid {
        grid-template-columns: 1fr;
    }
}
</style>