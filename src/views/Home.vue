<template>
  <div id="main">
    <div class="header">
        <h3>Drag &amp; Drop Builder</h3>
    </div>
    <div id="builder-headers">
      <div class="column-title library-title">Library</div>
      <div class="column-title preview-title">Preview</div>
      <div class="column-title editor-title">Editor</div>
    </div>
    <div id="builder">
      <div id="library">
        <widget-library />
      </div>
      <div id="preview">
        <Container
          group-name="1"
          :get-child-payload="getScreenWidget"
          @drop="dropped"
          drag-class="dragging"
          drop-class="dropping"
          :drop-placeholder="dropPlaceholderOptions"
          @click="onClick"
        >
          <Draggable v-for="widget in screenWidgets" :key="widget.id" @click="onClick">
            <component
              :is="widget.name"
              :class="{active: widget.selected}"
              :selected="widget.selected"
              :wid="widget.id"
              :source="widget"
              @click="onClick"
              :id="widget.id"
            />
          </Draggable>
        </Container>
      </div>
      <div id="editor">
        <widget-editor
          v-if="selected"
          :widget="selected"
          @remove="removeWidget"
          @apply="updateWidget"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import WidgetLibrary from '@/components/WidgetLibrary'
import WidgetEditor from '@//components/WidgetEditor'
import * as widgets from '@/widgets'

export default {
  name: 'Copy',
  components: {
    ...widgets,
    WidgetLibrary,
    WidgetEditor,
    Container,
    Draggable
  },
  data () {
    return {
      instanceCount: 0,
      screenWidgets: [],
      dropPlaceholderOptions: {
        className: 'drop-preview',
        animationDuration: '150',
        showOnTop: true
      },
      selected: null
    }
  },
  methods: {
    onClick (e) {
      console.log(e)
    },
    mouseup (e) {
      if (e.target.id !== '') {
        let wid = e.target.id
        const arr = this['screenWidgets']
        const result = [...arr]
        this['screenWidgets'].forEach(el => {
          el.selected = false
          if (el.id === wid) {
            el.selected = true
            this['selected'] = el

            if (el.fields) {
              this.$store.state.activeFields = el.fields
              this.$store.state.activeField = null
            }
            if (el.field) {
              this.$store.state.activeField = el.field
              this.$store.state.activeFields = null
            }
          }
        })
        this['screenWidgets'] = result
      }
    },
    mouseDown (event) {
      console.log('mouse downed')
    },
    dropped (dropResult) {
      const { removedIndex, addedIndex, payload } = dropResult

      console.log('payload', payload)
      const arr = this['screenWidgets']
      if (removedIndex === null && addedIndex === null) return arr

      const result = [...arr]

      let itemToAdd = { ...payload }
      const isNew = (removedIndex === null && addedIndex !== null)

      if (isNew) {
        this.instanceCount += 1
        itemToAdd.id = `wi-${this.instanceCount}`
      }

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }

      if (typeof itemToAdd.fields !== 'undefined') {
        this.$store.state.activeFields = itemToAdd.fields
      }

      result.forEach(el => {
        el.selected = false
      })

      itemToAdd.selected = true
      this.selected = itemToAdd

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }
      this.$store.state.activeId = itemToAdd.id
      this['screenWidgets'] = result
    },
    widgetSelected (widget, event) {
      this.selected = widget

      const selectedWidgets = document.querySelectorAll('.selected')

      // de-select currently selected item
      selectedWidgets.forEach(el => {
        el.className = el.className.replace('selected', '')
      })

      event.target.className += ' selected'
    },
    getScreenWidget (index) {
      return this.screenWidgets[index]
    },
    removeWidget (index) {
      let curWidgets = this.screenWidgets
      curWidgets = curWidgets.filter(item => {
        return item.id !== index
      })

      if (this.screenWidgets.length !== curWidgets.length) {
        this.screenWidgets = curWidgets
        this.selected = this.screenWidgets[0]
      }
    },
    updateWidget (param) {
      let curWidgets = this.screenWidgets
      curWidgets = curWidgets.map(item => {
        if (item.id && item.id === param.id) {
          item.data = param.data
        }
      })

      this.screenWidgets = curWidgets
    }
  },
  mounted () {
    console.log(Object.keys(widgets))
    console.log(widgets['TieredText'].type)
    console.log(widgets['TieredText'].fields)
  },
  created () {
    window.addEventListener('mouseup', this.mouseup)
  },
  destroyed () {
    window.removeEventListener('mouseup', this.mouseup)
  }
}
</script>

<style lang="scss">
#main {
  width: 100vw;
  height: 100vh;
}
.header {
  height: 70px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #303030;
  width: 100%;
  color: white;
}
.container {
  max-width: 100vw;
}
.col {
  text-align: left;
}

#builder-headers {
  height: 30px;
  display: flex;
  width: 100vw;
}

.column-title {
  background-color: #606060;
  color: white;
  padding: 2px;
  text-align: center;
}

.library-title {
  width: 20vw;
}
.preview-title {
  width: 30vw;
}
.editor-title {
  width: 50vw;
}

#builder {
  height: calc(100vh - 100px);
  display: flex;
  width: 100vw;

}
#library {
  background-color: #ededed;
  overflow-y: scroll;
  width: 20vw;
  position: relative;
}

#preview {
  background-color: #ffffff;
  overflow-y: scroll;
  width: 30vw;
  padding: 20px 10px;
}

#editor {
  background-color: #f6f6f6;
  overflow-y: scroll;
  width: 50vw;
  padding: 20px;
}

.widget-preview {
    text-align: center;
    display: block;
    background-color: #fff;
    outline: 0;
    border: 1px solid rgba(0,0,0,.125);
    cursor: default;
    margin: 10px 0;
    user-select: none;
}

.selected {
  background-color: peachpuff;
}
.drop-preview {
  border: 1px dashed #b4b4b4;
  margin: 10px 0;
}

.smooth-dnd-container {
  height: 100%;

  .smooth-dnd-draggable-wrapper {
    margin-bottom: 10px;

    > .active {
      border: 2px solid #00c3aa;
    }
  }
}

body.smooth-dnd-no-user-select {
  .smooth-dnd-draggable-wrapper {
    > div > * {
      pointer-events: none;
    }
  }
}
</style>
