<template>
    <section class="species-section">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 style="font-family:'SpeziaBookB';font-size:clamp(28px,3vw,42px);font-weight:400;text-align:center;color:var(--dls-color-burgundy);margin-bottom:16px" data-aos="fade-up">Conditions Veterinarians Prescribe Compounded Preparations For</h2>
        <p style="text-align:center;font-size:15px;color:var(--dls-color-burgundy);font-weight:300;margin-bottom:48px" data-aos="fade-up" data-aos-delay="100">Select a category to explore available compounding options</p>

        <div class="species-tabs">
            <button class="species-btn active" data-tab="cats" id="btn-cats"
                @click="handleChangeTab('cats')">Cats</button>
            <div class="species-divider"></div>
            <button class="species-btn" data-tab="dogs" id="btn-dogs" @click="handleChangeTab('dogs')">Dogs</button>
            <div class="species-divider"></div>
            <button class="species-btn" data-tab="horses" id="btn-horses"
                @click="handleChangeTab('horses')">Horses</button>
            <div class="species-divider"></div>
            <button class="species-btn" data-tab="other" id="btn-other" @click="handleChangeTab('other')">Other
                Animals</button>
        </div>

        <!-- CATS -->
        <div class="species-content active" id="tab-cats">
            <div class="cond-grid">
                <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="cond-header">
                        <div class="cond-name">Hyperthyroidism</div>
                    </div>
                    <div class="cond-treatment">Methimazole</div>
                    <div class="cond-form"><span class="cond-pill">Transdermal ear gel</span></div>
                    <div class="cond-why">Transdermal ear gel offers a pill-free alternative — veterinarians may
                        prescribe this form for cats who resist oral medication.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="cond-header">
                        <div class="cond-name">Chronic Pain &amp; Arthritis</div>
                    </div>
                    <div class="cond-treatment">Gabapentin, Meloxicam, Buprenorphine</div>
                    <div class="cond-form"><span class="cond-pill">Tuna-flavored suspension</span><span
                            class="cond-pill">Transdermal gel</span><span class="cond-pill">Micro-capsules</span></div>
                    <div class="cond-why">Flavored liquids and transdermal gels provide pill-free delivery options that
                        veterinarians can prescribe in customized strengths.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="cond-header">
                        <div class="cond-name">Nausea &amp; Loss of Appetite</div>
                    </div>
                    <div class="cond-treatment">Mirtazapine, Ondansetron, Cerenia®</div>
                    <div class="cond-form"><span class="cond-pill">Fish-flavored mini-tabs</span><span
                            class="cond-pill">Transdermal ear gel</span></div>
                    <div class="cond-why">Dissolving tabs and transdermal ear gels offer alternative delivery routes
                        when oral administration is difficult.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="cond-header">
                        <div class="cond-name">Behavior &amp; Anxiety</div>
                    </div>
                    <div class="cond-treatment">Fluoxetine, Gabapentin, Buspirone</div>
                    <div class="cond-form"><span class="cond-pill">Tuna-flavored liquid</span><span
                            class="cond-pill">Odorless ear cream</span></div>
                    <div class="cond-why">Transdermal creams are ideal for cats who refuse oral medication — stress-free
                        for cat and owner.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="cond-header">
                        <div class="cond-name">Antibiotic Therapy</div>
                    </div>
                    <div class="cond-treatment">Amoxicillin-clavulanate, Doxycycline, Metronidazole</div>
                    <div class="cond-form"><span class="cond-pill">Tuna/chicken suspensions</span><span
                            class="cond-pill">Tiny flavored tablets</span></div>
                    <div class="cond-why">Flavors mask bitterness; custom strengths prevent under-dosing kittens and
                        small cats.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="cond-header">
                        <div class="cond-name">Kidney Disease Support</div>
                    </div>
                    <div class="cond-treatment">Aluminum hydroxide, Benazepril, Potassium supplements</div>
                    <div class="cond-form"><span class="cond-pill">Flavored suspension</span><span
                            class="cond-pill">Transdermal gel</span></div>
                    <div class="cond-why">Compounded in flavored forms and customized strengths per your veterinarian's
                        order for individual patient needs.</div>
                </div>
            </div>
        </div>

        <!-- DOGS -->
        <div class="species-content" id="tab-dogs">
            <div class="cond-grid">
                <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="cond-header">
                        <div class="cond-name">Chronic Pain &amp; Arthritis</div>
                    </div>
                    <div class="cond-treatment">Gabapentin, Tramadol, Meloxicam</div>
                    <div class="cond-form"><span class="cond-pill">Beef/chicken chews</span><span
                            class="cond-pill">Bacon suspension</span><span class="cond-pill">Micro-capsules</span></div>
                    <div class="cond-why">Flavored chews and suspensions in veterinarian-specified strengths allow
                        precise weight-based dosing in palatable forms.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="cond-header">
                        <div class="cond-name">Behavior &amp; Anxiety</div>
                    </div>
                    <div class="cond-treatment">Fluoxetine, Trazodone, Buspirone, Clomipramine</div>
                    <div class="cond-form"><span class="cond-pill">Peanut-butter chews</span><span
                            class="cond-pill">Beef-flavored liquid</span><span class="cond-pill">Odorless ear
                            cream</span></div>
                    <div class="cond-why">Flavored chews and transdermal creams offer pill-free alternatives that
                        veterinarians can prescribe in customized doses.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="cond-header">
                        <div class="cond-name">Antibiotic Therapy</div>
                    </div>
                    <div class="cond-treatment">Amoxicillin-clavulanate, Doxycycline, Metronidazole</div>
                    <div class="cond-form"><span class="cond-pill">Banana/beef suspensions</span><span
                            class="cond-pill">Flavored chew tablets</span></div>
                    <div class="cond-why">Custom strengths prevent under-dosing small breeds and puppies; flavors mask
                        bitterness completely.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="cond-header">
                        <div class="cond-name">Nausea &amp; Loss of Appetite</div>
                    </div>
                    <div class="cond-treatment">Mirtazapine, Ondansetron, Cerenia®, Maropitant</div>
                    <div class="cond-form"><span class="cond-pill">Chicken-flavored mini-tabs</span><span
                            class="cond-pill">Transdermal gels</span></div>
                    <div class="cond-why">Dissolving tabs and transdermal gels provide alternative delivery routes when
                        oral dosing is not feasible.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="cond-header">
                        <div class="cond-name">Seizure &amp; Epilepsy</div>
                    </div>
                    <div class="cond-treatment">Phenobarbital, Potassium bromide, Levetiracetam, Zonisamide</div>
                    <div class="cond-form"><span class="cond-pill">Beef-flavored suspension</span><span
                            class="cond-pill">Liver chews</span></div>
                    <div class="cond-why">Precise milligram dosing in palatable forms — compounded to your
                        veterinarian's exact specifications for twice-daily administration.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="cond-header">
                        <div class="cond-name">Skin Allergies &amp; Infections</div>
                    </div>
                    <div class="cond-treatment">Ketoconazole, Cyclosporine, and other veterinarian-prescribed actives
                    </div>
                    <div class="cond-form"><span class="cond-pill">Medicated shampoo</span><span
                            class="cond-pill">Topical spray</span><span class="cond-pill">Flavored capsules</span></div>
                    <div class="cond-why">Topical and oral forms compounded in custom strengths for dogs of every size,
                        per your veterinarian's order.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="700">
                    <div class="cond-header">
                        <div class="cond-name">End-of-Life Comfort</div>
                    </div>
                    <div class="cond-treatment">Opioid blends, anti-nausea &amp; appetite support, topical anesthetics
                    </div>
                    <div class="cond-form"><span class="cond-pill">Chicken gravy suspension</span><span
                            class="cond-pill">Transdermal combos</span><span class="cond-pill">Gentle sprays</span>
                    </div>
                    <div class="cond-why">Compounded in palatable forms to support ease of administration as directed by
                        your veterinarian.</div>
                </div>
            </div>
        </div>

        <!-- HORSES -->
        <div class="species-content" id="tab-horses">
            <div class="cond-grid">
                <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="cond-header">
                        <div class="cond-name">Gastric Ulcers (EGUS)</div>
                    </div>
                    <div class="cond-treatment">Omeprazole, Sucralfate</div>
                    <div class="cond-form"><span class="cond-pill">Apple-flavored oral paste</span><span
                            class="cond-pill">Enteric-coated granules</span></div>
                    <div class="cond-why">Palatable paste in veterinarian-specified concentrations, compounded in forms
                        horses accept readily.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="cond-header">
                        <div class="cond-name">Joint &amp; Lameness Support</div>
                    </div>
                    <div class="cond-treatment">Phenylbutazone, Firocoxib, DMSO combos</div>
                    <div class="cond-form"><span class="cond-pill">Flavored granules</span><span
                            class="cond-pill">Topical liniment</span><span class="cond-pill">Oral paste</span></div>
                    <div class="cond-why">Granules can be top-dressed onto feed; topical liniments offer localized
                        application as directed by your veterinarian.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="cond-header">
                        <div class="cond-name">Respiratory Conditions</div>
                    </div>
                    <div class="cond-treatment">Clenbuterol, Dexamethasone, Gentamicin</div>
                    <div class="cond-form"><span class="cond-pill">Nebulizer solutions</span><span
                            class="cond-pill">Oral syringe paste</span></div>
                    <div class="cond-why">Nebulizer formulations and oral pastes compounded to your veterinarian's
                        specifications for airway-directed delivery.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="cond-header">
                        <div class="cond-name">Hoof &amp; Skin Conditions</div>
                    </div>
                    <div class="cond-treatment">Ketoconazole, Miconazole, Silver sulfadiazine, DMSO</div>
                    <div class="cond-form"><span class="cond-pill">Hoof packing paste</span><span
                            class="cond-pill">Medicated shampoo</span><span class="cond-pill">Wound spray</span></div>
                    <div class="cond-why">Concentrated topical formulations that adhere to hooves and withstand the barn
                        environment.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="cond-header">
                        <div class="cond-name">Cushing's Disease (PPID)</div>
                    </div>
                    <div class="cond-treatment">Pergolide mesylate</div>
                    <div class="cond-form"><span class="cond-pill">Flavored oral paste</span><span
                            class="cond-pill">Dissolve tablets</span></div>
                    <div class="cond-why">Custom-strength pergolide compounded in forms horses accept readily. Precise
                        titration from 0.25 mg up per your veterinarian's order.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="cond-header">
                        <div class="cond-name">Eye Infections &amp; Uveitis</div>
                    </div>
                    <div class="cond-treatment">Voriconazole, Miconazole, Atropine, Cyclosporine</div>
                    <div class="cond-form"><span class="cond-pill">Ophthalmic solutions</span><span
                            class="cond-pill">Sub-palpebral lavage formulas</span></div>
                    <div class="cond-why">Preservative-free ophthalmic preparations with antifungals unavailable
                        commercially in eye-ready form.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="700">
                    <div class="cond-header">
                        <div class="cond-name">Sedation &amp; Pain Management</div>
                    </div>
                    <div class="cond-treatment">Detomidine, Acepromazine, Flunixin, Gabapentin</div>
                    <div class="cond-form"><span class="cond-pill">Oral gel syringes</span><span
                            class="cond-pill">Flavored paste</span></div>
                    <div class="cond-why">Needle-free oral forms compounded to your veterinarian's specifications for
                        administration during farrier visits, trailering, or procedures.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="800">
                    <div class="cond-header">
                        <div class="cond-name">Metabolic &amp; Insulin Resistance</div>
                    </div>
                    <div class="cond-treatment">Metformin, Levothyroxine, Chromium supplements</div>
                    <div class="cond-form"><span class="cond-pill">Top-dress granules</span><span class="cond-pill">Oral
                            paste syringe</span></div>
                    <div class="cond-why">Custom doses compounded as top-dress granules or oral paste per your
                        veterinarian's specifications for individual patient needs.</div>
                </div>
            </div>
        </div>

        <!-- OTHER ANIMALS -->
        <div class="species-content" id="tab-other">
            <div class="cond-grid">
                <div class="cond-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="cond-header">
                        <div class="cond-name">GI Stasis &amp; Motility</div>
                        <span class="cond-species-tag">Rabbits · Guinea Pigs</span>
                    </div>
                    <div class="cond-treatment">Cisapride, Metoclopramide</div>
                    <div class="cond-form"><span class="cond-pill">Sugar-free berry liquids</span><span
                            class="cond-pill">Concentrated oral</span></div>
                    <div class="cond-why">Alcohol-free bases and precise dosing to 0.01 mL — compounded in strengths
                        appropriate for small herbivores per your veterinarian's order.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="cond-header">
                        <div class="cond-name">Chronic Pain &amp; Arthritis</div>
                        <span class="cond-species-tag">Rabbits · Ferrets</span>
                    </div>
                    <div class="cond-treatment">Meloxicam, Gabapentin, Tramadol</div>
                    <div class="cond-form"><span class="cond-pill">Banana suspension</span><span
                            class="cond-pill">Micro-capsules</span></div>
                    <div class="cond-why">Tiny doses measured to the milligram in flavors small mammals accept
                        willingly.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="cond-header">
                        <div class="cond-name">Behavior &amp; Anxiety</div>
                        <span class="cond-species-tag">Rabbits · Birds · Ferrets</span>
                    </div>
                    <div class="cond-treatment">Fluoxetine, Trazodone, Buspirone</div>
                    <div class="cond-form"><span class="cond-pill">Fruit-flavored liquid</span><span
                            class="cond-pill">Transdermal ear cream</span></div>
                    <div class="cond-why">Tiny oral volumes and transdermal options for species where pilling is
                        impossible.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="cond-header">
                        <div class="cond-name">Antibiotic &amp; Antifungal Therapy</div>
                        <span class="cond-species-tag">Birds · Reptiles · Exotics</span>
                    </div>
                    <div class="cond-treatment">Doxycycline, Metronidazole, Itraconazole, Enrofloxacin</div>
                    <div class="cond-form"><span class="cond-pill">Fruit-flavored suspension</span><span
                            class="cond-pill">Tiny flavored tablets</span></div>
                    <div class="cond-why">Custom micro-strengths compounded for birds and reptiles in doses and forms
                        not commercially available.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="cond-header">
                        <div class="cond-name">Adrenal Disease</div>
                        <span class="cond-species-tag">Ferrets</span>
                    </div>
                    <div class="cond-treatment">Melatonin, Flutamide</div>
                    <div class="cond-form"><span class="cond-pill">Tiny oral capsules</span><span
                            class="cond-pill">Transdermal gel</span></div>
                    <div class="cond-why">Compounded in strengths and forms sized for ferrets, per your veterinarian's
                        prescription.</div>
                </div>
                <div class="cond-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="cond-header">
                        <div class="cond-name">End-of-Life Comfort</div>
                        <span class="cond-species-tag">All Species</span>
                    </div>
                    <div class="cond-treatment">Opioid blends, anti-nausea &amp; appetite support, topical anesthetics
                    </div>
                    <div class="cond-form"><span class="cond-pill">Flavored suspension</span><span
                            class="cond-pill">Transdermal combos</span><span class="cond-pill">Gentle sprays</span>
                    </div>
                    <div class="cond-why">Compounded in palatable forms to support ease of administration as directed by
                        your veterinarian.</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const handleChangeTab = (type: string) => {
    document.querySelectorAll('.species-btn').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.species-content').forEach(c => c.classList.remove('active'))

    const tab: any = document.getElementById('tab-' + type)
    if (tab) {
        tab.classList.add('active')
    }

    const btn: any = document.getElementById('btn-' + type)
    if (btn) {
        btn.classList.add('active')
    }
}
</script>

<style lang="scss" scoped>
.species-section {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.species-tabs {
    display: flex;
    justify-content: center;
    gap: 0;
    margin-bottom: 64px;
}

.species-btn {
    font-family: "SpeziaBookB";
    font-size: clamp(18px, 2vw, 26px);
    font-weight: 400;
    color: var(--dls-color-taupe);
    background: none;
    border: none;
    padding: 16px 36px;
    cursor: pointer;
    position: relative;
    transition: color .4s;
    letter-spacing: .01em;
}

.species-btn::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--dls-color-burgundy);
    transition: width .4s ease;
}

.species-btn.active {
    color: var(--dls-color-burgundy);
}

.species-btn.active::after {
    width: 70%;
}

.species-btn:hover:not(.active) {
    color: var(--dls-color-burgundylight);
}

.species-divider {
    width: 1px;
    height: 40px;
    background: var(--dls-color-border);
    flex-shrink: 0;
    align-self: center;
}

.species-content {
    display: none;
}

.species-content.active {
    display: block;
}

.cond-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.cond-card {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 32px 28px;
    transition: transform .3s, box-shadow .3s;
    display: flex;
    flex-direction: column;
}

.cond-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(61, 30, 16, .07);
}

.cond-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
}

.cond-name {
    font-family: "SpeziaBookB";
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.25;
}

.cond-species-tag {
    display: inline-block;
    padding: 4px 12px;
    background: var(--dls-color-taupe-bg);
    color: var(--white);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: .04em;
    border-radius: 20px;
    flex-shrink: 0;
    white-space: nowrap;
}

.cond-treatment {
    font-size: 14px;
    line-height: 1.55;
    color: var(--dls-color-burgundy);
    font-weight: 400;
    margin-bottom: 8px;
}

.cond-form {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
}

.cond-pill {
    display: inline-block;
    padding: 4px 12px;
    background: rgba(166, 124, 91, .12);
    border-radius: 20px;
    font-size: 11px;
    font-weight: 500;
    color: var(--dls-color-burgundy);
    letter-spacing: .02em;
}

.cond-why {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    flex: 1;
}

@media(max-width:1024px) {
    .cond-grid {
        grid-template-columns: 1fr;
    }
}

@media(max-width:768px) {
    .species-section {
        padding-left: 24px;
    }

    .species-btn {
        padding: 12px 20px;
        font-size: 16px;
    }
}
</style>