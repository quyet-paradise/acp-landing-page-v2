<template>
    <section class="cashpay-section section-pad">
        <div class="cashpay-grid">
            <div>
                <div class="overline" data-aos="fade-up">Transparent Pricing</div>
                <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">No Insurance Games. No Surprises.</h2>
                <p class="section-body" data-aos="fade-up" data-aos-delay="200">We're a cash-pay pharmacy and that's a deliberate choice. By removing the insurance middleman, you always know what you'll pay, and we can focus entirely on what matters: getting you the right medication.</p>
                <p class="section-body" data-aos="fade-up" data-aos-delay="300" style="margin-top:20px">We believe transparency builds trust. No hidden fees, no surprise charges. Just honest pricing for honest pharmacy.</p>
            </div>
            <div>
                <div class="cashpay-highlight" data-aos="fade-up" data-aos-delay="200">
                    <h4>We Accept</h4>
                    <p class="section-body" style="opacity:0.7;font-size:14px">We make it easy to pay however works best for you.</p>
                    <div class="pay-methods">
                        <span class="pay-tag">Cash</span>
                        <span class="pay-tag">Credit Card</span>
                        <span class="pay-tag">Debit Card</span>
                        <span class="pay-tag">Zelle</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.cashpay-section {
    background: var(--dls-color-white);
    border-top: 1px solid var(--dls-color-border);
    border-bottom: 1px solid var(--dls-color-border);
}

.cashpay-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.cashpay-section .overline {
    color: var(--dls-color-redclay);
}

.cashpay-highlight {
    background: var(--dls-color-linen);
    border: 1px solid var(--dls-color-border);
    padding: 40px 36px;
    margin-top: 32px;
}

.cashpay-highlight h4 {
    font-family: 'SpeziaBookB';
    font-size: 22px;
    font-weight: 500;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
    letter-spacing: -1px;
}

.pay-methods {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.pay-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--dls-color-white);
    border: 1px solid var(--dls-color-border);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--dls-color-burgundy);
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .cashpay-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media (max-width: 600px) {}
</style>