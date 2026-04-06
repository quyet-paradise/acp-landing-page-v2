<template>
    <section class="forms-section section-pad">
        <div class="overline" data-aos="fade-up">Dosage Forms</div>
        <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">Made in the Form That Works for You</h2>
        <p class="section-body" data-aos="fade-up" data-aos-delay="200" style="max-width:600px;margin-bottom:12px">Every patient is different. That's
            why we compound medications in a wide range of dosage forms each selected to optimize absorption, comfort,
            and compliance.</p>

        <div class="forms-grid">
            <div class="form-card" data-aos="fade-up" data-aos-delay="100">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="3" width="12" height="18" rx="6" />
                        <line x1="12" y1="12" x2="12" y2="15" />
                    </svg>
                </div>
                <h4>Capsules</h4>
                <p>Custom-dosed oral capsules with precise active ingredient amounts, free from unwanted fillers.</p>
            </div>
            <div class="form-card" data-aos="fade-up" data-aos-delay="200">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="8" />
                        <path d="M12 8v4l2 2" />
                    </svg>
                </div>
                <h4>Creams &amp; Ointments</h4>
                <p>Topical formulations for hormone therapy, dermatology, and pain applied directly where needed.</p>
            </div>
            <div class="form-card" data-aos="fade-up" data-aos-delay="300">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3h8l2 6H6l2-6z" />
                        <rect x="6" y="9" width="12" height="3" rx="1" />
                        <path d="M9 12v6a3 3 0 006 0v-6" />
                    </svg>
                </div>
                <h4>Troches &amp; Lozenges</h4>
                <p>Dissolve slowly under the tongue or in the cheek for sublingual absorption ideal for hormone and
                    pain therapies.</p>
            </div>
            <div class="form-card" data-aos="fade-up" data-aos-delay="400">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 3v18" />
                        <path d="M15 3v18" />
                        <path d="M3 9h18" />
                        <circle cx="12" cy="14" r="3" />
                    </svg>
                </div>
                <h4>Oral Suspensions</h4>
                <p>Flavored liquid medications perfect for children and patients who have difficulty swallowing pills.
                </p>
            </div>
            <div class="form-card" data-aos="fade-up" data-aos-delay="400">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="12" cy="12" rx="8" ry="5" />
                        <line x1="12" y1="7" x2="12" y2="17" />
                    </svg>
                </div>
                <h4>Suppositories</h4>
                <p>Rectal or vaginal delivery for localized treatment or when oral administration isn't an option.</p>
            </div>
            <div class="form-card" data-aos="fade-up" data-aos-delay="500">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </div>
                <h4>Topical Gels</h4>
                <p>Lightweight, fast-absorbing gels for transdermal hormone delivery and targeted pain relief.</p>
            </div>
            <div class="form-card" data-aos="fade-up" data-aos-delay="500">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M8 14h8v4a4 4 0 01-8 0v-4z" />
                    </svg>
                </div>
                <h4>Lip Balms &amp; Sticks</h4>
                <p>Medicated topical sticks for convenient, on-the-go application of therapeutic compounds.</p>
            </div>
            <div class="form-card" data-aos="fade-up" data-aos-delay="600">
                <div class="form-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3v18" />
                        <path d="M3 12h18" />
                        <circle cx="12" cy="12" r="9" stroke-dasharray="4 2" />
                    </svg>
                </div>
                <h4>And More</h4>
                <p>Nasal sprays, ear drops, wound care preparations, and specialty veterinary formulations if it can
                    be compounded, we can make it.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.forms-section {
    background: var(--dls-color-linen);
}

.forms-section .overline {
    color: var(--dls-color-olive);
}

.forms-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 52px;
}

.form-card {
    background: var(--dls-color-white);
    border: 1px solid var(--dls-color-border);
    padding: 40px 28px 36px;
    text-align: center;
    transition: border-color 0.3s, transform 0.3s;
}

.form-card:hover {
    border-color: var(--dls-color-taupe);
    transform: translateY(-4px);
}

.form-icon {
    width: 56px;
    height: 56px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: var(--dls-color-linen);
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-icon svg {
    width: 24px;
    height: 24px;
    stroke: var(--dls-color-burgundy);
    fill: none;
    stroke-width: 1.5;
}

.form-card h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 22px;
    font-weight: 500;
    color: var(--dls-color-burgundy);
    margin-bottom: 10px;
    letter-spacing: -1px;
}

.form-card p {
    font-size: 13px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    opacity: 0.65;
    font-weight: 300;
}

@media (max-width: 1024px) {
    .forms-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 900px) {}

@media (max-width: 600px) {
    .forms-grid {
        grid-template-columns: 1fr;
    }
}
</style>