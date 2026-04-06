<template>
    <section class="action-cards">
        <div class="action-cards-inner">
            <div class="action-card" data-aos="fade-up">
                <div class="action-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="19" y1="8" x2="19" y2="14" />
                        <line x1="22" y1="11" x2="16" y2="11" />
                    </svg></div>
                <h3>New to Artisan?<br>Let's Get Started</h3>
                <p>We're excited to support your health journey. Complete our new patient intake form so we can learn
                    about you, your health goals, and your prescriptions.</p>
                <div class="action-card-links"><a href="#" class="pill-btn" @click="goToPage(ROUTE_NAME.NEW_PATIENT_INTAKE)">New Patient Intake Form <svg
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a><a href="#" class="pill-btn-outline">HIPAA Privacy Policy <svg viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a></div>
            </div>
            <div class="action-card" data-aos="fade-up">
                <div class="action-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="17 1 21 5 17 9" />
                        <path d="M3 11V9a4 4 0 014-4h14" />
                        <polyline points="7 23 3 19 7 15" />
                        <path d="M21 13v2a4 4 0 01-4 4H3" />
                    </svg></div>
                <h3>Transfer Your Prescriptions to Artisan</h3>
                <p>Ready for personalized care? Transfer your compounded prescriptions to Artisan in just a few steps —
                    we'll coordinate with your previous pharmacy and handle the rest.</p>
                <div class="action-card-links"><a href="#" class="pill-btn">Transfer My Prescriptions <svg
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a></div>
            </div>
            <div class="action-card" data-aos="fade-up">
                <div class="action-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg></div>
                <h3>Authorization to Release Information</h3>
                <p>To allow Artisan to share your health or prescription details with a caregiver, family member, or
                    healthcare provider, complete our HIPAA-compliant authorization form.</p>
                <div class="action-card-links"><a href="#" class="pill-btn">Authorization Form <svg viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a></div>
            </div>
            <div class="action-card" data-aos="fade-up">
                <div class="action-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        <path d="M7.5 7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                        <path d="M20.5 7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                        <path d="M10 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                        <path d="M18 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                        <path d="M12 14c-2.5 2-5 4-5 6 0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2 0-2-2.5-4-5-6z" />
                    </svg></div>
                <h3>Veterinary Compounding for Your Pets</h3>
                <p>We compound custom medications for canine and feline patients — flavored liquids, custom-dosed
                    capsules, and topical formulations tailored to your pet's specific needs, as prescribed by your
                    veterinarian.</p>
                <div class="action-card-links"><a href="#" class="pill-btn">Learn About Vet Compounding <svg
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></a></div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import { goToPage } from '@/utils/common-utils'
</script>

<style lang="scss" scoped>
.action-cards {
    padding: 0 64px var(--dls-1p5cm) 64px;
}

.action-cards-inner {
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
}

.action-card {
    background: #fff;
    border: 1px solid var(--dls-color-border);
    border-radius: 16px;
    padding: 44px 36px 40px;
    display: flex;
    flex-direction: column;
    transition: transform .3s, box-shadow .3s;
}

.action-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(55, 18, 19, .07);
}

.action-card-icon {
    width: 56px;
    height: 56px;
    background: var(--dls-color-sunshine);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 28px;
}

.action-card-icon svg {
    width: 26px;
    height: 26px;
    color: var(--dls-color-burgundy);
}

.action-card h3 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: 24px;
    margin-bottom: 14px;
    line-height: 1.25;
}

.action-card p {
    color: rgba(55, 18, 19, .65);
    line-height: 1.75;
    font-size: 15px;
    margin-bottom: 28px;
    flex: 1;
}

.action-card-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.pill-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--dls-color-redclay);
    color: var(--dls-color-linen);
    padding: 11px 28px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: .04em;
    transition: background .3s, transform .2s;
    width: fit-content;
    text-decoration: none;
}

.pill-btn:hover {
    background: #7a4830;
    transform: translateY(-1px);
}

.pill-btn svg {
    width: 14px;
    height: 14px;
}

.pill-btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    color: var(--dls-color-burgundy);
    padding: 11px 28px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: .04em;
    border: 1px solid var(--dls-color-border);
    transition: all .3s;
    width: fit-content;
    text-decoration: none;
}

.pill-btn-outline:hover {
    border-color: var(--dls-color-burgundy);
    background: rgba(55, 18, 19, .03);
}

.pill-btn-outline svg {
    width: 14px;
    height: 14px;
}

@media(max-width:1024px) {
    .action-cards-inner {
        grid-template-columns: 1fr;
    }
}

@media(max-width:768px) {
    .action-cards {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>