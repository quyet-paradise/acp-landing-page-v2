<template>
    <section class="hero-split">
        <div class="hero-split-text">
            <div class="breadcrumb" data-aos="fade-up"><a href="/">Home</a><span>›</span><a href="#">Services</a><span>›</span>Book
                a Hormone Consultation</div>
            <h1 data-aos="fade-up" data-aos-delay="100">Book a Hormone Consultation</h1>
            <p class="hero-sub" data-aos="fade-up" data-aos-delay="200">No prescription needed. No referral required. Start with a free discovery
                call and we'll guide you from testing to treatment — one step at a time.</p>
            <a href="#book-now" class="hero-cta" data-aos="fade-up" data-aos-delay="300">Book Your Free Discovery Call<svg viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg></a>
            <p data-aos="fade-up" data-aos-delay="300"
                style="margin-top:16px;font-size:14px;color:var(--text-body);font-weight:300;position:relative;z-index:1">
                or text <strong style="font-weight:500;color:var(--brown-dark)">Hormones</strong> to <a
                    href="sms:+17146228460&body=Hormones"
                    style="color:var(--brown-dark);font-weight:500;text-decoration:none">(714) 622-8460</a> to get
                started</p>
            <div class="hero-trust" data-aos="fade-up" data-aos-delay="400">
                <span><svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg> At-home saliva testing</span>
                <span><svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg> No Rx needed to start</span>
                <span><svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg> Results in 5–7 days</span>
                <span><svg viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg> Compound ready in 2–3 days</span>
            </div>
        </div>
        <div class="hero-split-image">
            <img src="/images/services/hero-image/hrt.jpg" alt="Woman applying hormone cream to skin">
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 580px;
    background: var(--dls-color-cream);
    overflow: hidden;
}

.hero-split-text {
    padding: 80px 60px 80px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.hero-split-text::before {
    content: '';
    position: absolute;
    top: -200px;
    left: -200px;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(166, 124, 91, .06);
    border-radius: 50%;
}

.hero-split-text .breadcrumb {
    font-size: 12px;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 32px;
    opacity: .7;
    position: relative;
    z-index: 1;
}

.hero-split-text .breadcrumb a {
    color: var(--dls-color-burgundy);
    text-decoration: none;
}

.hero-split-text .breadcrumb a:hover {
    text-decoration: underline;
}

.hero-split-text .breadcrumb span {
    margin: 0 8px;
    opacity: .6;
}

.hero-split-text h1 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 400;
    line-height: 1.1;
    color: var(--dls-color-burgundy);
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
}

.hero-split-text .hero-sub {
    font-size: 17px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 520px;
    margin-bottom: 36px;
    position: relative;
    z-index: 1;
}

.hero-split-text .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    padding: 18px 40px;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 60px;
    transition: transform .3s, box-shadow .3s;
    position: relative;
    z-index: 1;
    align-self: flex-start;
}

.hero-split-text .hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .12);
}

.hero-split-text .hero-cta svg {
    width: 16px;
    height: 16px;
    transition: transform .3s;
}

.hero-split-text .hero-cta:hover svg {
    transform: translateX(4px);
}

.hero-trust {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 36px;
    font-size: 13px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    position: relative;
    z-index: 1;
}

.hero-trust span {
    display: flex;
    align-items: center;
    gap: 6px;
}

.hero-trust svg {
    width: 16px;
    height: 16px;
    fill: var(--dls-color-redclay);
}

.hero-split-image {
    position: relative;
    overflow: hidden;
}

.hero-split-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.hero-split-image::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--dls-color-cream) 0%, transparent 8%);
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .hero-split {
        grid-template-columns: 1fr;
        min-height: auto;
    }

    .hero-split-text {
        padding: 48px 24px;
    }

    .hero-split-image {
        height: 360px;
    }

    .hero-split-image::after {
        background: none;
    }

    .hero-trust {
        flex-direction: column;
        gap: 10px;
    }
}
</style>