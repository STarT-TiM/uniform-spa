<template>
  <div id="content" class="page-content up-content">
    <div class="Studio" style="height: 846px;">
      <div class="content">
        <div class="product">
          <v-stage ref="stage" :config="configKonva" @mousedown="handleStageMouseDown"
                   @touchstart="handleStageMouseDown">
            <v-layer ref="layer1">
              <v-image
                :config="productImage"
              ></v-image>
            </v-layer>
            <v-layer ref="layer">
              <v-group ref="group1" :config="configGroup">
                <v-text ref="textItem" v-for="(text, index, key) in textItems.group1" :key="key" :config="text" @transformend="updateTextData" @dragend="updateTextData"></v-text>
                <v-image v-for="(image, index, key) in imageItems.group1" :key="key" :config="image" @transformend="updateImageData" @dragend="updateImageData"></v-image>
              </v-group>
              <v-group ref="group2" :config="configGroup">
                <v-text ref="textItem" v-for="(text, index, key) in textItems.group2" :key="key" :config="text" @transformend="updateTextData" @dragend="updateTextData"></v-text>
                <v-image v-for="(image, index, key) in imageItems.group2" :key="key" :config="image" @transformend="updateImageData" @dragend="updateImageData"></v-image>
              </v-group>
              <v-group ref="group3" :config="configGroup">
                <v-text ref="textItem" v-for="(text, index, key) in textItems.group3" :key="key" :config="text" @transformend="updateTextData" @dragend="updateTextData"></v-text>
                <v-image v-for="(image, index, key) in imageItems.group3" :key="key" :config="image" @transformend="updateImageData" @dragend="updateImageData"></v-image>
              </v-group>
              <v-group ref="group4" :config="configGroup">
                <v-text ref="textItem" v-for="(text, index, key) in textItems.group4" :key="key" :config="text" @transformend="updateTextData" @dragend="updateTextData"></v-text>
                <v-image v-for="(image, index, key) in imageItems.group4" :key="key" :config="image" @transformend="updateImageData" @dragend="updateImageData"></v-image>
              </v-group>
              <v-group ref="group5" :config="configGroup">
                <v-text ref="textItem" v-for="(text, index, key) in textItems.group5" :key="key" :config="text" @transformend="updateTextData" @dragend="updateTextData"></v-text>
                <v-image v-for="(image, index, key) in imageItems.group5" :key="key" :config="image" @transformend="updateImageData" @dragend="updateImageData"></v-image>
              </v-group>
              <v-transformer ref="transformer"/>
            </v-layer>
          </v-stage>
        </div>
        <div class="tools">
          <menuTool
            v-bind:updateTransformer="updateTransformer"
            v-bind:resetObjectSelecting="resetObjectSelecting"
          ></menuTool>
          <imageTool
            v-if="typeSelecting === 'image'"
            v-bind:layerDraw="layerDraw"
            v-bind:imageChoosed="objectSelecting"
            v-bind:getLayer="getLayer"
            v-bind:updateTransformer="updateTransformer"
            v-bind:setObjectSelecting="setObjectSelecting"
            v-bind:updateImageData="updateImageData"
            v-bind:getGroup="getGroup"
          >
          </imageTool>
          <editTextTool
            v-if="typeSelecting === 'text'"
            v-bind:layerDraw="layerDraw"
            v-bind:textChoosed="objectSelecting"
            v-bind:getLayer="getLayer"
            v-bind:updateTransformer="updateTransformer"
            v-bind:setObjectSelecting="setObjectSelecting"
            v-bind:getGroup="getGroup"
          ></editTextTool>
          <saveAndLoadTool
            v-if="typeSelecting === 'saveAndLoad'"
          />
          <descriptionTool/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import editTextTool    from './components/editTextTool'
  import imageTool       from './components/imageTool'
  import menuTool        from './components/menuTool'
  import descriptionTool from './components/descriptionTool'
  import saveAndLoadTool from './components/saveAndLoadTool'
  import {mapGetters}    from 'vuex'
  import '../../../../sass/studio.css'

  export default {
    components: {
      editTextTool,
      imageTool,
      descriptionTool,
      saveAndLoadTool,
      menuTool
    },
    computed  : {
      ...mapGetters({
        productImage : 'studio/productImage',
        configKonva  : 'studio/configKonva',
        textItems    : 'studio/textItems',
        imageItems   : 'studio/imageItems',
        typeSelecting: 'studio/typeSelecting'
      })
    },
    data() {
      return {
        configGroup: {
          x: 0,
          y: 0,
        },
        imagesData       : [],
        selectedShapeName: '',
        objectSelecting  : null,
      };
    },
    created() {
      // this.$store.dispatch('studio/addProductImage')
    },
    methods   : {
      getLayer            : function () {
        return this.$refs.layer.getStage();
      },
      getGroup            : function (group) {
        return this.$refs[group].getStage();
      },
      setObjectSelecting  : function (obj) {
        this.objectSelecting = obj;
        if(obj === null) {
          this.selectedShapeName = '';
          this.updateTransformer();
        }
      },
      layerDraw           : function () {
        this.$refs.layer.getStage().draw();
      },
      resetObjectSelecting: function () {
        this.objectSelecting = null;
      },
      updateImageData(e) {
        let image = {};
        // update the state
        image.x = e.target.x();
        image.y = e.target.y();
        image.rotation = e.target.rotation();
        image.scaleX = e.target.scaleX();
        image.scaleY = e.target.scaleY();
        image.offsetX = e.target.width()/2;
        image.offsetY = e.target.height()/2;
        image.name = e.target.attrs.name;
        image.group = e.target.attrs.group;
        this.$store.dispatch('studio/updateImage', image)
      },
      updateTextData(e) {
        let text = {};
        // update the state
        text.x = e.target.x();
        text.y = e.target.y();
        text.rotation = e.target.rotation();
        text.scaleX = e.target.scaleX();
        text.scaleY = e.target.scaleY();
        text.offsetX = e.target.width()/2;
        text.offsetY = e.target.height()/2;
        text.name = e.target.attrs.name;
        text.group = e.target.attrs.group;
        this.$store.dispatch('studio/updateText', text)
      },
      handleStageMouseDown(e) {
        // clicked on stage - clear selection
        if (e.target === e.target.getStage()) {
          this.selectedShapeName = '';
          this.updateTransformer();
          return;
        }
        // clicked on transformer - do nothing
        const clickedOnTransformer = e.target.getParent().className === 'Transformer';
        if (clickedOnTransformer) {
          return;
        }
        // find clicked rect by its name
        this.selectedShapeName = e.target.name();

        if (e.target.constructor.name === 'Text') {
          this.$store.dispatch('studio/editTypeSelecting', 'text')
          this.objectSelecting = e.target;
        } else if (e.target.constructor.name === 'Image' && e.target.name() !== 'product') {
          this.$store.dispatch('studio/editTypeSelecting', 'image');
          this.objectSelecting = e.target;
        } else {
          this.$store.dispatch('studio/editTypeSelecting', null)
        }

        this.updateTransformer();
      },
      updateTransformer(itemName = null) {
        // here we need to manually attach or detach Transformer node
        const transformerNode = this.$refs.transformer.getNode();
        transformerNode.enabledAnchors(['top-left', 'top-right', 'bottom-left', 'bottom-right']);
        transformerNode.rotateAnchorOffset(35);
        // transformerNode.rotationSnaps([0, 90, 180, 270]);

        const stage               = transformerNode.getStage();
        const {selectedShapeName} = this;
        let selectedNode = null;
        if (!itemName && selectedShapeName !== 'product') {
          selectedNode = stage.findOne('.' + selectedShapeName);
        } else {
          selectedNode = stage.findOne('.' + itemName);
        }

        // do nothing if selected node is already attached
        if (selectedNode === transformerNode.node()) {
          return;
        }
        if (selectedNode) {
          // attach to another node
          transformerNode.attachTo(selectedNode);
        } else {
          // remove transformer
          transformerNode.detach();
        }
        transformerNode.getLayer().batchDraw();
      }
    }
  }
</script>
