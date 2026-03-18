<template>
    <section class="tab-section">
        <div class="tab-header">
            <button class="tab-btn active" data-tab="him" id="btn-him" @click="handleChangeTab('him')">For Him</button>
            <div class="tab-divider"></div>
            <button class="tab-btn" data-tab="her" id="btn-her" @click="handleChangeTab('her')">For Her</button>
        </div>

        <!-- FOR HIM -->
        <div class="tab-content active" id="tab-him">
            <div class="gender-intro" data-aos="fade-up">
                <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                        stroke-width="1.5" fill="none" />
                    <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z"
                        stroke="currentColor" stroke-width="1.5" fill="none" />
                    <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor"
                        stroke-width="1.5" fill="none" />
                    <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <div class="gender-label">Common Concerns</div>
                <p class="gender-concerns">Reduced libido, erectile dysfunction, prostate health, and declining muscle
                    mass or energy.</p>
            </div>

            <div class="treatments-grid">
                <div class="treatment-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="treatment-goal">Erectile Concerns</div>
                    <div class="treatment-meta">
                        <div class="treatment-row">
                            <span class="treatment-row-label">Ingredients</span>
                            <span class="treatment-row-value">Sildenafil or Tadalafil (custom strength)</span>
                        </div>
                        <div class="treatment-row">
                            <span class="treatment-row-label">Why compound</span>
                            <span class="treatment-row-value">Custom strengths and delivery forms your prescriber can
                                tailor to individual needs</span>
                        </div>
                    </div>
                    <div class="treatment-form-tag">
                        <span class="form-pill">Flavored troches</span>
                        <span class="form-detail">rapid dissolve tablets, capsules</span>
                    </div>
                </div>

                <div class="treatment-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="treatment-goal">Desire &amp; Energy Concerns</div>
                    <div class="treatment-meta">
                        <div class="treatment-row">
                            <span class="treatment-row-label">Ingredients</span>
                            <span class="treatment-row-value">Testosterone transdermal, DHEA</span>
                        </div>
                        <div class="treatment-row">
                            <span class="treatment-row-label">Why compound</span>
                            <span class="treatment-row-value">Prescriber-specified doses in topical or sublingual forms
                                not commercially available</span>
                        </div>
                    </div>
                    <div class="treatment-form-tag">
                        <span class="form-pill">Topical gel</span>
                        <span class="form-detail">no needles, sublingual drops</span>
                    </div>
                </div>

                <div class="treatment-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="treatment-goal">On-Demand Options</div>
                    <div class="treatment-meta">
                        <div class="treatment-row">
                            <span class="treatment-row-label">Ingredients</span>
                            <span class="treatment-row-value">Bremelanotide (PT-141)</span>
                        </div>
                        <div class="treatment-row">
                            <span class="treatment-row-label">Why compound</span>
                            <span class="treatment-row-value">Available in a compounded nasal spray form for
                                prescriber-directed use</span>
                        </div>
                    </div>
                    <div class="treatment-form-tag">
                        <span class="form-pill">Nasal spray</span>
                        <span class="form-detail">discreet, travels well</span>
                    </div>
                </div>

                <div class="treatment-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="treatment-goal">Topical Pelvic Support</div>
                    <div class="treatment-meta">
                        <div class="treatment-row">
                            <span class="treatment-row-label">Ingredients</span>
                            <span class="treatment-row-value">Tadalafil transdermal</span>
                        </div>
                        <div class="treatment-row">
                            <span class="treatment-row-label">Why compound</span>
                            <span class="treatment-row-value">Topical delivery form compounded to your prescriber's
                                specifications</span>
                        </div>
                    </div>
                    <div class="treatment-form-tag">
                        <span class="form-pill">Penile cream</span>
                        <span class="form-detail">targeted, no systemic effects</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOR HER -->
        <div class="tab-content" id="tab-her">
            <div class="gender-intro" data-aos="fade-up">
                <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                        stroke-width="1.5" fill="none" />
                    <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z"
                        stroke="currentColor" stroke-width="1.5" fill="none" />
                    <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor"
                        stroke-width="1.5" fill="none" />
                    <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <div class="gender-label">Common Concerns</div>
                <p class="gender-concerns">Low desire, difficulty reaching climax, vaginal dryness, and discomfort
                    during intimacy.</p>
            </div>

            <div class="treatments-grid">
                <div class="treatment-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="treatment-goal">Desire Concerns</div>
                    <div class="treatment-meta">
                        <div class="treatment-row">
                            <span class="treatment-row-label">Ingredients</span>
                            <span class="treatment-row-value">Testosterone &amp; Oxytocin</span>
                        </div>
                        <div class="treatment-row">
                            <span class="treatment-row-label">Why compound</span>
                            <span class="treatment-row-value">Customized combination and strength per your prescriber's
                                order</span>
                        </div>
                    </div>
                    <div class="treatment-form-tag">
                        <span class="form-pill">Topical cream</span>
                        <span class="form-detail">or lozenge</span>
                    </div>
                </div>

                <div class="treatment-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="treatment-goal">Arousal Concerns</div>
                    <div class="treatment-meta">
                        <div class="treatment-row">
                            <span class="treatment-row-label">Ingredients</span>
                            <span class="treatment-row-value">Sildenafil</span>
                        </div>
                        <div class="treatment-row">
                            <span class="treatment-row-label">Why compound</span>
                            <span class="treatment-row-value">Available in a rapid dissolve troche — a form not
                                commercially manufactured</span>
                        </div>
                    </div>
                    <div class="treatment-form-tag">
                        <span class="form-pill">Rapid dissolve troche</span>
                        <span class="form-detail">discreet delivery form</span>
                    </div>
                </div>

                <div class="treatment-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="treatment-goal">Vaginal Dryness &amp; Discomfort</div>
                    <div class="treatment-meta">
                        <div class="treatment-row">
                            <span class="treatment-row-label">Ingredients</span>
                            <span class="treatment-row-value">Estriol / Estradiol / DHEA combo</span>
                        </div>
                        <div class="treatment-row">
                            <span class="treatment-row-label">Why compound</span>
                            <span class="treatment-row-value">Customized hormone combinations in prescriber-specified
                                strengths and bases</span>
                        </div>
                    </div>
                    <div class="treatment-form-tag">
                        <span class="form-pill">Suppository</span>
                        <span class="form-detail">or silky gel applicator</span>
                    </div>
                </div>

                <div class="treatment-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="treatment-goal">Daily Mood &amp; Desire Support</div>
                    <div class="treatment-meta">
                        <div class="treatment-row">
                            <span class="treatment-row-label">Ingredients</span>
                            <span class="treatment-row-value">Flibanserin</span>
                        </div>
                        <div class="treatment-row">
                            <span class="treatment-row-label">Why compound</span>
                            <span class="treatment-row-value">Compounded in custom capsule forms per your prescriber's
                                order</span>
                        </div>
                    </div>
                    <div class="treatment-form-tag">
                        <span class="form-pill">Color-coded capsules</span>
                        <span class="form-detail">simple daily routine</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const handleChangeTab = (gender: string) => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    const tab: any = document.getElementById('tab-' + gender)
    if (tab) {
        tab.classList.add('active')
    }

    const btn: any = document.getElementById('btn-' + gender)
    if (btn) {
        btn.classList.add('active')
    }
} 
</script>

<style lang="scss" scoped>
.tab-section {
    padding: 80px 60px 100px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.tab-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-bottom: 64px;
}

.tab-btn {
    font-family: 'SpeziaBookB';
    font-size: clamp(22px, 2.5vw, 34px);
    font-weight: 400;
    color: var(--dls-color-taupe);
    background: none;
    border: none;
    padding: 16px 48px;
    cursor: pointer;
    position: relative;
    transition: color 0.4s;
    letter-spacing: 0.01em;
}

.tab-btn::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--dls-color-burgundylight);
    transition: width 0.4s ease;
}

.tab-btn.active {
    color: var(--dls-color-burgundy);
}

.tab-btn.active::after {
    width: 80%;
}

.tab-btn:hover:not(.active) {
    color: var(--dls-color-burgundy);
}

.tab-divider {
    width: 1px;
    height: 48px;
    background: var(--dls-color-border);
    flex-shrink: 0;
}

/* ===== TAB CONTENT ===== */
.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.gender-intro {
    text-align: center;
    margin-bottom: 56px;
}

.gender-label {
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
    font-weight: 500;
    margin-bottom: 8px;
}

.gender-concerns {
    font-size: 17px;
    line-height: 1.65;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 680px;
    margin: 0 auto;
}

/* ===== TREATMENT CARDS ===== */
.treatments-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.treatment-card {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 40px;
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
}

.treatment-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(61, 30, 16, 0.08);
}

.treatment-goal {
    font-family: 'SpeziaBookB';
    font-size: 24px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 20px;
    line-height: 1.2;
}

.treatment-meta {
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
}

.treatment-row {
    display: flex;
    gap: 12px;
    font-size: 14.5px;
    line-height: 1.55;
    font-weight: 300;
}

.treatment-row-label {
    font-weight: 500;
    color: var(--dls-color-burgundy);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    flex-shrink: 0;
    width: 100px;
    padding-top: 2px;
}

.treatment-row-value {
    color: var(--dls-color-burgundy);
}

.treatment-form-tag {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    gap: 10px;
}

.form-pill {
    display: inline-block;
    padding: 6px 16px;
    background: var(--dls-color-taupe-bg);
    color: var(--dls-color-white);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    border-radius: 30px;
}

.form-detail {
    font-size: 13px;
    color: var(--dls-color-burgundylight);
    font-weight: 300;
    letter-spacing: 0.06em;
}

@media (max-width: 1024px) {
    .treatments-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .tab-section {
        padding: 48px 24px 64px;
    }

    .tab-btn {
        padding: 12px 24px;
        font-size: 20px;
    }

    .treatments-grid {
        grid-template-columns: 1fr;
    }

    .treatment-card {
        padding: 28px;
    }
}
</style>