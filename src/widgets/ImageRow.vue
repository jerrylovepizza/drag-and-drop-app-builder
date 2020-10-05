<template>
  <div class='image-row'>
    <div  v-for="(item, index) in fields" :key="index" class="img-widget" :style="applyStyles(item)">
      <!--<p>{{item.name}}</p>-->
      <img :src="item.label" :style="imgStyle(item)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageRow',
  type: 'image-row',
  title: 'Image Row',
  props: {
    'source': Object
  },
  data () {
    return {
      image1: null,
      fields:
      [
        {
          label: 'Image 1',
          name: 'image1',
          type: 'image',
          default: 'https://www.gotceleb.com/wp-content/uploads/photos/hunter-haley/king-a-girl-like-her-premiere-in-hollywood/Hunter-Haley-King:-A-Girl-Like-Her-Premiere--23-662x993.jpg',
          styles: [
            {
              'label': 'width',
              'name': 'width',
              'value': '100',
              'type': 'text',
              'unit': '%'
            },
            {
              'label': 'Object Fit',
              'name': 'object-fit',
              'value': 'contain',
              'type': 'object-fit-list'
            },
            {
              'label': 'Max Height',
              'name': 'height',
              'value': '300',
              'unit': 'px',
              'type': 'text'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.fields.forEach(field => {
      field.label = field.default
    })
    this.source.fields = this.fields
    this.$store.state.activeField = null
    this.$store.state.activeFields = this.fields
    this.$store.state.widgetTemplates[this.source.type] = JSON.stringify(this.fields[0])
  },
  methods: {
    applyStyles (item) {
      let style = {}
      item.styles.forEach(i => {
        if (i.type === 'background-image') {
          style[i.name] = 'url(\'' + i.value + '\')'
        } else if (i.type === 'text') {
          style[i.name] = i.value
          if (i.unit) {
            style[i.name] = i.value + i.unit
          }
        } else {
          style[i.name] = i.value
        }
      })

      return style
    },
    imgStyle (item) {
      let style = {}
      item.styles.forEach(i => {
        if (i.type === 'object-fit-list') {
          style[i.name] = i.value
        }
      })

      return style
    }
  }
}
</script>

<style lang='scss'>
  .image-row {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .img-widget {
    position: relative;
    margin: 0 auto;

    > p {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      color: #fff;
      font-size: 20px;
    }

    img {
      object-position: center;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>
