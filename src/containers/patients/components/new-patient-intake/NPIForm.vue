<template>
    <section class="form-section">
        <div class="form-outer">
            <div class="form-intro" data-aos="fade-up">
                <p>Please use the form below to provide your patient information with Artisan Compounding Pharmacy. All
                    information is kept confidential and protected under HIPAA. Fields marked with <strong>*</strong>
                    are required.</p>
            </div>

            <!-- SECTION 1: PATIENT INFO -->
            <div class="form-card" data-aos="fade-up">
                <div class="form-card-header">
                    <div class="form-step-badge">1</div>
                    <h3>Patient Information</h3>
                </div>
                <p class="form-section-desc">Please provide your personal and contact details.</p>
                <div class="form-row form-group">
                    <div><label class="form-label">First Name <span class="req">*</span></label><input type="text"
                            class="form-input" placeholder="First name"></div>
                    <div><label class="form-label">Last Name <span class="req">*</span></label><input type="text"
                            class="form-input" placeholder="Last name"></div>
                </div>
                <div class="form-row form-group">
                    <div><label class="form-label">Date of Birth <span class="req">*</span></label><input type="date"
                            class="form-input"></div>
                    <div><label class="form-label">Gender <span class="req">*</span></label><select class="form-select">
                            <option value="" disabled selected>– Select –</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Non-binary</option>
                            <option>Prefer not to say</option>
                        </select></div>
                </div>
                <div class="form-row form-group">
                    <div><label class="form-label">Species <span class="req">*</span></label><select class="form-select"
                            id="speciesSelect" v-model="currentSpecies">
                            <option value="" disabled selected>– Select –</option>
                            <option value="Human">Human</option>
                            <option value="Canine">Canine</option>
                            <option value="Feline">Feline</option>
                        </select></div>
                    <div id="petNameField" :style="{ display: isShowPetFields ? '' : 'none' }"><label class="form-label">Pet's Name <span
                                class="req">*</span></label><input type="text" class="form-input"
                            placeholder="Pet's name"></div>
                </div>
                <div id="petInfoFields" :style="{ display: isShowPetFields ? '' : 'none' }">
                    <div class="form-row form-group">
                        <div><label class="form-label">Breed</label><input type="text" class="form-input"
                                placeholder="Breed"></div>
                        <div><label class="form-label">Weight (lbs)</label><input type="text" class="form-input"
                                placeholder="Approximate weight"></div>
                    </div>
                </div>
                <hr class="form-divider">
                <div class="form-group"><label class="form-label">Street Address <span
                            class="req">*</span></label><input type="text" class="form-input"
                        placeholder="Street address"></div>
                <div class="form-group"><label class="form-label">Address Line 2</label><input type="text"
                        class="form-input" placeholder="Apt, suite, unit (optional)"></div>
                <div class="form-row form-group">
                    <div><label class="form-label">City <span class="req">*</span></label><input type="text"
                            class="form-input" placeholder="City"></div>
                    <div><label class="form-label">State <span class="req">*</span></label><select class="form-select">
                            <option value="" disabled selected>– Select –</option>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
                            <option>Maine</option>
                            <option>Maryland</option>
                            <option>Massachusetts</option>
                            <option>Michigan</option>
                            <option>Minnesota</option>
                            <option>Mississippi</option>
                            <option>Missouri</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Hampshire</option>
                            <option>New Jersey</option>
                            <option>New Mexico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>North Dakota</option>
                            <option>Ohio</option>
                            <option>Oklahoma</option>
                            <option>Oregon</option>
                            <option>Pennsylvania</option>
                            <option>Rhode Island</option>
                            <option>South Carolina</option>
                            <option>South Dakota</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Utah</option>
                            <option>Vermont</option>
                            <option>Virginia</option>
                            <option>Washington</option>
                            <option>West Virginia</option>
                            <option>Wisconsin</option>
                            <option>Wyoming</option>
                        </select></div>
                </div>
                <div class="form-row form-group">
                    <div><label class="form-label">Zip Code <span class="req">*</span></label><input type="text"
                            class="form-input" placeholder="ZIP code"></div>
                    <div></div>
                </div>
                <hr class="form-divider">
                <div class="form-row form-group">
                    <div><label class="form-label">Cell Phone <span class="req">*</span></label><input type="tel"
                            class="form-input" placeholder="(555) 555-5555"></div>
                    <div><label class="form-label">Email Address</label><input type="email" class="form-input"
                            placeholder="you@email.com"></div>
                </div>
                <hr class="form-divider">
                <div class="form-card-header" style="margin-top:8px">
                    <div class="form-step-badge" style="background:var(--dls-color-olive)">✓</div>
                    <h3>Patient Preferences</h3>
                </div>
                <div class="pref-row"><span class="pref-label">I would like to receive text notifications regarding my
                        order.</span><label class="toggle"><input type="checkbox" checked><span
                            class="toggle-slider"></span></label></div>
                <div class="pref-row"><span class="pref-label">I would like to receive email notifications regarding my
                        order.</span><label class="toggle"><input type="checkbox" checked><span
                            class="toggle-slider"></span></label></div>
                <div class="pref-row"><span class="pref-label">I would like a child-resistant safety cap on my
                        medications if applicable.</span><label class="toggle"><input type="checkbox" checked><span
                            class="toggle-slider"></span></label></div>
            </div>

            <!-- SECTION 2: HEALTH INFO -->
            <div class="form-card" data-aos="fade-up">
                <div class="form-card-header">
                    <div class="form-step-badge">2</div>
                    <h3>Health Information</h3>
                </div>
                <p class="form-section-desc">This information helps our pharmacists ensure your compounded medications
                    are safe and personalized.</p>
                <div class="form-group"><label class="form-label">Drug Allergies <span class="req">*</span></label>
                    <div class="form-check-grid"><label class="form-check"><input type="checkbox"><span>No known drug
                                allergies</span></label><label class="form-check"><input type="checkbox"><span>Sulfa
                                drugs</span></label><label class="form-check"><input
                                type="checkbox"><span>Penicillins</span></label><label class="form-check"><input
                                type="checkbox"><span>Cephalosporins</span></label><label class="form-check"><input
                                type="checkbox"><span>Peanuts</span></label><label class="form-check"><input
                                type="checkbox"><span>Latex</span></label><label class="form-check"><input
                                type="checkbox"><span>Other</span></label></div>
                </div>
                <div class="form-group"><label class="form-label">If "Other," please describe</label><textarea
                        class="form-textarea" rows="3"
                        placeholder="List drug allergies and describe reactions..."></textarea></div>
                <hr class="form-divider">
                <div class="form-group"><label class="form-label">Health Conditions <span class="req">*</span></label>
                    <div class="form-check-grid"><label class="form-check"><input type="checkbox"><span>No known health
                                conditions</span></label><label class="form-check"><input
                                type="checkbox"><span>Hysterectomy</span></label><label class="form-check"><input
                                type="checkbox"><span>Pregnancy</span></label><label class="form-check"><input
                                type="checkbox"><span>Menopause / Perimenopause</span></label><label
                            class="form-check"><input type="checkbox"><span>Hypothyroidism</span></label><label
                            class="form-check"><input type="checkbox"><span>Breastfeeding</span></label><label
                            class="form-check"><input type="checkbox"><span>High blood pressure</span></label><label
                            class="form-check"><input type="checkbox"><span>High cholesterol</span></label><label
                            class="form-check"><input type="checkbox"><span>Diabetes</span></label><label
                            class="form-check"><input type="checkbox"><span>Depression</span></label><label
                            class="form-check"><input type="checkbox"><span>Clotting disorders</span></label><label
                            class="form-check"><input type="checkbox"><span>History of breast
                                cancer</span></label><label class="form-check"><input
                                type="checkbox"><span>Other</span></label></div>
                </div>
                <hr class="form-divider">
                <div class="form-group"><label class="form-label">Current Prescription Medications <span
                            class="req">*</span></label>
                    <div class="form-check-grid"><label class="form-check"><input type="checkbox"><span>No current
                                prescription medications</span></label><label class="form-check"><input
                                type="checkbox"><span>Thyroid medications</span></label><label class="form-check"><input
                                type="checkbox"><span>Progesterone</span></label><label class="form-check"><input
                                type="checkbox"><span>Estrogen</span></label><label class="form-check"><input
                                type="checkbox"><span>Testosterone</span></label><label class="form-check"><input
                                type="checkbox"><span>Other</span></label></div>
                </div>
                <hr class="form-divider">
                <div class="form-group"><label class="form-label">Current OTC Medications or Supplements <span
                            class="req">*</span></label>
                    <div class="form-check-grid"><label class="form-check"><input type="checkbox"><span>No current OTC
                                medications</span></label><label class="form-check"><input type="checkbox"><span>Vitamin
                                D</span></label><label class="form-check"><input type="checkbox"><span>Fish
                                oils</span></label><label class="form-check"><input
                                type="checkbox"><span>DHEA</span></label><label class="form-check"><input
                                type="checkbox"><span>Pregnenolone</span></label><label class="form-check"><input
                                type="checkbox"><span>Vitamin B</span></label><label class="form-check"><input
                                type="checkbox"><span>Multivitamin</span></label><label class="form-check"><input
                                type="checkbox"><span>Calcium</span></label><label class="form-check"><input
                                type="checkbox"><span>DIM</span></label><label class="form-check"><input
                                type="checkbox"><span>Saw palmetto</span></label><label class="form-check"><input
                                type="checkbox"><span>Ginkgo / Ginseng</span></label><label class="form-check"><input
                                type="checkbox"><span>SAMe</span></label><label class="form-check"><input
                                type="checkbox"><span>Black cohosh</span></label><label class="form-check"><input
                                type="checkbox"><span>Other</span></label></div>
                </div>
                <div class="form-group"><label class="form-label">Additional patient information</label><textarea
                        class="form-textarea" rows="3"
                        placeholder="Any additional information you'd like us to know..."></textarea></div>
            </div>

            <!-- SECTION 3: CONSENT & SIGN -->
            <div class="form-card" data-aos="fade-up">
                <div class="form-card-header">
                    <div class="form-step-badge">3</div>
                    <h3>Consent, Consultation &amp; Signature</h3>
                </div>
                <p class="form-section-desc">Please complete the following to finalize your intake.</p>
                <div class="form-row form-group">
                    <div><label class="form-label">Relationship to Patient <span class="req">*</span></label><select
                            class="form-select">
                            <option value="" disabled selected>– Select –</option>
                            <option>I am the patient</option>
                            <option>Parent</option>
                            <option>Guardian</option>
                            <option>Pet Owner</option>
                            <option>Caretaker</option>
                            <option>Other</option>
                        </select></div>
                    <div></div>
                </div>
                <div class="form-row form-group">
                    <div><label class="form-label">Representative First Name <span class="req">*</span></label><input
                            type="text" class="form-input" placeholder="First name"></div>
                    <div><label class="form-label">Representative Last Name <span class="req">*</span></label><input
                            type="text" class="form-input" placeholder="Last name"></div>
                </div>
                <hr class="form-divider">
                <div class="form-group"><label class="form-label">Pharmacist Consultation <span
                            class="req">*</span></label>
                    <p class="form-section-desc" style="margin-top:0;margin-bottom:16px">State law requires that all
                        patients be consulted by a pharmacist for any new prescriptions, unless declined.</p><select
                        class="form-select">
                        <option value="" disabled selected>– Select –</option>
                        <option>I am requesting a pharmacist consultation regarding my prescriptions</option>
                        <option>I am declining a consultation from the pharmacist</option>
                    </select>
                </div>
                <div class="form-group"><label class="form-label">Best time for consultation contact?</label>
                    <div class="form-row" style="margin-bottom:16px">
                        <div><label class="form-label" style="font-weight:400;color:rgba(55,18,19,.55)">Preferred
                                Time</label>
                            <div class="form-check-group"><label class="form-check"><input type="checkbox"><span>9 AM –
                                        12 PM Pacific</span></label><label class="form-check"><input
                                        type="checkbox"><span>12 PM – 3 PM Pacific</span></label><label
                                    class="form-check"><input type="checkbox"><span>3 PM – 5:30 PM
                                        Pacific</span></label></div>
                        </div>
                        <div><label class="form-label" style="font-weight:400;color:rgba(55,18,19,.55)">Preferred
                                Day</label>
                            <div class="form-check-group"><label class="form-check"><input
                                        type="checkbox"><span>Mon</span></label><label class="form-check"><input
                                        type="checkbox"><span>Tue</span></label><label class="form-check"><input
                                        type="checkbox"><span>Wed</span></label><label class="form-check"><input
                                        type="checkbox"><span>Thu</span></label><label class="form-check"><input
                                        type="checkbox"><span>Fri</span></label><label class="form-check"><input
                                        type="checkbox"><span>Sat</span></label></div>
                        </div>
                    </div>
                </div>
                <hr class="form-divider">
                <div class="form-group"><label class="form-label">Patient / Representative Signature <span class="req">*</span></label>
                    <div class="sig-pad" id="sigPad" :style="{
                        color: isSigned ? 'var(--dls-color-olive)' : 'rgba(55, 18, 19, .3)',
                        fontSize: isSigned ? '24px' : '14px',
                        fontFamily: isSigned ? 'var(--dls-font-spezia-book-b)' : ''
                    }" @click="isSigned = true">{{ isSigned ? '✓ Signed' : 'Click or draw to sign' }}</div>
                    <div class="sig-clear"
                        @click="isSigned = false">
                        Clear signature</div>
                </div>
                <div class="form-group"><label class="form-label">Date Signed <span class="req">*</span></label><input
                        type="date" class="form-input" id="dateSigned"></div>
                <hr class="form-divider">
                <div class="consent-box">
                    <p>By submitting this form, I acknowledge that the information provided is accurate and complete to
                        the best of my knowledge. I understand that Artisan Compounding Pharmacy will use this
                        information solely for the purpose of providing pharmaceutical care and will maintain the
                        confidentiality of my health information in compliance with HIPAA regulations.</p>
                    <p>I consent to being contacted by Artisan Compounding Pharmacy via my preferred method of contact
                        regarding my prescriptions, health inquiries, and related services.</p>
                </div>
                <label class="form-check" style="margin-bottom:16px"><input type="checkbox"><span>I agree to the above
                        consent and acknowledge that I have read the <a href="#"
                            style="color:var(--red-clay);text-decoration:underline">HIPAA Privacy Policy</a>. <span
                            class="req">*</span></span></label>
                <div class="form-submit-wrap">
                    <p class="form-submit-note">After submitting, a member of our team will reach out within 1 business
                        day to confirm your information and next steps.</p><button type="submit"
                        class="btn-submit">Submit Intake Form <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></button>
                </div>
            </div>

            <!-- HELP STRIP -->
            <div class="help-strip" data-aos="fade-up">
                <div class="help-strip-text">
                    <h3>Need help with this form?</h3>
                    <p>Call or text us at (714) 622-8460 — our team is happy to assist.</p>
                </div><a href="#" class="cta-light">Contact Us</a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const currentSpecies = ref<string>('')
const isSigned = ref<boolean>(false)

const isShowPetFields = computed<boolean>(() => {
    return currentSpecies.value === 'Canine' || currentSpecies.value === 'Feline'
})
</script>

<style lang="scss" scoped>
.form-section {
    padding: 96px 64px;
}

.form-outer {
    max-width: 860px;
    margin: 0 auto;
}

.form-intro {
    margin-bottom: 48px;
}

.form-intro p {
    color: rgba(55, 18, 19, .65);
    line-height: 1.8;
}

.form-intro p strong {
    color: var(--dls-color-burgundy);
    font-weight: 500;
}

.form-card {
    background: #fff;
    border: 1px solid var(--dls-color-border);
    border-radius: 20px;
    padding: 52px 48px 56px;
    margin-bottom: 28px;
}

.form-card-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 8px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--dls-color-border);
}

.form-step-badge {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--dls-color-redclay);
    color: var(--dls-color-linen);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--dls-font-spezia-book-b);
    font-size: 18px;
    flex-shrink: 0;
}

.form-card-header h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 24px;
    color: var(--dls-color-burgundy);
}

.form-section-desc {
    color: rgba(55, 18, 19, .55);
    font-size: 14px;
    margin-bottom: 32px;
    margin-top: 8px;
}

.form-group {
    margin-bottom: 28px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: .04em;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
}

.form-label .req {
    color: var(--dls-color-redclay);
    margin-left: 2px;
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid var(--dls-color-border);
    border-radius: 10px;
    font-size: 15px;
    color: var(--dls-color-burgundy);
    background: var(--dls-color-linen);
    outline: none;
    transition: border-color .3s, box-shadow .3s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    border-color: var(--dls-color-olive);
    box-shadow: 0 0 0 3px rgba(148, 117, 59, .1);
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: rgba(55, 18, 19, .3);
}

.form-select {
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23371213' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
}

.form-textarea {
    resize: vertical;
    min-height: 100px;
}

.form-divider {
    border: none;
    border-top: 1px solid var(--dls-color-border);
    margin: 40px 0;
}

.form-check-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.form-check-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form-check {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
}

.form-check input[type="checkbox"],
.form-check input[type="radio"] {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    accent-color: var(--dls-color-redclay);
    cursor: pointer;
    flex-shrink: 0;
}

.form-check span {
    font-size: 15px;
    color: rgba(55, 18, 19, .8);
    line-height: 1.5;
}

.pref-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid var(--dls-color-border);
}

.pref-row:last-child {
    border-bottom: none;
}

.pref-label {
    font-size: 15px;
    color: rgba(55, 18, 19, .8);
}

.toggle {
    position: relative;
    width: 44px;
    height: 24px;
    flex-shrink: 0;
}

.toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: rgba(55, 18, 19, .15);
    border-radius: 24px;
    transition: .3s;
}

.toggle-slider:before {
    content: '';
    position: absolute;
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background: #fff;
    border-radius: 50%;
    transition: .3s;
}

.toggle input:checked+.toggle-slider {
    background: var(--dls-color-olive);
}

.toggle input:checked+.toggle-slider:before {
    transform: translateX(20px);
}

.sig-pad {
    border: 1px dashed var(--dls-color-border);
    border-radius: 12px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(55, 18, 19, .3);
    font-size: 14px;
    cursor: crosshair;
    background: rgba(250, 248, 222, .4);
    margin-bottom: 8px;
}

.sig-clear {
    font-size: 13px;
    color: var(--dls-color-redclay);
    cursor: pointer;
    text-align: right;
}

.consent-box {
    background: rgba(247, 236, 157, .2);
    border: 1px solid rgba(247, 236, 157, .5);
    border-radius: 12px;
    padding: 24px 28px;
    margin-bottom: 28px;
}

.consent-box p {
    font-size: 14px;
    color: rgba(55, 18, 19, .7);
    line-height: 1.7;
    margin-bottom: 12px;
}

.consent-box p:last-of-type {
    margin-bottom: 0;
}

.form-submit-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-top: 40px;
}

.form-submit-note {
    font-size: 13px;
    color: rgba(55, 18, 19, .5);
    max-width: 400px;
    line-height: 1.6;
}

.btn-submit {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--dls-color-redclay);
    color: var(--dls-color-linen);
    padding: 16px 44px;
    border-radius: 100px;
    border: none;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: .04em;
    cursor: pointer;
    transition: background .3s, transform .2s;
}

.btn-submit:hover {
    background: #7a4830;
    transform: translateY(-1px);
}

.btn-submit svg {
    width: 16px;
    height: 16px;
}

.help-strip {
    max-width: 860px;
    margin: 0 auto;
    background: var(--dls-color-redclay);
    border-radius: 16px;
    padding: 40px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    position: relative;
    overflow: hidden;
}

.help-strip::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid rgba(250, 248, 222, .08);
    right: -40px;
    top: -40px;
}

.help-strip-text {
    position: relative;
    z-index: 2;
}

.help-strip-text h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 22px;
    color: var(--dls-color-linen);
    margin-bottom: 6px;
}

.help-strip-text p {
    color: rgba(250, 248, 222, .6);
    font-size: 14px;
    line-height: 1.7;
}

.cta-light {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--dls-color-linen);
    color: var(--dls-color-burgundy);
    padding: 12px 32px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    transition: background .3s, transform .2s;
    white-space: nowrap;
    position: relative;
    z-index: 2;
    text-decoration: none;
}

.cta-light:hover {
    background: var(--dls-color-sunshine);
    transform: translateY(-1px);
}

@media(max-width:1024p) {

    .form-row,
    .form-check-grid {
        grid-template-columns: 1fr;
    }

    .help-strip {
        flex-direction: column;
        text-align: center;
    }

    .form-submit-wrap {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media(max-width:768px) {

    .utility-bar,
    .navbar,
    .hero-content,
    .form-section {
        padding-left: 24px;
        padding-right: 24px;
    }

    .form-card {
        padding: 32px 24px 36px;
    }

    .help-strip {
        padding: 32px 24px;
        border-radius: 12px;
    }
}
</style>