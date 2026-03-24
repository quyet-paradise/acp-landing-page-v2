<template>
    <section class="intro">
        <div class="intro-inner">
            <h2 class="intro-headline" data-aos="fade-up">What Our Memberships Mean for Your Care</h2>
            <div class="intro-body" data-aos="fade-up" data-aos-delay="100">
                <p>We hold ourselves to the highest standards in compounding pharmacy. Each affiliation reflects a
                    commitment that directly benefits your health.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.intro {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width-2);
    margin: 0 auto;
}

.intro-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.intro-headline {
    font-family: 'SpeziaBookB';
    font-size: clamp(32px, 4vw, 48px);
    line-height: 1.15;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    font-style: italic;
    margin: 0;
}

.intro-body {
    font-size: 16px;
    line-height: 1.75;
    font-weight: 300;
    color: var(--dls-color-burgundy);
}

.intro-body p+p {
    margin-top: 20px;
}

@media(max-width:1024px) {
    .intro-inner {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

@media(max-width:768px) {
    .intro {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>