<template>
  <section class="hero-editorial">
    <div class="hero-breadcrumb"><a href="/">Home</a><span>›</span><a href="#">About Us</a><span>›</span>Our Team</div>
    <div class="hero-editorial-inner">
      <div class="hero-text-col">
        <h1 data-aos="fade-up">The People Behind Personalized Medicine</h1>
      </div>
    </div>
    <div class="hero-overlay"></div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero-editorial {
  width: 100%;
  height: 85vh;
  min-height: 580px;
  max-height: 900px;
  background-color: var(--dls-color-burgundy);
  background-image: url("/images/our-team/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 100px 98px;
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .45) 100%);
  z-index: 1;
}

.hero-breadcrumb {
  font-size: 12px;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin-bottom: 48px;
  opacity: .5;
  z-index: 2;
  position: relative;
}

.hero-breadcrumb a {
  color: var(--dls-color-burgundy);
  text-decoration: none;
}

.hero-breadcrumb a:hover {
  text-decoration: underline;
}

.hero-breadcrumb span {
  margin: 0 8px;
  opacity: .6;
}

.hero-editorial-inner {
  z-index: 2;
  position: relative;
}

.hero-editorial h1 {
  font-family: var(--dls-font-spezia-book-b);
  font-size: 76px;
  color: var(--dls-color-pale);
  line-height: 105%;
  letter-spacing: -7%;
  max-width: 575px;
}

.hero-editorial h1 em {
  font-style: italic;
  color: var(--dls-color-redclay);
}

.hero-tagline {
  margin-top: 32px;
  font-size: 18px;
  line-height: 1.75;
  font-weight: 300;
  color: var(--dls-color-burgundy);
  max-width: 440px;
}

@media (max-width: 1024px) {
  .hero-editorial-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .hero-editorial {
    padding-left: 24px;
    padding-right: 24px;
  }

  .hero-editorial h1 {
    font-size: 60px;
  }
}
</style>