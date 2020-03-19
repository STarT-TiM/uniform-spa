<template>
  <div class="main wrapper">
    <div id="content" class="page-content up-content">
      <Product />
      <Category />
    </div>
  </div>
</template>

<script>
  import Product from '~/components/home/Product'
  import Category from '~/components/home/Category'

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
