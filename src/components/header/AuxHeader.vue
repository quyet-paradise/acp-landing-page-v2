<template>
    <div class="aux-header--wrapper" data-aos="fade-down">
        <div class="aux-header">
            <div class="aux-header--item link">PATIENT LOGIN</div>
            <div class="aux-header--item">|</div>
            <div class="aux-header--item link">PROVIDER LOGIN</div>
        </div>

        <div v-if="!isOpenMenu" @click="isOpenMenu = true" class="menu-btn"></div>

        <div v-else class="menu-bar">
            <img @click="isOpenMenu = false" class="close-btn" src="@/assets/images/menu/close-btn.svg" alt="close-btn">

            <div class="nav">
                <div class="about-us">
                    <div class="title" @click="onShowAboutUs">About Us</div>
                    <div v-if="isShowAboutUsItem" class="list-item">
                        <div class="item">OUR TEAM</div>
                        <div class="item">OUR FACILITY</div>
                        <div class="item">PROFESSIONAL PARTNERSHIP / ACCREDITATION</div>
                        <div class="item">FAQ</div>
                        <div class="item">CONTACT US</div>
                    </div>
                </div>

                <div class="services">
                    <div class="title" @click="onShowServices">Services</div>
                    <div v-if="isShowServicesItem" class="list-item">
                        <div class="item" @click="handleRouting(ROUTE_NAME.HORMONE_REPLACEMENT_THERAPY_SERVICE)">HORMONE REPLACEMENT THERAPY (HRT)</div>
                        <div class="item" @click="handleRouting(ROUTE_NAME.LOW_DOSE_NALTREXONE_SERVICE)">LOW-DOSE NALTREXONE (LDN)</div>
                        <div class="item" @click="handleRouting(ROUTE_NAME.SEXUAL_HEALTH_SERVICE)">SEXUAL HEALTH FOR MEN & WOMEN</div>
                        <div class="item" @click="handleRouting(ROUTE_NAME.WEIGHT_LOSS_SERVICE)">WEIGHT LOSS</div>
                        <div class="item" @click="handleRouting(ROUTE_NAME.HAIR_GROWTH_SERVICE)">HAIR GROWTH</div>
                        <div class="item" @click="handleRouting(ROUTE_NAME.DERMATOLOGY_SERVICE)">DERMATOLOGY</div>
                        <div class="item" @click="handleRouting(ROUTE_NAME.PEDIATRICS_SERVICE)">PEDIATRICS</div>
                        <div class="item" @click="handleRouting(ROUTE_NAME.VETERINARY_SERVICE)">VETERINARY</div>
                    </div>
                </div>

                <div class="patients">
                    <div class="title" @click="onShowPatients">Patients</div>
                    <div v-if="isShowPatientsItem" class="list-item">
                        <div class="item">WHAT IS COMPOUNDING</div>
                        <div class="item">WHY CHOOSE US?</div>
                        <div class="item">NEW PATIENT INTAKE</div>
                        <div class="item">FILL MY RX / TRANSFER RX</div>
                    </div>
                </div>

                <div class="providers">
                    <div class="title" @click="onShowProviders">Providers</div>
                    <div v-if="isShowProvidersItem" class="list-item">
                        <div class="item">SEND PRESCRIPTION</div>
                        <div class="item">WHY ARTISAN?</div>
                    </div>
                </div>
            </div>

            <div class="btn">CONTACT US</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ROUTE_NAME } from '@/constants/route-constants'
import { goToPage } from '@/utils/common-utils'

const isOpenMenu = ref<boolean>(false)
const isShowAboutUsItem = ref<boolean>(false)
const isShowServicesItem = ref<boolean>(false)
const isShowPatientsItem = ref<boolean>(false)
const isShowProvidersItem = ref<boolean>(false)

const onShowAboutUs = () => {
    isShowAboutUsItem.value = !isShowAboutUsItem.value
    isShowServicesItem.value = false
    isShowPatientsItem.value = false
    isShowProvidersItem.value = false
}

const onShowServices = () => {
    isShowServicesItem.value = !isShowServicesItem.value
    isShowAboutUsItem.value = false
    isShowPatientsItem.value = false
    isShowProvidersItem.value = false
}

const onShowPatients = () => {
    isShowPatientsItem.value = !isShowPatientsItem.value
    isShowServicesItem.value = false
    isShowAboutUsItem.value = false
    isShowProvidersItem.value = false
}

const onShowProviders = () => {
    isShowProvidersItem.value = !isShowProvidersItem.value
    isShowServicesItem.value = false
    isShowPatientsItem.value = false
    isShowAboutUsItem.value = false
}

const handleRouting = (routeName: string) => {
    goToPage(routeName)
    isOpenMenu.value = false
}
</script>

<style lang="scss" scoped>
.aux-header--wrapper {
    width: 100%;
    position: relative;

    .aux-header {
        width: 100%;
        padding: 0 64px;
        display: flex;
        justify-content: flex-end;
        background: var(--dls-color-sunlight);
        align-items: center;
        gap: 8px;
        height: var(--dls-aux-header-height);

        &--item {
            font-family: 'Jost';
            font-weight: 500;
            font-size: 11px;
            line-height: 145%;
            letter-spacing: .08em;
            color: var(--dls-color-burgundy);
            text-transform: uppercase;

            &.link {
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .menu-btn {
        position: absolute;
        top: 64px;
        right: 32px;
        width: 40px;
        height: 15px;
        border-top: 1px solid var(--dls-color-sunlight);
        border-bottom: 1px solid var(--dls-color-sunlight);
        cursor: pointer;
        display: none;
    }

    .menu-bar {
        position: absolute;
        top: var(--dls-aux-header-height);
        left: 0;
        width: 100vw;
        height: calc(100vh - var(--dls-aux-header-height));
        background: var(--dls-color-sunlight);
        border-top: 1px solid var(--dls-color-burgundy);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .close-btn {
            cursor: pointer;
            position: absolute;
            top: 32px;
            right: 32px;
        }

        .nav {
            padding: 64px 32px 0 32px;

            .title {
                font-family: "SpeziaBookB";
                font-size: 36px;
                line-height: 190%;
                letter-spacing: -7%;
                color: var(--dls-color-black);
                cursor: pointer;
            }

            .list-item {
                display: flex;
                flex-direction: column;
                gap: 16px;
                padding: 16px 0;

                .item {
                    cursor: pointer;
                }
            }
        }

        .btn {
            padding: 24px 0;
            text-align: center;
            border-top: 1px solid var(--dls-color-burgundy);
            cursor: pointer;
            font-family: 'Jost';
            font-size: 16px;
            line-height: 145%;
            letter-spacing: -0.5%;
        }
    }

    @media (max-width: 1024px) {
        .aux-header {
            justify-content: center;
        }

        .menu-btn {
            display: block;
        }
    }
}
</style>