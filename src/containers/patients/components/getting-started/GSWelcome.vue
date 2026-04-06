<template>
    <section class="welcome">
        <div class="welcome-inner">
            <div data-aos="fade-up">
                <h2 class="welcome-heading">Your Wellness Journey Begins <em>Here</em></h2>
                <div class="welcome-body">
                    <p>At Artisan Compounding Pharmacy, we believe great healthcare starts with a relationship — not a
                        transaction. Our pharmacists work closely with you and your prescriber to create medications
                        tailored to your unique needs, because your health is never one-size-fits-all.</p>
                    <p>We offer a focused range of custom-compounded medications for humans and pets alike — each
                        crafted with pharmaceutical precision and personal care.</p>
                </div>
                <div class="welcome-contact"><strong>Have questions?</strong> Whether it's about compounded medications,
                    pricing, or how compounding works — we're here to help. Call or text us at <strong>(714)
                        622-8460</strong> or email <strong>info@artisanrx.com</strong>.</div>
            </div>
            <div data-aos="fade-up">
                <div class="welcome-specialties-label">Our Compounding Specialties</div>
                <ul class="specialties-list">
                    <li><a href="#">Hormone Replacement Therapy <span class="arrow">→</span></a></li>
                    <li><a href="#">Low Dose Naltrexone (LDN) <span class="arrow">→</span></a></li>
                    <li><a href="#">Sexual Health for Men &amp; Women <span class="arrow">→</span></a></li>
                    <li><a href="#">Weight Loss <span class="arrow">→</span></a></li>
                    <li><a href="#">Hair Growth <span class="arrow">→</span></a></li>
                    <li><a href="#">Dermatology <span class="arrow">→</span></a></li>
                    <li><a href="#">Pediatrics <span class="arrow">→</span></a></li>
                    <li><a href="#">Veterinary (Canine &amp; Feline) <span class="arrow">→</span></a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.welcome {
    padding: var(--dls-2cm) 64px;
}

.welcome-inner {
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 80px;
    align-items: start;
}

.welcome-heading {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(26px, 2.8vw, 38px);
    line-height: 1.3;
    margin-bottom: 24px;
    margin: 0;
}

.welcome-heading em {
    font-style: italic;
    color: var(--dls-color-redclay);
}

.welcome-body p {
    color: rgba(55, 18, 19, .72);
    line-height: 1.8;
    margin-bottom: 16px;
}

.welcome-specialties-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--dls-color-olive);
    margin-bottom: 20px;
}

.specialties-list {
    list-style: none;
}

.specialties-list li {
    padding: 12px 0;
    border-bottom: 1px solid var(--dls-color-border);
}

.specialties-list li:first-child {
    border-top: 1px solid var(--dls-color-border);
}

.specialties-list li a {
    font-size: 16px;
    color: var(--dls-color-burgundy);
    transition: color .2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
}

.specialties-list li a:hover {
    color: var(--dls-color-redclay);
}

.specialties-list li a .arrow {
    font-size: 14px;
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity .3s, transform .3s;
    color: var(--dls-color-redclay);
}

.specialties-list li a:hover .arrow {
    opacity: 1;
    transform: translateX(0);
}

.welcome-contact {
    margin-top: 28px;
    padding: 24px 28px;
    background: rgba(247, 236, 157, .25);
    border-radius: 12px;
    color: rgba(55, 18, 19, .75);
    line-height: 1.7;
    font-size: 15px;
}

.welcome-contact strong {
    color: var(--dls-color-burgundy);
    font-weight: 500;
}

@media(max-width:1024px) {
    .welcome-inner {
        grid-template-columns: 1fr;
        gap: 48px;
    }
}

@media(max-width:768px) {
    .welcome {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>