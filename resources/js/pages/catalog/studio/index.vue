<template>
  <div id="content" class="page-content up-content">
    <div class="Studio" style="height: 846px;">
      <div class="content">
        <div class="product">
          <v-stage ref="stage" :config="configKonva" @mousedown="handleStageMouseDown"
                   @touchstart="handleStageMouseDown">
            <v-layer ref="layer">
              <v-image
                :config="productImage"
              ></v-image>
            </v-layer>
            <v-layer ref="layer">
              <v-text ref="textItem"
                      v-for="(text, index, key) in textItems"
                      v-bind:key="key"
                      @dragmove="dragText"
                      :config="text"
              ></v-text>
              <v-transformer ref="transformer"/>
              <v-image
                v-for="(image, index, key) in imageItems"
                v-bind:key="key"
                @dragmove="dragText"
                :config="image"
              >
              </v-image>
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
          >
          </imageTool>
          <editTextTool
            v-if="typeSelecting === 'text'"
            v-bind:layerDraw="layerDraw"
            v-bind:textChoosed="objectSelecting"
            v-bind:getLayer="getLayer"
            v-bind:updateTransformer="updateTransformer"
            v-bind:setObjectSelecting="setObjectSelecting"
          ></editTextTool>
          <descriptionTool></descriptionTool>
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
  import {mapGetters}    from 'vuex'
  import '../../../../sass/studio.css'

  export default {
    components: {
      editTextTool,
      imageTool,
      descriptionTool,
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
        imagesData       : [],
        selectedShapeName: '',
        objectSelecting  : null,
      };
    },
    created() {
      this.$store.dispatch('studio/addProductImage')
    },
    methods   : {
      getLayer            : function () {
        return this.$refs.layer.getStage();
      },
      setObjectSelecting  : function (textObj) {
        console.log(textObj);
        this.objectSelecting = textObj;
      },
      layerDraw           : function () {
        this.$refs.layer.getStage().draw();
      },
      dragText            : function (e) {
        console.log(e.currentTarget.constructor.name);
      },
      resetObjectSelecting: function () {
        this.objectSelecting = null;
      },
      handleStageMouseDown(e) {
        // clicked on stage - clear selection
        if (e.target === e.target.getStage()) {
          this.selectedShapeName = '';
          this.updateTransformer();
          return;
        }
        // clicked on transformer - do nothing
        const clickedOnTransformer =
                e.target.getParent().className === 'Transformer';
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
        transformerNode.rotateAnchorOffset(25);
        transformerNode.rotationSnaps([0, 90, 180, 270]);

        const stage               = transformerNode.getStage();
        const {selectedShapeName} = this;
        if (!itemName && selectedShapeName !== 'product') {
          const selectedNode = stage.findOne('.' + selectedShapeName);

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
        } else {
          const selectedNode = stage.findOne('.' + itemName);
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
  };
</script>
