<template>
  <div id="content" class="page-content up-content">
    <div class="Studio" style="height: 846px;">
      <div class="content">
        <div class="product">
          <v-stage ref="stage" :config="configKonva" @mousedown="handleStageMouseDown"
                   @touchstart="handleStageMouseDown">
            <v-layer ref="layer">
              <v-circle
                @dragmove="dragCircle"
                :config="configCircle"></v-circle
              >
              <v-text ref="textItem"
                v-for="(text,key) in textsData"
                v-bind:key="key"
                @dragmove="dragText"
                :config="text"
              ></v-text>
              <v-transformer ref="transformer"/>
            </v-layer>
          </v-stage>
        </div>
        <div class="tools">
          <toolMenu></toolMenu>
            <toolEditText
              v-bind:layer-draw="layerDraw"
              v-bind:textsData="textsData"
              v-bind:textChoosed="textChoosed"
              v-bind:getLayer="getLayer"
              v-bind:updateTransformer="updateTransformer"
              v-bind:setTextChoose="setTextChoose"
            ></toolEditText>
          <toolDescription></toolDescription>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toolEditText from './components/toolEditText'
import toolMenu from './components/toolMenu'
import toolDescription from './components/toolDescription'
import '../../../../sass/studio.css'

export default {
  components: {
    toolEditText,
    toolMenu,
    toolDescription
  },
  data() {
    return {
      configKonva: {
        width: 800,
        height: 800
      },
      textsData: [
        {
          text: 'Some text here',
          x: 50,
          y: 80,
          scaleX: 1,
          scaleY: 1,
          fontSize: 20,
          draggable: true,
          mytype: 'text',
          name: '123',
          letterSpacing: 1,
          rotation: 0,
        }
      ],
      textChoosed: null,
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        draggable: true,
        strokeWidth: 4,

      },
      selectedShapeName: ''
    };
  },
  methods: {
    getLayer: function() {
      return this.$refs.layer.getStage();
    },
    setTextChoose: function(textObj) {
      this.textChoosed = textObj;
    },
    dragCircle: function (e) {
      console.log(e.currentTarget.constructor.name);
    },
    layerDraw: function () {
      this.$refs.layer.getStage().draw();
    },
    dragText: function (e) {
      console.log(e.currentTarget.constructor.name);
    },
    saveDesign: function () {
      console.log(this.textsData);
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
      const name = e.target.name();
      const rect = this.textsData.find(r => r.name === name);
      if (rect) {
        this.selectedShapeName = name;
      } else {
        this.selectedShapeName = '';
      }
      this.textChoosed = e.target;
      this.updateTransformer();
    },
    updateTransformer(itemName = null) {
      // here we need to manually attach or detach Transformer node
      const transformerNode = this.$refs.transformer.getNode();
      transformerNode.enabledAnchors(['top-left', 'top-right', 'bottom-left', 'bottom-right']);
      transformerNode.rotateAnchorOffset(25);
      transformerNode.rotationSnaps([0, 90, 180, 270]);

      const stage = transformerNode.getStage();
      const {selectedShapeName} = this;
      if(!itemName) {
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
        console.log(stage);

        console.log('.' + itemName, selectedNode);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .studio-box {

  }

  .studio__control-box {
    display: inline-block;
  }

  .studio__design-box {
    display: inline-block;
  }
</style>
