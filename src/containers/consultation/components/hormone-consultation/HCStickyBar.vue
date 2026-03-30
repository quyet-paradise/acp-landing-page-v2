<template>
    <div class="sticky-bar" id="stickyBar">
        <p>Ready to begin?</p>
        <a href="sms:+17146228460&body=Hormones" class="sticky-cta"
            style="background:transparent;color:var(--dls-color-creamlight);border:1px solid var(--dls-color-creamlight)">Text
            Hormones<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg></a>
        <a href="#book-now" class="sticky-cta">Book Free Discovery Call<svg width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg></a>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.sticky-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--dls-color-burgundy);
    border-top: 2px solid var(--dls-color-sunshine);
    padding: 12px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 999;
    transform: translateY(100%);
    transition: transform .4s ease;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, .15);
}

.sticky-bar.visible {
    transform: translateY(0);
}

.sticky-bar p {
    color: var(--dls-color-creamlight);
    font-size: 14px;
    margin: 0;
    font-weight: 300;
}

.sticky-bar .sticky-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundy);
    padding: 10px 24px;
    text-decoration: none;
    font-size: 11px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 60px;
    transition: transform .3s;
}

.sticky-bar .sticky-cta:hover {
    transform: translateY(-1px);
}

@media(max-width:1024px) {
    .sticky-bar {
        padding: 10px 24px;
        gap: 12px;
    }
}

@media(max-width:768px) {
    .sticky-bar {
        flex-direction: column;
        gap: 8px;
        padding: 10px 16px;
    }
}
</style>