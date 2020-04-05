<template>
  <div class="panes">
    <div class="Pane AddTextPane show" v-if="!textChoosed">
      <a href="#" class="close-icon"></a>
      <h2>Enter Your Text Below</h2>
      <textarea class="text" rows="4" placeholder="-- enter your text here --" v-model="newText"></textarea>
      <button class="addText btn" v-on:click="addNewText">Add To Design</button>
    </div>
    <div class="Pane EditTextPane" v-if="textChoosed">
      <div class="container">
        <div class="section text">
          <textarea class="editor" rows="3" v-model="editText"></textarea>
        </div>
        <div class="section-row">
          <div class="section font inline">
            <label class="edit-icon font block">Font</label>
            <a class="fontAnchor" href="#"><img class="fontPreview"
                                                src="/studio/data/fonts/previews/png/finadmedcon.png"><span
              class="arrow"></span></a>
          </div>
          {{showColorTable}}
          <div class="section color inline">
            <label class="edit-icon color block">Color</label>
            <a class="colorAnchor colorBox" href="#" style="background-color: #000000;"
              v-on:click="() => {$store.dispatch('studio/editColorTableType', 'color')}"
            >
            </a>
          </div>
          <div class="section stroke-color inline">
            <label class="edit-icon stroke-color block">Stroke</label>
            <a class="strokeColorAnchor colorBox none" href="#" title="none"
              v-on:click="() => {$store.dispatch('studio/editColorTableType', 'stroke')}"
            >
            </a>
          </div>
          <div class="section shadow-color inline">
            <label class="edit-icon shadow-color block">Shadow</label>
            <a class="shadowColorAnchor colorBox none" href="#" title="none"
              v-on:click="() => {$store.dispatch('studio/editColorTableType', 'shadow')}"
            >
            </a>
          </div>
        </div>
        <div class="section more">
          <div class="sub-section text-size slider-row">
            <label class="edit-icon text-size">Size</label>
            <div>
              <input class="sizeInput" type="range" min="0.3" max="8.24" step="any" pattern="[0-9]*" v-model="editSize">
              <input type="number" class="sizeBox" min="0.3" max="8.24" step="any" pattern="[0-9]*" v-model="editSize">
            </div>
          </div>
          <div class="sub-section spacing slider-row">
            <label class="edit-icon spacing">Spacing</label>
            <div>
              <input class="trackingInput" type="range" min="1" max="50" step="1" pattern="[0-9]*"
                     v-model="editLetterSpacing">
              <input type="number" class="trackingBox" min="1" max="100" step="1" pattern="[0-9]*"
                     v-model="editLetterSpacing">
            </div>
          </div>
          <div class="sub-section rotate slider-row">
            <label class="edit-icon rotation">Rotate</label>
            <div>
              <input class="rotInput" type="range" min="-360" max="360" step="1" pattern="[0-9]*" v-model="editRotate">
              <input type="number" class="rotBox" min="-360" max="360" step="1" pattern="[0-9]*" v-model="editRotate">
            </div>
          </div>
          <div class="sub-section leading slider-row">
            <label class="edit-icon leading">Ln Height</label>
            <div><input class="leadingInput" type="range" min="0.5" max="3" step="any" pattern="[0-9]*"><input
              type="number" class="leadingBox" min="0.5" max="3" step="any" pattern="[0-9]*"></div>
          </div>
          <div class="horizontalScale slider-row">
            <label class="edit-icon horizontalScale">Stretch</label>
            <div><input class="horizontalScaleInput" type="range" min="30" max="300" step="any" pattern="[0-9]*"><input
              type="number" class="horizontalScaleBox" min="30" max="300" step="any" pattern="[0-9]*"></div>
          </div>
        </div>
        <div class="section arc slider-row">
          <label class="edit-icon arc">Arc</label>
          <div><input class="arcInput" type="range" min="-360" max="360" step="any" pattern="[0-9]*"><input
            type="number" class="arcBox" min="-360" max="360" step="any" pattern="[0-9]*"></div>
        </div>
        <div class="section position">
          <div class="layer">
            <label class="section-name">Layer Order</label>
            <label class="edit-icon layer block">Layer Order</label>
            <button class="bringForward" v-on:click="moveUp"><span>bring forward</span></button>
            <button class="sendBackward" v-on:click="moveDown"><span>send backward</span></button>
          </div>
          <div class="alignment">
            <label class="edit-icon align block">Position</label>
            <button class="alignCenter" @click="setPositionCenter"><span>position center</span></button>
            <label class="snap-label"><input class="snap" type="checkbox"> Snap to other objects when dragging</label>
          </div>
          <div class="alignment">
            <label class="edit-icon align block">Action</label>
            <button class="alignCenter" v-on:click="deleteText"><span>Delete</span></button>
          </div>
        </div>
      </div>
      <textColor
        v-if="showColorTable === 'color'"
        v-bind:textChoosed="textChoosed"
        v-bind:layerDraw="layerDraw"
        v-bind:colorType="'textColor'"
      >
      </textColor>
      <textColor
        v-if="showColorTable === 'stroke'"
        v-bind:textChoosed="textChoosed"
        v-bind:layerDraw="layerDraw"
        v-bind:colorType="'strokeColor'"
      >
        <div class="slider-container">
          <label class="edit-icon stroke-weight">Weight</label>
          <input class="strokeWeightInput" type="range" min="0" max="2" step="0.1" pattern="[0-9]*" v-model="editStrokeWeight">
          <input type="number" class="strokeWeightBox" min="0" max="2" step="0.1" pattern="[0-9]*" v-model="editStrokeWeight">
        </div>
      </textColor>
      <textColor
        v-if="showColorTable === 'shadow'"
        v-bind:textChoosed="textChoosed"
        v-bind:layerDraw="layerDraw"
        v-bind:colorType="'shadowColor'"
      >
        <div class="slider-container">
          <label class="edit-icon stroke-weight">offset X</label>
          <input class="strokeWeightInput" type="range" min="-2" max="2" step="0.1" pattern="[0-9]*" v-model="editShadowOffsetX">
          <input type="number" class="strokeWeightBox" min="-2" max="2" step="0.1" pattern="[0-9]*" v-model="editShadowOffsetX">
        </div>
        <div class="slider-container">
          <label class="edit-icon stroke-weight">offsetY</label>
          <input class="strokeWeightInput" type="range" min="-2" max="2" step="0.1" pattern="[0-9]*" v-model="editShadowOffsetY">
          <input type="number" class="strokeWeightBox" min="-2" max="2" step="0.1" pattern="[0-9]*" v-model="editShadowOffsetY">
        </div>
      </textColor>
    </div>
  </div>
</template>

<script>
  import RangeSlider  from 'vue-range-slider'
  import 'vue-range-slider/dist/vue-range-slider.css'
  import {mapGetters} from 'vuex'
  import textColor    from "./textColor";

  export default {
    components: {
      RangeSlider,
      textColor
    },
    props     : ['textChoosed', 'layerDraw', 'findItem', 'getLayer', 'updateTransformer', 'setObjectSelecting', 'getGroup'],

    data() {
      return {
        newText     : '',
      }
    },
    methods : {
      addNewText       : async function () {
        let text = this.newText;
        let id   = this.textId;
        await this.$store.dispatch('studio/addTextItem', text);
        await this.setObjectSelecting(this.getLayer().findOne('.text-' + id));
        await this.updateTransformer('text-' + id);
        this.setPositionCenter();
        this.newText = '';
      },
      setPositionCenter: async function () {
        let textWidth = this.textChoosed.width();
        this.$store.dispatch('studio/updateText', {
          group  : this.textChoosed.attrs.group,
          name   : this.textChoosed.attrs.name,
          offsetX: textWidth / 2,
          x      : 400
        });
      },
      moveUp: async function () {
        let that = this
        let name = this.textChoosed.attrs.name
        let group = this.textChoosed.attrs.group
        await this.$store.dispatch('studio/moveUpText', {
          name: this.textChoosed.attrs.name,
          group: this.textChoosed.attrs.group
        });
        await this.setObjectSelecting(this.getGroup('group' + (group + 1)).findOne('.'+name))
        await that.updateTransformer(name);
        await that.layerDraw();
      },
      moveDown: async function () {
        let that = this
        let name = this.textChoosed.attrs.name
        let group = this.textChoosed.attrs.group
        await this.$store.dispatch('studio/moveDownText', {
          name: this.textChoosed.attrs.name,
          group: this.textChoosed.attrs.group
        });
        await this.setObjectSelecting(this.getGroup('group' + (group -1)).findOne('.'+name))
        await that.updateTransformer(name);
        await that.layerDraw();
      },
      deleteText: function () {
        this.$store.dispatch('studio/deleteText', {
          name: this.textChoosed.attrs.name,
          group: this.textChoosed.attrs.group
        });
        this.setObjectSelecting(null);
      }
    },
    computed: {
      editSize         : {
        get() {
          let textObject = this.textItems['group' + this.textChoosed.attrs.group].find(event => event.name === this.textChoosed.attrs.name)
          return textObject.scaleX
        },
        set(newVal) {
          this.$store.dispatch('studio/updateText', {
            group: this.textChoosed.attrs.group,
            name: this.textChoosed.attrs.name,
            scaleX: parseFloat(newVal),
            scaleY: parseFloat(newVal)
          });
        }
      },
      editText         : {
        get() {
          console.log(this.textChoosed.attrs.name)
          console.log(this.textItems['group' + this.textChoosed.attrs.group])
          let textObject = this.textItems['group' + this.textChoosed.attrs.group].find(event => event.name === this.textChoosed.attrs.name)
          return textObject.text
        },
        set(newVal) {
          this.$store.dispatch('studio/updateText', {
            group: this.textChoosed.attrs.group,
            name: this.textChoosed.attrs.name,
            text: parseFloat(newVal),
          });
        }
      },
      editRotate       : {
        get() {
          let textObject = this.textItems['group' + this.textChoosed.attrs.group].find(event => event.name === this.textChoosed.attrs.name)
          return textObject.rotation
        },
        set(newVal) {
          this.$store.dispatch('studio/updateText', {
            group: this.textChoosed.attrs.group,
            name: this.textChoosed.attrs.name,
            offsetX: this.textChoosed.width() / 2,
            offsetY: this.textChoosed.height() / 2,
            rotation: parseInt(newVal)
          });
        }
      },
      editStrokeWeight: {
        get() {
          let textObject = this.textItems['group' + this.textChoosed.attrs.group].find(event => event.name === this.textChoosed.attrs.name)
          return textObject.strokeWidth
        },
        set(newVal) {
          this.$store.dispatch('studio/updateText', {
            group: this.textChoosed.attrs.group,
            name: this.textChoosed.attrs.name,
            strokeWidth: parseInt(newVal)
          });
        }
      },
      editShadowOffsetX : {
        get() {
          let textObject = this.textItems['group' + this.textChoosed.attrs.group].find(event => event.name === this.textChoosed.attrs.name)
          return textObject.shadowOffsetX
        },
        set(newVal) {
          this.$store.dispatch('studio/updateText', {
            group: this.textChoosed.attrs.group,
            name: this.textChoosed.attrs.name,
            shadowOffsetX: parseInt(newVal)
          });
        }
      },
      editShadowOffsetY : {
        get() {
          let textObject = this.textItems['group' + this.textChoosed.attrs.group].find(event => event.name === this.textChoosed.attrs.name)
          return textObject.shadowOffsetY
        },
        set(newVal) {
          this.$store.dispatch('studio/updateText', {
            group: this.textChoosed.attrs.group,
            name: this.textChoosed.attrs.name,
            shadowOffsetY: parseInt(newVal)
          });
        }
      },
      editLetterSpacing: {
        get() {
          let textObject = this.textItems['group' + this.textChoosed.attrs.group].find(event => event.name === this.textChoosed.attrs.name)
          return textObject.letterSpacing
        },
        set(newVal) {
          this.$store.dispatch('studio/updateText', {
            group: this.textChoosed.attrs.group,
            name: this.textChoosed.attrs.name,
            letterSpacing: parseInt(newVal)
          });
        }
      },
      ...mapGetters({
        textId: 'studio/textId',
        textItems: 'studio/textItems',
        showColorTable: 'studio/showColorTable',
      })
    }
  };
</script>
