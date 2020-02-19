<template>
  <card :title="$t('home')">
    This is home page
  </card>
</template>

<script>
export default {

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
