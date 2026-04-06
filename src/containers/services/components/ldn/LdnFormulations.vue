<template>
    <section class="formulations">
        <div class="formulations-inner">
            <svg class="mortar-icon mortar-icon-light" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg" style="color:var(--dls-color-sunlight);opacity:0.5;">
                <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                    stroke-width="1.5" fill="none" />
                <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z"
                    stroke="currentColor" stroke-width="1.5" fill="none" />
                <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                    fill="none" />
                <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <h2 data-aos="fade-up">Available LDN Formulations</h2>
            <p class="formulations-sub" data-aos="fade-up" data-aos-delay="100">Five delivery forms your prescriber can choose from</p>

            <div class="form-cards">
                <div class="form-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="form-card-name">Plant-Based Capsules</div>
                    <div class="form-card-why">Simple, travel-proof, dye free</div>
                    <span class="form-card-best">Best for most adults</span>
                </div>
                <div class="form-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="form-card-name">Rapid Dissolve Tablets</div>
                    <div class="form-card-why">Melts on the tongue, no water needed</div>
                    <span class="form-card-best">Kids &amp; pill-averse</span>
                </div>
                <div class="form-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="form-card-name">Sublingual Peppermint Drops</div>
                    <div class="form-card-why">Sublingual delivery, allows micro titration</div>
                    <span class="form-card-best">Sensitive stomachs</span>
                </div>
                <div class="form-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="form-card-name">Transdermal Cream</div>
                    <div class="form-card-why">Rub on wrist — bypasses the gut entirely</div>
                    <span class="form-card-best">Severe GI issues &amp; pediatrics</span>
                </div>
                <div class="form-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="form-card-name">Slow Release Capsules</div>
                    <div class="form-card-why">Designed for extended release throughout the day</div>
                    <span class="form-card-best">Light sleepers</span>
                </div>
            </div>

            <p class="form-note">All forms can be compounded lactose free and gluten free.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.formulations {
    background: var(--dls-color-olive);
    padding: var(--dls-1p5cm) 60px;
    position: relative;
    overflow: hidden;
}

.formulations::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(255, 253, 245, 0.1);
    border-radius: 50%;
}

.formulations::after {
    content: '';
    position: absolute;
    bottom: -180px;
    left: -100px;
    width: 400px;
    height: 400px;
    border: 1px solid rgba(255, 253, 245, 0.06);
    border-radius: 50%;
}

.formulations-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.formulations h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(30px, 3vw, 42px);
    font-weight: 400;
    color: var(--dls-color-lemonice);
    text-align: center;
    margin-bottom: 16px;
}

.formulations-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-lemonice);
    font-weight: 300;
    margin-bottom: 56px;
}

.form-cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
}

.form-card {
    background: rgba(255, 253, 245, 0.08);
    border: 1px solid rgba(255, 253, 245, 0.12);
    border-radius: 14px;
    padding: 32px 24px;
    text-align: center;
    transition: background 0.3s, transform 0.3s;
}

.form-card:hover {
    background: rgba(255, 253, 245, 0.15);
    transform: translateY(-3px);
}

.form-card-name {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-lemonice);
    margin-bottom: 12px;
    line-height: 1.25;
}

.form-card-why {
    font-size: 16px;
    line-height: 1.55;
    color: var(--dls-color-lemonice);
    font-weight: 300;
    margin-bottom: 16px;
}

.form-card-best {
    display: inline-block;
    padding: 5px 14px;
    background: rgba(255, 253, 245, 0.1);
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--dls-color-sunshine);
    letter-spacing: 0.03em;
}

.form-note {
    text-align: center;
    margin-top: 36px;
    font-size: 16px;
    font-style: italic;
    color: var(--dls-color-lemonice);
    font-weight: 300;
}

@media (max-width: 1024px) {
    .form-cards {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .formulations {
        padding: 64px 24px;
    }

    .form-cards {
        grid-template-columns: 1fr 1fr;
    }
}
</style>