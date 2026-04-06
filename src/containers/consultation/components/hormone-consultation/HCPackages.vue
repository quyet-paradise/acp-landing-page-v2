<template>
    <section class="zen-packages" id="hormone-packages">
        <div class="zen-packages-inner">
            <h2 data-aos="fade-up">At-Home Hormone Test Kits</h2>
            <p class="zen-packages-sub" data-aos="fade-up" data-aos-delay="100">Simple saliva collection. Done at home. Every kit includes
                CLIA-certified lab processing and a one-on-one results review with our pharmacist.</p>

            <div class="zen-pkg-grid">
                <div class="zen-pkg-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="zen-pkg-header">
                        <p class="zen-pkg-name">Artisan Essential Hormone Panel</p>
                        <div class="zen-pkg-price">$259</div>
                        <p class="zen-pkg-price-sub">at-home saliva kit + pharmacist review</p>
                    </div>
                    <div class="zen-pkg-body">
                        <ul class="zen-pkg-list">
                            <li><span class="zen-pkg-check">&#10003;</span> Estradiol (E2)</li>
                            <li><span class="zen-pkg-check">&#10003;</span> Progesterone</li>
                            <li><span class="zen-pkg-check">&#10003;</span> Testosterone</li>
                            <li><span class="zen-pkg-check">&#10003;</span> DHEA-S</li>
                            <li><span class="zen-pkg-check">&#10003;</span> Morning Cortisol</li>
                            <li><span class="zen-pkg-check">&#10003;</span> One-on-one pharmacist results review</li>
                        </ul>
                        <p class="zen-pkg-best">Best for: first-time testing or starting your hormone journey</p>
                        <a href="#book-now" class="zen-pkg-btn zen-pkg-btn-outline">Purchase This Kit</a>
                    </div>
                </div>
                <div class="zen-pkg-card featured" data-aos="fade-up" data-aos-delay="200">
                    <div class="pkg-badge">Most Comprehensive</div>
                    <div class="zen-pkg-header">
                        <p class="zen-pkg-name">Artisan Comprehensive Hormone Panel</p>
                        <div class="zen-pkg-price">$359</div>
                        <p class="zen-pkg-price-sub">at-home saliva kit + pharmacist review</p>
                    </div>
                    <div class="zen-pkg-body">
                        <ul class="zen-pkg-list">
                            <li><span class="zen-pkg-check">&#10003;</span> Estradiol (E2)</li>
                            <li><span class="zen-pkg-check">&#10003;</span> Progesterone</li>
                            <li><span class="zen-pkg-check">&#10003;</span> Testosterone</li>
                            <li><span class="zen-pkg-check">&#10003;</span> DHEA-S</li>
                            <li><span class="zen-pkg-check">&#10003;</span> Cortisol x4 (diurnal rhythm)</li>
                            <li><span class="zen-pkg-check">&#10003;</span> One-on-one pharmacist results review</li>
                        </ul>
                        <p class="zen-pkg-best">Best for: fatigue, sleep issues, or suspected adrenal involvement</p>
                        <a href="#book-now" class="zen-pkg-btn zen-pkg-btn-primary">Purchase This Kit</a>
                    </div>
                </div>
            </div>

            <div class="zen-pkg-notes" data-aos="fade-up" data-aos-delay="300">
                <p><strong>Not sure which panel?</strong> Start with a free discovery call and we'll help you choose
                    based on your symptoms.</p>
                <p
                    style="margin-top:12px;font-style:italic;font-family:var(--dls-font-spezia-book-b);font-size:17px;color:var(--dls-color-burgundy)">
                    Already have recent labs? Bring them in — consultation-only: $85.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.zen-packages {
    padding: var(--dls-1p5cm) 40px;
    background: var(--dls-color-sagelight);
    position: relative;
}

.zen-packages-inner {
    max-width: 1000px;
    margin: 0 auto;
}

.zen-packages h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(24px, 3vw, 38px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
}

.zen-packages-sub {
    text-align: center;
    font-size: 16px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 560px;
    margin: 0 auto 56px;
}

.zen-pkg-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 780px;
    margin: 0 auto 40px;
}

.zen-pkg-card {
    background: var(--dls-color-white);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(212, 201, 184, .3);
    transition: transform .5s cubic-bezier(.34, 1.56, .64, 1), box-shadow .5s;
    position: relative;
}

.zen-pkg-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(61, 30, 16, .06);
}

.zen-pkg-card.featured {
    border: 2px solid var(--dls-color-burgundy);
    box-shadow: 0 8px 30px rgba(61, 30, 16, .08);
}

.pkg-badge {
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--dls-color-burgundy);
    color: var(--dls-color-creamlight);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .15em;
    text-transform: uppercase;
    padding: 5px 16px;
    border-radius: 0 0 12px 12px;
}

.zen-pkg-header {
    padding: 36px 28px 20px;
    text-align: center;
    border-bottom: 1px solid rgba(212, 201, 184, .25);
}

.zen-pkg-name {
    font-size: 11px;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--dls-color-redclay);
    font-weight: 600;
    margin-bottom: 8px;
}

.zen-pkg-price {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 48px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1;
}

.zen-pkg-price-sub {
    font-size: 13px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-top: 4px;
}

.zen-pkg-body {
    padding: 24px 28px 28px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.zen-pkg-list {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    flex: 1;
}

.zen-pkg-list li {
    font-size: 14px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    padding: 6px 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.5;
}

.zen-pkg-check {
    color: var(--dls-color-moss);
    font-weight: 700;
    flex-shrink: 0;
    font-size: 15px;
}

.zen-pkg-best {
    font-size: 13px;
    color: var(--dls-color-burgundy);
    font-style: italic;
    font-weight: 300;
    margin-bottom: 16px;
}

.zen-pkg-btn {
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

.zen-pkg-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, .1);
}

.zen-pkg-btn-primary {
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
}

.zen-pkg-btn-outline {
    background: transparent;
    color: var(--dls-color-burgundy);
    border: 1px solid var(--dls-color-burgundy);
}

.zen-pkg-notes {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
}

.zen-pkg-notes p {
    font-size: 14px;
    color: var(--dls-color-burgundy);
    font-weight: 400;
    line-height: 1.7;
}

@media(max-width:1024px) {
    .zen-pkg-grid {
        grid-template-columns: 1fr;
        max-width: 400px;
    }

    .zen-pkg-card.featured {
        transform: none;
    }
}

@media(max-width:768px) {
    .zen-packages {
        padding: 64px 24px;
    }
}
</style>