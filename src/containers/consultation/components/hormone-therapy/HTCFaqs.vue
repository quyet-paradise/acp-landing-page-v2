<template>
    <section class="faq">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Frequently Asked Questions</h2>

        <div class="faq-list">
            <div class="faq-item">
                <div class="faq-q" id="faq-1" @click="handleOpenQ('1')">
                    <h4>Do I need a doctor's prescription to get tested?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">No. Our pharmacist serves as the ordering provider for our test kits in
                        California, so you don't need a separate doctor's visit or prescription to purchase and use the
                        kit. You buy it, collect at home, and we review your results with you one-on-one.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-2" @click="handleOpenQ('2')">
                    <h4>Can I buy a test kit without a consultation first?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">We recommend starting with a free consultation so we can help you choose
                        the right panel for your symptoms. But if you already know what you need, you're welcome to
                        purchase a kit directly in our pharmacy.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-3" @click="handleOpenQ('3')">
                    <h4>Who processes your at-home hormone test kits?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Our test kits are processed by ZRT Laboratory — the recognized leader in
                        saliva hormone testing since 1998, with over 25 years of clinical experience, more than 11
                        million tests processed, and results trusted by patients, providers, and research institutions
                        across 96 countries. ZRT is a CLIA-certified lab that provides reference ranges based on over
                        one million patient results, adjusted for age, menstrual status, and supplementation type — so
                        you don't have to stop your hormones to test. Results are typically available within 5–7
                        business days.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-4" @click="handleOpenQ('4')">
                    <h4>Why saliva testing instead of blood testing?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Saliva measures the "bioavailable" fraction of hormones — the amount
                        actually available to your tissues — rather than total hormones bound to carrier proteins in
                        blood. This makes saliva testing especially useful for monitoring topical and transdermal
                        hormone therapy. Both saliva and blood testing are valid; your pharmacist can help you decide
                        which is right for your situation.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-5" @click="handleOpenQ('5')">
                    <h4>Who reviews my test results?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Your Artisan pharmacist reviews your results with you one-on-one and
                        prepares a recommendation for your prescriber. We do not diagnose or prescribe — we guide,
                        educate, and collaborate.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-6" @click="handleOpenQ('6')">
                    <h4>What if I don't have a prescriber yet?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">That's exactly what our testing and consultation program is for. We help
                        you get tested, understand your results, and connect you with a prescriber who specializes in
                        hormone therapy. They receive your lab results upfront, and your compounded prescription comes
                        right back to us.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-7" @click="handleOpenQ('7')">
                    <h4>How much does hormone testing cost?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">We carry two panels: the Artisan Essential Hormone Panel ($259) and the
                        Artisan Comprehensive Hormone Panel ($359). Every kit includes at-home saliva collection,
                        CLIA-certified lab processing, and a one-on-one pharmacist review of your results. Already have
                        lab results? Book a consultation-only appointment for $85.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-8" @click="handleOpenQ('8')">
                    <h4>What does the prescriber visit cost?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Prescriber fees vary depending on the provider and whether they accept
                        insurance. Many of the providers in our referral network offer initial hormone consultations
                        ranging from $150–$350, and some offer telehealth options. We're happy to share details about
                        our referral partners and what to expect when you book your discovery call.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-9" @click="handleOpenQ('9')">
                    <h4>Do you accept insurance?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Artisan is a cash-pay pharmacy. We accept cash, credit card, debit card,
                        and Zelle. Many patients find that our pricing is competitive with — or lower than — commercial
                        copays for hormone medications.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-10" @click="handleOpenQ('10')">
                    <h4>How do I get my prescription filled? Can you ship it?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Compounded prescriptions are currently available for in-pharmacy pickup at
                        our Tustin location, with a curbside option available. We're working on adding local delivery
                        and shipping for ongoing patients. For refills, many patients coordinate a convenient pickup
                        schedule with our team.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-11" @click="handleOpenQ('11')">
                    <h4>How soon might I notice changes after starting HRT?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Hormones typically need 6–8 weeks to fully stabilize. Some patients notice
                        early improvements within a few weeks, but adjustments are usually not made until around the
                        two-month mark to give your body time to respond. Our pharmacist will check in around one month
                        and coordinate with your prescriber on any changes from there.</div>
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
.faq {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.faq h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 48px;
}

.faq-list {
    max-width: 860px;
    margin: 0 auto;
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
    color: var(--dls-color-creamlight);
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
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 720px;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .faq {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>