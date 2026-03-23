<template>
    <section class="conditions">
        <div class="conditions-inner">
            <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                style="color:var(--dls-color-sunlight);opacity:.5">
                <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                    stroke-width="1.5" fill="none" />
                <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z"
                    stroke="currentColor" stroke-width="1.5" fill="none" />
                <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                    fill="none" />
                <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <h2 data-aos="fade-up">Conditions Prescribers Commonly Order Compounded Preparations For</h2>
            <p class="conditions-sub" data-aos="fade-up" data-aos-delay="100">We collaborate directly with your pediatrician or specialist</p>

            <div class="cond-grid">
                <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="cond-name">GERD (Reflux)</div>
                    <div class="cond-desc">Low pH buffered omeprazole or lansoprazole suspensions that stay stable for 60 days — no gritty beads.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="cond-name">ADHD</div>
                    <div class="cond-desc">Prescribers may order custom-strength methylphenidate or dexamphetamine flavored suspensions with incremental 1 mg titration steps, allowing precise dose adjustments for individual needs.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="cond-name">Seizure Disorders</div>
                    <div class="cond-desc">Concentrated levetiracetam, clonazepam, or topiramate liquids in sugar-free, alcohol-free vehicles for round-the-clock dosing.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="cond-name">Infant Pain &amp; Fever</div>
                    <div class="cond-desc">Prescribers may order acetaminophen or ibuprofen suppositories as an alternative delivery route when a child cannot take oral medication.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="cond-name">Eczema &amp; Diaper Rash</div>
                    <div class="cond-desc">Prescribers may order steroid-sparing tacrolimus 0.03% ointment or cholestyramine plus zinc oxide barrier creams compounded in strengths and bases suited to a
                    child's individual skin needs.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="cond-name">Cystic Fibrosis &amp; Nutrition</div>
                    <div class="cond-desc">High-calorie, flavored vitamin A-D-E-K drops or enzymatic powder packs that mix seamlessly into formula or juice.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="700">
                    <div class="cond-name">Oral Thrush &amp; Mouth Sores</div>
                    <div class="cond-desc">Prescribers may order honey-based nystatin lollipops or compounded mouthwash gels in child-friendly flavors and forms.</div>
                </div>
            </div>

            <p class="cond-note" data-aos="fade-up">All medications require a valid prescription. Compounded preparations are not FDA-approved. We collaborate directly with your pediatrician or specialist to prepare each prescription to their exact specifications.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.conditions {
    background: var(--dls-color-olive);
    padding: var(--dls-1p5cm) 60px;
    position: relative;
    overflow: hidden;
}

.conditions::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(255, 253, 245, .1);
    border-radius: 50%;
}

.conditions::after {
    content: '';
    position: absolute;
    bottom: -160px;
    left: -80px;
    width: 400px;
    height: 400px;
    border: 1px solid rgba(255, 253, 245, .06);
    border-radius: 50%;
}

.conditions-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.conditions h2 {
    font-family: "SpeziaBookB";
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    color: var(--dls-color-white);
    text-align: center;
    margin-bottom: 16px;
}

.conditions-sub {
    text-align: center;
    font-size: 15px;
    color: rgba(255, 253, 245, .7);
    font-weight: 300;
    margin-bottom: 56px;
}

.cond-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.cond-card {
    background: rgba(255, 253, 245, .08);
    border: 1px solid rgba(255, 253, 245, .12);
    border-radius: 14px;
    padding: 32px 28px;
    transition: background .3s, transform .3s;
}

.cond-card:hover {
    background: rgba(255, 253, 245, .15);
    transform: translateY(-3px);
}

.cond-name {
    font-family: "SpeziaBookB";
    font-size: 19px;
    font-weight: 400;
    color: var(--dls-color-white);
    margin-bottom: 10px;
    line-height: 1.25;
}

.cond-desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 253, 245, .75);
    font-weight: 300;
}

.cond-note {
    text-align: center;
    margin-top: 36px;
    font-size: 13.5px;
    font-style: italic;
    color: rgba(255, 253, 245, .55);
    font-weight: 300;
    line-height: 1.6;
}

@media(max-width:1024px) {
    .cond-grid {
        grid-template-columns: 1fr;
    }
}

@media(max-width:768px) {
    .conditions {
        padding: 64px 24px;
    }
}
</style>