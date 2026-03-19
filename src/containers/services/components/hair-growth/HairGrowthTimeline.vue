<template>
    <section class="timeline-section">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">General Timeline*</h2>

        <div class="timeline">
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
                <div class="tl-ring"><span>Month<br>1–2</span></div>
                <div>
                    <h4>Initial Phase</h4>
                    <p>Some patients may experience transient shedding as follicles adjust. Your prescriber monitors
                        your progress.</p>
                </div>
            </div>
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
                <div class="tl-ring"><span>Month<br>3–6</span></div>
                <div>
                    <h4>Ongoing Evaluation</h4>
                    <p>Your prescriber assesses progress and may adjust your compounded formula as needed.</p>
                </div>
            </div>
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
                <div class="tl-ring"><span>Month<br>6–12</span></div>
                <div>
                    <h4>Long-Term Management</h4>
                    <p>Your prescriber determines whether to continue, adjust, or transition your compounded
                        preparation.</p>
                </div>
            </div>
        </div>

        <p class="timeline-note" data-aos="fade-up" data-aos-delay="400">
            *Individual experiences vary. Compounded preparations are not FDA-approved. Your prescriber determines the
            appropriate course of therapy. <em>Consistency with your prescribed regimen is important — discuss any
                changes with your prescriber.</em>
        </p>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.timeline-section {
    padding: 100px 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.timeline-section h2 {
    font-family: "SpeziaBookB";
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 64px;
}

.timeline {
    display: flex;
    position: relative;
    gap: 0;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 48px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--dls-color-border);
}

.timeline-item {
    flex: 1;
    text-align: center;
    position: relative;
    padding: 0 20px;
}

.tl-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--dls-color-taupe);
    background: var(--dls-color-creamlight);
    margin: 0 auto 32px;
    position: relative;
    z-index: 1;
    transition: background .3s, transform .3s;
}

.timeline-item:hover .tl-dot {
    background: var(--dls-color-taupe);
    transform: scale(1.3);
}

.tl-ring {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    position: relative;
    z-index: 1;
    background: var(--dls-color-creamlight);
    transition: border-color .3s;
}

.timeline-item:hover .tl-ring {
    border-color: var(--dls-color-burgundy);
}

.tl-ring span {
    font-family: "SpeziaBookB";
    font-size: 15px;
    color: var(--dls-color-burgundy);
    letter-spacing: .02em;
    text-align: center;
    line-height: 1.2;
}

.timeline-item h4 {
    font-family: "SpeziaBookB";
    font-size: 19px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
    line-height: 1.3;
}

.timeline-item p {
    font-size: 14px;
    line-height: 1.6;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

.timeline-note {
    text-align: center;
    margin-top: 48px;
    font-size: 15px;
    color: var(--dls-color-burgundy);
    font-weight: 400;
    line-height: 1.6;
}

.timeline-note em {
    font-style: italic;
    color: var(--dls-color-burgundylight);
    font-weight: 300;
}

@media(max-width:1024px) {
    .timeline {
        flex-direction: column;
        gap: 36px;
    }

    .timeline::before {
        display: none;
    }

    .timeline-item {
        text-align: left;
        display: flex;
        gap: 24px;
        align-items: flex-start;
        padding: 0;
    }

    .tl-ring {
        margin: 0;
        flex-shrink: 0;
        width: 72px;
        height: 72px;
    }

    .tl-ring span {
        font-size: 13px;
    }
}

@media(max-width:768px) {
    .timeline-section {
        padding: 64px 24px;
    }
}
</style>