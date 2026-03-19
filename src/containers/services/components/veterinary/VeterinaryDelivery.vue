<template>
    <section class="delivery">
        <div class="delivery-inner">
            <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                style="color:var(--dls-color-sunlight);opacity:.5">
                <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                    stroke-width="1.5" fill="none" />
                <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z"
                    stroke="currentColor" stroke-width="1.5" fill="none" />
                <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                    fill="none" />
                <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <h2 data-aos="fade-up">Available Delivery Forms</h2>
            <p class="delivery-sub" data-aos="fade-up" data-aos-delay="100">Over 20 natural flavors in xylitol-free bases — packaged in child-resistant, leak-proof containers</p>

            <div class="delivery-grid">
                <div class="delivery-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="delivery-card-icon">🧴</div>
                    <h4>Flavored Oral Suspensions</h4>
                    <p>Tuna-bisque, peanut-crunch, banana cream, apple — in sugar- or xylitol-free bases</p>
                </div>
                <div class="delivery-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="delivery-card-icon">🦴</div>
                    <h4>Soft Chew Treats</h4>
                    <p>Pliable, low-crumb bites that hide even the strongest medication odors</p>
                </div>
                <div class="delivery-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="delivery-card-icon">💊</div>
                    <h4>Tiny Capsules &amp; Mini-Tabs</h4>
                    <p>Sized for toy breeds and exotics with precise milligram dosing</p>
                </div>
                <div class="delivery-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="delivery-card-icon">👂</div>
                    <h4>Transdermal Ear Gels</h4>
                    <p>Quick-dry PLO for cats that hate pills — apply inside the ear flap</p>
                </div>
                <div class="delivery-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="delivery-card-icon">🎞️</div>
                    <h4>Rapid-Dissolve Films</h4>
                    <p>Place on the tongue — perfect during car rides or stressful vet visits</p>
                </div>
                <div class="delivery-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="delivery-card-icon">🧪</div>
                    <h4>Topical Sprays &amp; Creams</h4>
                    <p>Topical application as directed by your veterinarian</p>
                </div>
                <div class="delivery-card" data-aos="fade-up" data-aos-delay="700">
                    <div class="delivery-card-icon">🐴</div>
                    <h4>Equine Oral Pastes</h4>
                    <p>Bulk syringe pastes and top-dress granules for barn-friendly dosing</p>
                </div>
                <div class="delivery-card" data-aos="fade-up" data-aos-delay="800">
                    <div class="delivery-card-icon">💎</div>
                    <h4>Suppositories</h4>
                    <p>Last-resort option when oral or topical routes fail post-surgery</p>
                </div>
            </div>

            <p class="delivery-note" data-aos="fade-up">All packaged in child-resistant, leak-proof containers with color-coded syringes
                and easy-dose charts.</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.delivery {
    background: var(--dls-color-olive);
    padding: 100px 60px;
    position: relative;
    overflow: hidden;
}

.delivery::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(255, 253, 245, .1);
    border-radius: 50%;
}

.delivery::after {
    content: '';
    position: absolute;
    bottom: -160px;
    left: -80px;
    width: 400px;
    height: 400px;
    border: 1px solid rgba(255, 253, 245, .06);
    border-radius: 50%;
}

.delivery-inner {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.delivery h2 {
    font-family: "SpeziaBookB";
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    color: var(--dls-color-white);
    text-align: center;
    margin-bottom: 16px;
}

.delivery-sub {
    text-align: center;
    font-size: 15px;
    color: rgba(255, 253, 245, .7);
    font-weight: 300;
    margin-bottom: 56px;
}

.delivery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.delivery-card {
    background: rgba(255, 253, 245, .08);
    border: 1px solid rgba(255, 253, 245, .12);
    border-radius: 14px;
    padding: 28px 22px;
    text-align: center;
    transition: background .3s, transform .3s;
}

.delivery-card:hover {
    background: rgba(255, 253, 245, .15);
    transform: translateY(-3px);
}

.delivery-card-icon {
    font-size: 28px;
    margin-bottom: 12px;
}

.delivery-card h4 {
    font-family: "SpeziaBookB";
    font-size: 16px;
    font-weight: 400;
    color: var(--dls-color-white);
    margin-bottom: 8px;
    line-height: 1.3;
    letter-spacing: -1px;
}

.delivery-card p {
    font-size: 13px;
    line-height: 1.55;
    color: rgba(255, 253, 245, .7);
    font-weight: 300;
}

.delivery-note {
    text-align: center;
    margin-top: 32px;
    font-size: 13.5px;
    color: rgba(255, 253, 245, .55);
    font-weight: 300;
}

@media(max-width:1024px) {
    .delivery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width:768px) {
    .delivery {
        padding: 64px 24px;
    }

    .delivery-grid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>