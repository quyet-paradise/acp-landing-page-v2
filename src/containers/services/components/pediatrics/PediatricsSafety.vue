<template>
    <section class="safety">
        <div class="safety-inner">
            <h2 data-aos="fade-up">Our Quality Standards</h2>
            <div class="safety-grid">
                <div class="safety-item" data-aos="fade-up" data-aos-delay="100">
                    <div class="safety-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <h4>USP Compliant</h4>
                    <p>Compounded under USP &lt;795&gt;/&lt;800&gt; with USP-grade ingredients</p>
                </div>
                <div class="safety-item" data-aos="fade-up" data-aos-delay="200">
                    <div class="safety-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <h4>Batch-Tested</h4>
                    <p>Batch tested randomly for potency, uniformity, and microbial purity</p>
                </div>
                <div class="safety-item" data-aos="fade-up" data-aos-delay="300">
                    <div class="safety-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    </div>
                    <h4>Child-Resistant</h4>
                    <p>Child resistant packaging with eco-friendly options available</p>
                </div>
                <div class="safety-item" data-aos="fade-up" data-aos-delay="400">
                    <div class="safety-item-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                    </div>
                    <h4>HIPAA-Secure Portal</h4>
                    <p>Refill portal with automated reminders so you never miss a dose</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.safety {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.safety-inner {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 56px 80px;
}

.safety h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
    text-align: center;
    margin-bottom: 40px;
}

.safety-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    text-align: center;
}

.safety-item-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 14px;
    border-radius: 50%;
    background: var(--dls-color-burgundylight);
    display: flex;
    align-items: center;
    justify-content: center;
}

.safety-item-icon svg {
    width: 20px;
    height: 20px;
    color: var(--dls-color-white);
}

.safety-item h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 16px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 6px;
    line-height: 1.3;
    letter-spacing: -1px;
}

.safety-item p {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

@media(max-width:1024px) {
    .safety-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:768px) {
    .safety {
        padding: 64px 24px;
    }

    .safety-grid {
        grid-template-columns: 1fr;
    }

    .safety-inner {
        padding: 40px 24px;
    }
}
</style>