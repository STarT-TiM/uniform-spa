// state
export const state = {
  configKonva   : {
    width : 800,
    height: 800
  },
  typeSelecting : null,
  textItems     : {
    group1: [],
    group2: [],
    group3: [],
    group4: [],
    group5: [],
  },
  imageItems    : {
    group1: [],
    group2: [],
    group3: [],
    group4: [],
    group5: [],
  },
  imageId       : 0,
  textId        : 0,
  productImage  : null,
  showColorTable: '',
  test          : null
};

// getters
export const getters = {
  textItems     : state => state.textItems,
  imageItems    : state => state.imageItems,
  productImage  : state => state.productImage,
  configKonva   : state => state.configKonva,
  typeSelecting : state => state.typeSelecting,
  showColorTable: state => state.showColorTable,
  imageId       : state => state.imageId,
  textId        : state => state.textId,
  test          : state => state.test
};

// mutations
export const mutations = {
  EDIT_COLOR_TABLE_TYPE(stage, type) {
    state.showColorTable = type
  },
  ADD_PRODUCT_IMAGE(state, {image, url}) {
    state.productImage = {
      image  : image,
      offsetX: state.configKonva.width / 2,
      offsetY: state.configKonva.height / 2,
      x      : state.configKonva.width / 2,
      y      : state.configKonva.height / 2,
      name   : 'product',
      url : url
    };
  },

  EDIT_TYPE_SELECTING(state, type) {
    state.typeSelecting = type
  },

  ADD_TEXT_ITEM(state, text) {
    let id       = state.textId;
    state.textId = state.textId + 1
    state.textItems.group3.push({
      text         : text,
      x            : state.configKonva.width / 2,
      y            : state.configKonva.height / 2,
      fontSize     : 20,
      fill         : '#000',
      draggable    : true,
      letterSpacing: 1,
      rotation     : 0,
      scaleX       : 1,
      scaleY       : 1,
      stroke       : '#000',
      strokeWidth  : 0,
      shadowColor  : '#000',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      group        : 3,
      name         : 'text-' + id,
    })
  },

  ADD_IMAGE_ITEM(state, {image, url}) {
    console.log(image, url)
    let id        = state.imageId;
    state.imageId = state.imageId + 1
    state.imageItems.group3.push({
      image    : image,
      x        : 0,
      y        : 300,
      draggable: true,
      rotation : 0,
      scaleX   : 1,
      scaleY   : 1,
      name     : 'image-' + id,
      group    : 3,
      url: url
    })
  },

  UPDATE_IMAGE(state, data) {
    let imageObject      = state.imageItems['group' + data.group].find(e => e.name === data.name)
    imageObject.x        = data.x ? data.x : imageObject.x;
    imageObject.y        = data.y ? data.y : imageObject.y;
    imageObject.rotation = data.rotation ? data.rotation : imageObject.rotation;
    imageObject.scaleX   = data.scaleX ? data.scaleX : imageObject.scaleX;
    imageObject.scaleY   = data.scaleY ? data.scaleY : imageObject.scaleY;
    imageObject.offsetX  = data.offsetX ? data.offsetX : imageObject.offsetX;
    imageObject.offsetY  = data.offsetY ? data.offsetY : imageObject.offsetY;
  },

  DELETE_IMAGE(state, data) {
    let group         = data.group
    let imageName     = data.name
    let imageIndex    = state.imageItems['group' + group].findIndex(e => e.name === imageName)
    state.imageItems['group' + group].splice(imageIndex, 1)
  },

  UPDATE_TEXT(state, data) {
    let textObject           = state.textItems['group' + data.group].find(e => e.name === data.name)
    textObject.x             = data.x ? data.x : textObject.x;
    textObject.y             = data.y ? data.y : textObject.y;
    textObject.rotation      = data.rotation ? data.rotation : textObject.rotation;
    textObject.scaleX        = data.scaleX ? data.scaleX : textObject.scaleX;
    textObject.scaleY        = data.scaleY ? data.scaleY : textObject.scaleY;
    textObject.offsetX       = data.offsetX ? data.offsetX : textObject.offsetX;
    textObject.offsetY       = data.offsetY ? data.offsetY : textObject.offsetY;
    textObject.fontSize      = data.fontSize ? data.fontSize : textObject.fontSize;
    textObject.fill          = data.fill ? data.fill : textObject.fill;
    textObject.letterSpacing = data.letterSpacing ? data.letterSpacing : textObject.letterSpacing;
    textObject.strokeWidth   = data.strokeWidth ? data.strokeWidth : textObject.strokeWidth;
    textObject.shadowColor   = data.shadowColor ? data.shadowColor : textObject.shadowColor;
    textObject.shadowOffsetX = data.shadowOffsetX ? data.shadowOffsetX : textObject.shadowOffsetX;
    textObject.shadowOffsetY = data.shadowOffsetY ? data.shadowOffsetY : textObject.shadowOffsetY;
  },

  MOVE_UP_IMAGE(state, data) {
    let group         = data.group
    let imageName     = data.name
    let imageIndex    = state.imageItems['group' + group].findIndex(e => e.name === imageName)
    let imageObject   = state.imageItems['group' + group][imageIndex]
    imageObject.group = parseInt(group) + 1
    state.imageItems['group' + imageObject.group].push(imageObject)
    state.imageItems['group' + group].splice(imageIndex, 1)
  },

  MOVE_DOWN_IMAGE(state, data) {
    let group         = data.group
    let imageName     = data.name
    let imageIndex    = state.imageItems['group' + group].findIndex(e => e.name === imageName)
    let imageObject   = state.imageItems['group' + group][imageIndex]
    imageObject.group = parseInt(group) - 1
    state.imageItems['group' + imageObject.group].push(imageObject)
    state.imageItems['group' + group].splice(imageIndex, 1)
  },

  MOVE_UP_TEXT(state, data) {
    let group         = data.group
    let textName     = data.name
    let textIndex    = state.textItems['group' + group].findIndex(e => e.name === textName)
    let textObject   = state.textItems['group' + group][textIndex]
    textObject.group = parseInt(group) + 1
    state.textItems['group' + textObject.group].push(textObject)
    state.textItems['group' + group].splice(textIndex, 1)
  },

  MOVE_DOWN_TEXT(state, data) {
    let group         = data.group
    let textName     = data.name
    let textIndex    = state.textItems['group' + group].findIndex(e => e.name === textName)
    let textObject   = state.textItems['group' + group][textIndex]
    textObject.group = parseInt(group) - 1
    state.textItems['group' + textObject.group].push(textObject)
    state.textItems['group' + group].splice(textIndex, 1)
  },

  DELETE_TEXT(state, data) {
    let group         = data.group
    let imageName     = data.name
    let imageIndex    = state.textItems['group' + group].findIndex(e => e.name === imageName)
    state.textItems['group' + group].splice(imageIndex, 1)
  },
}

// actions
export const actions = {
  addProductImage({commit}) {
    const image  = new window.Image();
    image.src    = '/images/product_1.jpg';
    image.onload = () => {
      commit('ADD_PRODUCT_IMAGE', {image, url: '/images/product_1.jpg'});
    };
  },

  addTextItem({commit}, text) {
    commit('ADD_TEXT_ITEM', text)
  },

  addImageItem({commit}, url) {
    const image  = new window.Image();
    image.src    = url;
    image.onload = () => {
      commit('ADD_IMAGE_ITEM', {image, url});
    };
  },

  editTypeSelecting({commit}, type) {
    commit('EDIT_TYPE_SELECTING', type)
  },

  moveUpImage({commit}, data) {
    commit('MOVE_UP_IMAGE', data)
  },
  moveDownImage({commit}, data) {
    commit('MOVE_DOWN_IMAGE', data)
  },

  updateImage({commit}, data) {
    commit('UPDATE_IMAGE', data)
  },
  deleteImage({commit}, data) {
    commit('DELETE_IMAGE', data)
  },

  moveUpText({commit}, data) {
    commit('MOVE_UP_TEXT', data)
  },
  moveDownText({commit}, data) {
    commit('MOVE_DOWN_TEXT', data)
  },

  updateText({commit}, data) {
    commit('UPDATE_TEXT', data)
  },

  deleteText({commit}, data) {
    commit('DELETE_TEXT', data)
  },
  editColorTableType({commit}, type) {
    commit('EDIT_COLOR_TABLE_TYPE', type)
  }

}
