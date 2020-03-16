<template>
  <div class="main wrapper">
    <div id="content" class="page-content up-content">
      <Product />
      <Category />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Banner from '~/components/home/Banner'
  import Product from '~/components/home/Product'
  import Category from '~/components/home/Category'
  import Template from '~/components/home/Template'

  export default {
    layout: 'default',

    metaInfo () {
      return { title: this.$t('category') }
    },

    components: {
      Product,
      Category,
    },

    data: () => ({
      title: window.config.appName
    })
  }
</script>
