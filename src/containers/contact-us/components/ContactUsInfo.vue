<template>
    <section class="info-bar">
        <div class="info-bar-inner">
            <div class="info-item" data-aos="fade-up" data-aos-delay="100">
                <div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg></div>
                <h4>Visit Us</h4>
                <p>17400 Irvine Blvd, Suite H</p>
                <p>Tustin, CA 92780</p>
            </div>
            <div class="info-item" data-aos="fade-up" data-aos-delay="200">
                <div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg></div>
                <h4>Call Us</h4>
                <a href="tel:7146228460">714-622-8460</a>
            </div>
            <div class="info-item" data-aos="fade-up" data-aos-delay="300">
                <div class="info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></div>
                <h4>Hours</h4>
                <p>Mon – Fri: 10 AM – 5:30 PM</p>
                <p>Sat: 10 AM – 2 PM</p>
                <p>Sun: Closed</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.info-bar {
    padding: var(--dls-2cm) 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.info-bar-inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
}

.info-item {
    padding: 40px 32px;
    border: 1px solid var(--dls-color-border);
    border-right: none;
    text-align: center;
    transition: background .3s;
}

.info-item:last-child {
    border-right: 1px solid var(--dls-color-border);
}

.info-item:hover {
    background: rgba(200, 170, 139, .1);
}

.info-icon {
    width: 52px;
    height: 52px;
    margin: 0 auto 16px;
    border-radius: 50%;
    background: var(--dls-color-cream);
    border: 1px solid var(--dls-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-icon svg {
    width: 22px;
    height: 22px;
    color: var(--dls-color-burgundy);
}

.info-item h4 {
    font-family: 'SpeziaBookB';
    font-size: 17px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
    line-height: 1.3;
    letter-spacing: -1px;
}

.info-item p,
.info-item a {
    font-size: 14px;
    line-height: 1.65;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    text-decoration: none;
    display: block;
    margin: 0;
}

.info-item a:hover {
    text-decoration: underline;
}

@media(max-width:1024px) {
    .info-bar-inner {
        grid-template-columns: 1fr;
    }

    .info-item {
        border-right: 1px solid var(--dls-color-border) !important;
        border-bottom: none;
    }

    .info-item:last-child {
        border-bottom: 1px solid var(--dls-color-border);
    }
}

@media(max-width:768px) {
    .info-bar {
        padding: 48px 24px;
    }
}
</style>