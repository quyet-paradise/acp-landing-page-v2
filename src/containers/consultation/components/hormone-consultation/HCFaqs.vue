<template>
    <section class="zen-faq">
        <div class="zen-faq-inner">
            <h2 data-aos="fade-up">Questions? We're Here.</h2>

            <div data-aos="fade-up" data-aos-delay="100">
                <div class="faq-item">
                    <div class="faq-q" id="faq-1" @click="handleOpenQ('1')">
                        <h4>Do I need a doctor's prescription to get tested?</h4>
                        <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg></div>
                    </div>
                    <div class="faq-a">
                        <div class="faq-a-inner">No. Our pharmacist serves as the ordering provider for our test kits in
                            California, so you don't need a separate doctor's visit or prescription to purchase and use
                            the kit. You buy it, collect at home, and we review your results with you one-on-one.</div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" id="faq-2" @click="handleOpenQ('2')">
                        <h4>Can I buy a test kit without a consultation first?</h4>
                        <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg></div>
                    </div>
                    <div class="faq-a">
                        <div class="faq-a-inner">We recommend starting with a free consultation so we can help you
                            choose the right panel for your symptoms. But if you already know what you need, you're
                            welcome to purchase a kit directly in our pharmacy.</div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" id="faq-3" @click="handleOpenQ('3')">
                        <h4>Who processes your at-home hormone test kits?</h4>
                        <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg></div>
                    </div>
                    <div class="faq-a">
                        <div class="faq-a-inner">Our test kits are processed by ZRT Laboratory — the recognized leader
                            in saliva hormone testing since 1998, with over 25 years of clinical experience and results
                            trusted by providers across 96 countries. Results are typically available within 5–7
                            business days.</div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" id="faq-4" @click="handleOpenQ('4')">
                        <h4>Why saliva testing instead of blood testing?</h4>
                        <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg></div>
                    </div>
                    <div class="faq-a">
                        <div class="faq-a-inner">Saliva measures the "bioavailable" fraction of hormones — the amount
                            actually available to your tissues — rather than total hormones bound to carrier proteins in
                            blood. This makes saliva testing especially useful for monitoring topical and transdermal
                            hormone therapy.</div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" id="faq-5" @click="handleOpenQ('5')">
                        <h4>What if I don't have a prescriber yet?</h4>
                        <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg></div>
                    </div>
                    <div class="faq-a">
                        <div class="faq-a-inner">That's exactly what our testing and consultation program is for. We
                            help you get tested, understand your results, and connect you with a prescriber who
                            specializes in hormone therapy.</div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" id="faq-6" @click="handleOpenQ('6')">
                        <h4>How much does hormone testing cost?</h4>
                        <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg></div>
                    </div>
                    <div class="faq-a">
                        <div class="faq-a-inner">We carry two panels: the Artisan Essential Hormone Panel ($259) and the
                            Artisan Comprehensive Hormone Panel ($359). Every kit includes at-home saliva collection,
                            CLIA-certified lab processing, and a one-on-one pharmacist review of your results. Already
                            have lab results? Book a consultation-only appointment for $85.</div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" id="faq-7" @click="handleOpenQ('7')">
                        <h4>Do you accept insurance?</h4>
                        <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg></div>
                    </div>
                    <div class="faq-a">
                        <div class="faq-a-inner">Artisan is a cash-pay pharmacy. We accept cash, credit card, debit
                            card, and Zelle. Many patients find that our pricing is competitive with — or lower than —
                            commercial copays for hormone medications.</div>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" id="faq-8" @click="handleOpenQ('8')">
                        <h4>How soon might I notice changes after starting HRT?</h4>
                        <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg></div>
                    </div>
                    <div class="faq-a">
                        <div class="faq-a-inner">Hormones typically need 6–8 weeks to fully stabilize. Some patients
                            notice early improvements within a few weeks. Our pharmacist will check in around one month
                            and coordinate with your prescriber on any changes.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const handleOpenQ = (id: string) => {
    const q: any = document.getElementById('faq-' + id)
    const item = q?.parentElement
    const answer = item.querySelector('.faq-a')
    const isOpen = item.classList.contains('open')

    document.querySelectorAll('.faq-item').forEach((fi: any) => {
        fi.classList.remove('open')
        fi.querySelector('.faq-a').style.maxHeight = null

    });
    // Open clicked if it was closed
    if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}
</script>

<style lang="scss" scoped>
.zen-faq {
    padding: var(--dls-2cm) 40px;
    background: var(--dls-color-lemonice);
}

.zen-faq-inner {
    max-width: 800px;
    margin: 0 auto;
}

.zen-faq h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(24px, 3vw, 38px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 48px;
}

.faq-item {
    border-bottom: 1px solid var(--dls-color-border);
}

.faq-item:first-child {
    border-top: 1px solid var(--dls-color-border);
}

.faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    cursor: pointer;
    gap: 16px;
}

.faq-q h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 19px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.3;
    letter-spacing: -1px;
    margin: 0;
}

.faq-toggle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform .3s, background .3s;
}

.faq-toggle svg {
    width: 14px;
    height: 14px;
    color: var(--dls-color-burgundy);
    transition: transform .3s;
}

.faq-item.open .faq-toggle {
    background: var(--dls-color-burgundy);
}

.faq-item.open .faq-toggle svg {
    color: var(--dls-color-lemonice);
    transform: rotate(45deg);
}

.faq-a {
    max-height: 0;
    overflow: hidden;
    transition: max-height .4s ease, padding .3s ease;
}

.faq-a-inner {
    padding: 0 0 24px;
    font-size: 15px;
    line-height: 1.75;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 680px;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .zen-faq {
        padding: 64px 24px;
    }
}
</style>