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
    <li class="buy">
      <a href="#" class="buyLink" v-on:click="saveDesign">
        Quote/Buy
      </a>
    </li>
  </ul></div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  export default {
    props: ['updateTransformer', 'resetObjectSelecting'],
    computed: {
      ...mapGetters({
        typeSelecting: 'studio/typeSelecting',
        imageItems: 'studio/imageItems',
        textItems: 'studio/imageItems',
        productImage: 'studio/productImage',
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
      },
      saveDesign: function () {
        // let images = []
        // for(let i in this.imageItems) {
        //   images[i] = this.imageItems[i]
        //   images[i].forEach((e) => delete e.image)
        // }

        axios.post( '/api/design',
          {
            images: this.imageItems,
            texts: this.textItems,
            product: 1
          }
        ).then(function(response){
          console.log(response);
        })
          .catch(function(){
            console.log('FAILURE!!');
          });
      }
    }
  };
</script>


<style>
  .MenuBar>li {
    list-style-type: none;
  }
</style>
