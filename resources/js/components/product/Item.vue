<template>
  <div class="product">
    <div class="product-img"><a href="#">
      <img
      :src="data.image"
      :alt="data.name"></a>
    </div>
    <div class="info">
      <div class="name">
        {{ data.name }}
      </div>
      <div class="brand">Size: {{ data.sizes }}</div>
      <div class="colors-qty">
        <span class="colors-desc">Màu: {{ data.colors }}</span></div>
      <div class="price"><span>{{ data.price }}.000 đ</span> / 1 chiếc</div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
  }
</script>
