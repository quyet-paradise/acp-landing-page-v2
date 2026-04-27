<template>
    <div class="our-facility">
        <!-- Breadcrumb -->
        <div class="breadcrumb">
            <a href="/">Home</a>
            <span class="sep">›</span>
            <a href="#">About Us</a>
            <span class="sep">›</span>
            Our Facility
        </div>

        <!-- Page Title -->
        <div class="page-title">
            <h1>Our Facility</h1>
        </div>
        <!-- Intro (1-column width per template) -->
        <div class="facility-intro">
            <p class="lead">At our pharmacy, your safety and health are our top priorities.</p>
            <p class="body-text">That's why we've built a compounding lab that not only meets — but exceeds — the
                highest
                industry standards, including USP &lt;795&gt; and USP &lt;800&gt;. From careful handling of ingredients
                to a
                clean, controlled environment, every step we take is designed to ensure your medication is made with
                precision, purity, and care.</p>
        </div>

        <div class="hr-divider">
            <hr>
        </div>

        <div class="facility-content">
            <div class="slider" id="scrollable">
                <div class="slider--blocks">
                    <div class="slider--blocks--item large">
                        <div class="photo">FACILITY PHOTO 1</div>
                    </div>
                    <div class="slider--blocks--item medium">
                        <div class="photo">FACILITY PHOTO 2</div>
                    </div>
                    <div class="slider--blocks--item medium">
                        <div class="photo">FACILITY PHOTO 3</div>
                    </div>
                    <div class="slider--blocks--item large">
                        <div class="photo">FACILITY PHOTO 4</div>
                    </div>
                    <div class="slider--blocks--item large">
                        <div class="photo">FACILITY PHOTO 5</div>
                    </div>
                    <div class="slider--blocks--item cheat-item"></div>
                </div>
            </div>

            <div class="slider-btn prev-btn" @click="scrollLeft">‹</div>
            <div class="slider-btn next-btn" @click="scrollRight">›</div>
        </div>

        <!-- Standards Cards -->
        <section class="standards-section">
            <div class="standards-header">
                <h2>Built to the Highest Standards</h2>
            </div>
            <div class="standards-grid">
                <div class="standard-card">
                    <h3>USP &lt;795&gt; Compliant</h3>
                    <p>Our non-sterile compounding processes are designed to meet and exceed USP &lt;795&gt; standards
                        for
                        quality, consistency, and beyond-use dating of every preparation.</p>
                </div>
                <div class="standard-card">
                    <h3>USP &lt;800&gt; Compliant</h3>
                    <p>Hazardous drug handling follows strict USP &lt;800&gt; protocols — from containment primary
                        engineering controls to proper deactivation, decontamination, and disposal.</p>
                </div>
            </div>
        </section>

        <!-- Split Hero: Clean Environment (burgundy arch style) -->
        <section class="split-hero">
            <div class="split-hero-left">
                <!-- Decorative arch outlines -->
                <div class="arches">
                    <img src="@/assets/images/services/fountain-path-yellow.png" alt="fountain-path">
                </div>
                <div class="hero-eyebrow">Our Environment</div>
                <h3>A Clean,<br>Controlled<br>Space.</h3>
                <p class="hero-body">Our compounding lab is purpose-built with designated areas for hazardous and
                    non-hazardous preparations, proper ventilation systems, and rigorously maintained environmental
                    controls.</p>
            </div>
            <div class="split-hero-right">
                <img src="/images/facility/our-facility/hero-1.jpg" alt="hero">
            </div>
        </section>

        <!-- Split Hero: Ingredients (burgundy arch style, reversed) -->
        <section class="split-hero reverse">
            <div class="split-hero-left">
                <!-- Decorative arch outlines -->
                <div class="arches">
                    <img src="@/assets/images/services/fountain-path-yellow.png" alt="fountain-path">
                </div>
                <div class="hero-eyebrow">Our Ingredients</div>
                <h3>Finest<br>Ingredients.</h3>
                <p class="hero-body">We compound exclusively with high-quality ingredients from rigorously vetted
                    suppliers
                    — free from unnecessary fillers, additives, and common allergens including corn, soy, lactose,
                    dairy,
                    casein, dyes, parabens, sulfates, and preservatives.</p>
            </div>
            <div class="split-hero-right">
                <img src="/images/facility/our-facility/hero-2.jpg" alt="hero"></img>
            </div>
        </section>

        <!-- Taupe Banner -->
        <section class="taupe-banner">
            <h2>Quality and Safety Come First<br><span style="font-style:italic;">— Every Single Time —</span></h2>
            <div class="compliance-pills">
                <div class="pill">USP &lt;795&gt;</div>
                <div class="pill">USP &lt;800&gt;</div>
                <div class="pill">OSHA / Cal-OSHA</div>
            </div>
        </section>

        <!-- Process Steps (4-col per template) -->
        <section class="process-section">
            <div class="process-header">
                <h2>From Prescription to Patient</h2>
            </div>
            <div class="process-steps">
                <div class="process-step">
                    <div class="step-num">1</div>
                    <h4>Receive & Verify</h4>
                    <p>Every prescription is carefully reviewed and verified by our pharmacist for accuracy and clinical
                        appropriateness.</p>
                </div>
                <div class="process-step">
                    <div class="step-num">2</div>
                    <h4>Prepare & Compound</h4>
                    <p>Ingredients are weighed, measured, and compounded in our controlled lab following standardized
                        Master
                        Formulation Records.</p>
                </div>
                <div class="process-step">
                    <div class="step-num">3</div>
                    <h4>Quality Check</h4>
                    <p>Every preparation undergoes a final quality verification — checking potency, purity, and proper
                        labeling before release.</p>
                </div>
                <div class="process-step">
                    <div class="step-num">4</div>
                    <h4>Dispense & Deliver</h4>
                    <p>Your custom medication is packaged with care and dispensed with clear instructions for proper
                        use.
                    </p>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="cta-section">
            <a href="javascript:void(0)" @click="goToPage(ROUTE_NAME.CONTACT_US_PAGE)"  class="cta-btn">Contact Us</a>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import { goToPage } from '@/utils/common-utils'
const scrollLeft = () => {
    const scrollContainer: any = document.getElementById('scrollable')

    if (scrollContainer) {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' })
    }

}

const scrollRight = () => {
    const scrollContainer: any = document.getElementById('scrollable')

    if (scrollContainer) {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' })
    }
}
</script>

<style lang="scss" scoped>
.our-facility {
    width: 100%;
    margin-top: calc(var(--dls-aux-header-height) + var(--dls-nav-header-height));
    background: var(--dls-color-linen);
}

/* ── BREADCRUMB (per template inner page) ── */
.breadcrumb {
    text-align: center;
    padding: var(--dls-2cm) 60px 0 60px;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
}

.breadcrumb a {
    color: var(--dls-color-burgundy);
    text-decoration: none;
    transition: color 0.3s;
}

.breadcrumb a:hover {
    color: var(--dls-color-burgundylight);
    text-decoration: underline;
}

.breadcrumb .sep {
    margin: 0 0.6rem;
    font-size: 0.55rem;
}

/* ── PAGE TITLE (large Spezia-like serif per template) ── */
.page-title {
    text-align: center;
    padding: 0.5rem 2rem 1.5rem;
}

.page-title h1 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 76px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
    margin: 24px 0;
}

/* ── LEAD TEXT (1-column width per template) ── */
.facility-intro {
    max-width: 850px;
    margin: 0 auto;
    text-align: center;
    padding: 0 2rem 1rem;
}

.facility-intro .lead {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 30px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
    font-style: italic;
    margin: 0;
}

.facility-intro .body-text {
    font-size: 24px;
    line-height: 108%;
    letter-spacing: 0;
    font-weight: 300;
    color: var(--dls-color-burgundy);
}

/* ── HORIZONTAL LINE (template uses thin lines as dividers) ── */
.hr-divider {
    max-width: var(--dls-max-width);
    margin: var(--dls-2cm) auto;
    padding: 0 4rem;
}

.hr-divider hr {
    border: none;
    border-top: 1px solid var(--dls-color-border);
}

/* ── 2-COLUMN SPLIT BLOCKS (per template "2 column width") ── */
.split-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 0 4rem;
}

.split-block+.split-block {
    margin-top: 0;
}

.split-block.reverse {
    direction: rtl;
}

.split-block.reverse>* {
    direction: ltr;
}

.split-img {
    overflow: hidden;
    position: relative;
    min-height: 460px;
}

.split-img .img-ph {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--dls-font-spezia-book-b);
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
}

.split-text {
    padding: 3.5rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--dls-color-warmstone);
}

.split-text.bg-linen {
    background: var(--dls-color-linen);
}

.split-eyebrow {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--dls-color-redclay);
    margin-bottom: 1.2rem;
}

.split-text h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-weight: 400;
    font-size: 1.85rem;
    color: var(--dls-color-burgundy);
    margin-bottom: 1.2rem;
    line-height: 1.2;
    letter-spacing: -0.01em;
}

.split-text p {
    font-size: 0.92rem;
    line-height: 1.8;
    color: var(--dls-color-burgundy);
    margin-bottom: 0.8rem;
}

.split-text p:last-child {
    margin-bottom: 0;
}

/* ── STANDARDS (2-col grid per template pattern) ── */
.standards-section {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: var(--dls-2cm) 60px 120px 60px;
}

.standards-header {
    text-align: center;
    margin-bottom: 3rem;
}

.standards-header h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
}

.standards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 860px;
    margin: 0 auto;
    border: 1px solid var(--dls-color-border);
}

.standard-card {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.6s ease forwards;
}

.standard-card:nth-child(1) {
    animation-delay: 0.1s;
    border-right: 1px solid var(--dls-color-border);
}

.standard-card:nth-child(2) {
    animation-delay: 0.25s;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.standard-card h3 {
    font-size: 16px;
    line-height: 108%;
    letter-spacing: 0;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
    margin: 0;
    padding: 16px 32px;
    border-bottom: 1px solid var(--dls-color-border);
}

.standard-card p {
    font-size: 24px;
    line-height: 108%;
    letter-spacing: 0;
    font-weight: 300;
    color: var(--dls-color-burgundy);
    margin: 0;
    padding: 16px 32px;
}

/* ── TAUPE BANNER (per template brown/taupe sections) ── */
.taupe-banner {
    background: var(--dls-color-taupe);
    padding: var(--dls-2cm) 60px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.taupe-banner h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
    max-width: 750px;
    margin: 0 auto 1.5rem;
}

.compliance-pills {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.pill {
    padding: 0.55rem 1.3rem;
    border: 1px solid var(--dls-color-burgundy);
    border-radius: 50px;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
    transition: all 0.3s;
}

.pill:hover {
    opacity: .7;
}

/* ── PROCESS STEPS (4-col per template) ── */
.process-section {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: var(--dls-2cm) 60px;
}

.process-header {
    text-align: center;
    margin-bottom: 3.5rem;
}

.process-header h2 {
    font-size: 50px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-burgundy);
}

.process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    position: relative;
}

.process-steps::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 10%;
    right: 10%;
    height: 1px;
    background: var(--dls-color-border);
    z-index: 0;
}

.process-step {
    text-align: center;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(15px);
    animation: fadeUp 0.6s ease forwards;
}

.process-step:nth-child(1) {
    animation-delay: 0.15s;
}

.process-step:nth-child(2) {
    animation-delay: 0.3s;
}

.process-step:nth-child(3) {
    animation-delay: 0.45s;
}

.process-step:nth-child(4) {
    animation-delay: 0.6s;
}

.step-num {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--dls-color-linen);
    border: 1.5px solid var(--dls-color-redclay);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.3rem;
    font-family: var(--dls-font-spezia-book-b);
    font-size: 1.3rem;
    color: var(--dls-color-redclay);
}

.process-step h4 {
    font-family: var(--dls-font-jost);
    font-size: 16px;
    line-height: 145%;
    letter-spacing: -0.5%;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
    margin-bottom: 0.6rem;
}

.process-step p {
    font-size: 16px;
    line-height: 145%;
    letter-spacing: -0.5%;
    color: var(--dls-color-burgundy);
    max-width: 230px;
    margin: 0 auto;
}

/* ── CTA (rounded pill button per template) ── */
.cta-section {
    text-align: center;
    padding: 0 60px var(--dls-2cm) 60px;
}

.cta-btn {
    display: inline-block;
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 1.1rem 2.8rem;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    text-decoration: none;
    border-radius: 50px;
    transition: all 0.35s;
}

.cta-btn:hover {
    text-decoration: underline;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(55, 18, 19, 0.2);
}

/* ── BURGUNDY SPLIT-SCREEN HERO (Our Environment) ── */
.split-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 580px;
    width: 100%;
}

.split-hero-left {
    background: var(--dls-color-burgundy);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4.5rem 5rem;
}

/* Decorative arch outlines */
.split-hero-left .arches {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.split-hero-left .arches img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.split-hero-left .hero-eyebrow {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--dls-color-taupe);
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 2;
}

.split-hero-left h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-weight: 400;
    font-size: 76px;
    line-height: 105%;
    letter-spacing: -7%;
    color: var(--dls-color-sunshine);
    margin: 1.8rem 0;
    position: relative;
    z-index: 2;
}

.split-hero-left .hero-body {
    font-size: 24px;
    line-height: 105%;
    letter-spacing: 0;
    font-weight: 300;
    color: rgba(250, 246, 238, 0.72);
    max-width: 440px;
    margin-bottom: 2.2rem;
    position: relative;
    z-index: 2;
}

.split-hero-left .hero-link {
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dls-color-sunshine);
    text-decoration: none;
    position: relative;
    z-index: 2;
    display: inline-block;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--dls-color-sunshine);
    transition: opacity 0.3s;
    font-weight: 500;
}

.split-hero-left .hero-link:hover {
    opacity: 0.7;
}

.split-hero-right {
    position: relative;
    overflow: hidden;
}

.split-hero-right img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.split-hero-right .img-ph {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    transition: transform 0.8s ease;
}

.split-hero:hover .split-hero-right .img-ph {
    transform: scale(1.03);
}

.split-hero.reverse {
    direction: rtl;
}

.split-hero.reverse>* {
    direction: ltr;
}

.facility-content {
    width: 100%;
    position: relative;

    .slider {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        overflow-x: auto;
        scroll-behavior: smooth;
        width: calc(100vw - ((100vw - 100%) / 2));

        &::-webkit-scrollbar {
            display: none;
            /* Hide scrollbar */
        }

        &--blocks {
            display: flex;
            align-items: flex-start;
            gap: 16px;

            &--item {
                height: 400px;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--dls-color-creamlight);

                &.cheat-item {
                    width: 500px;
                    background: transparent;
                }

                &.large {
                    width: min(540px, 42vw);
                    background: var(--dls-color-sandy);
                }

                &.medium {
                    width: min(360px, 30vw);
                    background: var(--dls-color-olive);
                }

                &:hover {
                    .photo {
                        transform: scale(1.03);
                    }
                }
            }
        }
    }

    .slider-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: var(--dls-color-linen);
        border: 1px solid var(--dls-color-border);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        z-index: 10;
        font-size: 1.1rem;
        color: var(--dls-color-burgundy);

        &.prev-btn {
            left: 0.8rem;
        }

        &.next-btn {
            right: 0.8rem;
        }

        &:hover {
            background: var(--dls-color-burgundy);
            color: var(--dls-color-sunshine);
        }
    }
}

@media (max-width: 1024px) {
    .our-facility {
        margin-top: var(--dls-aux-header-height);
    }

    .standards-section,
    .process-section {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    .split-block {
        padding: 0 2.5rem;
    }

    .taupe-banner {
        padding: 3.5rem 2.5rem;
    }

    .hr-divider {
        padding: 0 2.5rem;
    }
}

@media (max-width: 900px) {
    .split-block {
        grid-template-columns: 1fr;
        padding: 0 2.5rem;
    }

    .split-block.reverse {
        direction: ltr;
    }

    .split-img {
        min-height: 320px;
    }

    .standards-grid {
        grid-template-columns: 1fr;
        max-width: 460px;
    }

    .standard-card:nth-child(1) {
        border-right: none;
    }

    .standard-card:nth-child(2) {
        border-top: 1px solid var(--dls-color-border);
    }

    .process-steps {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .process-steps::before {
        display: none;
    }

    .split-hero {
        grid-template-columns: 1fr;
        height: auto;
    }

    .split-hero.reverse {
        direction: ltr;
    }

    .split-hero-left {
        padding: 3.5rem 2.5rem;
    }

    .split-hero-right {
        min-height: 360px;
    }
}

@media (max-width: 768px) {
    .split-block {
        padding: 0 1.5rem;
    }

    .split-text {
        padding: 2.5rem 1.8rem;
    }

    .standards-section,
    .process-section {
        padding: 3rem 1.5rem;
    }

    .taupe-banner {
        padding: 3rem 1.5rem;
    }

    .process-steps {
        grid-template-columns: 1fr;
        max-width: 280px;
        margin: 0 auto;
    }

    .hr-divider {
        padding: 0 1.5rem;
    }

    .split-hero-left {
        padding: 3rem 1.5rem;
    }

    .split-hero-left h3 {
        font-size: 2rem;
    }
}
</style>