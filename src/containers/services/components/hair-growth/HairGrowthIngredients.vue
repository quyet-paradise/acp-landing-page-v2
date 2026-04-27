<template>
    <section class="ingredients-section">
        <div class="ingredients-inner">
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
            <h2 data-aos="fade-up">Active Ingredients We Customize</h2>
            <p class="ingredients-sub" data-aos="fade-up" data-aos-delay="100">Common ingredients prescribers order for compounded hair-growth preparations</p>

            <div class="ingredient-cards">
                <div class="ingredient-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="ing-name">Minoxidil</div>
                    <div class="ing-how">Commonly prescribed by dermatologists in customized topical or oral formulations for hair-related concerns</div>
                    <div class="ing-forms">
                        <span class="ing-pill">Solutions &amp; foams</span>
                        <span class="ing-pill">Oral capsules</span>
                    </div>
                </div>
                <div class="ingredient-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="ing-name">Finasteride</div>
                    <div class="ing-how">Prescribers may order finasteride in customized topical or sublingual forms not commercially available</div>
                    <div class="ing-forms">
                        <span class="ing-pill">Sublingual troches</span>
                        <span class="ing-pill">Topical lotions</span>
                    </div>
                </div>
                <div class="ingredient-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="ing-name">Dutasteride</div>
                    <div class="ing-how">A dual 5-α-reductase inhibitor that prescribers may order when an alternative formulation is needed</div>
                    <div class="ing-forms">
                        <span class="ing-pill">Oral capsules</span>
                        <span class="ing-pill">Topical gel</span>
                    </div>
                </div>
                <div class="ingredient-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="ing-name">Spironolactone</div>
                    <div class="ing-how">An anti-androgen that prescribers may order in compounded topical or oral forms
                        for female-pattern hair concerns</div>
                    <div class="ing-forms">
                        <span class="ing-pill">Topical foam</span>
                        <span class="ing-pill">Oral</span>
                    </div>
                </div>
                <div class="ingredient-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="ing-name">Adjuncts</div>
                    <div class="ing-how">Ketoconazole, caffeine, biotin, tretinoin, latanoprost, melatonin — additional ingredients prescribers may include in compounded shampoos or night serums</div>
                    <div class="ing-forms">
                        <span class="ing-pill">Shampoos</span>
                        <span class="ing-pill">Night serums</span>
                    </div>
                </div>
            </div>

            <p class="ingredients-note">All prescriptions require physician authorization. Compounded preparations are not FDA-approved. We provide formulation guidance to your dermatologist or PCP.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.ingredients-section {
    background: var(--dls-color-olive);
    padding: var(--dls-1p5cm) 60px;
    position: relative;
    overflow: hidden;
}

.ingredients-section::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(255, 253, 245, .1);
    border-radius: 50%;
}

.ingredients-section::after {
    content: '';
    position: absolute;
    bottom: -160px;
    left: -80px;
    width: 400px;
    height: 400px;
    border: 1px solid rgba(255, 253, 245, .06);
    border-radius: 50%;
}

.ingredients-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.ingredients-section h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-lemonice);
    text-align: center;
    margin-bottom: 16px;
}

.ingredients-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-lemonice);
    font-weight: 300;
    margin-bottom: 56px;
}

.ingredient-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.ingredient-card {
    background: rgba(255, 253, 245, .08);
    border: 1px solid rgba(255, 253, 245, .12);
    border-radius: 14px;
    padding: 36px 28px;
    transition: background .3s, transform .3s;
}

.ingredient-card:hover {
    background: rgba(255, 253, 245, .15);
    transform: translateY(-3px);
}

.ingredient-card.wide {
    grid-column: span 1;
}

.ing-name {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 21px;
    font-weight: 400;
    color: var(--dls-color-lemonice);
    margin-bottom: 12px;
    line-height: 1.25;
}

.ing-how {
    font-size: 14px;
    line-height: 1.6;
    color: var(--dls-color-lemonice);
    font-weight: 300;
    margin-bottom: 16px;
}

.ing-forms {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.ing-pill {
    display: inline-block;
    padding: 5px 14px;
    background: rgba(255, 253, 245, .1);
    border-radius: 20px;
    font-size: 11.5px;
    font-weight: 500;
    color: var(--dls-color-sunshine);
    letter-spacing: .03em;
}

.ingredients-note {
    text-align: center;
    margin-top: 36px;
    font-size: 13.5px;
    font-style: italic;
    color: var(--dls-color-lemonice);
    font-weight: 300;
    line-height: 1.6;
}

@media(max-width:1024px) {
    .ingredient-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:768px) {
    .ingredients-section {
        padding: 64px 24px;
    }

    .ingredient-cards {
        grid-template-columns: 1fr;
    }
}
</style>