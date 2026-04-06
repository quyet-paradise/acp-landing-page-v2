<template>
    <section class="quote-strip" data-aos="fade-up">
    <blockquote>We don't just compound prescriptions — we compound trust, precision, and the kind of care you can feel.</blockquote>
    <cite>Vanessa Nguyen, PharmD, RPh — Founder</cite>
    </section>
    <div class="quote-divider"></div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.quote-strip {
  padding: var(--dls-2cm) 60px var(--dls-1p5cm) 60px;
  max-width: var(--dls-max-width);
  margin: 0 auto;
  text-align: center;
}
.quote-strip blockquote {
  font-family: var(--dls-font-spezia-book-b);
  font-size: clamp(24px, 3vw, 38px);
  font-weight: 400;
  line-height: 1.4;
  color: var(--dls-color-burgundy);
  max-width: 900px;
  margin: 0 auto;
  font-style: italic;
  position: relative;
}
.quote-strip blockquote::before {
  content: '\201C';
  position: absolute;
  top: -20px;
  left: -30px;
  font-size: 80px;
  color: var(--dls-color-taupe);
  opacity: .3;
  font-style: normal;
  line-height: 1;
}
.quote-strip cite {
  display: block;
  margin-top: 24px;
  font-family: var(--dls-font-jost);
  font-size: 13px;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--dls-color-redclay);
  font-style: normal;
}
.quote-divider {
  width: 100%;
  height: 1px;
  background: var(--dls-color-border);
  max-width: var(--dls-max-width);
  margin: 0 auto;
}

@media (max-width: 1024px) {}

@media (max-width: 768px) {
    .quote-strip { padding: 60px 24px; }
}
</style>