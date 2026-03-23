<template>
    <div class="cta-banner">
        <h2>Explore Personalized Sexual Health Compounding</h2>
        <a href="#" class="cta-btn">
            Contact Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </a>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.cta-banner {
    margin: 0 auto var(--dls-2cm) auto;
    max-width: var(--dls-max-width);
    background: var(--dls-color-burgundylight);
    border-radius: 20px;
    padding: 72px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    position: relative;
    overflow: hidden;
}

.cta-banner::before {
    content: '';
    position: absolute;
    top: -80px;
    left: -80px;
    width: 300px;
    height: 300px;
    border: 1px solid rgba(255, 253, 245, 0.06);
    border-radius: 50%;
}

.cta-banner h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(28px, 3vw, 40px);
    font-weight: 400;
    color: var(--dls-color-sunshine);
    line-height: 1.2;
    max-width: 500px;
    position: relative;
    z-index: 1;
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--dls-color-sunshine);
    color: var(--dls-color-burgundylight);
    padding: 18px 40px;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 60px;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    z-index: 1;
    flex-shrink: 0;
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.cta-btn svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s;
}

.cta-btn:hover svg {
    transform: translateX(4px);
}

@media (max-width:1400px) {
    .cta-banner {
        margin: 32px;
    }
}

@media (max-width: 1024px) {
    .cta-banner {
        flex-direction: column;
        text-align: center;
        padding: 56px 48px;
    }
}

@media (max-width: 768px) {
    .cta-banner {
        margin: 24px;
        padding: 40px 24px;
        border-radius: 16px;
    }
}
</style>