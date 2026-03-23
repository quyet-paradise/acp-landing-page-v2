<template>
    <section class="disclaimer">
        <div class="disclaimer-inner" data-aos="fade-up">* All prescriptions must come from a licensed veterinarian.
            Compounded veterinary preparations are not FDA-approved. We collaborate directly with your veterinary clinic
            to compound each prescription to their exact specifications.</div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.disclaimer {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto
}

.disclaimer-inner {
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    border-radius: 12px;
    padding: 28px 36px;
    font-size: 13.5px;
    line-height: 1.7;
    font-style: italic;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    text-align: center;
    max-width: 680px;
    margin: 0 auto
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .disclaimer {
        padding-left: 24px;
        padding-right: 24px
    }
}
</style>