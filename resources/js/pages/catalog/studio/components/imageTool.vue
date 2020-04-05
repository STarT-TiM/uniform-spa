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
        <input type="file" v-on:change="uploadImage">

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
                     @click="addNewImage('https://www.uberprints.com/studio/data/clipart/jpg_preview/1_restaurant_burger1_bl.eps.jpg')"
                     style="background-image: url('https://www.uberprints.com/studio/data/clipart/jpg_preview/1_restaurant_burger1_bl.eps.jpg');"></a>
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
    <div class="Pane EditImagePane" v-if="imageChoosed">
      <div class="EditPaneGlass"></div>
      <div class="container">
        <div class="section size">
          <div class="size-container">
            <div class="slider-row">
              <label class="edit-icon">Width</label>
              <div>
                <input class="widthInput" type="range" min="0.1" max="4" step="0.01" pattern="[0-9]*" v-model="editWidth">
                <input type="number" class="widthBox"  min="0.1" max="4" step="0.01" pattern="[0-9]*" v-model="editWidth">
              </div>
            </div>
            <div class="slider-row">
              <label class="edit-icon">Height</label>
              <div>
                <input class="heightInput" type="range" min="0.1" max="4" step="0.01" pattern="[0-9]*" v-model="editHeight">
                <input type="number" class="heightBox" min="0.1" max="4" step="0.01" pattern="[0-9]*" v-model="editHeight">
              </div>
            </div>
          </div>
          <div class="lock-ratio"><label><input class="constrain" type="checkbox"><span></span></label></div>
        </div>
        <div class="section rotate slider-row">
          <label class="edit-icon rotation">Rotate</label>
          <div>
            <input class="rotInput" type="range" min="-360" max="360" step="any" pattern="[0-9]*" v-model="editRotate">
            <input type="number" class="rotBox" min="-360" max="360" step="any" pattern="[0-9]*" v-model="editRotate">
          </div>
        </div>
        <div class="section position">
          <div class="layer">
            <label class="edit-icon layer block">Layer Order</label>
            <button class="bringForward" v-on:click="moveUp">
              <span>bring forward</span>
            </button>
            <button class="sendBackward" v-on:click="moveDown">
              <span>send backward</span>
            </button>
          </div>
          <div class="alignment">
            <label class="edit-icon align block">Position</label>
            <button class="alignCenter" v-on:click="setPositionCenter"><span>position center</span></button>
          </div>
          <div class="alignment">
            <label class="edit-icon align block">Action</label>
            <button class="alignCenter" v-on:click="deleteImage"><span>Delete</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RangeSlider  from 'vue-range-slider'
  import 'vue-range-slider/dist/vue-range-slider.css'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      RangeSlider
    },
    props     : ['imageChoosed', 'layerDraw',  'getLayer', 'updateTransformer', 'setObjectSelecting', 'getGroup', 'updateImageInfo'],
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters({
        imageItems: 'studio/imageItems',
        imageId: 'studio/imageId'
      }),
      editWidth : {
        get() {
          let imageObject = this.imageItems['group' + this.imageChoosed.attrs.group].find(event => event.name === this.imageChoosed.attrs.name)
          return imageObject.scaleX;
        },
        set(newVal) {
          this.$store.dispatch('studio/updateImage', {
            group: this.imageChoosed.attrs.group,
            name: this.imageChoosed.attrs.name,
            scaleX: parseFloat(newVal)
          });
        }
      },
      editHeight : {
        get() {
          let imageObject = this.imageItems['group' + this.imageChoosed.attrs.group].find(event => event.name === this.imageChoosed.attrs.name)
          return imageObject.scaleY;
        },
        set(newVal) {
          this.$store.dispatch('studio/updateImage', {
            group: this.imageChoosed.attrs.group,
            name: this.imageChoosed.attrs.name,
            scaleY: parseFloat(newVal)
          });
        }
      },
      editRotate       : {
        get() {
          let imageObject = this.imageItems['group' + this.imageChoosed.attrs.group].find(event => event.name === this.imageChoosed.attrs.name)
          return imageObject.rotation;
        },
        set(newVal) {
          this.$store.dispatch('studio/updateImage', {
            group: this.imageChoosed.attrs.group,
            name: this.imageChoosed.attrs.name,
            offsetX: this.imageChoosed.width() / 2,
            offsetY: this.imageChoosed.height() / 2,
            rotation: parseInt(newVal)
          });
        }
      },
    },
    methods : {
      addNewImage: async function(imageSrc)  {
        let that = this;
        let id = that.imageId
        await this.$store.dispatch('studio/addImageItem', imageSrc);
        var checkAddImageComplete = setInterval(async function () {
          if(that.getLayer().findOne('.image-' + id)) {
            await that.setObjectSelecting(that.getLayer().findOne('.image-'+ id));
            that.updateTransformer('image-' + id);
            that.setPositionCenter();
            clearInterval(checkAddImageComplete);
          }
        }, 100);
      },
      setPositionCenter: function() {
        let textWidth = this.imageChoosed.width();
        let textHeight = this.imageChoosed.height();
        this.$store.dispatch('studio/updateImage', {
          group: this.imageChoosed.attrs.group,
          name: this.imageChoosed.attrs.name,
          offsetX:  textWidth / 2,
          offsetY:  textHeight / 2,
          x: 400
        });
      },
      uploadImage: function (e) {
        const file = e.target.files[0];
        const a = URL.createObjectURL(file);
        this.addNewImage(a)
      },
      moveUp: async function () {
        let that = this
        let name = this.imageChoosed.attrs.name
        let group = this.imageChoosed.attrs.group
        await this.$store.dispatch('studio/moveUpImage', {
          name: this.imageChoosed.attrs.name,
          group: this.imageChoosed.attrs.group
        });
        await this.setObjectSelecting(this.getGroup('group' + (group + 1)).findOne('.'+name))
        await that.updateTransformer(name);
        await that.layerDraw();
      },
      moveDown: async function () {
        let that = this
        let name = this.imageChoosed.attrs.name
        let group = this.imageChoosed.attrs.group
        await this.$store.dispatch('studio/moveDownImage', {
          name: this.imageChoosed.attrs.name,
          group: this.imageChoosed.attrs.group
        });
        await this.setObjectSelecting(this.getGroup('group' + (group -1)).findOne('.'+name))
        await that.updateTransformer(name);
        await that.layerDraw();
      },
      deleteImage: function () {
        this.$store.dispatch('studio/deleteImage', {
          name: this.imageChoosed.attrs.name,
          group: this.imageChoosed.attrs.group
        });
        this.setObjectSelecting(null);
      }
    }
  };
</script>
