<template>
    <section class="challenges">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">How Compounding Changes the Game</h2>
        <p class="challenges-sub" data-aos="fade-up" data-aos-delay="100">Six common pediatric hurdles compounding can help address</p>

        <div class="challenge-grid">
            <div class="challenge-card" data-aos="fade-up" data-aos-delay="100">
                <div class="ch-challenge">Tiny, Weight-Based Doses</div>
                <div class="ch-solution">Micro-suspensions or mini capsules measured to the milligram — no risky
                    tablet-splitting needed.</div>
                <div class="ch-why">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Precise every time
                </div>
            </div>
            <div class="challenge-card" data-aos="fade-up" data-aos-delay="200">
                <div class="ch-challenge">Sensory &amp; Taste Aversions</div>
                <div class="ch-solution">Over 30 natural flavors — bubble-gum, marshmallow, mango. Sweetened without
                    sugar if needed.</div>
                <div class="ch-why">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Fewer tears at dose time
                </div>
            </div>
            <div class="challenge-card" data-aos="fade-up" data-aos-delay="300">
                <div class="ch-challenge">Swallowing Difficulties</div>
                <div class="ch-solution">Alcohol-free liquid concentrates and effervescent powders that glide through
                    tubes and fragile tummies.</div>
                <div class="ch-why">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Gentle on little stomachs
                </div>
            </div>
            <div class="challenge-card" data-aos="fade-up" data-aos-delay="400">
                <div class="ch-challenge">Chronic Long-Term Therapy</div>
                <div class="ch-solution">Sustained-release suspensions, transdermal gels, or rapid-dissolve films for
                    less frequent dosing.</div>
                <div class="ch-why">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Better school-day adherence
                </div>
            </div>
            <div class="challenge-card" data-aos="fade-up" data-aos-delay="500">
                <div class="ch-challenge">Multiple Allergies</div>
                <div class="ch-solution">Dye-, gluten-, soy-, dairy-, and peanut-free formulations based on request.
                </div>
                <div class="ch-why">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Peace of mind for parents
                </div>
            </div>
            <div class="challenge-card" data-aos="fade-up" data-aos-delay="600">
                <div class="ch-challenge">Nausea or Vomiting</div>
                <div class="ch-solution">Prescribers may order suppositories or topical gels as an alternative delivery
                    route when oral administration is not feasible.</div>
                <div class="ch-why">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Alternative when oral routes aren't feasible
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.challenges {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.challenges h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.challenges-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-bottom: 56px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
}

.challenge-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.challenge-card {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 36px 32px;
    transition: transform .3s, box-shadow .3s;
    display: flex;
    flex-direction: column;
}

.challenge-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(61, 30, 16, .07);
}

.ch-challenge {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
    line-height: 1.25;
}

.ch-solution {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-bottom: 16px;
    flex: 1;
}

.ch-why {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 16px;
    border-top: 1px solid var(--dls-color-border);
    font-size: 13px;
    color: var(--dls-color-burgundy);
    font-weight: 500;
    letter-spacing: .02em;
}

.ch-why svg {
    width: 16px;
    height: 16px;
    color: var(--dls-color-taupe);
    flex-shrink: 0;
}

@media(max-width:1024px) {
    .challenge-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:768px) {
    .challenges {
        padding: 64px 24px;
    }

    .challenge-grid {
        grid-template-columns: 1fr;
    }
}
</style>