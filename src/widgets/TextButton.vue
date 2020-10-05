<template>
  <div class='text-button'>
    <a :style="applyStyles(field)">{{field.label}}</a>
  </div>
</template>

<script>
export default {
  name: 'TextButton',
  type: 'text-button',
  title: 'Text Button',
  props: {
    'source': Object
  },
  data () {
    return {
      field: {
        label: 'Label',
        name: 'label',
        type: 'text-input',
        default: 'Learn More About PHS',
        styles:
        [
          {
            'label': 'Font Size',
            'name': 'font-size',
            'value': '24',
            'type': 'ftext'
          },
          {
            'label': 'Font Weight',
            'name': 'font-weight',
            'value': 'bold',
            'type': 'weight-list'
          },
          {
            'label': 'color',
            'name': 'color',
            'value': '#fff',
            'type': 'color'
          },
          {
            'label': 'background color',
            'name': 'background-color',
            'value': '#409eff',
            'type': 'color'
          }
        ]
      }
    }
  },
  mounted () {
    this.field.label = this.field.default
    this.source.field = this.field
    this.$store.state.activeFields = null
    this.$store.state.activeField = this.source.field
  },
  methods: {
    applyStyles (item) {
      let style = {}
      item.styles.forEach(i => {
        if (i.type === 'background-image') {
          style[i.name] = 'url(\'' + i.value + '\')'
        } else if (i.type === 'ftext') {
          style[i.name] = i.value + 'px'
        } else {
          style[i.name] = i.value
        }
      })

      return style
    }
  }
}
</script>

<style lang='scss'>
  .text-button {
    display: flex;
    justify-content: center;

    a {
      padding: 20px 0;
      text-align: center;
      display: inline-block;
      width: 100%;
    }
  }
</style>
