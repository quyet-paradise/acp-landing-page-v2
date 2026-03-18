<template>
    <section class="disclaimer-section">
        <div class="disclaimer-inner" data-aos="fade-up">
            *All compounded medications are prepared solely for you under a valid prescription. Compounded preparations
            are not FDA-approved. Individual experiences vary. Consult your healthcare provider to determine if these
            preparations are appropriate for you.
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.disclaimer-section {
    padding: 60px 60px 40px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.disclaimer-inner {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 12px;
    padding: 32px 40px;
    font-size: 13.5px;
    line-height: 1.7;
    font-style: italic;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    text-align: center;
    max-width: 860px;
    margin: 0 auto;
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .disclaimer-section {
        padding: 40px 24px 24px;
    }

    .disclaimer-inner {
        padding: 24px 20px;
    }
}
</style>