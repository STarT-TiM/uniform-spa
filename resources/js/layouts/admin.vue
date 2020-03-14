<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">

    <q-header elevated class="bg-white text-grey-8" height-hint="64" >
      <toolbar :leftDrawerOpen="leftDrawerOpen" @toggleMenu="toggleMenu"/>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="280"
    >
      <drawer/>
    </q-drawer>

    <q-page-container>
      <child/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import Toolbar from '~/components/admin/Toolbar'
  import Drawer from '~/components/admin/Drawer'

  export default {
    name: 'admin',

    components: {
      Toolbar,
      Drawer
    },
    data() {
      return {
        leftDrawerOpen: true
      }
    },
    methods: {
      toggleMenu(isOpen) {
        this.leftDrawerOpen = isOpen
      }
    }
  }
</script>

<style lang="sass">
  .GNL
    &__toolbar
      height: 64px
    &__toolbar-input
      width: 55%
    &__drawer-item
      line-height: 24px
      border-radius: 0 24px 24px 0
      margin-right: 12px
      .q-item__section--avatar
        .q-icon
          color: #5f6368
      .q-item__label
        color: #3c4043
        letter-spacing: .01785714em
        font-size: .875rem
        font-weight: 500
        line-height: 1.25rem
    &__drawer-footer-link
      color: inherit
      text-decoration: none
      font-weight: 500
      font-size: .75rem
      &:hover
        color: #000
</style>
