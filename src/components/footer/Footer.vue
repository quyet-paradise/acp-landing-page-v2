<template>
    <div class="footer">
        <div>
            <hr />
        </div>

        <div class="footer--menu">
            <img class="logo" src="/images/footer/logo.png" alt="logo">
            <div class="col-item">
                <div class="item">17400 IRVINE BLVD, SUITE H <br /> TUSTIN, CA 92780</div>
                <div class="item">(212) 967-0892</div>
                <div class="item">MONDAY-FRIDAY: 9AM-5PM</div>
            </div>

            <div class="col-item">
                <div class="item link">INSTAGRAM</div>
                <div class="item link">FACEBOOK</div>
                <div class="item link">LINKEDIN</div>
            </div>


            <div class="col-item">
                <div class="item link">ABOUT US</div>
                <div class="item link">SERVICES</div>
                <div class="item link">PATIENTS</div>
                <div class="item link">PROVIDERS</div>
                <div class="item link">BOOK CONSULTATION</div>
            </div>
        </div>

        <div class="footer--legal">
            © COPYRIGHT {{ new Date().getFullYear() }} ARTISAN COMPOUNDING PHARMACY | <span class="link">PRIVACY POLICY</span> | <span class="link">TERMS OF SERVICE</span>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    position: relative;
    padding: 0 32px 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    &--menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .logo {
            height: 205px;
            width: auto;
        }

        .col-item {
            display: flex;
            flex-direction: column;
            gap: 16px;

            .item {
                font-family: 'Jost';
                font-size: 16px;
                color: var(--dls-color-burgundy);
                line-height: 145%;
                letter-spacing: -0.5%;

                &.link {
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
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
</style>