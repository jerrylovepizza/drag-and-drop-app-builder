<template>
  <div class='button-row'>
    <div v-for="(item, index) in fields" :key="index">
      <a :style="applyStyles(item)">{{item.label}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonRow',
  type: 'button-row',
  title: 'square buttons',
  props: {
    'wid': String,
    'selected': Boolean,
    'source': Object
  },
  computed: {

  },
  data () {
    return {
      fields:
      [
        {
          label: 'Button 1 Label',
          name: 'button1Label',
          type: 'text-input',
          default: 'Label 1',
          styles:
          [
            {
              'label': 'Font Size',
              'name': 'font-size',
              'value': '16',
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
              'value': '#000',
              'type': 'color'
            },
            {
              'label': 'background image',
              'name': 'background-image',
              'value': 'https://s7d9.scene7.com/is/image/DisneyStoreES/Character_Assets_Atmb-sq_character-alice_launch?$sq-c$',
              'type': 'background-image'
            }
          ]
        },
        {
          label: 'Button 2 Label',
          name: 'button2Label',
          type: 'text-input',
          default: 'Label 2',
          styles:
          [
            {
              'label': 'Font Size',
              'name': 'font-size',
              'value': '16',
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
              'value': '#000',
              'type': 'color'
            },
            {
              'label': 'background image',
              'name': 'background-image',
              'value': '',
              'type': 'background-image'
            }
          ]
        }
      ]
    }
  },
  mounted () {
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
  .button-row {
    display: flex;
    justify-content: space-around;
    margin: 0 -5px;

    div {
      padding: 0 5px;
      display: block;
      flex: 1 0 auto;
    }

    a {
      display: inline-block;
      width: 100%;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      min-height: 200px;
      line-height: 200px;
    }
  }
</style>
