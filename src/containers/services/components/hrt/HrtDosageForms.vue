<template>
    <section class="forms">
        <svg class="mortar-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6c-1 0-2 .5-2.5 1.5L18 14h12l-3.5-6.5C26 6.5 25 6 24 6z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M12 18c0 0-2 1-2 4s1 6 4 8c3 2 6 3 10 3s7-1 10-3c3-2 4-5 4-8s-2-4-2-4H12z" stroke="currentColor"
                stroke-width="1.5" fill="none" />
            <path d="M16 33l-2 6c-.5 1.5.5 3 2 3h16c1.5 0 2.5-1.5 2-3l-2-6" stroke="currentColor" stroke-width="1.5"
                fill="none" />
            <path d="M32 10l6-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        <h2 data-aos="fade-up">Available Delivery Forms</h2>
        <p class="forms-sub" data-aos="fade-up" data-aos-delay="100">Your prescriber selects the form that best suits your individual needs</p>

        <div class="forms-grid">
            <div class="form-item" data-aos="fade-up" data-aos-delay="100">
                <div class="form-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg></div>
                <h4>Topical Cream or Gel</h4>
                <p>Applied to the skin as directed by your prescriber</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="200">
                <div class="form-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="9" y1="21" x2="9" y2="9" />
                    </svg></div>
                <h4>Sublingual Lozenge</h4>
                <p>Dissolves under the tongue for absorption</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="300">
                <div class="form-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg></div>
                <h4>Oral Capsule</h4>
                <p>Custom-dosed capsules taken by mouth</p>
            </div>
            <div class="form-item" data-aos="fade-up" data-aos-delay="400">
                <div class="form-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <ellipse cx="12" cy="12" rx="4" ry="8" />
                        <path d="M12 4v16" />
                    </svg></div>
                <h4>Suppository</h4>
                <p>An alternative delivery route as directed by your prescriber</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.forms {
    padding: var(--dls-2cm) 60px 0 60px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
}

.forms h2 {
    font-family: 'SpeziaBookB';
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 400;
    text-align: center;
    color: var(--dls-color-burgundy);
    margin-bottom: 16px;
}

.forms-sub {
    text-align: center;
    font-size: 15px;
    color: var(--dls-color-burgundy);
    font-weight: 300;
    margin-bottom: 48px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
}

.forms-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
}

.form-item {
    padding: 40px 28px;
    border: 1px solid var(--dls-color-border);
    text-align: center;
    transition: background .3s;
}

.form-item:last-child {
    border-right: 1px solid var(--dls-color-border);
}

.form-item:hover {
    background: rgba(200, 170, 139, .1);
}

.form-icon {
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

.form-icon svg {
    width: 22px;
    height: 22px;
    color: var(--dls-color-burgundy);
}

.form-item h4 {
    font-family: 'SpeziaBookB';
    font-size: 20px;
    font-weight: 400;
    color: var(--dls-color-burgundy);
    margin-bottom: 8px;
    line-height: 1.3;
    letter-spacing: -0.5px;
}

.form-item p {
    font-size: 16px;
    line-height: 1.55;
    color: var(--dls-color-burgundy);
    font-weight: 300;
}

@media(max-width:1024px) {
    .forms-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .form-item:nth-child(3) {
        border-right: 1px solid var(--dls-color-border);
    }
}

@media(max-width:768px) {
    .forms-grid {
        grid-template-columns: repeat(1, 1fr);
    }

    .form-item {
        border-right: 1px solid var(--dls-color-border) !important;
    }
}
</style>