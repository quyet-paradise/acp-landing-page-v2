<template>
    <section class="values-editorial">
        <div class="values-inner">
            <h2 class="headline-2" data-aos="fade-up"
                style="text-align:center;max-width:800px;margin:0 auto">Crafted with Care, Backed by Science, Delivered with Heart.</h2>
            <p data-aos="fade-up" data-aos-delay="200"
                style="text-align:center;color:var(--dls-color-lemonice);max-width:680px;margin:36px auto 0">
                Every member of our team shares a single purpose — to ensure that your treatment is prepared with the
                finest ingredients, the highest standards, and a deep respect for your individual journey.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.values-editorial {
    background: var(--dls-color-burgundy);
    padding: var(--dls-2cm) 60px;
    position: relative;
    overflow: hidden;
}

.values-editorial::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 700px;
    height: 700px;
    border: 1px solid rgba(252, 249, 220, .04);
    border-radius: 50%;
}

.values-editorial::after {
    content: '';
    position: absolute;
    bottom: -250px;
    left: -150px;
    width: 600px;
    height: 600px;
    border: 1px solid rgba(252, 249, 220, .03);
    border-radius: 50%;
}

.values-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.values-inner h2 {
    color: var(--dls-color-sunshine);
}

.values-inner p {
    font-family: var(--dls-font-jost);
    font-size: 16px;
    line-height: 145%;
    letter-spacing: 0.1em;
}

@media (max-width: 1024px) {
    .values-header {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .values-grid {
        grid-template-columns: 1fr;
        border-radius: 16px;
    }
}

@media (max-width: 768px) {
    .values-editorial {
        padding: 80px 24px;
    }
}
</style>