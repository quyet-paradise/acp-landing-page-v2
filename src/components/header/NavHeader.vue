<template>
    <div class="nav-header" id="navHeader" data-aos="fade-up">
        <div class="nav-header--content">
            <img @click="goToPage(ROUTE_NAME.HOME)" class="logo" src="/images/nav/logo.png" alt="logo">

            <div class="menu">
                <el-popover
                    ref="aboutUsNavRef"
                    :show-arrow="false"
                    placement="bottom-start"
                    :width="350"
                    popper-class="box-item-menu-header"
                    trigger="click">

                    <div class="item--popover">
                        <div class="item--popover--text">OUR TEAM</div>
                        <div class="item--popover--text">OUR FACILITY</div>
                        <div class="item--popover--text">PROFESSIONAL PARTNERSHIP / ACCREDITATION</div>
                        <div class="item--popover--text">FAQ</div>
                        <div class="item--popover--text">CONTACT US</div>
                    </div>

                    <template #reference>
                        <div class="item">ABOUT US</div>
                    </template>
                </el-popover>

                <el-popover
                    ref="servicesNavRef"
                    :show-arrow="false"
                    placement="bottom-start"
                    :width="300"
                    popper-class="box-item-menu-header"
                    trigger="click">

                    <div class="item--popover">
                        <div class="item--popover--text" @click="handleRouting(ROUTE_NAME.HORMONE_REPLACEMENT_THERAPY_SERVICE)">HORMONE REPLACEMENT THERAPY (BHRT)</div>
                        <div class="item--popover--text" @click="handleRouting(ROUTE_NAME.LOW_DOSE_NALTREXONE_SERVICE)">LOW-DOSE NALTREXONE (LDN)</div>
                        <div class="item--popover--text" @click="handleRouting(ROUTE_NAME.SEXUAL_HEALTH_SERVICE)">SEXUAL HEALTH FOR MEN & WOMEN</div>
                        <div class="item--popover--text" @click="handleRouting(ROUTE_NAME.WEIGHT_LOSS_SERVICE)">WEIGHT LOSS</div>
                        <div class="item--popover--text" @click="handleRouting(ROUTE_NAME.HAIR_GROWTH_SERVICE)">HAIR GROWTH</div>
                        <div class="item--popover--text">DERMATOLOGY</div>
                        <div class="item--popover--text">PEDIATRICS</div>
                        <div class="item--popover--text">VETERINARY</div>
                    </div>

                    <template #reference>
                        <div class="item">SERVICES</div>
                    </template>
                </el-popover>

                <el-popover
                    ref="patientsNavRef"
                    :show-arrow="false"
                    placement="bottom-start"
                    :width="200"
                    popper-class="box-item-menu-header"
                    trigger="click">

                    <div class="item--popover">
                        <div class="item--popover--text">WHAT IS COMPOUNDING</div>
                        <div class="item--popover--text">WHY CHOOSE US?</div>
                        <div class="item--popover--text">NEW PATIENT INTAKE</div>
                        <div class="item--popover--text">FILL MY RX / TRANSFER RX</div>
                    </div>

                    <template #reference>
                        <div class="item">PATIENTS</div>
                    </template>
                </el-popover>

                <el-popover
                    ref="providersNavRef"
                    :show-arrow="false"
                    placement="bottom-start"
                    :width="200"
                    popper-class="box-item-menu-header"
                    trigger="click">

                    <div class="item--popover">
                        <div class="item--popover--text">SEND PRESCRIPTION</div>
                        <div class="item--popover--text">WHY ARTISAN?</div>
                    </div>

                    <template #reference>
                        <div class="item">PROVIDERS</div>
                    </template>
                </el-popover>

                <div class="book-consultation-btn-v1">BOOK CONSULTATION</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route-constants'
import { goToPage } from '@/utils/common-utils'
import { ref } from 'vue'

const aboutUsNavRef = ref()
const servicesNavRef = ref()
const patientsNavRef = ref()
const providersNavRef = ref()

const hideAllPopover = () => {
    aboutUsNavRef.value.hide()
    servicesNavRef.value.hide()
    patientsNavRef.value.hide()
    providersNavRef.value.hide()
}

const handleRouting = (routeName: string) => {
    goToPage(routeName)
    hideAllPopover()
}
</script>

<style lang="scss" scoped>
.nav-header {
    width: 100%;
    height: var(--dls-nav-header-height);
    background: #FAF8DE;
    padding: 16px 60px;
    transition: all .3s ease;
    border-bottom: 1px solid var(--dls-color-border);

    &--content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            height: 49px;
            width: auto;
            cursor: pointer;
        }

        .menu {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 24px;

            .item {
                cursor: pointer;
                color: var(--dls-color-burgundy);
                font-size: 13px;
                padding: 10px 20px;
                border-radius: 4px;
                border: 1px solid transparent;

                &:hover {
                    background: var(--dls-color-sunlight);
                    border: 1px solid var(--dls-color-burgundy);
                }
            }
        }
    }
}
</style>

<style lang="scss">
.box-item-menu-header {
    background: var(--dls-color-sunlight) !important;
    padding-top: 20px !important;
    border: 0 !important;

    .item--popover {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
        transition: all .3s ease; 

        &--text {
            font-size: 13px;
            color: var(--dls-color-burgundy);
            font-weight: 400;
            cursor: pointer;
            width: 100%;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>