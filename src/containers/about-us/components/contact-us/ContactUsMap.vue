<template>
    <section class="map-section" data-aos="fade-up">
        <div class="map-header">
            <h2>Find Us in Tustin</h2>
            <p>17400 Irvine Blvd, Suite H — in the heart of Old Town Tustin</p>
        </div>
        <div class="map-wrap">
            <img src="/images/contact/map.jpg" alt="map">
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.map-section {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: var(--dls-2cm) 60px;
}

.map-header {
    text-align: center;
    margin-bottom: 48px;
}

.map-header h2 {
    font-family: var(--dls-font-spezia-book-b);
    font-size: clamp(28px, 3.5vw, 44px);
    font-weight: 400;
    font-style: italic;
    color: var(--dls-color-burgundy);
    line-height: 1.2;
    margin: 0 0 12px;
}

.map-header p {
    font-size: 15px;
    font-weight: 300;
    color: var(--dls-color-burgundy);
    letter-spacing: .02em;
    opacity: .75;
}

.map-wrap {
    max-width: 880px;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid var(--dls-color-border);
    background: #F2EBE0;
}

.map-wrap img {
    display: block;
    width: 100%;
    height: auto;
}

@media(max-width:1024px) {}

@media(max-width:768px) {
    .map-section {
        padding: 60px 24px 0;
    }
}
</style>