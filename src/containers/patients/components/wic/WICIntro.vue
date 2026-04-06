<template>
    <section class="intro section-pad">
        <div class="intro-grid">
            <div>
                <div class="overline" data-aos="fade-up" style="color:var(--dls-color-olive)">The Basics</div>
                <h2 class="section-heading" data-aos="fade-up" data-aos-delay="100">What is Compounding?</h2>
                <p class="intro-lead" data-aos="fade-up" data-aos-delay="200">A return to pharmacy's roots where every medication is made for one
                    patient, one need, one purpose.</p>
                <p class="section-body" data-aos="fade-up" data-aos-delay="300">Pharmaceutical compounding is the science of creating customized
                    medications tailored to an individual patient's unique needs. When a commercially manufactured
                    medication doesn't quite work whether it's the wrong dosage, contains an allergen, has been
                    discontinued, or isn't available in the right form a compounding pharmacist can prepare a solution
                    crafted just for you.</p>
            </div>
            <div>
                <p class="section-body" data-aos="fade-up" data-aos-delay="200">At Artisan, every compound is prepared by hand in our dedicated,
                    climate-controlled lab using pharmaceutical-grade ingredients sourced from FDA-registered suppliers.
                    Your prescriber writes the prescription; our pharmacist brings it to life adjusting the strength,
                    selecting the ideal base, choosing the right dosage form, and ensuring every detail is exactly
                    right.</p>
                <p class="section-body" data-aos="fade-up" data-aos-delay="300" style="margin-top:24px">Compounding isn't new. It's actually how all
                    pharmacy began pharmacists hand-crafting remedies for individual patients. Modern compounding
                    combines that tradition with today's science, technology, and rigorous quality standards.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.intro {
    background: var(--dls-color-linen);
}

.intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.intro-lead {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(24px, 2.6vw, 34px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.45;
    color: var(--dls-color-burgundy);
    border-left: 2px solid var(--dls-color-taupe);
    padding-left: 32px;
    margin-bottom: 36px;
    letter-spacing: -1px;
}

@media (max-width: 1024px) {}

@media (max-width: 900px) {
    .intro-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media (max-width: 600px) {}
</style>