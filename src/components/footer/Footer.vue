<template>
    <div class="footer--wrapper" data-aos="fade-up" data-aos-delay="200">
        <div class="footer">
            <div class="footer--menu">
                <img class="logo" src="/images/footer/logo.png" alt="logo">
                <div class="col-item">
                    <div class="item">17400 Irvine Blvd, Suite H <br /> Tustin, CA 92780</div>
                    <div class="item mt-16px">Monday - Friday: 10 AM - 5:30 PM</div>
                    <div class="item">Saturday: 10 AM - 2PM</div>
                    <div class="item">Sunday: Closed</div>
                    <div class="item mt-16px">Phone: 714-622-8460</div>
                    <div class="item">Fax: 714-622-8460</div>
                    <div class="item">contact@artisan-rx.com</div>
                </div>

                <div class="divider"></div>

                <div class="col-item">
                    <div class="item link">About Us</div>
                    <div class="item link">Services</div>
                    <div class="item link">Patients</div>
                    <div class="item link">Providers</div>
                    <div class="item link">Book Consultation</div>

                    <div class="social mt-16px">
                        <img src="@/assets/images/footer/instagram.png" alt="instagram">
                        <img src="@/assets/images/footer/facebook.png" alt="facebook">
                        <img src="@/assets/images/footer/linkedin.png" alt="linkedin">
                    </div>
                </div>

                <div class="divider"></div>
            </div>

            <div class="footer--legal">
                © COPYRIGHT {{ new Date().getFullYear() }} ARTISAN COMPOUNDING PHARMACY | <span class="link">PRIVACY POLICY</span> | <span class="link">TERMS OF SERVICE</span>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer--wrapper {
    width: 100%;
    padding: 32px;
    max-width: var(--dls-max-width);
    margin: 0 auto;

    .footer {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
        border-top: 1px solid var(--dls-color-burgundy);
        padding-top: 64px;

        &--menu {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            .logo {
                height: 180px;
                width: auto;
            }

            .col-item {
                display: flex;
                flex-direction: column;

                .item {
                    font-family: 'Jost';
                    font-size: 16px;
                    color: var(--dls-color-burgundy);
                    line-height: 200%;
                    letter-spacing: -0.5%;

                    &.link {
                        cursor: pointer;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }

                .social {
                    display: flex;
                    gap: 8px;

                    img {
                        width: 30px;
                        height: 30px;
                        cursor: pointer;
                    }
                }
            }

            .divider {
                display: none;
                width: 100%;
            }
        }

        &--legal {
            font-family: 'Jost';
            font-size: 16px;
            color: var(--dls-color-burgundy);
            line-height: 145%;
            letter-spacing: -0.5%;

            .link {
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    @media (max-width: 1440px) {
        .footer {
            &--menu {
                .logo {
                    height: 120px;
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .footer {
            &--menu {
                flex-direction: column;
                gap: 32px;
            }

            .divider {
                display: block;
            }
        }
    }

    @media (max-width: 768px) { 
         .footer {
            &--menu {
                .col-item {
                    .item {
                        font-size: 14px;
                    }
                }

                .logo {
                    height: 80px;
                }
            }

            &--legal {
                font-size: 12px;
            }
        }
    }
}

</style>