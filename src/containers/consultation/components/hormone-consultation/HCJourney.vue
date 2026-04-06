<template>
    <section class="zen-journey">
        <div class="zen-journey-inner">
            <h2 data-aos="fade-up">Your Journey, Step by Step</h2>
            <p class="zen-journey-sub" data-aos="fade-up" data-aos-delay="100">Simple. Gentle. At your pace.</p>

            <div class="zen-steps-grid" data-aos="fade-up" data-aos-delay="200">
                <div class="zen-step">
                    <div class="zen-step-line">
                        <div class="zen-step-dot"><span>1</span></div>
                    </div>
                    <div class="zen-step-body">
                        <h4>Discovery Call</h4>
                        <p>Book a free, no-pressure call with our pharmacist (usually 10–15 minutes). We'll learn about
                            your symptoms and help you choose the right test — or review labs you already have.</p>
                    </div>
                </div>

                <div class="zen-step">
                    <div class="zen-step-line">
                        <div class="zen-step-dot"><span>4</span></div>
                    </div>
                    <div class="zen-step-body">
                        <h4>Custom Compounding</h4>
                        <p>Once your prescriber writes the Rx, we compound the exact dose, combination, and delivery
                            form they order — ready in 2–3 business days.</p>
                    </div>
                </div>

                <div class="zen-step">
                    <div class="zen-step-line">
                        <div class="zen-step-dot"><span>2</span></div>
                    </div>
                    <div class="zen-step-body">
                        <h4>Test at Home</h4>
                        <p>Collect a simple saliva sample at home — no needles, no lab appointment. We serve as the
                            ordering provider, so no Rx is needed. Results arrive in 5–7 business days.</p>
                    </div>
                </div>

                <div class="zen-step">
                    <div class="zen-step-line">
                        <div class="zen-step-dot"><span>5</span></div>
                    </div>
                    <div class="zen-step-body">
                        <h4>Ongoing Care</h4>
                        <p>Hormones typically take 6–8 weeks to fully stabilize. Our pharmacist follows up around the
                            one-month mark to check on your progress, and works with your prescriber to recommend any
                            adjustments.</p>
                    </div>
                </div>

                <div class="zen-step">
                    <div class="zen-step-line">
                        <div class="zen-step-dot"><span>3</span></div>
                    </div>
                    <div class="zen-step-body">
                        <h4>Review &amp; Connect</h4>
                        <p>Our pharmacist reviews your results one-on-one, explains what's out of balance, and prepares
                            a recommendation for your prescriber. Don't have one? We'll help you find one.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.zen-journey {
    padding: 100px 40px;
    background: var(--dls-color-lemonice);
}

.zen-journey-inner {
    max-width: 1100px;
    margin: 0 auto;
}

.zen-journey h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(24px, 3vw, 38px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
}

.zen-journey-sub {
    text-align: center;
    font-size: 16px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto 64px;
}

.zen-steps-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px 80px;
}

.zen-step {
    display: flex;
    gap: 20px;
    position: relative;
    padding: 0;
}

.zen-step-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 40px;
}

.zen-step-dot {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--dls-color-sunshine);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background .4s;
}

.zen-step:hover .zen-step-dot {
    background: var(--dls-color-sunshine);
}

.zen-step-dot span {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 16px;
    color: var(--dls-color-burgundy);
    font-weight: 400;
}

.zen-step-connector {
    display: none;
}

.zen-step-body {
    padding-top: 4px;
    flex: 1;
}

.zen-step-body h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 22px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    margin: 0;
    letter-spacing: -1px;
}

.zen-step-body p {
    font-size: 15px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    line-height: 1.75;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .zen-journey {
        padding: 64px 24px;
    }

    .zen-steps-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .zen-step {
        gap: 20px;
    }
}
</style>