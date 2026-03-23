<template>
    <section class="how-section">
        <div class="how-inner">
            <div class="how-text">
                <div class="section-label" style="color: var(--yellow-muted);">THE PROCESS</div>
                <h2 data-aos="fade-up">How It Works</h2>
                <p data-aos="fade-up" data-aos-delay="100">Based on your prescriber's order, our pharmacist compounds a precise micro dose of the prescribed
                    active ingredient plus absorption enhancers into a flavored sublingual solution. Place the measured
                    drops under your tongue, hold for 90 seconds, then swallow. Your prescriber determines the
                    appropriate medication, strength, and dosing schedule based on your individual needs.</p>
            </div>
            <div class="how-illustration">
                <div class="step-visual">
                    <div class="step-item" data-aos="fade-up" data-aos-delay="100">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Custom Script</h4>
                            <p>We tailor strength &amp; flavor to your needs.</p>
                        </div>
                    </div>
                    <div class="step-item" data-aos="fade-up" data-aos-delay="100">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Place Under Tongue</h4>
                            <p>Measured drops, hold 90 seconds, swallow.</p>
                        </div>
                    </div>
                    <div class="step-item" data-aos="fade-up" data-aos-delay="100">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Prescriber-Guided Care</h4>
                            <p>Your prescriber monitors progress and adjusts as needed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.how-section {
    background: var(--dls-color-olive);
    padding: var(--dls-1p5cm) 60px;
    position: relative;
    overflow: hidden;
}

.how-section::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(255, 253, 245, 0.12);
    border-radius: 50%;
}

.how-section::after {
    content: '';
    position: absolute;
    bottom: -200px;
    right: -50px;
    width: 600px;
    height: 600px;
    border: 1px solid rgba(255, 253, 245, 0.08);
    border-radius: 50%;
}

.how-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.how-section h2 {
    font-family: "SpeziaBookB";
    font-size: clamp(30px, 3vw, 42px);
    font-weight: 400;
    color: var(--dls-color-white);
    margin-bottom: 32px;
}

.how-text p {
    font-size: 17px;
    line-height: 1.75;
    color: rgba(255, 253, 245, 0.88);
    font-weight: 300;
}

.how-illustration {
    display: flex;
    justify-content: center;
    align-items: center;
}

.step-visual {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 420px;
}

.step-item {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    padding: 28px;
    background: rgba(255, 253, 245, 0.08);
    border-radius: 12px;
    border: 1px solid rgba(255, 253, 245, 0.1);
    backdrop-filter: blur(4px);
    transition: background 0.3s;
}

.step-item:hover {
    background: rgba(255, 253, 245, 0.14);
}

.step-number {
    font-family: "SpeziaBookB";
    font-size: 28px;
    color: var(--dls-color-sunlight);
    line-height: 1;
    flex-shrink: 0;
    width: 36px;
}

.step-content h4 {
    font-family: "SpeziaBookB";
    font-size: 18px;
    font-weight: 400;
    color: var(--dls-color-white);
    margin-bottom: 6px;
    margin-top: 0;
    letter-spacing: -0.5px;
}

.step-content p {
    font-size: 14px;
    line-height: 1.55;
    color: rgba(255, 253, 245, 0.7);
    font-weight: 300;
    margin: 0;
}

@media (max-width: 1024px) {
    .how-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}

@media (max-width: 768px) {
    .how-section {
        padding: 64px 24px;
    }
}
</style>