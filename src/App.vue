<template>
  <div class="app-main-view" v-if="currentRouteName === ROUTE_NAME.HOME">
    <router-view />
  </div>

  <div v-else class="app-main-view">
    <div class="app-header">
      <HomeAuxHeader />
      <HomeNavHeader class="nav-header" />
    </div>
    <router-view />
    <Footer />
  </div>

  <div id="artisan-soon" role="dialog" aria-modal="true" aria-labelledby="as-title" aria-describedby="as-desc" hidden>
    <div class="as-card" role="document">
      <button type="button" class="as-close" data-as-close aria-label="Close">&times;</button>

      <p class="as-eyebrow">Coming Soon to Tustin</p>
      <div class="as-rule"></div>

      <h2 class="as-title" id="as-title">We&rsquo;re Opening This&nbsp;Fall</h2>

      <p class="as-body" id="as-desc">
        Thank you for visiting. Artisan Compounding Pharmacy is putting the
        finishing touches on our lab &mdash; we are not yet filling
        prescriptions. Please look around,
        and leave your email if you&rsquo;d like to be the first to know when
        our doors open.
      </p>


      <form class="as-form" novalidate>
        <label class="sr-only" for="as-email"
          style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;">Email
          address</label>
        <input class="as-input" id="as-email" type="email" name="email" placeholder="your@email.com"
          autocomplete="email" required>
        <button class="as-btn" type="submit">Keep Me Posted</button>
        <p class="as-error" role="alert" data-as-error></p>
      </form>

      <button type="button" class="as-dismiss" data-as-close>No thanks, I&rsquo;m just looking around</button>

      <div class="as-thanks">
        <div class="as-check">&#10003;</div>
        <p class="as-body" style="margin-bottom:0;">
          Wonderful &mdash; you&rsquo;re on the list. We&rsquo;ll be in touch
          the moment we open. We can&rsquo;t wait to meet you.
        </p>
      </div>

      <p class="as-foot">
        17400 Irvine Blvd, Suite H &middot; Tustin, CA 92780<br>
        <a href="tel:+19498185799">(949)&nbsp;818-5799</a> &middot;
        <a href="mailto:contact@artisan-rx.com">contact@artisan-rx.com</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import { ROUTE_NAME } from '@/constants/route-constants'

const route = useRoute()

const HomeAuxHeader = defineAsyncComponent(() => import('@/components/header/AuxHeader.vue'))
const HomeNavHeader = defineAsyncComponent(() => import('@/components/header/NavHeader.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))

const currentRouteName = computed<any>(() => route.name)

const popupConfig: any = {
  // Where the email goes. Leave '' and it opens the visitor's mail app
  // addressed to you. Paste a Formspree / Mailchimp / Google Form
  // endpoint URL here once you have one.
  formEndpoint: '',

  // Used for the mail-app fallback above.
  fallbackEmail: 'contact@artisan-rx.com',

  // Seconds to wait before the pop-up appears.
  delaySeconds: 1.5,

  // 'session' = once per browsing session (recommended)
  // 'day'     = once every 24 hours
  // 'always'  = every single page load (useful while testing)
  showFrequency: 'always'
}

const KEY: any = 'artisan-soon-seen'
const lastFocused = ref<any>(null)
const memoSeen = ref<boolean>(false) // in-memory fallback if storage is blocked

const readSeen = () => {
  if (popupConfig.showFrequency === 'always') return false
  try {
    var store = popupConfig.showFrequency === 'day' ? localStorage : sessionStorage;
    var v = store.getItem(KEY);
    if (!v) return false;
    if (popupConfig.showFrequency === 'day') {
      return (Date.now() - parseInt(v, 10)) < 86400000;
    }
    return true;
  } catch (e) { return memoSeen.value }
}

const markSeen = () => {
  memoSeen.value = true
  if (popupConfig.showFrequency === 'always') return
  try {
    var store = popupConfig.showFrequency === 'day' ? localStorage : sessionStorage;
    store.setItem(KEY, String(Date.now()));
  } catch (e) { /* storage blocked — in-memory flag is enough */ }
}

const onKey = (e: any) => {
  if (e.key === 'Escape') {
    e.preventDefault()
    close()
    return
  }
  if (e.key !== 'Tab') return
  // keep focus inside the dialog
  const el: any = document.getElementById('artisan-soon')
  const f: any = el?.querySelectorAll('button:not([disabled]), input, a[href]')
  const vis: any = []
  for (var i = 0; i < f?.length; i++) {
    if (f[i].offsetParent !== null) vis.push(f[i])
  }
  if (!vis.length) return;
  var first: any = vis[0], last: any = vis[vis.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  }
  else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

const open = () => {
  lastFocused.value = document.activeElement

  const el: any = document.getElementById('artisan-soon')
  const input: any = el?.querySelector('.as-input')

  el.hidden = false

  // next frame so the transition runs
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { 
        el?.classList.add('is-open')
    })
  })
  document.addEventListener('keydown', onKey, true)
  setTimeout(() => {
    var target = el?.classList.contains('as-done')
      ? el?.querySelector('.as-close') : input
    if (target) target.focus()
  }, 460)
}

const close = () => {
  markSeen()

  const el: any = document.getElementById('artisan-soon')
  
  el?.classList.remove('is-open')
  document.removeEventListener('keydown', onKey, true)
  setTimeout(() => { if (el) el.hidden = true }, 480)
  if (lastFocused.value && lastFocused.value.focus) lastFocused.value.focus()
}

const valid = (v: any) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
}

const succeed = () => {
  const el: any = document.getElementById('artisan-soon')

  el?.classList.add('as-done')
  markSeen()
  var c = el?.querySelector('.as-close')
  if (c) c.focus()
}

const start = () => {
  if (readSeen()) return;
  setTimeout(open, popupConfig.delaySeconds * 1000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}

onMounted(() => {
const el: any = document.getElementById('artisan-soon')
const form: any = el?.querySelector('.as-form')
const input: any = el?.querySelector('.as-input')
const errEl: any = el?.querySelector('[data-as-error]')

form?.addEventListener('submit', (e: any) => {
  e.preventDefault()
  var v = (input.value || '').trim()
  if (!valid(v)) {
    errEl.textContent = 'Please enter a valid email address.'
    input.focus()
    return
  }
  errEl.textContent = ''
  var btn = form?.querySelector('.as-btn')
  btn.disabled = true
  btn.textContent = 'Sending…'

  if (!popupConfig.formEndpoint) {
    // No endpoint configured — open the visitor's mail app instead.
    // window.location.href = 'mailto:' + popupConfig.fallbackEmail +
    //   '?subject=' + encodeURIComponent('Please add me to the Artisan opening list') +
    //   '&body=' + encodeURIComponent('Hi Artisan,\n\nPlease notify me when you open.\n\nEmail: ' + v + '\n')
    setTimeout(succeed, 400)
    return;
  }

  var data = new FormData()
  data.append('email', v)
  data.append('source', 'Website opening-soon pop-up')
  fetch(popupConfig.formEndpoint, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then((r) => {
    if (!r.ok) throw new Error('bad response')
    succeed();
  }).catch(() => {
    btn.disabled = false
    btn.textContent = 'Keep Me Posted'
    errEl.textContent = 'Sorry — something went wrong. Please email contact@artisan-rx.com.'
  })
})

// Close on the X, the dismiss link, or a click on the backdrop
const closers: any = el?.querySelectorAll('[data-as-close]')
for (var i = 0; i < closers?.length; i++) closers[i].addEventListener('click', close)
el?.addEventListener('mousedown', (e: any) => { if (e.target === el) close() })
})
</script>

<style lang="scss" scoped>
.app-main-view {
  position: relative;
  background: var(--dls-color-lemonice);

  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  @media (max-width: 1024px) {
    .app-header {
      .nav-header {
        display: none;
      }
    }

  }
}


#artisan-soon {
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(35, 32, 28, 0.55);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  transition: opacity .45s ease, visibility .45s ease;
}

#artisan-soon.is-open {
  opacity: 1;
  visibility: visible;
}

#artisan-soon[hidden] {
  display: none;
}

#artisan-soon .as-card {
  position: relative;
  width: 100%;
  max-width: 460px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  background: #fbf8f3;
  border: 1px solid rgba(176, 141, 87, .45);
  border-radius: 2px;
  box-shadow: 0 24px 60px rgba(35, 32, 28, .28);
  padding: 44px 38px 34px;
  text-align: center;
  color: #23201c;
  transform: translateY(14px);
  transition: transform .45s cubic-bezier(.2, .7, .3, 1);
}

#artisan-soon.is-open .as-card {
  transform: translateY(0);
}

/* Close button */
#artisan-soon .as-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;
  border-radius: 50%;
  font-size: 22px;
  line-height: 1;
  color: #6f6558;
  cursor: pointer;
  transition: color .2s ease, background .2s ease;
}

#artisan-soon .as-close:hover {
  color: #23201c;
  background: rgba(176, 141, 87, .12);
}

/* Eyebrow */
#artisan-soon .as-eyebrow {
  font-size: 10px;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: #7d6039;
  margin: 0 0 18px;
}

/* Ornamental rule */
#artisan-soon .as-rule {
  width: 46px;
  height: 1px;
  background: #b08d57;
  margin: 0 auto 20px;
  opacity: .7;
}

/* Headline */
#artisan-soon .as-title {
  font-family: var(--dls-font-spezia-book-b);
  font-size: 30px;
  line-height: 1.2;
  font-weight: 400;
  margin: 0 0 14px;
  color: #23201c;
  letter-spacing: -1px;
}

/* Body copy */
#artisan-soon .as-body {
  font-size: 15px;
  line-height: 1.65;
  color: #6f6558;
  margin: 0 0 10px;
}

#artisan-soon .as-body strong {
  color: #23201c;
  font-weight: 600;
}

/* Form */
#artisan-soon .as-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
}

#artisan-soon .as-input {
  width: 100%;
  padding: 13px 14px;
  font-size: 15px;
  color: #23201c;
  background: #fff;
  border: 1px solid rgba(35, 32, 28, .22);
  border-radius: 2px;
  outline: none;
  transition: border-color .2s ease, box-shadow .2s ease;
}

#artisan-soon .as-input::placeholder {
  color: #a89c8d;
}

#artisan-soon .as-input:focus {
  border-color: #b08d57;
  box-shadow: 0 0 0 3px rgba(176, 141, 87, .2);
}

#artisan-soon .as-btn {
  width: 100%;
  padding: 14px 18px;
  font-size: 12px;
  letter-spacing: .14em;
  text-transform: uppercase;
  font-weight: 600;
  color: #23201c;
  background: #c9b194;
  border: 1px solid #c9b194;
  border-radius: 2px;
  cursor: pointer;
  transition: background .2s ease, border-color .2s ease;
}

#artisan-soon .as-btn:hover {
  background: #b99b78;
  border-color: #b99b78;
}

#artisan-soon .as-btn:disabled {
  opacity: .6;
  cursor: default;
}

#artisan-soon .as-dismiss {
  margin-top: 14px;
  background: none;
  border: 0;
  font-size: 13px;
  color: #6f6558;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

#artisan-soon .as-dismiss:hover {
  color: #23201c;
}

#artisan-soon .as-error {
  font-size: 13px;
  color: #a33a3a;
  min-height: 18px;
  margin: 0;
}

/* Footer contact line */
#artisan-soon .as-foot {
  margin: 26px 0 0;
  padding-top: 18px;
  border-top: 1px solid rgba(176, 141, 87, .3);
  font-size: 12px;
  line-height: 1.7;
  color: #6f6558;
}

#artisan-soon .as-foot a {
  color: #6f6558;
  text-decoration: none;
  border-bottom: 1px solid rgba(176, 141, 87, .4);
}

#artisan-soon .as-foot a:hover {
  color: #23201c;
}

/* Thank-you state */
#artisan-soon .as-thanks {
  display: none;
}

#artisan-soon.as-done .as-form,
#artisan-soon.as-done .as-dismiss,
#artisan-soon.as-done .as-error {
  display: none;
}

#artisan-soon.as-done .as-thanks {
  display: block;
}

#artisan-soon .as-check {
  width: 44px;
  height: 44px;
  margin: 0 auto 14px;
  border: 1px solid #b08d57;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7d6039;
  font-size: 20px;
}

/* Focus visibility for keyboard users */
#artisan-soon button:focus-visible,
#artisan-soon a:focus-visible {
  outline: 2px solid #b08d57;
  outline-offset: 3px;
}

/* Small screens */
@media (max-width: 480px) {
  #artisan-soon {
    padding: 12px;
  }

  #artisan-soon .as-card {
    padding: 40px 22px 26px;
  }

  #artisan-soon .as-title {
    font-size: 25px;
  }

  #artisan-soon .as-body {
    font-size: 14.5px;
  }
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {

  #artisan-soon,
  #artisan-soon .as-card {
    transition: none;
  }
}
</style>

<style lang="scss">
#app {
  position: relative;
}
</style>
