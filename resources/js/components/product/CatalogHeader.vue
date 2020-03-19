<template>
  <div class="catalog-header">
    <div class="catalog-header-wrapper wrapper">
      <div class="catalog-categories">
        <a class="current-category"><span>Men's / Unisex</span><span>Sweats &amp; Hoodies</span></a>
        <div class="category-container category-group hide">

          <ul class="main-category-opts active hide">
            <li><a href="#" data-val="mens" class="selected">Men's / Unisex</a></li>
            <li><a href="#" data-val="more">More Stuff</a></li>
          </ul>
        </div>
        <div class="subcategory-container category-group hide">
          <div class="scroll-wrapper">
            <ul class="secondary-categories mens active">
              <li class="header">Men's / Unisex</li>
              <li><a href="#" data-title="T-Shirts">T-Shirts</a></li>
              <li><a href="#" data-title="Longsleeve T-Shirts">Longsleeve</a></li>
            </ul>
            <ul class="secondary-categories womens">
              <li class="header">Women's</li>
              <li><a href="#" data-title="T-Shirts">T-Shirts</a></li>
              <li><a href="#" data-title="Longsleeve T-Shirts">Longsleeve</a></li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#" class="filter-toggle"><span>Filters</span></a>
      <div class="sort-container">
        <a href="#" id="sortBy" class="sort-by" data-val="rank"><span>Popular</span></a>
        <ul id="sortOptions" class="sort-opts">
          <li><a href="#">Phổ biến</a></li>
          <li><a href="#">Giá: Thấp đến cao</a></li>
          <li><a href="#">Giá: Cao đến thấp</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

  }
</script>
