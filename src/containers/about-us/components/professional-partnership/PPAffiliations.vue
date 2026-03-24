<template>
    <section class="affiliations">
        <article class="aff-card" data-aos="fade-up" data-aos-delay="100">
            <img class="aff-logo" src="/images/accreditation/pcca.png" alt="PCCA Proud Member">
            <div class="aff-body">
                <h3 class="aff-name">PCCA</h3>
                <p class="aff-full">Professional Compounding Centers of America</p>
                <p class="aff-desc">As a PCCA member, we access the highest-quality bases, chemicals, and formulation
                    support available in compounding pharmacy.</p>
                <span class="aff-tag quality">Quality Ingredients</span>
            </div>
        </article>

        <article class="aff-card" data-aos="fade-up" data-aos-delay="200">
            <img class="aff-logo" src="/images/accreditation/ldn.png" alt="LDN Research Trust">
            <div class="aff-body">
                <h3 class="aff-name">LDN Research Trust</h3>
                <p class="aff-full">Low Dose Naltrexone Research Trust</p>
                <p class="aff-desc">Our affiliation with the LDN Research Trust reflects our expertise in low-dose
                    naltrexone therapy. We stay current on the latest research and formulation techniques so your
                    prescriber's LDN protocols are compounded with precision.</p>
                <span class="aff-tag expertise">Specialized Expertise</span>
            </div>
        </article>

        <article class="aff-card" data-aos="fade-up" data-aos-delay="300">
            <img class="aff-logo" src="/images/accreditation/apc.png" alt="Alliance for Pharmacy Compounding">
            <div class="aff-body">
                <h3 class="aff-name">A4PC</h3>
                <p class="aff-full">Alliance for Pharmacy Compounding</p>
                <p class="aff-desc">A4PC membership demonstrates our commitment to advancing the art and science of
                    compounding. We participate in advocacy, education, and practice standards that protect your access
                    to personalized medications.</p>
                <span class="aff-tag advocacy">Industry Advocacy</span>
            </div>
        </article>

    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.affiliations {
    padding: 0 60px var(--dls-2cm) 60px;
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
}

.aff-card {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 32px;
    padding: 40px 0;
    border-top: 1px solid var(--dls-color-border);
    align-items: start;
}

.aff-card:last-child {
    border-bottom: 1px solid var(--dls-color-border);
}

.aff-badge {
    width: 72px;
    height: 72px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: .04em;
    color: var(--dls-color-white);
    flex-shrink: 0;
}

.aff-badge.pcca {
    background: var(--dls-color-burgundy);
}

.aff-badge.ldn {
    background: var(--dls-color-redclay);
}

.aff-badge.a4pc {
    background: var(--dls-color-olive);
}

.aff-logo {
    width: 120px;
    height: auto;
    object-fit: contain;
    flex-shrink: 0;
    border-radius: 0;
}

.aff-body {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.aff-name {
    font-family: 'SpeziaBookB';
    font-size: clamp(22px, 3vw, 28px);
    font-weight: 400;
    line-height: 1.25;
    color: var(--dls-color-burgundy);
    margin: 0;
}

.aff-full {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--dls-color-redclay);
    opacity: .8;
}

.aff-type {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin: 4px 0;
}

.aff-type.pcca {
    color: var(--dls-color-burgundy);
}

.aff-type.ldn {
    color: var(--dls-color-redclay);
}

.aff-type.a4pc {
    color: var(--dls-color-olive);
}

.aff-type::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    opacity: .5;
}

.aff-desc {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    opacity: .85;
    max-width: 620px;
    margin-top: 4px;
}

.aff-tag {
    display: inline-block;
    margin-top: 12px;
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: .06em;
    text-transform: uppercase;
}

.aff-tag.quality {
    background: rgba(63, 18, 8, .06);
    color: var(--dls-color-burgundy);
}

.aff-tag.expertise {
    background: rgba(161, 85, 54, .1);
    color: var(--dls-color-redclay);
}

.aff-tag.advocacy {
    background: rgba(148, 117, 59, .15);
    color: #7A6230;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .affiliations {
        padding-left: 24px;
        padding-right: 24px;
    }

    .aff-card {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 28px 0;
    }

    .aff-badge {
        width: 56px;
        height: 56px;
        border-radius: 12px;
        font-size: 12px;
    }
}
</style>