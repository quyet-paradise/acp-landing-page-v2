<template>
    <section class="philosophy section-pad">
        <div class="philosophy-grid">
            <div>
                <div class="overline" data-aos="fade-up">Our Philosophy</div>
                <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">Rooted in Tradition.<br>Guided by Science.</h2>
                <p class="section-body" data-aos="fade-up" data-aos-delay="200">Artisan Compounding Pharmacy was born from a deeply personal belief that
                    medicine should never be one-size-fits-all. Our founder, Vanessa Nguyen, PharmD, was inspired by the
                    legacy of her grandfather, a Traditional Medicine Doctor who believed in treating each patient as an
                    individual. His philosophy of personalized care shaped her path through pharmacy school at USC,
                    through years of clinical practice, and ultimately to opening Artisan.</p>
                <p class="section-body" data-aos="fade-up" data-aos-delay="300" style="margin-top:20px">Today, Artisan operates at the intersection of
                    that time-honored philosophy and modern pharmaceutical science a pharmacy where every compound is
                    made with intention, precision, and care.</p>
            </div>
            <div>
                <div class="pull-quote" data-aos="fade-up" data-aos-delay="200">"Every compound I make, I ask myself would I give this to my own family?
                    If the answer isn't yes, it doesn't leave the lab."</div>
                <div class="pull-quote-attr" data-aos="fade-up" data-aos-delay="300">Vanessa Nguyen, PharmD, RPh</div>
                <p class="section-body" data-aos="fade-up" data-aos-delay="400" style="margin-top:48px">We chose the name "Artisan" because compounding
                    is a craft. It requires a pharmacist's hands, clinical judgment, and an unwavering commitment to
                    quality. Every medication that leaves our lab reflects that standard a formulation made for one
                    patient, one need, one purpose.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.philosophy {
    background: var(--dls-color-linen);
}

.philosophy-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.philosophy .overline {
    color: var(--dls-color-olive);
}

.pull-quote {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(24px, 2.8vw, 36px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.4;
    color: var(--dls-color-burgundy);
    border-left: 2px solid var(--dls-color-taupe);
    padding-left: 32px;
    margin-top: 40px;
    letter-spacing: -1px;
}

.pull-quote-attr {
    margin-top: 16px;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--dls-color-olive);
    padding-left: 34px;
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .philosophy-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media (max-width: 600px) {}
</style>