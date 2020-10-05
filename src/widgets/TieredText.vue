<template>
  <div class="tiered-text">
    <template v-for="(item, index) in fields">
      <div v-if="item.name === 'title'" class="title" :style="applyStyles(item)" :key="index">
          {{item.label}}
      </div>
      <div v-else-if="item.name === 'subtitle'" class="sub-title" :style="applyStyles(item)" :key="index">
          {{item.label}}
      </div>
      <div v-else class="description" :style="applyStyles(item)" :key="index">
          {{item.label}}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TieredText',
  type: 'tiered-text',
  title: 'Tiered Text',
  props: {
    'source': Object
  },
  data () {
    return {
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'text-input',
          default: 'Our Mission',
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
              'value': '#222',
              'type': 'color'
            },
            {
              'label': 'background color',
              'name': 'background-color',
              'value': '#fff',
              'type': 'color'
            }
          ]
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          type: 'text-input',
          default: 'Sub title',
          styles:
          [
            {
              'label': 'Font Size',
              'name': 'font-size',
              'value': '20',
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
              'value': 'black',
              'type': '#222'
            },
            {
              'label': 'background color',
              'name': 'background-color',
              'value': '#fff',
              'type': 'color'
            }
          ]
        },
        {
          label: 'Description',
          name: 'description',
          type: 'text-input',
          default: 'Them Pennsylvania Horticultural Society connects people with horticulture, and together we create beautiful, healthy and sustainable communities.',
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
              'value': 'normal',
              'type': 'weight-list'
            },
            {
              'label': 'color',
              'name': 'color',
              'value': '#666',
              'type': 'color'
            },
            {
              'label': 'background color',
              'name': 'background-color',
              'value': '#fff',
              'type': 'color'
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

<style>
.tiered-text {
  display: flex;
  flex-direction: column;
  text-align: center;
}

</style>
