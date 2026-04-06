<template>
    <section class="form-section">
        <div class="form-outer">
            <div class="tab-bar" data-aos="fade-up">
                <button class="tab-btn" :class="{ 'active': currentTab === 'refill' }" @click="currentTab = 'refill'">Refill My Prescriptions</button>
                <button class="tab-btn" :class="{ 'active': currentTab === 'transfer' }" @click="currentTab = 'transfer'">Transfer My Prescriptions to Artisan</button>
            </div>
            <!-- TAB 1: REFILL -->
            <div class="tab-content" :class="{ 'active': currentTab === 'refill' }" id="tab-refill">
                <div class="form-card">
                    <h3 class="form-section-title">Refill My Prescriptions</h3>
                    <p class="form-section-desc">Please use the form below to submit refill orders for prescriptions
                        previously filled at Artisan Compounding Pharmacy — for both human and veterinary patients.</p>
                    <div class="form-notice warning"><strong>Please note:</strong> Any order placed on Saturday
                        afternoon or Sunday will not be addressed until the following business day.</div>
                    <div class="form-help">Need further assistance? Text us at <strong>(714) 622-8460</strong> to chat
                        with our team.</div>
                    <div class="form-row form-group">
                        <div><label class="form-label">Your Full Name <span class="req">*</span></label><input
                                type="text" class="form-input" placeholder="First and last name"></div>
                        <div><label class="form-label">Your Email Address</label><input type="email" class="form-input"
                                placeholder="you@email.com"></div>
                    </div>
                    <div class="form-row form-group">
                        <div><label class="form-label">Date of Birth <span class="req">*</span></label><input
                                type="date" class="form-input"></div>
                        <div><label class="form-label">Cell Phone <span class="req">*</span></label><input type="tel"
                                class="form-input" placeholder="(555) 555-5555"></div>
                    </div>
                    <div class="form-group"><label class="form-label">When do you need your order by? <span
                                class="req">*</span></label>
                        <p class="form-section-desc" style="margin-top:0;margin-bottom:12px">Please allow a 3 to 4
                            business day lead time. If this is an emergency, please call our pharmacy directly.</p>
                        <input type="date" class="form-input" style="max-width:300px">
                        <p style="font-size:12px;color:rgba(55,18,19,.45);margin-top:6px">The requested due date is not
                            a guarantee. Delays may occur due to billing, prescription refills, drug availability, or
                            compounding requirements.</p>
                    </div>
                    <div class="form-group"><label class="form-label">Do you need your order shipped/couriered or will
                            you pick up? <span class="req">*</span></label><select class="form-select"
                            style="max-width:400px">
                            <option value="" disabled selected>– Select –</option>
                            <option>I will pick up my order in Tustin</option>
                            <option>Local delivery (free — Tustin &amp; surrounding areas)</option>
                            <option>Ship via FedEx / UPS</option>
                        </select></div>
                    <hr class="form-divider">
                    <h3 class="form-section-title">Prescription Information</h3>
                    <p class="form-section-desc">Enter the medication(s) you'd like refilled. Click "+ Add Another
                        Prescription" to add more.</p>
                    <div id="rxRows">
                        <div class="rx-row" v-for="(item, index) in rxRefillListItem" :key="index">
                            <div>
                                <div class="rx-row-num">Rx #1</div><label class="form-label">Drug Name &amp; Form <span
                                        class="req">*</span></label><input type="text" class="form-input"
                                        v-model="item.name"
                                    placeholder="e.g. Progesterone 100mg capsule, Testosterone cream, etc.">
                            </div>
                            <div><label class="form-label">Quantity <span class="req">*</span></label><select
                                    class="form-select" v-model="item.quantity">
                                    <option value="" disabled selected>– Select –</option>
                                    <option>1 month supply</option>
                                    <option>2 month supply</option>
                                    <option>3 month supply</option>
                                    <option>Other</option>
                                </select></div>
                            <div><label class="form-label">Notes for this Rx</label><textarea class="form-textarea" v-model="item.notes"
                                    rows="2" placeholder="Any special instructions..."></textarea></div>
                        </div>
                    </div>
                    <button type="button" class="add-rx-btn" @click="addRxRow">+ Add Another Prescription</button>
                    <hr class="form-divider">
                    <div class="form-group"><label class="form-label">Please select an option below: <span
                                class="req">*</span></label>
                        <table class="auth-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Yes, please proceed with my order.</th>
                                    <th>No, contact my provider for further refills.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Do you authorize the pharmacy to dispense the remaining refills available, if
                                        fewer than the quantity requested?</td>
                                    <td><input type="radio" name="auth" value="yes"></td>
                                    <td><input type="radio" name="auth" value="no"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="form-group"><label class="form-label">Payment Method <span
                                class="req">*</span></label><select class="form-select" style="max-width:500px">
                            <option value="" disabled selected>– Select –</option>
                            <option>Charge the card on file from my previous order</option>
                            <option>I will provide a new payment method</option>
                            <option>I will pay at pickup</option>
                        </select></div>
                    <div class="form-group"><label class="form-label">Additional Order Notes, Promo Codes, or Urgent
                            Requests</label><textarea class="form-textarea" rows="3"
                            placeholder="We appreciate your continued loyalty and will do our best to meet your needs."></textarea>
                    </div>
                    <div class="form-actions"><button type="button" class="btn-review">Review</button><button
                            type="submit" class="btn-submit">Submit <svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg></button></div>
                </div>
            </div>
            <!-- TAB 2: TRANSFER -->
            <div class="tab-content" :class="{ 'active': currentTab === 'transfer' }" id="tab-transfer">
                <div class="form-card">
                    <h3 class="form-section-title">Transfer My Prescriptions to Artisan</h3>
                    <p class="form-section-desc">Ready for personalized care? Provide the details below and we'll
                        coordinate with your previous pharmacy to transfer your prescriptions.</p>
                    <div class="form-notice"><strong>How it works:</strong> Once you submit this form, our team will
                        contact your current pharmacy to initiate the transfer. We'll notify you when your prescriptions
                        are ready.</div>
                    <div class="form-row form-group">
                        <div><label class="form-label">Your Full Name <span class="req">*</span></label><input
                                type="text" class="form-input" placeholder="First and last name"></div>
                        <div><label class="form-label">Date of Birth <span class="req">*</span></label><input
                                type="date" class="form-input"></div>
                    </div>
                    <div class="form-row form-group">
                        <div><label class="form-label">Cell Phone <span class="req">*</span></label><input type="tel"
                                class="form-input" placeholder="(555) 555-5555"></div>
                        <div><label class="form-label">Email Address</label><input type="email" class="form-input"
                                placeholder="you@email.com"></div>
                    </div>
                    <hr class="form-divider">
                    <h3 class="form-section-title">Current Pharmacy Information</h3>
                    <p class="form-section-desc">Please provide the details of the pharmacy you are transferring from.
                    </p>
                    <div class="form-group"><label class="form-label">Pharmacy Name <span
                                class="req">*</span></label><input type="text" class="form-input"
                            placeholder="Name of your current pharmacy"></div>
                    <div class="form-row form-group">
                        <div><label class="form-label">Pharmacy Phone Number <span class="req">*</span></label><input
                                type="tel" class="form-input" placeholder="(555) 555-5555"></div>
                        <div><label class="form-label">Pharmacy Fax Number</label><input type="tel" class="form-input"
                                placeholder="(555) 555-5555"></div>
                    </div>
                    <div class="form-group"><label class="form-label">Pharmacy Address</label><input type="text"
                            class="form-input" placeholder="Street address, city, state, ZIP"></div>
                    <hr class="form-divider">
                    <div class="form-group"><label class="form-label">Prescriptions to Transfer <span
                                class="req">*</span></label><textarea class="form-textarea" rows="4"
                            placeholder="Please list all medications you'd like transferred, including drug name, strength, and form."></textarea>
                    </div>
                    <div class="form-group"><label class="form-label">Preferred Delivery Method <span
                                class="req">*</span></label><select class="form-select" style="max-width:400px">
                            <option value="" disabled selected>– Select –</option>
                            <option>I will pick up my order in Tustin</option>
                            <option>Local delivery (free — Tustin &amp; surrounding areas)</option>
                            <option>Ship via FedEx / UPS</option>
                        </select></div>
                    <div class="form-group"><label class="form-label">Additional Notes</label><textarea
                            class="form-textarea" rows="3"
                            placeholder="Any special instructions or questions..."></textarea></div>
                    <div class="form-actions"><button type="submit" class="btn-submit">Submit Transfer Request <svg
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg></button></div>
                    <p class="form-footnote">After submitting, our team will reach out within 1 business day to confirm
                        the transfer.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type RxRefillItem = {
    name: string,
    quantity: string,
    notes: string
}

const currentTab = ref<string>('refill')
const rxRefillListItem = ref<RxRefillItem[]>([{
    name: '',
    quantity: '',
    notes: ''
}])

const addRxRow = () => {
    rxRefillListItem.value.push({
        name: '',
        quantity: '',
        notes: ''
    })
}
</script>

<style lang="scss" scoped>
.form-section {
    padding: 96px 64px;
}

.form-outer {
    max-width: 900px;
    margin: 0 auto;
}

.tab-bar {
    display: flex;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    border: 1px solid var(--dls-color-border);
    border-bottom: none;
}

.tab-btn {
    flex: 1;
    padding: 20px 24px;
    font-family: var(--dls-font-spezia-book-b);
    font-size: 18px;
    color: rgba(55, 18, 19, .5);
    background: #fff;
    border: none;
    cursor: pointer;
    transition: all .3s;
    text-align: center;
}

.tab-btn.active {
    background: var(--dls-color-redclay);
    color: var(--dls-color-linen);
}

.tab-btn:hover:not(.active) {
    background: rgba(55, 18, 19, .03);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.form-card {
    background: #fff;
    border: 1px solid var(--dls-color-border);
    border-radius: 0 0 16px 16px;
    padding: 48px 44px 52px;
}

.form-section-title {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 22px;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--dls-color-border);
}

.form-section-desc {
    color: rgba(55, 18, 19, .55);
    font-size: 14px;
    margin-bottom: 28px;
    margin-top: 8px;
}

.form-notice {
    background: rgba(247, 236, 157, .3);
    border: 1px solid rgba(247, 236, 157, .6);
    border-radius: 10px;
    padding: 16px 20px;
    margin-bottom: 28px;
    font-size: 14px;
    color: var(--dls-color-burgundy);
    line-height: 1.6;
}

.form-notice strong {
    font-weight: 600;
}

.form-notice.warning {
    background: rgba(149, 88, 60, .08);
    border-color: rgba(149, 88, 60, .2);
    color: var(--dls-color-redclay);
}

.form-help {
    text-align: center;
    font-size: 14px;
    color: var(--dls-color-olive);
    margin-bottom: 32px;
    font-weight: 500;
}

.form-group {
    margin-bottom: 24px;
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
    margin: 36px 0;
}

.rx-row {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 16px;
    align-items: end;
    padding: 20px;
    background: var(--dls-color-linen);
    border-radius: 10px;
    margin-bottom: 12px;
    border: 1px solid var(--dls-color-border);
}

.rx-row-num {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 16px;
    color: var(--dls-color-olive);
    margin-bottom: 8px;
}

.add-rx-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px dashed var(--dls-color-border);
    border-radius: 10px;
    padding: 14px 20px;
    font-size: 14px;
    color: var(--dls-color-olive);
    cursor: pointer;
    transition: all .3s;
    width: 100%;
    justify-content: center;
    margin-top: 4px;
}

.add-rx-btn:hover {
    border-color: var(--dls-color-olive);
    background: rgba(148, 117, 59, .04);
}

.auth-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
}

.auth-table th {
    font-size: 13px;
    font-weight: 500;
    color: rgba(55, 18, 19, .6);
    padding: 12px 16px;
    text-align: center;
}

.auth-table td {
    padding: 12px 16px;
    border-top: 1px solid var(--dls-color-border);
}

.auth-table td:first-child {
    font-size: 14px;
    color: rgba(55, 18, 19, .75);
    text-align: left;
}

.auth-table td:not(:first-child) {
    text-align: center;
}

.auth-table input[type="radio"] {
    width: 18px;
    height: 18px;
    accent-color: var(--dls-color-redclay);
    cursor: pointer;
}

.form-actions {
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    margin-top: 36px;
}

.btn-review {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    color: var(--dls-color-burgundy);
    padding: 14px 36px;
    border-radius: 100px;
    border: 1px solid var(--dls-color-border);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all .3s;
}

.btn-review:hover {
    border-color: var(--dls-color-burgundy);
    background: rgba(55, 18, 19, .03);
}

.btn-submit {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--dls-color-redclay);
    color: var(--dls-color-linen);
    padding: 14px 36px;
    border-radius: 100px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background .3s, transform .2s;
}

.btn-submit:hover {
    background: #7a4830;
    transform: translateY(-1px);
}

.btn-submit svg {
    width: 14px;
    height: 14px;
}

.form-footnote {
    font-size: 13px;
    color: rgba(55, 18, 19, .45);
    font-style: italic;
    margin-top: 20px;
    text-align: center;
}

@media(max-width:1024px) {
    .rx-row {
        grid-template-columns: 1fr;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}

@media(max-width:768px) {
    .form-section {
        padding-left: 24px;
        padding-right: 24px;
    }

    .form-card {
        padding: 32px 24px 36px;
    }

    .tab-btn {
        font-size: 15px;
        padding: 16px 12px;
    }

    .form-actions {
        flex-direction: column;
    }
}
</style>