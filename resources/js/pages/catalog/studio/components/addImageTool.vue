<template>
  <div class="panes">
    <div class="Pane AddImagePane show showMain" v-if="!imageChoosed">
      <a href="#" class="close-icon"></a>
      <div class="intro">
        <h1>Add an image to your design</h1>
        <p>Browse our clip art catalog or upload your own image.</p>
        <ul class="add-image-nav">
          <li>
            <a class="clipart" href="#">
              <div><h2>Clip Art</h2><span>Browse thousands of images</span></div>
            </a>
          </li>
          <li>
            <a class="upload" href="#">
              <div><h2>Upload Images</h2><span>Upload your own picture or logo</span></div>
            </a>
          </li>
          <li>
            <a class="myimages" href="#">
              <div><h2>My Images</h2><span>Choose from your saved images</span></div>
            </a>
          </li>
        </ul>
      </div>
      <div class="main">
        <div class="buttons">
          <a class="clipArtCatalog button selected" href="#">Clip Art Catalog</a>
          <a class="uploadImage button" href="#">Upload Image</a>
          <a class="myImages button" href="#">My Images</a>
        </div>
        <div class="container">
          <div class="ClipArtCatalog">
            <div class="container">
              <div class="ClipartList">
                <div class="header">
                  <ul class="breadcrumbs">
                    <li><a href="#" class="">Clip Art</a></li>
                    <li><a href="#" class="">Design Elements</a></li>
                    <li>banner</li>
                  </ul>
                </div>
                <div class="scroller">
                  <a href="#" class="item"
                     @click="addNewImage('https://www.uberprints.com/studio/data/clipart/jpg_preview/1_mechanic_wings2_bl.eps.jpg')"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/1_mechanic_wings2_bl.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/1_restaurant_burger1_bl.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/10_frat_mountain2_bl.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/32_Banner_10_MM.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/32_Banner_13_MM.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/32_Banner_21_MM.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/32_Banner_9_MM.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/67_Skateboarding_Temp17_2_TL.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/67_Skateboarding_Temp17_4_TL.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/35_Banner_Simple_MM.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/67_Bachelorette_Temp6_7_TL.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/67_Baseball_T6_6_MM.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/72_Shape_6_MM.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/74_Shapes_33_MM.eps.jpg');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/TH_banner-shield_color.eps');"></a>
                  <a href="#" class="item"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/TH_oval-label_color.eps');"></a>
                </div>
              </div>
            </div>
            <div class="search-container">
              <form class="searchForm">
                <label class="searchLabel">
                  <input type="text" class="searchField" placeholder="Search by keyword">
                </label>
              </form>
              <button class="searchButton btn btn-mini">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RangeSlider  from 'vue-range-slider'
  // you probably need to import built-in style
  import 'vue-range-slider/dist/vue-range-slider.css'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      RangeSlider
    },
    props     : ['imageChoosed', 'layerDraw', 'findItem', 'getLayer', 'updateTransformer', 'setObjectSelecting'],

    data() {
      return {
        borderColor: '#1976D2FF',
        mask       : '!#XXXXXXXX',
        menu       : false,
        newText    : ''
      }
    },
    computed: {
      ...mapGetters({
        imageItems: 'studio/imageItems'
      })
    },
    methods : {
      addNewImage: async function(imageSrc)  {
        let id   = this.imageItems.length;
        let that = this;
        await this.$store.dispatch('studio/addImageItem', imageSrc);

        console.log(this.$refs.transformer.getNode());

        var checkAddImageComplete = setInterval(function () {
          if(that.getLayer().findOne('.image-'+id)) {
            that.setObjectSelecting(that.getLayer().findOne('.image-'+id));
            that.updateTransformer('image-'+id);
            that.setPositionCenter();
            clearInterval(checkAddImageComplete);
          }
        }, 100);

        // let a = await this.getLayer().findOne('.image-0')
        // this.setObjectSelecting(a);
        // await this.updateTransformer('image-' + id);
      },
      setPositionCenter: function() {
        // let textWidth = this.imageChoosed.width();
        // this.imageChoosed.setAttr('offsetX', textWidth / 2);
        // this.imageChoosed.setAttr('x', 400);
        //
        // this.layerDraw();
      }
    }
  };
</script>
