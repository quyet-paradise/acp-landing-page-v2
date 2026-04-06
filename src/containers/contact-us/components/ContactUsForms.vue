<template>
    <section class="contact-section">
        <div class="contact-grid">
            <div class="contact-card card--hormone" data-aos="fade-up" data-aos-delay="100">
                <div class="contact-card-header">
                    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                        </svg></div>
                    <h2>Book a Hormone Consultation</h2>
                    <p>Choose your appointment type, pick a date and time that works for you, and we'll take care of the rest.</p>
                </div>
                <div class="contact-card-body">
                    <!-- Step indicators -->
                    <div class="booking-steps">
                        <div class="step-dot active" id="dot1"></div>
                        <div class="step-dot" id="dot2"></div>
                        <div class="step-dot" id="dot3"></div>
                    </div>

                    <!-- STEP 1: Appointment Type + Calendar + Time -->
                    <div class="booking-step" :class="{ 'active': currentStep === 1 }" id="step1">
                        <div class="appt-type-group">
                            <label>Appointment Type</label>
                            <div class="appt-types">
                                <div class="appt-type" :class="{ 'selected': selectedApptType === APPOINTMENT_TYPE.DISCOVERY_CALL }" @click="selectApptType(APPOINTMENT_TYPE.DISCOVERY_CALL, 0, '15 min')"
                                    data-duration="15 min" data-price="0">
                                    <div class="appt-radio"></div>
                                    <div class="appt-info">
                                        <div class="appt-name">Free Discovery Call</div>
                                        <div class="appt-desc">A quick, no-pressure conversation with our pharmacists to
                                            understand your symptoms, help you choose the right test kit, and figure out
                                            the next step.</div>
                                    </div>
                                    <div class="appt-duration">15 min</div>
                                </div>
                                <div class="appt-type"
                                    :class="{ 'selected': selectedApptType === APPOINTMENT_TYPE.ARTISAN_ESSENTIAL_HORMONE_PANEL }" @click="selectApptType(APPOINTMENT_TYPE.ARTISAN_ESSENTIAL_HORMONE_PANEL, 259, '50 min')"
                                    data-duration="50 min" data-price="259">
                                    <div class="appt-radio"></div>
                                    <div class="appt-info">
                                        <div class="appt-name">Artisan Essential Hormone Panel</div>
                                        <div class="appt-desc">Our essential panel covers core hormone markers plus a
                                            consultation to review your results and build a personalized plan.</div>
                                    </div>
                                    <div class="appt-duration"><span class="appt-price-tag">$259</span></div>
                                </div>
                                <div class="appt-type"
                                    :class="{ 'selected': selectedApptType === APPOINTMENT_TYPE.ARTISAN_COMPREHENSIVE_HORMONE_PANEL }" @click="selectApptType(APPOINTMENT_TYPE.ARTISAN_COMPREHENSIVE_HORMONE_PANEL, 359, '50 min')"
                                    data-duration="50 min" data-price="359">
                                    <div class="appt-radio"></div>
                                    <div class="appt-info">
                                        <div class="appt-name">Artisan Comprehensive Hormone Panel</div>
                                        <div class="appt-desc">Our most thorough panel with an expanded set of hormone
                                            and wellness markers, plus a consultation to review your results and create
                                            a detailed treatment plan.</div>
                                    </div>
                                    <div class="appt-duration"><span class="appt-price-tag">$359</span></div>
                                </div>
                                <div class="appt-type"
                                    :class="{ 'selected': selectedApptType === APPOINTMENT_TYPE.CONSULTATION_ONLY }" @click="selectApptType(APPOINTMENT_TYPE.CONSULTATION_ONLY, 85, '50 min')"
                                    data-duration="50 min" data-price="85">
                                    <div class="appt-radio"></div>
                                    <div class="appt-info">
                                        <div class="appt-name">Consultation Only</div>
                                        <div class="appt-desc">Already have your lab results? Bring your own labs and
                                            meet with our pharmacist to discuss your results and explore treatment
                                            options.</div>
                                    </div>
                                    <div class="appt-duration"><span class="appt-price-tag">$85</span></div>
                                </div>
                            </div>
                        </div>

                        <div id="calendarWrap" style="display:none">
                            <div class="cal-header">
                                <h3 id="calMonthYear"></h3>
                                <div class="cal-nav">
                                    <button @click="changeMonth(-1)" aria-label="Previous month"><svg
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg></button>
                                    <button @click="changeMonth(1)" aria-label="Next month"><svg viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg></button>
                                </div>
                            </div>
                            <div class="cal-grid" id="calGrid"></div>

                            <div id="timeSlotsWrap" style="display:none">
                                <div class="time-slots-label">Available Times</div>
                                <div class="time-slots" id="timeSlots"></div>
                            </div>

                        </div><!-- end calendarWrap -->

                        <button class="form-submit" id="step1Next" style="opacity:.4;pointer-events:none"
                            @click="goToStep(2)">Continue<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg></button>
                    </div>

                    <!-- STEP 2: Patient Info -->
                    <div class="booking-step" :class="{ 'active': currentStep === 2 }" id="step2">
                        <div class="booking-summary" id="summaryPreview"></div>
                        <div class="form-row">
                            <div class="form-group"><label>First Name</label><input type="text" placeholder="Jane"
                                    id="bkFirstName" v-model="formData.firstName"></div>
                            <div class="form-group"><label>Last Name</label><input type="text" placeholder="Doe"
                                    id="bkLastName" v-model="formData.lastName"></div>
                        </div>
                        <div class="form-group"><label>Email</label><input type="email" placeholder="jane@email.com"
                                id="bkEmail" v-model="formData.email"></div>
                        <div class="form-group"><label>Phone</label><input type="tel" placeholder="(714) 555-0123"
                                id="bkPhone"></div>
                        <div class="form-group"><label>Preferred Consultation Type</label><select id="bkType">
                                <option value="" disabled selected>Select an option</option>
                                <option>In-Person Visit</option>
                                <option>Phone Consultation</option>
                                <option>Virtual (Telehealth)</option>
                            </select></div>
                        <div class="form-group"><label>Tell Us About Your Goals</label><textarea
                                placeholder="Briefly describe your symptoms, concerns, or what you hope to address..."
                                id="bkGoals"></textarea></div>

                        <!-- Test Kit Delivery (panels only) -->
                        <div class="delivery-section" id="deliverySection" style="display:none">
                            <div class="payment-header">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" class="delivery-icon"
                                    style="width:22px;height:22px">
                                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <h4>Test Kit Delivery</h4>
                            </div>
                            <div class="delivery-options">
                                <div class="delivery-option" :class="{ 'selected': selectedDelivery === DELIVERY_TYPE.PICKUP }" @click="selectDelivery(DELIVERY_TYPE.PICKUP)">
                                    <div class="delivery-radio"></div>
                                    <div class="delivery-option-info">
                                        <div class="delivery-option-name">Pick Up at Pharmacy</div>
                                        <div class="delivery-option-desc">Pick up your test kit at our Tustin location.
                                        </div>
                                    </div>
                                    <svg class="delivery-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </div>
                                <div class="delivery-option" :class="{ 'selected': selectedDelivery === DELIVERY_TYPE.MAIL }" @click="selectDelivery(DELIVERY_TYPE.MAIL)">
                                    <div class="delivery-radio"></div>
                                    <div class="delivery-option-info">
                                        <div class="delivery-option-name">Mail to Me</div>
                                        <div class="delivery-option-desc">We'll ship the test kit to your address.</div>
                                    </div>
                                    <svg class="delivery-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="1" y="3" width="15" height="13" />
                                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                                        <circle cx="5.5" cy="18.5" r="2.5" />
                                        <circle cx="18.5" cy="18.5" r="2.5" />
                                    </svg>
                                </div>
                            </div>
                            <div class="mailing-fields" id="mailingFields" :class="{ 'visible': selectedDelivery === DELIVERY_TYPE.MAIL }">
                                <div class="form-group"><label>Street Address</label><input type="text"
                                        placeholder="123 Main Street" id="bkStreet" v-model="formData.street"></div>
                                <div class="form-group"><label>Apt / Suite / Unit (Optional)</label><input type="text"
                                        placeholder="Apt 4B" id="bkApt"></div>
                                <div class="form-row">
                                    <div class="form-group"><label>City</label><input type="text" placeholder="Tustin"
                                            id="bkCity" v-model="formData.city"></div>
                                    <div class="form-group"><label>State</label><input type="text" placeholder="CA"
                                            id="bkState" v-model="formData.state" maxlength="2"></div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group"><label>ZIP Code</label><input type="text"
                                            placeholder="92780" id="bkZip" maxlength="10" v-model="formData.zip"></div>
                                    <div class="form-group"><label>Phone for Delivery</label><input type="tel"
                                            placeholder="(714) 555-0123" id="bkDeliveryPhone"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Payment (paid appointments only) -->
                        <div class="payment-section" id="paymentSection" style="display:none">
                            <div class="payment-header">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                                <h4>Payment Details</h4>
                            </div>
                            <div class="payment-amount">
                                <span class="pay-label" id="payLabel">Hormone Consultation (50 min)</span>
                                <span class="pay-price" id="payPrice">$150</span>
                            </div>
                            <div class="form-group card-number-group">
                                <label>Card Number</label>
                                <div class="card-input-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                        <line x1="1" y1="10" x2="23" y2="10" />
                                    </svg>
                                    <input type="text" placeholder="1234 5678 9012 3456" id="bkCardNumber" v-model="formData.cardNum"
                                        maxlength="19" @input="formatCardNumber($event)">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Name on Card</label>
                                <input type="text" placeholder="Jane Doe" id="bkCardName" v-model="formData.cardName">
                            </div>
                            <div class="card-input-row">
                                <div class="form-group"><label>Expiration</label><input type="text"
                                        placeholder="MM / YY" id="bkCardExp" maxlength="7" @input="formatExpiry($event)" v-model="formData.cardExp">
                                </div>
                                <div class="form-group"><label>CVV</label><input type="text" placeholder="123"
                                        id="bkCardCvv" maxlength="4" v-model="formData.cardCvv"></div>
                            </div>
                            <div class="card-brands">
                                <span>We accept</span>
                                <div class="card-brand-icon">VISA</div>
                                <div class="card-brand-icon">MC</div>
                                <div class="card-brand-icon">AMEX</div>
                                <div class="card-brand-icon">JCB</div>
                                <div class="card-brand-icon" style="font-size:7px;letter-spacing:0">PayPal</div>
                                <div class="card-brand-icon" style="font-size:7px;letter-spacing:0">Venmo</div>
                                <div class="card-brand-icon">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                                        stroke-width="1.5">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                        <path d="M8 12l2.5 2.5L16 9" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="card-brand-icon">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                        <path
                                            d="M17.05 11.97c-.03-2.76 2.25-4.09 2.35-4.15-1.28-1.87-3.27-2.13-3.98-2.16-1.69-.17-3.31 1-4.17 1-.86 0-2.18-.97-3.59-.95-1.85.03-3.55 1.07-4.5 2.73-1.92 3.33-.49 8.26 1.38 10.96.92 1.33 2.01 2.82 3.44 2.76 1.38-.05 1.9-.89 3.57-.89 1.66 0 2.13.89 3.58.87 1.49-.03 2.44-1.35 3.35-2.69 1.06-1.54 1.49-3.03 1.52-3.11-.03-.01-2.91-1.12-2.95-4.37z" />
                                        <path
                                            d="M14.27 4.54c.76-.92 1.28-2.2 1.14-3.49-1.1.04-2.43.73-3.22 1.66-.71.82-1.33 2.13-1.16 3.39 1.23.1 2.48-.62 3.24-1.56z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="secure-note">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0110 0v4" />
                                </svg>
                                Your payment information is encrypted and secure.
                            </div>
                        </div>

                        <div class="step-nav">
                            <button class="btn-back" @click="goToStep(1)">← Back</button>
                            <button class="form-submit" @click="submitBooking()"><span id="submitBtnText">Book
                                    Appointment</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg></button>
                        </div>
                    </div>

                    <!-- STEP 3: Confirmation -->
                    <div class="booking-step" :class="{ 'active': currentStep === 3 }" id="step3">
                        <div class="confirmation">
                            <div class="confirm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></div>
                            <h3>You're All Set!</h3>
                            <p>Thank you for booking your consultation, <span id="confirmName"></span>. Talk to you
                                soon!</p>
                            <div class="booking-summary" id="confirmSummary" style="margin-top:20px;text-align:left">
                            </div>
                            <div class="questionnaire-note" id="questionnaireNote" style="display:none">
                                <div class="qn-title">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    What's Next?
                                </div>
                                <p>We will send you a <strong>pre-consultation questionnaire</strong> via email for you
                                    to fill out before your appointment. This helps us understand your health history
                                    and goals so we can make the most of your time together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-card card--general" data-aos="fade-up" data-aos-delay="200">
                <div class="contact-card-header">
                    <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg></div>
                    <h2>General Inquiry</h2>
                    <p>Questions about our compounding services, pricing, prescriptions, or anything else? Drop us a
                        line and we'll get back to you promptly.</p>
                </div>
                <div class="contact-card-body">
                    <form onsubmit="return false;">
                        <div class="form-row">
                            <div class="form-group"><label>First Name</label><input type="text" placeholder="Jane">
                            </div>
                            <div class="form-group"><label>Last Name</label><input type="text" placeholder="Doe"></div>
                        </div>
                        <div class="form-group"><label>Email</label><input type="email" placeholder="jane@email.com">
                        </div>
                        <div class="form-group"><label>Phone (Optional)</label><input type="tel"
                                placeholder="(714) 555-0123"></div>
                        <div class="form-group"><label>Subject</label><select>
                                <option value="" disabled selected>What is your inquiry about?</option>
                                <option>Compounding Services</option>
                                <option>Prescription Transfer</option>
                                <option>Pricing &amp; Payment</option>
                                <option>Provider Partnership</option>
                                <option>Careers</option>
                                <option>Other</option>
                            </select></div>
                        <div class="form-group"><label>Message</label><textarea
                                placeholder="How can we help you?"></textarea></div>
                        <button type="submit" class="form-submit">Send Message<svg viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg></button>
                        <p class="form-note">We typically respond within 1 business day.</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { APPOINTMENT_TYPE, DELIVERY_TYPE } from '@/constants/app-constants'
import { ElMessageBox } from 'element-plus'

const today = new Date()
const currentMonth = ref<number>(today.getMonth())
const currentYear = ref<number>(today.getFullYear())
const selectedDate = ref<any>(null)
const selectedTime = ref<any>(null)
const selectedApptType = ref<any>(null)
const selectedApptDuration = ref<any>(null)
const selectedApptPrice = ref<number>(0)
const selectedDelivery = ref<string>(DELIVERY_TYPE.PICKUP)
const currentStep = ref<number>(1)
const formData = reactive<any>({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    cardNum: '',
    cardName: '',
    cardExp: '',
    cardCvv: ''
})

const isPanel = computed<boolean>(() => {
    return selectedApptType.value && selectedApptType.value.indexOf('Panel') !== -1
})

const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

// Available time slots (Mon-Fri only, pharmacy hours)
const timeSlotOptions = ['10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM']
const satSlots = ['10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM']

const selectDelivery = (method: string) => {
    selectedDelivery.value = method
}

const updateStep1Button = () => {
    const btn: any = document.getElementById('step1Next')
    if (selectedApptType.value && selectedDate.value && selectedTime.value) {
        btn.style.opacity = '1'
        btn.style.pointerEvents = 'auto'
    } else {
        btn.style.opacity = '.4'
        btn.style.pointerEvents = 'none'
    }
}

const selectApptType = (name: string, price: number, duration: string) => {
    selectedApptType.value = name
    selectedApptDuration.value = duration
    selectedApptPrice.value = price

    const calendarWrap = document.getElementById('calendarWrap')
    if (calendarWrap) {
        calendarWrap.style.display = 'block'
    }
    
    updateStep1Button()
}

const selectTime = (time: any, btn: any) => {
    document.querySelectorAll('.time-slot.selected').forEach(s => s.classList.remove('selected'))
    btn.classList.add('selected')
    selectedTime.value = time
    updateStep1Button()
}

const showTimeSlots = () => {
    const wrap: any = document.getElementById('timeSlotsWrap')
    const container: any = document.getElementById('timeSlots')
    wrap.style.display = 'block'
    container.innerHTML = ''

    const dayOfWeek = selectedDate.value.getDay()
    const slots = dayOfWeek === 6 ? satSlots : timeSlotOptions

    slots.forEach(time => {
        const btn = document.createElement('div')
        btn.className = 'time-slot'
        btn.textContent = time
        btn.onclick = () => selectTime(time, btn)
        container.appendChild(btn)
    });
}

const selectDate = (day: any, cell: any) => {
    document.querySelectorAll('.cal-day.selected').forEach(c => c.classList.remove('selected'))
    cell.classList.add('selected')
    selectedDate.value = new Date(currentYear.value, currentMonth.value, day)
    selectedTime.value = null
    showTimeSlots()
    updateStep1Button()
}

const renderCalendar = () => {
    const grid: any = document.getElementById('calGrid')
    const calMonthYear: any = document.getElementById('calMonthYear')
    if (calMonthYear) {
        calMonthYear.textContent = months[currentMonth.value] + ' ' + currentYear.value
    }
    grid.innerHTML = ''

    // Day labels
    days.forEach(d => {
        const lbl = document.createElement('div')
        lbl.className = 'cal-day-label'
        lbl.textContent = d
        grid.appendChild(lbl)
    });

    const firstDay = new Date(currentYear.value, currentMonth.value, 1).getDay()
    const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div')
        empty.className = 'cal-day empty'
        grid.appendChild(empty)
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const cell: any = document.createElement('div')
        cell.className = 'cal-day'
        cell.textContent = d
        const date = new Date(currentYear.value, currentMonth.value, d)
        const dayOfWeek = date.getDay()

        // Disable past dates and Sundays
        const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
        const isSunday = dayOfWeek === 0
        if (isPast || isSunday) {
        cell.classList.add('disabled')
        } else {
        cell.onclick = () => selectDate(d, cell)
        }

        // Highlight today
        if (d === today.getDate() && currentMonth.value === today.getMonth() && currentYear.value === today.getFullYear()) {
        cell.classList.add('today')
        }

        // Keep selection
        if (selectedDate.value && d === selectedDate.value.getDate() && currentMonth.value === selectedDate.value.getMonth() && currentYear.value === selectedDate.value.getFullYear()) {
        cell.classList.add('selected')
        }

        grid.appendChild(cell)
    }
}

const changeMonth = (dir: number) => {
    currentMonth.value += dir;
    if (currentMonth.value > 11) { currentMonth.value = 0; currentYear.value++; }
    if (currentMonth.value < 0) { currentMonth.value = 11; currentYear.value--; }
    renderCalendar()
}

const formatDate = (date: any) => {
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
}

const goToStep = (step: number) => {
    currentStep.value = step

    document.querySelectorAll('.step-dot').forEach((d, i) => {
        d.classList.remove('active', 'done')
        if (i < step - 1) d.classList.add('done')
        if (i === step - 1) d.classList.add('active')
    })

    if (step === 2) {
        const hasFee = selectedApptPrice.value > 0

        const paymentSection = document.getElementById('paymentSection')
        if (paymentSection) {
            paymentSection.style.display = hasFee ? 'block' : 'none'
        }

        const submitBtnText = document.getElementById('submitBtnText')
        if (submitBtnText) {
            submitBtnText.textContent = hasFee ? 'Pay & Book Appointment' : 'Book Appointment'
        }

        // Show test kit delivery for panel types
        const deliverySection = document.getElementById('deliverySection')
        if (deliverySection) {
            deliverySection.style.display = isPanel.value ? 'block' : 'none'
        }

        // Reset delivery to pickup
        selectedDelivery.value = DELIVERY_TYPE.PICKUP

        // Update payment amount display
        if (hasFee) {
            const payLabel = document.getElementById('payLabel')
            const payPrice = document.getElementById('payPrice')

            if (payLabel && payPrice) {
                payLabel.textContent = selectedApptType.value + ' (' + selectedApptDuration.value + ')'
                payPrice.textContent = '$' + selectedApptPrice.value
            }
        }

        const summaryPreview = document.getElementById('summaryPreview')
        if (summaryPreview) {
            summaryPreview.innerHTML =
                '<div class="booking-summary-row"><span class="label">Appointment</span><span class="value">' + selectedApptType.value + '</span></div>' +
                '<div class="booking-summary-row"><span class="label">Duration</span><span class="value">' + selectedApptDuration.value + '</span></div>' +
                '<div class="booking-summary-row"><span class="label">Date</span><span class="value">' + formatDate(selectedDate.value) + '</span></div>' +
                '<div class="booking-summary-row"><span class="label">Time</span><span class="value">' + selectedTime.value + '</span></div>' +
                (hasFee ? '<div class="booking-summary-row"><span class="label">Fee</span><span class="value">$' + selectedApptPrice.value + '</span></div>' : '<div class="booking-summary-row"><span class="label">Fee</span><span class="value">Free</span></div>')
        }
    }
}

const submitBooking = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
        ElMessageBox.alert('Please fill in your name and email.')
        return
    }

    if (isPanel.value && selectedDelivery.value === DELIVERY_TYPE.MAIL) {
        if (!formData.street || !formData.city || !formData.state || !formData.zip) {
            ElMessageBox.alert('Please fill in your mailing address for test kit delivery.')
            return
        }
    }

    if (selectedApptPrice.value > 0) {
        if (!formData.cardNum || !formData.cardName || !formData.cardExp || !formData.cardCvv) {
            ElMessageBox.alert('Please fill in your payment details to secure your appointment.')
            return
        }
    }

    // Build delivery line for confirmation
    let deliveryLine = ''
    if (isPanel.value) {
        if (selectedDelivery.value === DELIVERY_TYPE.PICKUP) {
            deliveryLine = '<div class="booking-summary-row"><span class="label">Test Kit</span><span class="value">Pick up at pharmacy</span></div>'
        } else {
            deliveryLine = '<div class="booking-summary-row"><span class="label">Test Kit</span><span class="value">Mail to ' + formData.street + ', ' + formData.city + ', ' + formData.state + ' ' + formData.zip + '</span></div>'
        }
    }

    const confirmName = document.getElementById('confirmName')
    if (confirmName) {
        confirmName.textContent = formData.firstName
    }

    const confirmSummary = document.getElementById('confirmSummary')
    if (confirmSummary) {
        confirmSummary.innerHTML =
            '<div class="booking-summary-row"><span class="label">Appointment</span><span class="value">' + selectedApptType.value + '</span></div>' +
            '<div class="booking-summary-row"><span class="label">Duration</span><span class="value">' + selectedApptDuration.value + '</span></div>' +
            '<div class="booking-summary-row"><span class="label">Date</span><span class="value">' + formatDate(selectedDate.value) + '</span></div>' +
            '<div class="booking-summary-row"><span class="label">Time</span><span class="value">' + selectedTime.value + '</span></div>' +
            '<div class="booking-summary-row"><span class="label">Patient</span><span class="value">' + formData.firstName + ' ' + formData.lastName + '</span></div>' +
            '<div class="booking-summary-row"><span class="label">Email</span><span class="value">' + formData.email + '</span></div>' +
            deliveryLine +
            (selectedApptPrice.value > 0 ? '<div class="booking-summary-row"><span class="label">Amount Paid</span><span class="value">$' + selectedApptPrice.value + '</span></div>' : '')
    }

    // Show questionnaire note only for paid consultations (not Discovery Call)
    const qNote: any = document.getElementById('questionnaireNote')
    qNote.style.display = selectedApptPrice.value > 0 ? 'block' : 'none'

    goToStep(3)
}

const formatCardNumber = (e: any) => {
    let v = e.target.value.replace(/\D/g, '').substring(0, 16);
    v = v.replace(/(.{4})/g, '$1 ').trim()
    formData.cardNum = v
}

const formatExpiry = (e: any) => {
    let v = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 3) v = v.substring(0, 2) + ' / ' + v.substring(2);
    formData.cardExp = v
}

onMounted(() => {
    renderCalendar()
})
</script>

<style lang="scss" scoped>
.contact-section {
    padding: 100px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
}

.contact-card {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    overflow: hidden;
    transition: transform .3s, box-shadow .3s;
}

.contact-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(61, 30, 16, .07);
}

.contact-card-header {
    padding: 48px 40px 32px;
    text-align: center;
}

.card-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-icon svg {
    width: 28px;
    height: 28px;
    color: var(--dls-color-white);
}

.card--hormone .card-icon {
    background: var(--dls-color-taupe-bg);
}

.card--general .card-icon {
    background: var(--dls-color-redclay);
}

.contact-card-header h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(24px, 2.5vw, 32px);
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
    line-height: 1.25;
}

.contact-card-header p {
    font-size: 15px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 380px;
    margin: 0 auto;
}

.contact-card-body {
    padding: 0 40px 48px
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

.form-row .form-group {
    margin-bottom: 0;
}

.form-group label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
}

.form-group input,
.form-group select,
.form-group textarea {
    font-size: 14px;
    font-weight: 300;
    color: var(--dls-color-burgundy);
    background: var(--dls-color-creamlight);
    border: 1px solid var(--dls-color-border);
    border-radius: 8px;
    padding: 13px 16px;
    outline: none;
    transition: border-color .3s, box-shadow .3s;
    appearance: none;
    -webkit-appearance: none;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--dls-color-taupe);
    font-weight: 300;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--dls-color-redclay);
    box-shadow: 0 0 0 3px rgba(166, 124, 91, .12);
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

.form-group select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238B5E3C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
}

.form-submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    padding: 16px 40px;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    transition: transform .3s, box-shadow .3s;
    margin-top: 8px;
}

.form-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, .12);
}

.form-submit svg {
    width: 16px;
    height: 16px;
    transition: transform .3s;
}

.form-submit:hover svg {
    transform: translateX(4px);
}

.form-note {
    text-align: center;
    margin-top: 16px;
    font-size: 13px;
    font-style: italic;
    color: var(--dls-color-taupe);
    font-weight: 300;
    line-height: 1.6;
}

/* BOOKING CALENDAR */
.booking-steps {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 32px;
}

.step-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--dls-color-border);
    transition: background .3s;
}

.step-dot.active {
    background: var(--dls-color-redclay);
}

.step-dot.done {
    background: var(--dls-color-sunshine);
}

.booking-step {
    display: none;
}

.booking-step.active {
    display: block;
}

.cal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.cal-header h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
}

.cal-nav {
    display: flex;
    gap: 8px;
}

.cal-nav button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--dls-color-border);
    background: var(--dls-color-creamlight);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background .3s, border-color .3s;
}

.cal-nav button:hover {
    border-color: var(--dls-color-redclay);
    background: var(--dls-color-white);
}

.cal-nav button svg {
    width: 16px;
    height: 16px;
    color: var(--dls-color-burgundy);
}

.cal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    text-align: center;
    margin-bottom: 24px;
}

.booking-summary {
    background: var(--dls-color-creamlight);
    border: 1px solid var(--dls-color-border);
    border-radius: 12px;
    padding: 20px 24px;
    margin-bottom: 24px;
}

.booking-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 6px 0;
}

.booking-summary-row .label {
    font-weight: 400;
    color: var(--dls-color-taupe);
}

.booking-summary-row .value {
    font-weight: 500;
    color: var(--dls-color-burgundy);
}

.step-nav {
    display: flex;
    gap: 12px;
    margin-top: 8px;
}

.step-nav .btn-back {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 24px;
    border: 1px solid var(--dls-color-border);
    border-radius: 60px;
    background: transparent;
    font-size: 13px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    cursor: pointer;
    transition: border-color .3s;
}

.step-nav .btn-back:hover {
    border-color: var(--dls-color-redclay);
}

.step-nav .form-submit {
    flex: 2;
}

/* Confirmation */
.confirmation {
    text-align: center;
    padding: 20px 0;
}

.confirm-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    border-radius: 50%;
    background: var(--dls-color-sunshine);
    display: flex;
    align-items: center;
    justify-content: center;
}

.confirm-icon svg {
    width: 40px;
    height: 40px;
    color: var(--dls-color-burgundy);
}

.confirmation h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 26px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
}

.confirmation p {
    font-size: 15px;
    line-height: 1.7;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    max-width: 380px;
    margin: 0 auto;
}

.confirmation .questionnaire-note {
    background: var(--dls-color-creamlight);
    border: 1px solid var(--dls-color-border);
    border-radius: 12px;
    padding: 24px;
    margin-top: 24px;
    text-align: left;
}

.questionnaire-note .qn-title {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 17px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.questionnaire-note .qn-title svg {
    width: 20px;
    height: 20px;
    color: var(--dls-color-redclay);
    flex-shrink: 0;
}

.questionnaire-note p {
    font-size: 14px;
    line-height: 1.65;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

/* Payment section */
.payment-section {
    margin-top: 28px;
    border-top: 1px solid var(--dls-color-border);
    padding-top: 28px;
}

.payment-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 6px;
}

.payment-header svg {
    width: 22px;
    height: 22px;
    color: var(--dls-color-redclay);
    flex-shrink: 0;
}

.payment-header h4 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 18px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin: 0;
    letter-spacing: -1px;
}

.payment-note {
    font-size: 13px;
    color: var(--dls-color-taupe);
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 20px;
}

.payment-amount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--dls-color-creamlight);
    border: 1px solid var(--dls-color-border);
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 20px;
}

.payment-amount .pay-label {
    font-size: 14px;
    color: var(--dls-color-burgundy);
    font-weight: 400;
}

.payment-amount .pay-price {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 24px;
    color: var(--dls-color-burgundy);
}

.card-input-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
}

.card-number-group {
    margin-bottom: 16px;
}

.card-input-icon {
    position: relative;
}

.card-input-icon input {
    padding-left: 44px;
    width: 100%;
}

.card-input-icon svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: var(--dls-color-taupe);
    pointer-events: none;
}

.card-brands {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
}

.card-brands span {
    font-size: 10px;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--dls-color-taupe);
    font-weight: 500;
}

.card-brand-icon {
    width: 36px;
    height: 22px;
    border-radius: 4px;
    border: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--dls-color-white);
    font-size: 9px;
    font-weight: 600;
    color: var(--dls-color-burgundy);
    letter-spacing: .02em;
}

.secure-note {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--dls-color-taupe);
    font-weight: 300;
    margin-top: 16px;
}

.secure-note svg {
    width: 14px;
    height: 14px;
    color: var(--dls-color-redclay);
    flex-shrink: 0;
}

/* Test kit delivery options */
.delivery-section {
    margin-top: 28px;
    border-top: 1px solid var(--dls-color-border);
    padding-top: 28px;
}

.delivery-section .payment-header {
    margin-bottom: 16px;
}

.delivery-options {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
}

.delivery-option {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--dls-color-creamlight);
    border: 1px solid var(--dls-color-border);
    border-radius: 12px;
    padding: 16px;
    cursor: pointer;
    transition: all .25s;
}

.delivery-option:hover {
    border-color: var(--dls-color-redclay);
    background: var(--dls-color-white);
}

.delivery-option.selected {
    border-color: var(--dls-color-sunshine);
    background: var(--dls-color-sunshine);
}

.delivery-radio {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid var(--dls-color-border);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color .25s;
}

.delivery-option.selected .delivery-radio {
    border-color: var(--dls-color-burgundy);
}

.delivery-radio::after {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: transparent;
    transition: background .25s;
}

.delivery-option.selected .delivery-radio::after {
    background: var(--dls-color-burgundy);
}

.delivery-option-info {
    flex: 1;
}

.delivery-option-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--dls-color-burgundy);
    line-height: 1.3;
}

.delivery-option-desc {
    font-size: 12px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-top: 2px;
    line-height: 1.5;
}

.delivery-icon {
    width: 20px;
    height: 20px;
    color: var(--dls-color-redclay);
    flex-shrink: 0;
}

.mailing-fields {
    margin-top: 16px;
    display: none;
}

.mailing-fields.visible {
    display: block;
}

/* Appointment type selector */
.appt-type-group {
    margin-bottom: 28px;
}

.appt-type-group label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
    display: block;
}

.appt-types {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.appt-type {
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--dls-color-creamlight);
    border: 1px solid var(--dls-color-border);
    border-radius: 12px;
    padding: 16px 20px;
    cursor: pointer;
    transition: all .25s;
}

.appt-type:hover {
    border-color: var(--dls-color-redclay);
    background: var(--dls-color-white);
}

.appt-type.selected {
    border-color: var(--dls-color-sunshine);
    background: var(--dls-color-sunshine);
    box-shadow: 0 2px 12px rgba(232, 224, 110, .3);
}

.appt-radio {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--dls-color-border);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color .25s;
}

.appt-type.selected .appt-radio {
    border-color: var(--dls-color-burgundy);
}

.appt-radio::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
    transition: background .25s;
}

.appt-type.selected .appt-radio::after {
    background: var(--dls-color-burgundy);
}

.appt-info {
    flex: 1;
}

.appt-name {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 16px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.3;
}

.appt-desc {
    font-size: 12.5px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-top: 2px;
    line-height: 1.5;
}

.appt-duration {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--dls-color-redclay);
    flex-shrink: 0;
    white-space: nowrap;
}

.appt-price-tag {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 16px;
    letter-spacing: 0;
    text-transform: none;
    color: var(--dls-color-burgundy);
}

.appt-type.selected .appt-price-tag {
    color: var(--dls-color-burgundy);
}

@media(max-width:1024px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}

@media(max-width:768px) {
    .contact-section {
        padding: 64px 24px;
    }

    .contact-card-header,
    .contact-card-body {
        padding-left: 24px;
        padding-right: 24px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}
</style>

<style lang="scss">
.cal-day-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--dls-color-taupe);
    padding: 8px 0;
}

.cal-day {
    font-size: 14px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    padding: 10px 4px;
    border-radius: 8px;
    cursor: pointer;
    transition: background .2s, color .2s;
    border: 1px solid transparent;
}

.cal-day:hover:not(.disabled):not(.selected) {
    background: rgba(200, 170, 139, .15);
}

.cal-day.selected {
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    font-weight: 500;
    border-color: var(--dls-color-sunshine);
}

.cal-day.today {
    border-color: var(--dls-color-redclay);
}

.cal-day.disabled {
    color: var(--dls-color-border);
    cursor: default;
}

.cal-day.empty {
    cursor: default;
}

.time-slots-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--dls-color-burgundy);
    margin-bottom: 12px;
}

.time-slots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 24px;
}

.time-slot {
    font-size: 13px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    background: var(--dls-color-creamlight);
    border: 1px solid var(--dls-color-border);
    border-radius: 8px;
    padding: 12px 8px;
    text-align: center;
    cursor: pointer;
    transition: all .2s;
}

.time-slot:hover {
    border-color: var(--dls-color-redclay);
    background: var(--dls-color-white);
}

.time-slot.selected {
    background: var(--dls-color-sunshine);
    border-color: var(--dls-color-sunshine);
    font-weight: 500;
}

.booking-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 6px 0;
}

.booking-summary-row .label {
    font-weight: 400;
    color: var(--dls-color-taupe);
}

.booking-summary-row .value {
    font-weight: 500;
    color: var(--dls-color-burgundy);
}
</style>