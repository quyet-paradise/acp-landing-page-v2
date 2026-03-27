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
                    <h4>How soon might I notice changes?</h4>
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
            <div class="faq-item">
                <div class="faq-q" id="faq-2" @click="handleOpenQ('2')">
                    <h4>Is HRT only for women?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">No. Prescribers order compounded HRT for both women and men. Men may be
                        prescribed customized testosterone preparations to address hormonal changes associated with
                        aging.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-3" @click="handleOpenQ('3')">
                    <h4>Will I gain weight on HRT?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Weight changes depend on many individual factors. Your prescriber can
                        discuss how hormone therapy may interact with your overall wellness plan, including diet and
                        exercise.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-4" @click="handleOpenQ('4')">
                    <h4>How long do people typically stay on HRT?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Duration varies by individual and is determined by your prescriber. Some
                        patients use HRT for a defined period; others continue longer as part of an ongoing wellness
                        strategy. Your prescriber reviews your plan regularly.</div>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-q" id="faq-5" @click="handleOpenQ('5')">
                    <h4>Are compounded hormones the same as FDA-approved hormones?</h4>
                    <div class="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg></div>
                </div>
                <div class="faq-a">
                    <div class="faq-a-inner">Compounded preparations are not FDA-approved products. They are prepared by
                        licensed pharmacists based on a prescriber's order to meet individual patient needs — such as
                        specific dosages, combinations, or delivery forms not commercially available. Your prescriber
                        can discuss whether a compounded or commercially available product is best for your situation.
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
.faq {
    padding: 0 60px var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.faq h2 {
    font-family: 'SpeziaBookB';
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
    padding: 8px 0;
    cursor: pointer;
    gap: 16px;
}

.faq-q h4 {
    font-family: 'SpeziaBookB';
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.3;
    letter-spacing: -1px;
    margin: 12px 0;
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
    font-size: 16px;
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