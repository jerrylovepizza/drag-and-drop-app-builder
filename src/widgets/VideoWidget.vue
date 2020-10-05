<template>
  <div class='video-widget'>
    <div  v-for="(item, index) in fields" :key="index" class="video-widget">
      <!--<p>{{item.name}}</p>-->
      <video controls :style="applyStyles(item)">
        <source :src="item.label" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoWidget',
  type: 'video-widget',
  title: 'video widget',
  props: {
    'source': Object
  },
  data () {
    return {
      image1: null,
      fields:
      [
        {
          label: 'Video',
          name: 'Video',
          type: 'video',
          default: 'http://vjs.zencdn.net/v/oceans.mp4',
          styles: [
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
          style[i.name] = i.value + '%'
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
  video {
    width: 100%;
  }
</style>
