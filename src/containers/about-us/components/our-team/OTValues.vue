<template>
    <section class="values-editorial">
        <div class="values-inner">
            <h2 data-aos="fade-up"
                style="font-size:clamp(32px,4vw,56px);text-align:center;max-width:800px;margin:0 auto">Crafted with Care, Backed by Science, Delivered with Heart.</h2>
            <p data-aos="fade-up" data-aos-delay="200"
                style="text-align:center;font-size:18px;line-height:1.8;color:var(--dls-color-lemonice);font-weight:300;max-width:680px;margin:36px auto 0">
                Every member of our team shares a single purpose — to ensure that your treatment is prepared with the
                finest ingredients, the highest standards, and a deep respect for your individual journey.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.values-editorial {
    background: var(--dls-color-burgundy);
    padding: 120px 60px;
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
    font-family: var(--dls-font-spezia-book-b);
    font-weight: 400;
    color: var(--dls-color-sunshine);
    line-height: 1.1;
    letter-spacing: -7%;
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

@media (min-width: 1921px) {
    .values-editorial {
        padding: 120px 98px;
    }

    .values-inner { 
        max-width: 100%;
    }

    .values-inner p {
        font-size: 24px !important;
    }
}
</style>