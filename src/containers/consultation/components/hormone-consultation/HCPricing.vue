<template>
    <section class="zen-pricing">
        <div class="zen-pricing-inner">
            <h3 data-aos="fade-up">What Does Compounded HRT Cost?</h3>
            <p data-aos="fade-up" data-aos-delay="100"
                style="font-size:15px;line-height:1.7;color:var(--dls-color-burgundy);font-weight:300;margin-bottom:32px">Pricing
                depends on your prescribed formulation, dosage, and delivery form. Here's what most patients can expect:
            </p>

            <div class="zen-price-cards" data-aos="fade-up" data-aos-delay="200">
                <div class="zen-price-card">
                    <p class="label">Topical Cream/Gel</p>
                    <p class="price">$45–$90</p>
                    <p class="per">per month</p>
                </div>
                <div class="zen-price-card">
                    <p class="label">Oral Capsules</p>
                    <p class="price">$40–$80</p>
                    <p class="per">per month</p>
                </div>
                <div class="zen-price-card">
                    <p class="label">Troches/Lozenges</p>
                    <p class="price">$50–$120</p>
                    <p class="per">per month</p>
                </div>
            </div>

            <p data-aos="fade-up" data-aos-delay="300"
                style="font-size:13px;color:var(--dls-color-burgundy);font-weight:300;font-style:italic;line-height:1.6">Many
                patients find our pricing competitive with — or lower than — commercial copays. We're happy to provide a
                quote once your prescriber sends us your Rx.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.zen-pricing {
    padding: var(--dls-1p5cm) 40px;
    background: var(--dls-color-cream);
}

.zen-pricing-inner {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.zen-pricing h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(22px, 2.4vw, 30px);
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.zen-pricing>div>p {
    font-size: 15px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-bottom: 32px;
}

.zen-price-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
}

.zen-price-card {
    background: var(--dls-color-white);
    border: 1px solid rgba(212, 201, 184, .25);
    border-radius: 16px;
    padding: 28px 16px;
    text-align: center;
    transition: transform .3s;
}

.zen-price-card:hover {
    transform: translateY(-2px);
}

.zen-price-card .label {
    font-size: 11px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--dls-color-redclay);
    font-weight: 600;
    margin-bottom: 8px;
}

.zen-price-card .price {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 30px;
    color: var(--dls-color-burgundy);
    line-height: 1;
}

.zen-price-card .per {
    font-size: 12px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-top: 4px;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .zen-pricing {
        padding: 64px 24px;
    }

    .zen-price-cards {
        grid-template-columns: 1fr;
        max-width: 280px;
        margin: 0 auto 24px;
    }
}
</style>