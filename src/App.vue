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
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed, defineAsyncComponent } from 'vue'
import { ROUTE_NAME } from '@/constants/route-constants'

const route = useRoute()

const HomeAuxHeader = defineAsyncComponent(() => import('@/components/header/AuxHeader.vue'))
const HomeNavHeader = defineAsyncComponent(() => import('@/components/header/NavHeader.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))

const currentRouteName = computed<any>(() => route.name)
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
</style>

<style lang="scss">
#app {
  position: relative;
}
</style>
