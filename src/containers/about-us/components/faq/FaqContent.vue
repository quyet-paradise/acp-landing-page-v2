<template>
    <section class="faq-section">
        <!-- ABOUT COMPOUNDING -->
        <div class="faq-category" data-aos="fade-up" data-aos-delay="100">
            <div class="faq-category-heading">About Compounding</div>
        </div>

        <!-- Q1: What is compounding / What sets Artisan apart? (merged) -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="100">
            <div class="faq-question" id="faq-1" @click="toggleFaq('1')">
                <h3>What is compounding, and what sets Artisan apart?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner">
                    Compounding is the art and science of creating personalized medications tailored to an individual's
                    unique needs. When a commercially manufactured medication doesn't work whether it's the wrong
                    dosage, contains an allergen, or isn't available in the right form a compounding pharmacist can
                    prepare a customized solution. Not all pharmacies compound, and it requires specialized training,
                    equipment, and strict quality standards. At Artisan, every compound is prepared by hand in our USP
                    795 and USP 800 compliant lab using only pharmaceutical-grade ingredients. Our pharmacists are
                    trained by the Professional Compounding Centers of America (PCCA), a globally recognized leader in
                    compounding education and innovation.
                </div>
            </div>
        </div>

        <!-- Q2: Pharmaceutical-grade ingredients -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="200">
            <div class="faq-question" id="faq-2" @click="toggleFaq('2')">
                <h3>What do you mean by pharmaceutical-grade ingredients?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    Pharmaceutical-grade ingredients are the highest quality raw materials, meeting strict standards for
                    purity, strength, and consistency set by the United States Pharmacopeia (USP) or other trusted
                    authorities. We source our ingredients only from FDA-registered suppliers to ensure that every
                    compounded medication is safe, effective, and tailored to your exact needs.
                </div>
            </div>
        </div>

        <!-- Q3: What types do you specialize in? -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="200">
            <div class="faq-question" id="faq-3" @click="toggleFaq('3')">
                <h3>What types of compounding do you specialize in?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner">
                    We specialize in hormone replacement therapy, pediatric compounding, dermatology, pain management,
                    sexual health, hair growth, low dose naltrexone (LDN), weight loss, and veterinary compounding all
                    prepared to the highest USP 795 standards. Whether you need a custom cream, capsule, troche,
                    suspension, or suppository, our pharmacist works directly with your provider to craft the right
                    formulation for you.
                </div>
            </div>
        </div>

        <!-- Q4: How do I know my medication is safe? -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
            <div class="faq-question" id="faq-4" @click="toggleFaq('4')">
                <h3>How do I know my compounded medication is safe?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner">
                    Patient safety is our highest priority. Every medication is compounded in our dedicated,
                    climate-controlled lab following strict USP 795 and USP 800 guidelines. We use only
                    pharmaceutical-grade chemicals sourced from FDA-registered suppliers, maintain thorough quality
                    documentation for every batch, and our pharmacist personally verifies each compound before it leaves
                    the lab. We are also a proud member of PCCA, giving us access to peer-reviewed formulations and
                    ongoing continuing education.
                </div>
            </div>
        </div>

        <!-- PRESCRIPTIONS & ORDERING -->
        <div class="faq-category" data-aos="fade-up" data-aos-delay="200">
            <div class="faq-category-heading">Prescriptions &amp; Ordering</div>
        </div>

        <!-- Q5: Do I need a prescription? -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
            <div class="faq-question" id="faq-5" @click="toggleFaq('5')">
                <h3>Do I need a prescription for compounded medications?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    Yes. All compounded medications require a valid prescription from a licensed healthcare provider. If
                    you don't have a prescriber, we're happy to connect you with one in our network.
                </div>
            </div>
        </div>

        <!-- Q6: What if my doctor is unfamiliar with compounds? -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
            <div class="faq-question" id="faq-6" @click="toggleFaq('6')">
                <h3>What if my doctor is unfamiliar with prescribing compounds?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    We're happy to work directly with your doctor, whether by providing a prescription form with
                    suggested formulations or recommending a custom formulation tailored to your needs. We can also
                    connect you with local physicians experienced in compounding care.
                </div>
            </div>
        </div>

        <!-- Q7: How do I transfer my prescription? -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
            <div class="faq-question" id="faq-7" @click="toggleFaq('7')">
                <h3>How do I transfer my prescription to Artisan?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    Simply call or text us at (888) 901-4480 with your current pharmacy name and prescription details,
                    and we'll handle the rest. Your prescriber can also fax or e-prescribe new prescriptions directly to
                    us.
                </div>
            </div>
        </div>

        <!-- Q8: Can my provider contact you? -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
            <div class="faq-question" id="faq-8" @click="toggleFaq('8')">
                <h3>Can my provider contact you directly?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    Absolutely and we encourage it. We work closely with prescribers to optimize dosage forms, discuss
                    base and vehicle options, and ensure the best outcomes for patients. Providers can reach us by
                    phone, fax, or e-prescribe. We're also listed in the Surescripts directory as "Artisan Compounding
                    Pharmacy."
                </div>
            </div>
        </div>

        <!-- Q9: How long to fill? -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
            <div class="faq-question" id="faq-9" @click="toggleFaq('9')">
                <h3>How long does it take to fill a compounded prescription?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    Our goal is a 24 business day turnaround for every prescription upon receiving your order. Since
                    compounded medications are custom-made, we confirm payment before compounding to avoid waste. You'll
                    receive a text or phone call as soon as your prescription is ready.
                </div>
            </div>
        </div>

        <!-- Q10: What can cause a delay? -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
            <div class="faq-question" id="faq-10" @click="toggleFaq('10')">
                <h3>What can cause a delay?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    In some cases, if your prescription requires a hard-to-find ingredient, there may be a 12 business
                    day delay while we order it. We'll notify you right away if your medication will be delayed.
                </div>
            </div>
        </div>

        <!-- PRICING, INSURANCE & PAYMENT -->
        <div class="faq-category" data-aos="fade-up" data-aos-delay="300">
            <div class="faq-category-heading">Pricing, Insurance &amp; Payment</div>
        </div>

        <!-- Q11: Insurance -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
            <div class="faq-question" id="faq-11" @click="toggleFaq('11')">
                <h3>Are compounded medications covered by insurance?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    Unfortunately, many insurance companies do not cover compounded medications. We are a cash-pay
                    pharmacy and accept cash, credit card, debit card, and Zelle. We can provide a detailed receipt for
                    you to submit to your insurance for potential reimbursement. To make your treatment more affordable,
                    we offer discounted pricing on extended supplies:
                    <ul>
                        <li>Up to 10% discount for a 2-month supply</li>
                        <li>Up to 15% discount for a 3-month supply</li>
                    </ul>
                    Due to medication stability, not all compounded medications are eligible for extended fills. Contact
                    us for details or a personalized quote.
                </div>
            </div>
        </div>

        <!-- Q12: Military discount -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
            <div class="faq-question" id="faq-12" @click="toggleFaq('12')">
                <h3>Do you offer a military discount?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    We are grateful for the service and sacrifice of our military members. To show our appreciation, we
                    offer a 10% discount to all retired and active military personnel with valid government-issued ID.
                    The discount applies to the military member only.
                </div>
            </div>
        </div>

        <!-- PICKUP, DELIVERY & SHIPPING -->
        <div class="faq-category" data-aos="fade-up" data-aos-delay="400">
            <div class="faq-category-heading">Pickup, Delivery &amp; Shipping</div>
        </div>

        <!-- Q13: Visit without appointment -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
            <div class="faq-question" id="faq-13" @click="toggleFaq('13')">
                <h3>Can I visit the pharmacy without an appointment?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    Absolutely. Walk-ins are welcome during our regular business hours, Monday through Friday, 10:00 AM
                    to 5:30 PM. For consultations, we recommend scheduling ahead so we can give you our full attention.
                </div>
            </div>
        </div>

        <!-- Q14: Shipping/delivery -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
            <div class="faq-question" id="faq-14" @click="toggleFaq('14')">
                <h3>Do you offer pickup, delivery, or shipping?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    Yes! You're welcome to pick up your medications in person at our Tustin location, or we can ship
                    them directly via FedEx/UPS to your home. We also offer free local delivery on all orders. Just let
                    us know what works best for you.
                </div>
            </div>
        </div>

        <!-- RETURNS & ISSUES -->
        <div class="faq-category" data-aos="fade-up" data-aos-delay="500">
            <div class="faq-category-heading">Returns &amp; Issues</div>
        </div>

        <!-- Q15: Return policy -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
            <div class="faq-question" id="faq-15" @click="toggleFaq('15')">
                <h3>What is your return policy?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    <strong>Compounded medications cannot be returned after dispensing under any circumstance.</strong>
                    For over-the-counter (OTC) products and supplements purchased in store, customers may return
                    unopened merchandise within 14 days of purchase with the original receipt. A refund will be issued
                    in the original form of payment. For OTC items purchased online, customers can return unopened
                    merchandise with the original receipt within 14 days of delivery for a refund, less the shipping
                    fee. Customers are responsible for packaging and return shipping costs. Ship returns to: Artisan
                    Compounding Pharmacy, 17400 Irvine Blvd, Suite H, Tustin, CA 92780.
                </div>
            </div>
        </div>

        <!-- Q16: Damaged items -->
        <div class="faq-item" data-aos="fade-up" data-aos-delay="500">
            <div class="faq-question" id="faq-16" @click="toggleFaq('16')">
                <h3>What if my order arrives damaged or defective?</h3>
                <div class="faq-toggle"></div>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner single-col">
                    We carefully package every order to ensure it arrives in excellent condition. However, if your order
                    is damaged during shipping, please contact us at contact@artisan-rx.com and we'll be happy to assist
                    you.
                </div>
            </div>
        </div>

    </section>

    <!-- PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
     DISCLAIMER
     PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP -->
    <div
        style="max-width:var(--dls-max-width-2); margin:0 auto; padding:0 60px 60px; font-size:12px; color:var(--dls-color-burgundy); opacity:0.45; line-height:1.7; font-weight:300; font-style:italic;">
        A prescription from a licensed practitioner is required for compounded medications.
    </div>
</template>

<script lang="ts" setup>
const toggleFaq = (id: string) => {
    const q: any = document.getElementById('faq-' + id)
    const item = q?.parentElement
    const wasActive = item.classList.contains('active')

    // Close all others
    document.querySelectorAll('.faq-item.active').forEach(i => {
      if (i !== item) i.classList.remove('active');
    })

    // Toggle current
    item.classList.toggle('active', !wasActive);
}
</script>

<style lang="scss" scoped>
.faq-section {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
}

.faq-category-label {
    display: inline-block;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--dls-color-redclay);
    margin-bottom: 12px;
    padding: 6px 14px;
    background: rgba(161, 85, 54, 0.08);
    border-radius: 2px;
}

.faq-section-title {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(36px, 4vw, 56px);
    font-weight: 300;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
    line-height: 1.1;
}

.faq-section-desc {
    font-size: 15px;
    line-height: 1.7;
    color: var(--dls-color-burgundylight);
    opacity: 0.7;
    max-width: 520px;
    margin-bottom: 60px;
    font-weight: 300;
}

/* Category divider between FAQ groups */
.faq-category {
    margin-top: 72px;
    margin-bottom: 8px;
}

.faq-category:first-of-type {
    margin-top: 0;
}

.faq-category-heading {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
    margin-bottom: 28px;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--dls-color-burgundy);
    display: inline-block;
}

/* Accordion Item */
.faq-item {
    border-top: 1px solid rgba(200, 200, 200, 1);
    padding: 4px 0;
}

.faq-item:last-child {
    border-bottom: 1px solid rgba(200, 200, 200, 1);
}

.faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    cursor: pointer;
    user-select: none;
    transition: opacity 0.2s;
    line-height: 48px;
}

.faq-question:hover {
    opacity: 0.75;
}

.faq-question h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 30px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
    padding-right: 40px;
    margin: 0;
}

/* +/ icon */
.faq-toggle {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.faq-toggle::before,
.faq-toggle::after {
    content: '';
    position: absolute;
    background: var(--dls-color-burgundy);
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s;
}

.faq-toggle::before {
    width: 20px;
    height: 1.5px;
}

.faq-toggle::after {
    width: 1.5px;
    height: 20px;
}

/* Active state: + becomes */
.faq-item.active .faq-toggle::after {
    transform: rotate(90deg);
    opacity: 0;
}

/* Answer container */
.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), padding 0.4s;
}

.faq-item.active .faq-answer {
    max-height: 800px;
    padding-bottom: 36px;
}

.faq-answer-inner {
    columns: 2;
    column-gap: 48px;
    font-size: 14.5px;
    line-height: 1.85;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    opacity: 0.8;
}

/* Single-column answers (short) */
.faq-answer-inner.single-col {
    columns: 1;
    max-width: 680px;
}

/* Discount list inside answer */
.faq-answer-inner ul {
    margin: 12px 0 12px 20px;
    list-style: disc;
}

.faq-answer-inner ul li {
    margin-bottom: 4px;
}

/* Bold labels */
.faq-answer-inner strong {
    font-weight: 500;
}

@media (max-width: 900px) {
    .faq-section {
        padding: 72px 28px 40px;
    }

    .faq-answer-inner {
        columns: 1;
    }

    .faq-question h3 {
        line-height: 120%;
    }
}

@media (max-width: 600px) {
    .faq-question h3 {
        font-size: 20px;
    }
}
</style>