<template>
    <section class="promise">
        <div class="promise-inner">
            <div class="promise-item" data-aos="fade-up" data-aos-delay="100">
                <div class="promise-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>
                <h4>USP Compliant</h4>
                <p>Compounded under USP &lt;795&gt; / &lt;800&gt; with USP-grade APIs</p>
            </div>
            <div class="promise-item" data-aos="fade-up" data-aos-delay="200">
                <div class="promise-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                </div>
                <h4>Fully Customizable</h4>
                <p>Active ingredients, strengths, bases, and packaging compounded to your prescriber's specifications
                </p>
            </div>
            <div class="promise-item" data-aos="fade-up" data-aos-delay="300">
                <div class="promise-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </div>
                <h4>Elegant Packaging</h4>
                <p>Soft-luxury apothecary packaging designed for everyday convenience</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" setup>
.promise {
    padding: 80px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.promise-inner {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 56px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px;
    text-align: center;
}

.promise-item h4 {
    font-family: "SpeziaBookB";
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    letter-spacing: -1.5px;
}

.promise-item p {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

.promise-icon {
    width: 52px;
    height: 52px;
    margin: 0 auto 16px;
    border-radius: 50%;
    background: var(--dls-color-burgundylight);
    display: flex;
    align-items: center;
    justify-content: center;
}

.promise-icon svg {
    width: 22px;
    height: 22px;
    color: var(--dls-color-white);
}

@media(max-width:1024px) {
    .promise-inner {
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 40px;
    }
}

@media(max-width:768px) {
    .promise {
        padding: 64px 24px;
    }
}
</style>