<template>
    <section class="get-started">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Not Sure Where to Start?</h2>
        <p class="get-started-sub" data-aos="fade-up" data-aos-delay="100">You don't need a prescription or a referral to find out what's going on
            with your hormones. Here's how we help you take the first step.</p>

        <div class="get-started-grid">
            <div class="get-started-card" data-aos="fade-up" data-aos-delay="100">
                <div class="gs-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 3h6v11l3 4H6l3-4V3z" />
                        <path d="M8 3h8" />
                    </svg></div>
                <p class="gs-step-label">Step 1</p>
                <h3>Test</h3>
                <p>Get an at-home hormone test kit — saliva and blood spot, done from the comfort of home. No lab visit.
                    No needles. No referral needed.</p>
            </div>
            <div class="get-started-card" data-aos="fade-up" data-aos-delay="200">
                <div class="gs-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg></div>
                <p class="gs-step-label">Step 2</p>
                <h3>Learn</h3>
                <p>Our pharmacist reviews your results with you one-on-one. You'll understand exactly what's high, low,
                    or out of balance.</p>
            </div>
            <div class="get-started-card" data-aos="fade-up" data-aos-delay="300">
                <div class="gs-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg></div>
                <p class="gs-step-label">Step 3</p>
                <h3>Connect</h3>
                <p>We refer you to a hormone-specialized prescriber — with your labs already in hand. Your compounded
                    prescription comes right back to us.</p>
            </div>
        </div>

        <div class="gs-cta-wrap">
            <a href="#hormone-packages" class="hero-cta" style="background:var(--dls-color-sunshine);color:var(--dls-color-burgundy)">Book
                Your Consultation<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg></a>
            <div class="gs-trust">
                <span><svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg> At-home testing</span>
                <span><svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg> No Rx needed to start</span>
                <span><svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg> Results in 5–7 days</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.get-started {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.get-started h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.get-started-sub {
    text-align: center;
    font-size: 16px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 640px;
    margin: 0 auto 56px;
}

.get-started-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 48px;
}

.get-started-card {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 40px 32px;
    text-align: center;
    transition: transform .3s, box-shadow .3s;
}

.get-started-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(61, 30, 16, .07);
}

.gs-icon {
    width: 56px;
    height: 56px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: var(--dls-color-taupe-bg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.gs-icon svg {
    width: 24px;
    height: 24px;
    color: var(--dls-color-white);
}

.get-started-card h3 {
    font-family: 'SpeziaBookB';
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
    line-height: 1.25;
}

.get-started-card p {
    font-size: 14.5px;
    line-height: 1.65;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

.gs-step-label {
    font-size: 11px;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--dls-color-redclay);
    font-weight: 500;
    margin-bottom: 8px;
}

.gs-cta-wrap {
    text-align: center;
}

.gs-trust {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 24px;
    font-size: 13px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

.gs-trust span {
    display: flex;
    align-items: center;
    gap: 6px;
}

.gs-trust svg {
    width: 16px;
    height: 16px;
    fill: var(--dls-color-redclay);
}

@media(max-width:1024px) {
    .get-started-grid {
        grid-template-columns: 1fr;
    }
}

@media(max-width:768px) {
    .get-started {
        padding: 64px 24px;
    }
}
</style>