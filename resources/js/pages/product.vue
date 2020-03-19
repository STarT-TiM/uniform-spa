<template>
  <div class="main wrapper">
    <div id="content" class="page-content up-content">

      <div id="catalog" class="catalog catalog-products ">
        <CatalogHeader />
        <div class="catalog-content">
          <LeftPanel />
          <div class="products-container">
            <h1>Men's / Unisex Sweats and Hoodies</h1>
            <div class="selected-filters-container" id="selectedFilters"></div>

            <ItemContainer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemContainer from '~/components/product/ItemContainer'
  import LeftPanel from '~/components/product/LeftPanel'
  import CatalogHeader from '~/components/product/CatalogHeader'

  export default {
    layout: 'default',

    metaInfo () {
      return { title: this.$t('product') }
    },

    components: {
      ItemContainer,
      LeftPanel,
      CatalogHeader,
    },

    data: () => ({
      title: window.config.appName
    })
  }
</script>
