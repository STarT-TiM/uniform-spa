<template>
<!--  <div>-->
<!--    <div>-->
<!--      <div class="section more">-->
<!--        <div class="sub-section text-size slider-row">-->
<!--          <label class="edit-icon text-size">Size</label>-->
<!--          <div>-->
<!--            <range-slider-->
<!--              class="slider"-->
<!--              min="0.1"-->
<!--              max="5"-->
<!--              step="0.1"-->
<!--              v-model="editSize">-->
<!--            </range-slider>-->
<!--            <input type="text" class="sizeBox" v-model="editSize">-->
<!--          </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;                <div class="sub-section spacing slider-row">&ndash;&gt;-->
<!--        &lt;!&ndash;                    <label class="edit-icon spacing">Spacing</label>&ndash;&gt;-->
<!--        &lt;!&ndash;                    <div>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <input class="trackingInput" type="range" min="-30" max="100" step="any" pattern="[0-9]*">&ndash;&gt;-->
<!--        &lt;!&ndash;                        <input type="number" class="trackingBox" min="-30" max="100" step="any" pattern="[0-9]*">&ndash;&gt;-->
<!--        &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                <div class="sub-section rotate slider-row">&ndash;&gt;-->
<!--        &lt;!&ndash;                    <label class="edit-icon rotation">Rotate</label>&ndash;&gt;-->
<!--        &lt;!&ndash;                    <div>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <input class="rotInput" type="range" min="-360" max="360" step="any" pattern="[0-9]*">&ndash;&gt;-->
<!--        &lt;!&ndash;                        <input type="number" class="rotBox" min="-360" max="360" step="any" pattern="[0-9]*">&ndash;&gt;-->
<!--        &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                <div class="sub-section leading slider-row">&ndash;&gt;-->
<!--        &lt;!&ndash;                    <label class="edit-icon leading">Ln Height</label>&ndash;&gt;-->
<!--        &lt;!&ndash;                    <div>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <input class="leadingInput" type="range" min="0.5" max="3" step="any" pattern="[0-9]*">&ndash;&gt;-->
<!--        &lt;!&ndash;                        <input type="number" class="leadingBox" min="0.5" max="3" step="any" pattern="[0-9]*">&ndash;&gt;-->
<!--        &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                <div class="horizontalScale slider-row">&ndash;&gt;-->
<!--        &lt;!&ndash;                    <label class="edit-icon horizontalScale">Stretch</label>&ndash;&gt;-->
<!--        &lt;!&ndash;                    <div>&ndash;&gt;-->
<!--        &lt;!&ndash;                        <input class="horizontalScaleInput" type="range" min="30" max="300" step="any" pattern="[0-9]*">&ndash;&gt;-->
<!--        &lt;!&ndash;                        <input type="number" class="horizontalScaleBox" min="30" max="300" step="any" pattern="[0-9]*">&ndash;&gt;-->
<!--        &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--        &lt;!&ndash;                </div>&ndash;&gt;-->
<!--      </div>-->


<!--      &lt;!&ndash;            <range-slider&ndash;&gt;-->
<!--      &lt;!&ndash;                    class="slider "&ndash;&gt;-->
<!--      &lt;!&ndash;                    min="0.1"&ndash;&gt;-->
<!--      &lt;!&ndash;                    max="5"&ndash;&gt;-->
<!--      &lt;!&ndash;                    step="0.1"&ndash;&gt;-->
<!--      &lt;!&ndash;                    v-model="abcd">&ndash;&gt;-->
<!--      &lt;!&ndash;            </range-slider>&ndash;&gt;-->
<!--      &lt;!&ndash;            <input type="text" v-model="abcd">&ndash;&gt;-->
<!--      &lt;!&ndash;            <input type="text" v-model="textconfig.attrs.fill">&ndash;&gt;-->
<!--      &lt;!&ndash;            <input type="text" @change="scaleObject">&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
  <div class="panes">
    <div class="Pane AddTextPane show" v-if="!textChoosed">
      <a href="#" class="close-icon"></a>
      <h2>Enter Your Text Below</h2>
      <textarea class="text" rows="4" placeholder="-- enter your text here --" v-model="newText"></textarea>
      <button class="addText btn" v-on:click="addNewText">Add To Design</button>
    </div>
    <div class="Pane EditTextPane" v-if="textChoosed">
      <div class="EditPaneGlass"></div>
      <div class="container">
        <div class="section text">

          <textarea class="editor" rows="3" v-model="editText"></textarea>
          <div class="justify-container">
            <label class="edit-icon justify block">Justify</label>
            <div class="justifyButtons">
              <label><input class="justifyLeft" name="justify" type="radio"><span></span></label>
              <label><input class="justifyCenter" name="justify" type="radio" checked="checked"><span></span></label>
              <label><input class="justifyRight" name="justify" type="radio"><span></span></label>
            </div>
          </div>
        </div>
        <div class="section-row">
          <div class="section font inline">
            <label class="edit-icon font block">Font</label>
            <a class="fontAnchor" href="#"><img class="fontPreview" src="/studio/data/fonts/previews/png/finadmedcon.png"><span class="arrow"></span></a>
          </div>
          <div class="section color inline">
            <label class="edit-icon color block">Color</label>
            <a class="colorAnchor colorBox" href="#" title="Black" style="background-color: rgb(0, 0, 0);"></a>
          </div>
          <div class="section stroke-color inline">
            <label class="edit-icon stroke-color block">Stroke</label>
            <a class="strokeColorAnchor colorBox none" href="#" title="none"></a>
          </div>
          <div class="section shadow-color inline">
            <label class="edit-icon shadow-color block">Shadow</label>
            <a class="shadowColorAnchor colorBox none" href="#" title="none"></a>
          </div>
        </div>
        <div class="section more">
          <div class="sub-section text-size slider-row">
            <label class="edit-icon text-size">Size</label><div>
            <input class="sizeInput" type="range" min="0.3" max="8.24" step="any" pattern="[0-9]*" v-model="editSize">
            <input type="number" class="sizeBox" min="0.3" max="8.24" step="any" pattern="[0-9]*" v-model="editSize">
          </div>
          </div>
          <div class="sub-section spacing slider-row">
            <label class="edit-icon spacing">Spacing</label>
            <div>
              <input class="trackingInput" type="range" min="1" max="50" step="1" pattern="[0-9]*" v-model="editLetterSpacing">
              <input type="number" class="trackingBox" min="1" max="100" step="1" pattern="[0-9]*" v-model="editLetterSpacing">
            </div>
          </div>
          <div class="sub-section rotate slider-row">
            <label class="edit-icon rotation">Rotate</label><div>
            <input class="rotInput" type="range" min="-360" max="360" step="1" pattern="[0-9]*" v-model="editRotate">
            <input type="number" class="rotBox" min="-360" max="360" step="1" pattern="[0-9]*" v-model="editRotate">
          </div>
          </div>
          <div class="sub-section leading slider-row">
            <label class="edit-icon leading">Ln Height</label><div><input class="leadingInput" type="range" min="0.5" max="3" step="any" pattern="[0-9]*"><input type="number" class="leadingBox" min="0.5" max="3" step="any" pattern="[0-9]*"></div>
          </div>
          <div class="horizontalScale slider-row">
            <label class="edit-icon horizontalScale">Stretch</label><div><input class="horizontalScaleInput" type="range" min="30" max="300" step="any" pattern="[0-9]*"><input type="number" class="horizontalScaleBox" min="30" max="300" step="any" pattern="[0-9]*"></div>
          </div>
        </div>
        <div class="section arc slider-row">
          <label class="edit-icon arc">Arc</label><div><input class="arcInput" type="range" min="-360" max="360" step="any" pattern="[0-9]*"><input type="number" class="arcBox" min="-360" max="360" step="any" pattern="[0-9]*"></div>
        </div>
        <div class="section position">
          <div class="layer">
            <label class="section-name">Layer Order</label>
            <label class="edit-icon layer block">Layer Order</label>
            <button class="bringForward"><span>bring forward</span></button>
            <button class="sendBackward"><span>send backward</span></button>
          </div>
          <div class="alignment">
            <label class="edit-icon align block">Position</label>
            <button class="alignCenter"><span>position center</span></button>
            <label class="snap-label"><input class="snap" type="checkbox"> Snap to other objects when dragging</label>
          </div>
        </div>
      </div>
      <div class="edit-tools">
        <div class="label">edit text</div><div><ul><li>
        <a class="text" href="#">Text</a>
      </li><li>
        <a class="font" href="#">Font</a>
      </li><li>
        <a class="color" href="#">Color</a>
      </li><li>
        <a class="stroke-color" href="#">Stroke</a>
      </li><li>
        <a class="shadow-color" href="#">Shadow</a>
      </li><li>
        <a class="arc" href="#">Arc</a>
      </li><li>
        <a class="more" href="#">More</a>
      </li><li>
        <a class="position" href="#">Layers</a>
      </li></ul></div>
      </div>
    </div>
  </div>
</template>

<script>
  import RangeSlider from 'vue-range-slider'
  // you probably need to import built-in style
  import 'vue-range-slider/dist/vue-range-slider.css'

  export default {
    components: {
      RangeSlider
    },
    props: ['textsData', 'textChoosed', 'layerDraw', 'getLayer', 'findItem', 'updateTransformer', 'setTextChoose'],
    data() {
      return {
        newText: ''
      }
    },
    computed: {
      editSize: {
        get(){
          return this.textChoosed.attrs.scaleX ? this.textChoosed.attrs.scaleX : 1;
        },
        set(newVal){
          this.textChoosed.scale({x: newVal, y: newVal});
          this.layerDraw();
        }
      },
      editText: {
        get(){
          return this.textChoosed.attrs.text ? this.textChoosed.attrs.text :  '';
        },
        set(newVal){
          this.textChoosed.setAttr('text', newVal);
          this.textChoosed.lineJoin('round');
          this.layerDraw();
        }
      },
      editRotate: {
        get(){
          return this.textChoosed.attrs.rotation ? this.textChoosed.attrs.rotation :  0;
        },
        set(newVal){
          this.textChoosed.setAttr('offsetX', this.textChoosed.width()/2);
          this.textChoosed.setAttr('offsetY', this.textChoosed.height()/2);
          this.textChoosed.setAttr('rotation', parseInt(newVal));
          this.layerDraw();
        }
      },
      editLetterSpacing: {
        get(){
          console.log(this.textChoosed.attrs.letterSpacing, this.textChoosed.attrs.scaleX)
          return this.textChoosed.attrs.letterSpacing;
        },
        set(newVal){
          this.textChoosed.letterSpacing(parseInt(newVal));
          console.log(this.textChoosed);
          this.updateTransformer('111');
          this.updateTransformer(this.textChoosed.attrs.name);
          this.layerDraw();
        }
      }
    },
    methods: {
      addNewText: function () {
        let text = this.newText;
        let allItems = this.getLayer().getChildren();
        let id = allItems.length;

        this.textsData.push(
          {
            text: text,
            x: 50,
            y: 80,
            fontSize: 20,
            draggable: true,
            letterSpacing: 1,
            rotation: 0,
            name: 'text-' + id
          }
        );

        var that = this;
        var checkAddTextComplete = setInterval(function () {
          if(that.getLayer().findOne('.text-'+id)) {
            that.setTextChoose(that.getLayer().findOne('.text-'+id));
            that.updateTransformer('text-'+id);
            clearInterval(checkAddTextComplete);
          }
        }, 100);
      },
    }
  };
</script>
