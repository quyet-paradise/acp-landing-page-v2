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
            <h2 data-aos="fade-up">Conditions Prescribers May Address with HRT*</h2>
            <p class="conditions-sub" data-aos="fade-up" data-aos-delay="100">Your prescriber determines whether HRT is
                appropriate for your individual situation. Common reasons patients are prescribed compounded hormones include:</p>

            <div class="gender-tabs">
                <button class="gender-btn active" data-tab="women" @click="handleChangeTab('women')" id="btn-women">For
                    Women</button>
                <div class="gender-divider"></div>
                <button class="gender-btn" data-tab="men" @click="handleChangeTab('men')" id="btn-men">For Men</button>
            </div>

            <!-- WOMEN -->
            <div class="gender-content active" id="tab-women">
                <div class="cond-grid">
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="cond-name">Menopause &amp; Perimenopause</div>
                        <div class="cond-desc">Hormonal changes during menopause and perimenopause can bring hot
                            flashes, night sweats, vaginal dryness, sleep disruption, and mood changes. Prescribers may
                            order customized HRT to address these symptoms.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="cond-name">Post-Hysterectomy Hormone Changes</div>
                        <div class="cond-desc">Women who have undergone a hysterectomy may experience hormone
                            deficiencies. Prescribers can order compounded hormones tailored to individual lab results.
                        </div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                        <div class="cond-name">Premenstrual Concerns (PMS)</div>
                        <div class="cond-desc">PMS symptoms often arise from hormonal fluctuations during the menstrual
                            cycle. A prescriber may use customized HRT to help support hormonal balance.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="400">
                        <div class="cond-name">Low Libido</div>
                        <div class="cond-desc">Changes in desire can accompany hormonal shifts at any stage of life.
                            Prescribers may include testosterone or other hormones in a compounded preparation to
                            address individual needs.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="500">
                        <div class="cond-name">Bone Density Concerns</div>
                        <div class="cond-desc">Postmenopausal hormonal decline is associated with changes in bone
                            density. A prescriber may consider HRT as part of a broader management plan.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="600">
                        <div class="cond-name">PCOS &amp; Hormonal Imbalance</div>
                        <div class="cond-desc">Polycystic ovary syndrome involves hormonal irregularities. Prescribers
                            may order customized compounded preparations as part of a comprehensive treatment approach.
                        </div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="cond-name">Sleep &amp; Mood Concerns</div>
                        <div class="cond-desc">Hormonal fluctuations can contribute to sleep disruption, mood changes,
                            and fatigue. A prescriber may address these through individualized HRT alongside other
                            strategies.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="cond-name">Adrenal &amp; Thyroid Support</div>
                        <div class="cond-desc">Adrenal and thyroid function can be influenced by hormonal imbalances.
                            Prescribers may order compounded preparations tailored to individual lab panels.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                        <div class="cond-name">Chronic Fatigue</div>
                        <div class="cond-desc">When fatigue is associated with hormonal imbalances identified through
                            lab work, a prescriber may include HRT as part of a personalized wellness plan.</div>
                    </div>
                </div>
            </div>

            <!-- MEN -->
            <div class="gender-content" id="tab-men">
                <div class="cond-grid">
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="cond-name">Andropause &amp; Low Testosterone</div>
                        <div class="cond-desc">Men may experience declining testosterone with age, which can be
                            associated with fatigue, reduced muscle mass, and mood changes. Prescribers may order
                            compounded testosterone in customized doses and forms.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="cond-name">Sexual Health Concerns</div>
                        <div class="cond-desc">Changes in libido and sexual function can accompany hormonal shifts. A
                            prescriber may address these through individually compounded HRT preparations.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                        <div class="cond-name">Muscle &amp; Strength Changes</div>
                        <div class="cond-desc">Age-related hormonal decline can be associated with changes in muscle
                            mass and strength. Prescribers may include testosterone therapy as part of a broader health
                            plan.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="400">
                        <div class="cond-name">Mood &amp; Energy Concerns</div>
                        <div class="cond-desc">Hormonal imbalances identified through lab work may contribute to mood
                            changes, brain fog, and fatigue. A prescriber may order customized HRT to support individual
                            needs.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="500">
                        <div class="cond-name">Sleep Disruption</div>
                        <div class="cond-desc">Hormonal changes can contribute to sleep difficulties. Prescribers may
                            address these through individualized compounded preparations alongside lifestyle
                            modifications.</div>
                    </div>
                    <div class="cond-card" data-aos="fade-up" data-aos-delay="600">
                        <div class="cond-name">Insulin Sensitivity</div>
                        <div class="cond-desc">Hormonal imbalances may be associated with metabolic concerns. In
                            combination with diet and exercise, a prescriber may include HRT in a comprehensive
                            management approach.</div>
                    </div>
                </div>
            </div>

            <p class="cond-note">Compounded medications are not reviewed or approved by the U.S. Food and Drug Administration (FDA) for safety or effectiveness. Compounded prescriptions are customized to meet the specific needs of an individual patient pursuant to a valid prescription.</p>
        </div>
    </section>
</template>

<script lang="ts" setup>
const handleChangeTab = (gender: string) => {
    document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.gender-content').forEach(c => c.classList.remove('active'));
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
/* CONDITIONS — BROWN BG */
.conditions {
    background: var(--dls-color-olive);
    padding: var(--dls-1p5cm) 60px;
    position: relative;
    overflow: hidden;
}

.conditions::before {
    content: '';
    position: absolute;
    top: -140px;
    right: -140px;
    width: 550px;
    height: 550px;
    border: 1px solid rgba(255, 253, 245, .1);
    border-radius: 50%;
}

.conditions::after {
    content: '';
    position: absolute;
    bottom: -180px;
    left: -100px;
    width: 450px;
    height: 450px;
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
    font-family: 'SpeziaBookB';
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
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.25;
}

/* Tabs: Women / Men */
.gender-tabs {
    display: flex;
    justify-content: center;
    gap: 0;
    margin-bottom: 48px;
}

.gender-btn {
    font-family: 'SpeziaBookB';
    font-size: clamp(18px, 2vw, 26px);
    font-weight: 400;
    color: rgba(255, 253, 245, .5);
    background: none;
    border: none;
    padding: 14px 40px;
    cursor: pointer;
    position: relative;
    transition: color .4s;
}

.gender-btn::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--dls-color-sunlight);
    transition: width .4s ease;
}

.gender-btn.active {
    color: var(--dls-color-white);
}

.gender-btn.active::after {
    width: 70%;
}

.gender-btn:hover:not(.active) {
    color: rgba(255, 253, 245, .75);
}

.gender-divider {
    width: 1px;
    height: 40px;
    background: rgba(255, 253, 245, .2);
    flex-shrink: 0;
    align-self: center;
}

.gender-content {
    display: none;
}

.gender-content.active {
    display: block;
}

.cond-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.cond-card {
    background: rgba(255, 253, 245, .08);
    border: 1px solid rgba(255, 253, 245, .12);
    border-radius: 14px;
    padding: 28px 24px;
    transition: background .3s, transform .3s;
}

.cond-card:hover {
    background: rgba(255, 253, 245, .15);
    transform: translateY(-3px);
}

.cond-name {
    font-family: 'SpeziaBookB';
    font-size: 18px;
    font-weight: 400;
    color: var(--dls-color-white);
    margin-bottom: 10px;
    line-height: 1.25;
}

.cond-desc {
    font-size: 13.5px;
    line-height: 1.6;
    color: rgba(255, 253, 245, .72);
    font-weight: 300;
}

.cond-note {
    text-align: center;
    margin-top: 40px;
    font-size: 13.5px;
    font-style: italic;
    color: rgba(255, 253, 245, .5);
    font-weight: 300;
    line-height: 1.7;
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
}

@media(max-width:1024px) {
    .cond-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:768px) {
    .conditions {
        padding: 64px 24px;
    }

    .cond-grid {
        grid-template-columns: 1fr;
    }

    .gender-btn {
        padding: 12px 20px;
        font-size: 18px;
    }
}
</style>