<template>
    <section class="packages" id="hormone-packages">
        <div class="packages-inner">
            <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                style="color:var(--brown-dark)">
                <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                    stroke-width="1.5" fill="none" />
                <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z"
                    stroke="currentColor" stroke-width="1.5" fill="none" />
                <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                    fill="none" />
                <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <h2 data-aos="fade-up">Testing &amp; Consultation Packages</h2>
            <p class="packages-sub" data-aos="fade-up" data-aos-delay="100">Every package includes an at-home test kit and a personal one-on-one
                consultation with our pharmacist.</p>

            <div class="pkg-grid">
                <div class="pkg-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="pkg-header">
                        <p class="pkg-name">Starter Panel</p>
                        <div class="pkg-price">$249</div>
                        <p class="pkg-price-sub">test kit + consultation</p>
                    </div>
                    <div class="pkg-body">
                        <ul class="pkg-list">
                            <li><span class="pkg-check">&#10003;</span> Estradiol, Progesterone, Testosterone, DHEA-S,
                                Cortisol</li>
                            <li><span class="pkg-check">&#10003;</span> 30-minute pharmacist consultation</li>
                            <li><span class="pkg-check">&#10003;</span> Personalized results summary</li>
                            <li><span class="pkg-check">&#10003;</span> Prescriber referral if appropriate</li>
                        </ul>
                        <p class="pkg-best">Best for: first-time testing or symptom check</p>
                        <a href="#" class="pkg-btn pkg-btn-outline">Book This Package</a>
                    </div>
                </div>
                <div class="pkg-card featured" data-aos="fade-up" data-aos-delay="200">
                    <div class="pkg-badge">Most Popular</div>
                    <div class="pkg-header">
                        <p class="pkg-name">Comprehensive Panel</p>
                        <div class="pkg-price">$549</div>
                        <p class="pkg-price-sub">test kit + consultation</p>
                    </div>
                    <div class="pkg-body">
                        <ul class="pkg-list">
                            <li><span class="pkg-check">&#10003;</span> Full hormone panel + diurnal cortisol (4x)</li>
                            <li><span class="pkg-check">&#10003;</span> Complete thyroid panel (TSH, FT3, FT4, TPO
                                antibodies)</li>
                            <li><span class="pkg-check">&#10003;</span> 45-minute pharmacist consultation</li>
                            <li><span class="pkg-check">&#10003;</span> Personalized summary + prescriber referral</li>
                        </ul>
                        <p class="pkg-best">Best for: full picture before starting BHRT</p>
                        <a href="#" class="pkg-btn pkg-btn-primary">Book This Package</a>
                    </div>
                </div>
                <div class="pkg-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="pkg-header">
                        <p class="pkg-name">Weight + Metabolic</p>
                        <div class="pkg-price">$649</div>
                        <p class="pkg-price-sub">test kit + consultation</p>
                    </div>
                    <div class="pkg-body">
                        <ul class="pkg-list">
                            <li><span class="pkg-check">&#10003;</span> Everything in Comprehensive, plus:</li>
                            <li><span class="pkg-check">&#10003;</span> Vitamin D, Fasting Insulin, HbA1c</li>
                            <li><span class="pkg-check">&#10003;</span> 45-minute pharmacist consultation</li>
                            <li><span class="pkg-check">&#10003;</span> Full metabolic + hormonal assessment</li>
                        </ul>
                        <p class="pkg-best">Best for: weight gain + metabolic concerns</p>
                        <a href="#" class="pkg-btn pkg-btn-outline">Book This Package</a>
                    </div>
                </div>
            </div>

            <div class="pkg-notes">
                <p><strong>Already have lab results?</strong> Book a consultation-only appointment for $75–$125.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.packages {
    padding: var(--dls-1p5cm) 60px;
    background: var(--dls-color-sunshine);
    position: relative;
}

.packages-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.packages h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.packages-sub {
    text-align: center;
    font-size: 16px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto 56px;
}

.pkg-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1050px;
    margin: 0 auto 40px;
}

.pkg-card {
    background: var(--dls-color-creamlight);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform .3s, box-shadow .3s;
}

.pkg-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(61, 30, 16, .07);
}

.pkg-card.featured {
    border: 2px solid var(--dls-color-burgundy);
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(61, 30, 16, .12);
}

.pkg-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--dls-color-burgundy);
    color: var(--dls-color-creamlight);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .15em;
    text-transform: uppercase;
    padding: 5px 16px;
    border-radius: 20px;
}

.pkg-header {
    padding: 32px 28px 20px;
    text-align: center;
    border-bottom: 1px solid var(--dls-color-border);
}

.pkg-name {
    font-size: 11px;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--dls-color-redclay);
    font-weight: 600;
    margin-bottom: 8px;
}

.pkg-price {
    font-family: 'SpeziaBookB';
    font-size: 48px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1;
}

.pkg-price-sub {
    font-size: 13px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-top: 4px;
}

.pkg-body {
    padding: 24px 28px 28px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.pkg-list {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    flex: 1;
}

.pkg-list li {
    font-size: 14px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    padding: 6px 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.5;
}

.pkg-check {
    color: var(--dls-color-redclay);
    font-weight: 700;
    flex-shrink: 0;
    font-size: 15px;
}

.pkg-best {
    font-size: 13px;
    color: var(--dls-color-burgundy);
    font-style: italic;
    font-weight: 300;
    margin-bottom: 16px;
}

.pkg-btn {
    display: block;
    text-align: center;
    padding: 16px 24px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 60px;
    transition: transform .3s, box-shadow .3s;
}

.pkg-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, .12);
}

.pkg-btn-primary {
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
}

.pkg-btn-outline {
    background: transparent;
    color: var(--dls-color-burgundy);
    border: 1px solid var(--dls-color-burgundy);
}

.pkg-notes {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.pkg-notes p {
    font-size: 14px;
    color: var(--dls-color-burgundy);
    font-weight: 400;
    line-height: 1.7;
}

@media(max-width:1024px) {
    .pkg-grid {
        grid-template-columns: 1fr;
        max-width: 420px;
    }

    .pkg-card.featured {
        transform: none;
    }

}

@media(max-width:768px) {
    .packages {
        padding: 64px 24px;
    }
}
</style>