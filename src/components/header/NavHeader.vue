<template>
    <div class="nav-header" id="navHeader" data-aos="fade-up">
        <div class="nav-header--content">
            <img class="logo" src="/images/nav/logo.png" alt="logo">

            <div class="menu">
                <el-popover
                    :show-arrow="false"
                    placement="bottom-start"
                    :width="400"
                    popper-class="box-item-menu-header"
                    @after-enter="onShowPopover"
                    @before-leave="onHidePopover"
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
                    :show-arrow="false"
                    placement="bottom-start"
                    :width="400"
                    popper-class="box-item-menu-header"
                    @after-enter="onShowPopover"
                    @before-leave="onHidePopover"
                    trigger="click">

                    <div class="item--popover">
                        <div class="item--popover--text" @click="goToPage(ROUTE_NAME.HORMONE_REPLACEMENT_THERAPY_SERVICE)">HORMONE REPLACEMENT THERAPY (BHRT)</div>
                        <div class="item--popover--text">WEIGHT LOSS</div>
                        <div class="item--popover--text">SEXUAL HEALTH FOR MEN & WOMEN</div>
                        <div class="item--popover--text">LOW-DOSE NALTREXONE (LDN)</div>
                        <div class="item--popover--text">HAIR GROWTH</div>
                        <div class="item--popover--text">DERMATOLOGY</div>
                        <div class="item--popover--text">PEDIATRICS</div>
                        <div class="item--popover--text">VETERINARY</div>
                    </div>

                    <template #reference>
                        <div class="item">SERVICES</div>
                    </template>
                </el-popover>

                <el-popover
                    :show-arrow="false"
                    placement="bottom-start"
                    :width="400"
                    popper-class="box-item-menu-header"
                    @after-enter="onShowPopover"
                    @before-leave="onHidePopover"
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
                    :show-arrow="false"
                    placement="bottom-start"
                    :width="288"
                    popper-class="box-item-menu-header"
                    @after-enter="onShowPopover"
                    @before-leave="onHidePopover"
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

const onShowPopover = () => { 
    console.log('show')
    
    const navHeader: any = document.getElementById('navHeader')
    if (navHeader) {
        navHeader.style.backgroundColor = '#F7EC9D'
        navHeader.style.height = '320px'
    }
}

const onHidePopover = () => {
    console.log('hide')
    
    const navHeader: any = document.getElementById('navHeader')
    if (navHeader) {
        navHeader.style.backgroundColor = '#FAF8DE'
        navHeader.style.height = 'auto'
    }
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
            gap: 48px;

            &--item {
                cursor: pointer;
                color: var(--dls-color-burgundy);
            }

            .item {
                cursor: pointer;
                color: var(--dls-color-burgundy);
                font-size: 13px;

                &:hover {
                    background: var(--dls-color-sunlight);
                }
            }
        }
    }
}
</style>

<style lang="scss">
.box-item-menu-header {
    background: transparent !important;
    padding: 0 !important;
    box-shadow: none !important;
    border: 0 !important;
    padding-top: 10px !important;

    .item--popover {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 12px;
        background-color: var(--dls-color-sunlight);
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