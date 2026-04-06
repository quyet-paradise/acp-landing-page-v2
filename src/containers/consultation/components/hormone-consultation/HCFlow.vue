<template>
    <section class="zen-flow">
        <div class="zen-flow-inner">
            <h2 data-aos="fade-up">What a Consultation Feels Like</h2>
            <p class="zen-flow-sub" data-aos="fade-up" data-aos-delay="100">Not a checklist. Not a sales pitch. Just presence, knowledge, and real
                answers.</p>

            <div class="zen-flow-grid">
                <div class="zen-flow-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="zen-flow-icon"><svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg></div>
                    <h4>Unhurried Time</h4>
                    <p>No rushed appointments. Your pharmacist gives you the time and space your questions deserve.</p>
                </div>
                <div class="zen-flow-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="zen-flow-icon"><svg viewBox="0 0 24 24">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg></div>
                    <h4>Answers, Not Guesswork</h4>
                    <p>Understand what your symptoms actually mean — rooted in your unique hormone levels, not
                        assumptions.</p>
                </div>
                <div class="zen-flow-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="zen-flow-icon"><svg viewBox="0 0 24 24">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                        </svg></div>
                    <h4>A Plan for Your Body</h4>
                    <p>No cookie-cutter protocols. Treatment built around your results, your lifestyle, your goals.</p>
                </div>
                <div class="zen-flow-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="zen-flow-icon"><svg viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg></div>
                    <h4>A Partner, Not a Provider</h4>
                    <p>We follow up, adjust, and stay in your corner — from your first call through every refill.</p>
                </div>
                <div class="zen-flow-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="zen-flow-icon"><svg viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg></div>
                    <h4>A Safe, Quiet Space</h4>
                    <p>Every question is welcome. We're here to educate, empower, and support — never to judge.</p>
                </div>
                <div class="zen-flow-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="zen-flow-icon"><svg viewBox="0 0 24 24">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg></div>
                    <h4>Clarity on Your Next Step</h4>
                    <p>Walk away knowing exactly what to do — whether that's testing, treatment, or simply more
                        information.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.zen-flow {
    padding: var(--dls-1p5cm) 40px;
    background: var(--dls-color-warmstone);
    position: relative;
}

.zen-flow-inner {
    max-width: 1000px;
    margin: 0 auto;
}

.zen-flow h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(24px, 3vw, 38px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
}

.zen-flow-sub {
    text-align: center;
    font-size: 16px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto 64px;
}

.zen-flow-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.zen-flow-card {
    background: rgba(255, 253, 245, .7);
    backdrop-filter: blur(4px);
    border-radius: 20px;
    padding: 40px 28px;
    text-align: center;
    border: 1px solid rgba(212, 201, 184, .3);
    transition: transform .5s cubic-bezier(.34, 1.56, .64, 1), box-shadow .5s;
}

.zen-flow-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(61, 30, 16, .06);
}

.zen-flow-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--dls-color-sagelight);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
}

.zen-flow-icon svg {
    width: 22px;
    height: 22px;
    stroke: var(--dls-color-burgundy);
    fill: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.zen-flow-card h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 18px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    letter-spacing: -1px;
}

.zen-flow-card p {
    font-size: 14px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    line-height: 1.65;
}

@media(max-width:1024px) {
    .zen-flow-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:768px) {
    .zen-flow {
        padding: 64px 24px;
    }

    .zen-flow-grid {
        grid-template-columns: 1fr;
    }
}
</style>