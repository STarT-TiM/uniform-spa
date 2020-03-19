<template>
  <div class="menu"><ul class="MenuBar">
    <li><a href="#" class="editProduct">Product</a></li>
    <li><a href="#" class="addImage"
           @click="resetImageChoosed">Add Images test</a></li>
    <li>
      <a
        href="#" class="addText"
        @click="resetTextChoosed"
      >Add Text</a>
    </li>
    <li><a href="#" class="saveDesign">Save/Load</a></li>
    <li class="buy"><a href="#" class="buyLink">Quote/Buy</a></li>
  </ul></div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['updateTransformer', 'resetObjectSelecting'],
    computed: {
      ...mapGetters({
        typeSelecting: 'studio/typeSelecting'
      })
    },
    methods: {
      resetImageChoosed: function() {
        this.resetObjectSelecting();
        this.updateTransformer('none');
        this.showEditImage();
      },

      showEditImage: function () {
        this.$store.dispatch('studio/editTypeSelecting', 'image');
      },

      resetTextChoosed: function () {
        this.resetObjectSelecting();
        this.updateTransformer('none')
        this.showEditText()
      },
      showEditText: function () {
        this.$store.dispatch('studio/editTypeSelecting', 'text');
      }
    }
  };
</script>


<style>
  .MenuBar>li {
    list-style-type: none;
  }
</style>
