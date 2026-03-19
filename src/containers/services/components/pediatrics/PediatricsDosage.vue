<template>
    <section class="dosage">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Kid-Approved Dosage Forms</h2>
        <p class="dosage-sub" data-aos="fade-up" data-aos-delay="100">Over 30 flavors available — from bubble-gum to mango</p>

        <div class="dosage-grid">
            <div class="dosage-item" data-aos="fade-up" data-aos-delay="100">
                <div class="dosage-icon">🧴</div>
                <h4>Flavored Syrups &amp; Suspensions</h4>
            </div>
            <div class="dosage-item" data-aos="fade-up" data-aos-delay="200">
                <div class="dosage-icon">🍬</div>
                <h4>Gummy Troches &amp; Chewies</h4>
            </div>
            <div class="dosage-item" data-aos="fade-up" data-aos-delay="300">
                <div class="dosage-icon">💊</div>
                <h4>Rapid-Dissolve Films &amp; Tablets</h4>
            </div>
            <div class="dosage-item" data-aos="fade-up" data-aos-delay="400">
                <div class="dosage-icon">🧪</div>
                <h4>Transdermal Gels</h4>
            </div>
            <div class="dosage-item" data-aos="fade-up" data-aos-delay="500">
                <div class="dosage-icon">✨</div>
                <h4>Effervescent Powders &amp; Drink Sticks</h4>
            </div>
            <div class="dosage-item" data-aos="fade-up" data-aos-delay="600">
                <div class="dosage-icon">💎</div>
                <h4>Suppositories &amp; Mini Caps</h4>
            </div>
            <div class="dosage-item" data-aos="fade-up" data-aos-delay="700">
                <div class="dosage-icon">🍭</div>
                <h4>Medicated Lollipops &amp; Lozenges</h4>
            </div>
            <div class="dosage-item" data-aos="fade-up" data-aos-delay="800">
                <div class="dosage-icon">🌿</div>
                <h4>Allergen-Free Options</h4>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.dosage {
    padding: 100px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.dosage h2 {
    font-family: "SpeziaBookB";
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.dosage-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-bottom: 56px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.dosage-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
}

.dosage-item {
    padding: 36px 24px;
    border: 1px solid var(--dls-color-border);
    text-align: center;
    transition: background .3s;
}

.dosage-item:last-child {
    border-right: 1px solid var(--dls-color-border);
}

.dosage-item:hover {
    background: rgba(200, 170, 139, .1);
}

.dosage-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 14px;
    border-radius: 50%;
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
}

.dosage-item h4 {
    font-family: "SpeziaBookB";
    font-size: 16px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 6px;
    line-height: 1.3;
    letter-spacing: -1px;
}

@media(max-width:1024px) {
    .dosage {
        grid-template-columns: repeat(2, 1fr);
    }

    .dosage-item:nth-child(2) {
        border-right: 1px solid var(--dls-color-border);
    }
}

@media(max-width:768px) {
    .dosage {
        padding: 64px 24px;
    }

    .dosage-grid {
        grid-template-columns: 1fr 1fr;
    }

    .dosage-item {
        border-right: 1px solid var(--dls-color-border) !important;
    }
}
</style>