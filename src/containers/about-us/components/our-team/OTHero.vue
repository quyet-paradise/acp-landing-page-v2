<template>
  <section class="hero-editorial">
    <div class="hero-breadcrumb"><a href="/">Home</a><span>›</span><a href="#">About Us</a><span>›</span>Our Team</div>
    <div class="hero-editorial-inner">
      <div class="hero-text-col">
        <h1 data-aos="fade-up">The People Behind Personalized Medicine</h1>
        <div class="hero-line" data-aos="fade-in" data-aos-delay="300"></div>
      </div>
      <div class="hero-img-col" data-aos="fade-in" data-aos-delay="200">
        <img
          src="/images/our-team/banner.jpg"
          alt="Compounded capsules">
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero-editorial {
  padding: var(--dls-2cm) 60px 0;
  max-width: var(--dls-max-width);
  margin: 0 auto;
}

.hero-breadcrumb {
  font-size: 12px;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin-bottom: 48px;
  opacity: .5;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  min-height: 520px;
}

.hero-text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 80px;
}

.hero-editorial h1 {
  font-family: 'SpeziaBookB';
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 400;
  line-height: 1.02;
  color: var(--dls-color-burgundy);
  letter-spacing: -.01em;
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

.hero-line {
  width: 60px;
  height: 1px;
  background: var(--dls-color-redclay);
  margin-top: 40px;
}

.hero-img-col {
  position: relative;
  overflow: hidden;
  border-radius: 0 0 0 80px;
}

.hero-img-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 520px;
  object-position:center bottom;
}

@media (max-width: 1024px) {
  .hero-editorial-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero-text-col {
    padding-right: 0;
  }

  .hero-img-col {
    border-radius: 0 0 60px 0;
    max-height: 400px;
  }

  .hero-img-col img {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .hero-editorial {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>