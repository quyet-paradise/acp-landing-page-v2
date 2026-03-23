<template>
    <section class="team-section">
        <div class="team-section-header" data-aos="fade-up">
            <h2>Our Team</h2>
            <h3>Every compound starts with the right people.</h3>
        </div>

        <!-- MEMBER 1 — Photo Left, Info Right -->
        <article class="member layout-a" data-aos="fade-up">
            <div class="member-photo-wrap">
                <img src="/images/our-team/vanessa.jpg" alt="Vanessa Nguyen" class="member-photo">
                <div class="member-number">01</div>
            </div>
            <div class="member-info">
                <div class="member-info-label">Founder</div>
                <h3 class="member-name">Vanessa Nguyen, PharmD, RPh</h3>
                <p class="member-role">Pharmacist-in-Charge</p>
                <p class="member-bio">Vanessa is the founder and pharmacist behind Artisan Compounding Pharmacy. A proud
                    USC Trojan (Fight On!), she earned her Doctor of Pharmacy degree from the University of Southern
                    California, where she first discovered her passion for the intricate art and science of compounding.
                    Her journey into pharmacy began with her grandfather, a Traditional Medicine Doctor whose hands-on
                    approach to healing left a lasting impression. Years later, after becoming a mother and navigating
                    her own hormonal changes, Vanessa experienced what so many women face: the fatigue, weight gain,
                    mood shifts, brain fog, and chronic inflammation that can quietly take over your life. Through her
                    own research and clinical knowledge, she traced these symptoms back to one root cause: hormonal
                    imbalance. She also realized a truth most patients often overlooked—your hormonal profile is as
                    unique as your DNA, meaning a 'one-size-fits-all' medication is rarely the answer. That's when
                    Artisan Pharmacy came to life. The name says it all: a pharmacy where every compounded medication is
                    crafted with care, precision, and purpose. When she isn't behind the lab bench, Vanessa's happiest
                    moments are the simple ones spent with the family that inspired this journey in the first place.</p>
                <button class="bio-toggle" onclick="this.closest('.member').classList.toggle('bio-open')">Read more<svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg></button>
            </div>
        </article>

        <!-- MEMBER 2 — Info Left, Photo Right -->
        <article class="member layout-b" data-aos="fade-up">
            <div class="member-photo-wrap">
                <img src="/images/our-team/emily-caster.jpg" alt="Dr. Emily Carter" class="member-photo">
                <div class="member-number">02</div>
            </div>
            <div class="member-info">
                <div class="member-info-label">Clinical Leadership</div>
                <h3 class="member-name">Dr. Emily Carter</h3>
                <p class="member-role">Medical Director, Hormone Therapy Specialist</p>
                <p class="member-bio">Dr. Carter brings specialized expertise in bioidentical hormone replacement and
                    anti-aging medicine. She collaborates closely with prescribers and patients to optimize protocols,
                    ensuring every compound is clinically precise and personally meaningful.</p>
                <button class="bio-toggle" onclick="this.closest('.member').classList.toggle('bio-open')">Read more<svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg></button>
            </div>
        </article>

        <!-- MEMBER 3 — Photo Left, Info Right -->
        <article class="member layout-a" data-aos="fade-up">
            <div class="member-photo-wrap">
                <img src="/images/our-team/noah-bennet.jpg" alt="Noah Bennett" class="member-photo">
                <div class="member-number">03</div>
            </div>
            <div class="member-info">
                <div class="member-info-label">Clinical Advisory</div>
                <h3 class="member-name">Noah Bennett, PA-C</h3>
                <p class="member-role">Wellness &amp; Anti-Aging Consultant</p>
                <p class="member-bio">Noah supports our clinical team with a focus on integrative wellness, weight
                    management, and preventive health. His patient-centered philosophy means every treatment plan is
                    built around real goals — and designed to be sustainable long-term.</p>
                <button class="bio-toggle" onclick="this.closest('.member').classList.toggle('bio-open')">Read more<svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg></button>
            </div>
        </article>

        <!-- MEMBER 4 — Centered, unique layout -->
        <article class="member layout-c" data-aos="fade-up">
            <div class="member-photo-wrap">
                <img src="/images/our-team/liam-turner.jpg" alt="Liam Turner" class="member-photo"
                    style="min-height:400px">
                <div class="member-number" style="left:50%;transform:translateX(-50%)">04</div>
            </div>
            <div class="member-info" style="text-align:center;padding:40px 20px">
                <div class="member-info-label" style="justify-content:center"><span></span></div>
                <h3 class="member-name">Liam Turner</h3>
                <p class="member-role">Patient Care Coordinator</p>
                <p class="member-bio" style="margin-left:auto;margin-right:auto;max-width:480px">Liam is your first
                    point of contact at Artisan. From scheduling consultations to coordinating with prescribers, he
                    ensures every patient experience is seamless, warm, and attentive — from the very first call to
                    every refill.</p>
                <button class="bio-toggle" onclick="this.closest('.member').classList.toggle('bio-open')">Read more<svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg></button>
            </div>
        </article>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.team-section {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.team-section-header {
    margin-bottom: 80px;
}

.team-section-header h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(14px, 1.2vw, 16px);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: .15em;
    color: var(--dls-color-redclay);
    margin-bottom: 12px;
}

.team-section-header h3 {
    font-family: 'SpeziaBookB';
    font-size: clamp(32px, 3.5vw, 52px);
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.15;
    max-width: 600px;
}

/* Individual team member */
.member {
    display: grid;
    gap: 0;
    align-items: center;
    margin-bottom: 120px;
    position: relative;
}

.member:last-child {
    margin-bottom: 0;
}

/* Alternating layouts */
.member.layout-a {
    grid-template-columns: 55% 45%;
}

.member.layout-b {
    grid-template-columns: 45% 55%;
}

.member.layout-c {
    grid-template-columns: 1fr;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
}

/* Photo containers */
.member-photo-wrap {
    position: relative;
    overflow: hidden;
}

.member.layout-a .member-photo-wrap {
    border-radius: 0 60px 0 0;
}

.member.layout-b .member-photo-wrap {
    border-radius: 60px 0 0 0;
    order: 2;
}

.member.layout-c .member-photo-wrap {
    border-radius: 40px;
    max-height: 480px;
}

.member-photo {
    width: 100%;
    height: 100%;
    min-height: 500px;
    object-fit: cover;
    transition: transform .8s cubic-bezier(.25, .46, .45, .94), filter .6s;
    filter: saturate(.85);
}

.member:hover .member-photo {
    transform: scale(1.03);
    filter: saturate(1);
}

/* Number overlay */
.member-number {
    position: absolute;
    bottom: 24px;
    left: 28px;
    font-family: 'SpeziaBookB';
    font-size: 120px;
    color: rgba(255, 253, 245, .12);
    line-height: 1;
    pointer-events: none;
    z-index: 2;
}

.member.layout-b .member-number {
    left: auto;
    right: 28px;
}

/* Info panel */
.member-info {
    padding: 60px;
    position: relative;
}

.member.layout-b .member-info {
    order: 1;
}

.member-info-label {
    font-size: 11px;
    letter-spacing: .15em;
    text-transform: uppercase;
    color: var(--text-accent);
    font-weight: 500;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.member-info-label::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--dls-color-redclay);
}

.member-name {
    font-family: 'SpeziaBookB';
    font-size: clamp(28px, 3vw, 40px);
    font-weight: 400;
    color: var(--dls-color-burgundy);
    line-height: 1.15;
    margin-bottom: 8px;
}

.member-role {
    font-family: 'SpeziaBookB';
    font-size: 17px;
    font-weight: 400;
    color: var(--dls-color-redclay);
    font-style: italic;
    margin-bottom: 8px;
}

.member-credentials {
    font-size: 13px;
    color: var(--dls-color-burgundylight);
    opacity: .55;
    font-style: italic;
    margin-bottom: 24px;
}

/* Bio — hidden, revealed on hover */
.member-bio {
    font-size: 15px;
    line-height: 1.75;
    font-weight: 300;
    color: var(--dls-color-burgundylight);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .6s cubic-bezier(.25, .46, .45, .94), opacity .5s, margin .4s;
    margin-top: 0;
}

.member:hover .member-bio,
.member.bio-open .member-bio {
    max-height: 800px;
    opacity: 1;
    margin-top: 4px;
}

/* Read bio toggle for mobile */
.bio-toggle {
    display: none;
    margin-top: 16px;
    font-size: 12px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--dls-color-redclay);
    cursor: pointer;
    background: none;
    border: none;
    font-family: var(--dls-color-burgundylight);
    padding: 0;
    transition: color .3s;
}

.bio-toggle:hover {
    color: var(--dls-color-burgundy);
}

.bio-toggle svg {
    width: 12px;
    height: 12px;
    margin-left: 6px;
    vertical-align: middle;
    transition: transform .3s;
}

.member.bio-open .bio-toggle svg {
    transform: rotate(180deg);
}

/* Decorative line */
.member-info::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 60px;
    width: 60px;
    height: 1px;
    background: var(--dls-color-border);
}

.member.layout-b .member-info::after {
    left: auto;
    right: 60px;
}

.member.layout-c .member-info::after {
    left: 50%;
    transform: translateX(-50%);
}

@media (max-width: 1024px) {

    .member.layout-a,
    .member.layout-b {
        grid-template-columns: 1fr;
    }

    .member.layout-b .member-photo-wrap {
        order: 0;
    }

    .member.layout-b .member-info {
        order: 0;
    }

    .member-photo-wrap {
        border-radius: 24px !important;
    }

    .member-photo {
        min-height: 400px;
    }

    .member-info {
        padding: 40px 0;
    }

    .member-info::after {
        left: 0 !important;
        right: auto !important;
        transform: none !important;
    }

    .member-number {
        display: none;
    }

    .member-bio {
        max-height: none !important;
        opacity: 1 !important;
        margin-top: 4px !important;
    }

    .bio-toggle {
        display: none !important;
    }
}

@media (max-width: 768px) {
    .team-section {
        padding-left: 24px;
        padding-right: 24px;
    }

    .member {
        margin-bottom: 80px;
    }

    .member.layout-c {
        max-width: 100%;
    }
}
</style>