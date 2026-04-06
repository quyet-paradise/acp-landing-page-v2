<template>
    <section class="contact-section">
        <div class="contact-grid">

            <div class="contact-info" data-aos="fade-up">
                <div class="contact-details">
                    <div class="contact-address">17400 Irvine Blvd, Suite H<br>Tustin, CA 92780</div>
                    <div class="info-block">
                        <div class="info-block-label">Call or Text</div>
                        <div class="info-block-value"><a href="tel:2129670892">(212) 967-0892</a></div>
                    </div>
                    <div class="info-block">
                        <div class="info-block-label">Fax</div>
                        <div class="info-block-value">(212) 967-0892</div>
                    </div>
                    <div class="info-block">
                        <div class="info-block-label">Email</div>
                        <div class="info-block-value"><a
                                href="/cdn-cgi/l/email-protection#d2bab7bebebd92b3a0a6bba1b3bca0aafcb1bdbf"><span
                                    class="__cf_email__"
                                    data-cfemail="f098959c9c9fb09182849983919e8288de939f9d">[email&#160;protected]</span></a>
                        </div>
                    </div>
                </div>
                <div class="contact-hours">
                    <div class="hours-text">
                        Monday — Friday 9:30 AM — 5:00 PM<br>
                        Saturday: 10:00 AM - 02:00 PM<br>
                        Sunday: Closed
                    </div>
                    <div class="hours-note">Artisan Compounding Pharmacy is closed on all major holidays, including New
                        Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, and Christmas. We also
                        close early on Christmas Eve and New Year's Eve.</div>
                </div>
            </div>

            <div class="contact-form-wrap" data-aos="fade-up" data-aos-delay="200">
                <h3 class="form-title">Let's Connect</h3>
                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">First Name</label>
                            <input type="text" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Last Name</label>
                            <input type="text" class="form-input">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone</label>
                            <input type="tel" class="form-input">
                        </div>
                    </div>
                    <div class="form-row" style="grid-template-columns:1fr;max-width:50%">
                        <div class="form-group">
                            <label class="form-label">Type of Request</label>
                            <select class="form-select">
                                <option value="" disabled selected></option>
                                <option value="general">General Question</option>
                                <option value="consultation">Book a Consultation</option>
                                <option value="prescription">Prescription / Refill</option>
                                <option value="hrt">Hormone Replacement Therapy</option>
                                <option value="pediatrics">Pediatric Compounding</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="provider">Provider Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div style="margin-bottom:28px">
                        <div class="form-textarea-label">Questions/Comments</div>
                        <textarea class="form-textarea"></textarea>
                    </div>
                    <button type="submit" class="btn-submit">Submit</button>
                </form>
            </div>

        </div>
    </section>

    <div class="contact-border-bottom">
        <div class="line"></div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.contact-section {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 0 60px;
    border-top: 1px solid var(--dls-color-border);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    min-height: 680px;
}

.contact-info {
    padding: 56px 56px 56px 0;
    border-right: 1px solid var(--dls-color-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.contact-address {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 22px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.5;
}

.info-block {
    margin-top: 28px;
}

.info-block-label {
    font-size: 11px;
    letter-spacing: .12em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--dls-color-burgundy);
    margin-bottom: 4px;
}

.info-block-value {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.4;
}

.info-block-value a {
    color: var(--dls-color-burgundy);
    text-decoration: none;
}

.contact-hours {
    margin-top: auto;
    padding-top: 40px;
}

.hours-text {
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--dls-color-burgundy);
    line-height: 2;
}

.hours-note {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 18px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.55;
    margin-top: 12px;
}

.contact-form-wrap {
    padding: 56px 0 56px 56px;
}

.form-title {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 52px;
    font-weight: 400;
    font-style: italic;
    color: var(--dls-color-burgundy);
    line-height: 1.1;
    margin-bottom: 40px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 28px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    font-size: 11px;
    letter-spacing: .12em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--dls-color-burgundy);
}

.form-input,
.form-select {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 15px;
    font-weight: 300;
    padding: 10px 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--dls-color-burgundy);
    border-radius: 0;
    color: var(--dls-color-burgundy);
    outline: none;
    appearance: none;
    -webkit-appearance: none;
}

.form-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%233D1E10' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0 center;
    padding-right: 24px;
    cursor: pointer;
}

.form-textarea-label {
    font-size: 11px;
    letter-spacing: .12em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
}

.form-textarea {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 15px;
    font-weight: 300;
    padding: 16px;
    background: transparent;
    border: 1px solid var(--dls-color-border);
    border-radius: 8px;
    color: var(--dls-color-burgundy);
    outline: none;
    resize: vertical;
    min-height: 200px;
    line-height: 1.6;
    width: 100%;
}

.btn-submit {
    display: inline-block;
    font-size: 11px;
    letter-spacing: .14em;
    text-transform: uppercase;
    font-weight: 500;
    padding: 14px 32px;
    background: var(--dls-color-burgundy);
    color: var(--dls-color-creamlight);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 12px;
    transition: background .3s;
}

.btn-submit:hover {
    background: var(--dls-color-burgundylight);
}

.contact-border-bottom {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 0 60px;
}

.contact-border-bottom .line {
    border-top: 1px solid var(--dls-color-border);
}

@media(max-width:1024px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }

    .contact-info {
        border-right: none;
        border-bottom: 1px solid var(--dls-color-border);
        padding: 56px 0;
        min-height: auto;
    }

    .contact-form-wrap {
        padding: 56px 0;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}

@media(max-width:768px) {
    .contact-section {
        padding-left: 24px;
        padding-right: 24px;
    }

    .contact-border-bottom {
        padding: 0 24px;
    }
}
</style>