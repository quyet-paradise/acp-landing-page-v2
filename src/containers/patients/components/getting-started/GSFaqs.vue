<template>
    <section class="faq-section">
        <div class="faq-inner">
            <div class="faq-label" data-aos="fade-up">Common Questions</div>
            <h2 class="faq-heading" data-aos="fade-up">Frequently Asked Questions</h2>
            <div class="faq-item" data-aos="fade-up">
                <div class="faq-question" id="faq-1" @click="handleOpenQ('1')">
                    <h3>Do you accept HSA/FSA cards?</h3>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Yes, we do! If you have HSA/FSA funds expiring soon, consider ordering
                        a two- to three-month supply of your medication to maximize your benefits before the deadline.
                    </div>
                </div>
            </div>
            <div class="faq-item" data-aos="fade-up">
                <div class="faq-question" id="faq-2" @click="handleOpenQ('2')">
                    <h3>Do you accept insurance?</h3>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Artisan Compounding Pharmacy is a cash-pay pharmacy. Many insurance
                        plans have recently stopped covering compounded prescriptions. We keep our pricing transparent
                        and competitive, and we accept HSA/FSA cards to help offset costs. <strong>Contact us anytime
                            for a personalized quote.</strong></div>
                </div>
            </div>
            <div class="faq-item" data-aos="fade-up">
                <div class="faq-question" id="faq-3" @click="handleOpenQ('3')">
                    <h3>How fast will I receive my compounded prescription?</h3>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Custom compounded medications are typically ready within 2 to 4
                        business days. Local delivery within the Tustin and greater Orange County area is available free
                        of charge.</div>
                </div>
            </div>
            <div class="faq-item" data-aos="fade-up">
                <div class="faq-question" id="faq-4" @click="handleOpenQ('4')">
                    <h3>How much do you charge for shipping?</h3>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-inner"><strong>Local delivery</strong> within our service area is free. For
                        shipments outside our local area, we use FedEx and UPS — shipping charges vary based on
                        destination and delivery speed.</div>
                </div>
            </div>
            <div class="faq-item" data-aos="fade-up">
                <div class="faq-question" id="faq-5" @click="handleOpenQ('5')">
                    <h3>Do I need a prescription for compounded medications?</h3>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Yes, a valid, patient-specific prescription from a licensed healthcare
                        provider is required to dispense compounded medications. If you don't currently have a
                        prescriber, our pharmacist can help connect you with one during a consultation.</div>
                </div>
            </div>
            <div class="faq-item" data-aos="fade-up">
                <div class="faq-question" id="faq-6" @click="handleOpenQ('6')">
                    <h3>Do you compound medications for pets?</h3>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-inner">Yes! Artisan compounds custom medications for canine and feline
                        patients. Whether your pet needs a flavored liquid, a custom-dosed capsule, or a topical
                        formulation, we work directly with your veterinarian to create the right medication. A valid
                        prescription from a licensed veterinarian is required.</div>
                </div>
            </div>
            <div class="faq-item" data-aos="fade-up">
                <div class="faq-question" id="faq-7" @click="handleOpenQ('7')">
                    <h3>What forms of payment do you accept?</h3>
                    <div class="faq-toggle">+</div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-inner">We accept Visa, Mastercard, American Express, JCB, PayPal, Venmo,
                        Google Pay, Apple Pay, and HSA/FSA cards.</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const handleOpenQ = (id: string) => {
    const q: any = document.getElementById('faq-' + id)
    const item = q?.parentElement
    const isOpen = item.classList.contains('active')

    document.querySelectorAll('.faq-item').forEach((fi: any) => {
        fi.classList.remove('active')
    });
    // Open clicked if it was closed
    if (!isOpen) {
        item.classList.add('active')
    }
}
</script>

<style lang="scss" scoped>
.faq-section {
    padding: var(--dls-2cm) 64px;
    background: var(--dls-color-white);
}

.faq-inner {
    max-width: 900px;
    margin: 0 auto;
}

.faq-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--dls-color-olive);
    margin-bottom: 16px;
}

.faq-heading {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(28px, 3vw, 42px);
    line-height: 1.25;
    margin-bottom: 56px;
}

.faq-item {
    border-bottom: 1px solid var(--dls-color-border);
}

.faq-item:first-of-type {
    border-top: 1px solid var(--dls-color-border);
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
    cursor: pointer;
    transition: color .3s;
    user-select: none;
}

.faq-question:hover {
    color: var(--dls-color-redclay);
}

.faq-question h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 20px;
    font-weight: 400;
    flex: 1;
    padding-right: 24px;
    margin: 0;
}

.faq-toggle {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 22px;
    transition: transform .3s;
}

.faq-item.active .faq-toggle {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height .45s cubic-bezier(.23, 1, .32, 1), padding .45s;
}

.faq-item.active .faq-answer {
    max-height: 500px;
    padding-bottom: 24px;
}

.faq-answer-inner {
    color: rgba(55, 18, 19, .7);
    line-height: 1.8;
    padding-right: 56px;
}

.faq-answer-inner strong {
    color: var(--dls-color-burgundy);
    font-weight: 500;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .faq-section {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>