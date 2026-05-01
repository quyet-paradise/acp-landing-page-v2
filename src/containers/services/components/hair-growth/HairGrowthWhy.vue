<template>
    <section class="why-compound">
        <div class="why-compound-inner">
            <div>
                <div
                    style="font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--dls-color-burgundy);font-weight:500;margin-bottom:8px;">THE ARTISAN ADVANTAGE</div>
                <h2 data-aos="fade-up">Why Compounding Makes a Difference</h2>
                <p data-aos="fade-up" data-aos-delay="100">Commercially manufactured hair-loss medications come in a limited range of
                    strengths and formats. In our compounding lab, we prepare the exact active ingredients,
                    concentrations, bases, and packaging your prescriber orders — customized to your scalp condition,
                    tolerance, and lifestyle. We comply with USP &lt;795&gt;/&lt;800&gt; and source USP-grade APIs,
                    compounding without unwanted preservatives, dyes, or fragrances.</p>
            </div>
            <div class="why-highlights">
                <div class="why-highlight" data-aos="fade-up" data-aos-delay="200">
                    <div class="wh-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <div>
                        <h4>USP-Grade Purity</h4>
                        <p>No unwanted preservatives, dyes, or fragrances in your formula.</p>
                    </div>
                </div>
                <div class="why-highlight" data-aos="fade-up" data-aos-delay="300">
                    <div class="wh-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                    </div>
                    <div>
                        <h4>Custom Concentrations</h4>
                        <p>Strengths and combinations compounded to your prescriber's exact specifications.</p>
                    </div>
                </div>
                <div class="why-highlight" data-aos="fade-up" data-aos-delay="400">
                    <div class="wh-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </div>
                    <div>
                        <h4>Prescriber Collaboration</h4>
                        <p>We provide formulation guidance to your dermatologist or PCP.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.why-compound {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.why-compound-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.why-compound h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
    margin-bottom: 24px;
}

.why-compound p {
    font-size: 16px;
    line-height: 145%;
    letter-spacing: 0;
    font-weight: 300;
    color: var(--dls-color-burgundy);
}

.why-highlights {
    display: flex;
    flex-direction: column;
    gap: 20px
}

.why-highlight {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 14px;
    padding: 28px 32px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    transition: transform .3s, box-shadow .3s;
}

.why-highlight:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(61, 30, 16, .06);
}

.wh-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--dls-color-taupe-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.wh-icon svg {
    width: 20px;
    height: 20px;
    color: var(--dls-color-white);
}

.why-highlight h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 17px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 4px;
    margin-top: 0;
    letter-spacing: -1px;
}

.why-highlight p {
    font-size: 14px;
    line-height: 1.55;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin: 0;
}

@media(max-width:1024px) {
    .why-compound-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}

@media(max-width:768px) {
    .why-compound {
        padding: 64px 24px;
    }
}
</style>