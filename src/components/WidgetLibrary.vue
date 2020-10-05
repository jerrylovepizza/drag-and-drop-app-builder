<template>
  <Container
    behaviour="copy"
    group-name="1"
    :get-child-payload="getWidgetType"
    drag-class="dragging"
  >
    <Draggable v-for="item in widgets" :key="item.type">
      <div
        class="widget-type"
      >{{item.title}}</div>
    </Draggable>
  </Container>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import * as widgets from '@/widgets'

export default {
  name: 'WidgetLibrary',
  components: { Container, Draggable },
  data () {
    return {
      widgets: Object.keys(widgets).map(key => {
        console.log(widgets[key].name, widgets[key].type, widgets[key].title)
        return {
          name: widgets[key].name,
          type: widgets[key].type,
          title: widgets[key].title,
          fields: widgets[key].fields
        }
      })
    }
  },
  props: {
    msg: String
  },
  methods: {
    getWidgetType (index) {
      return this.widgets[index]
    }
  }
}
</script>
<style>

.widget-type {
    text-align: center;
    display: block;
    background-color: #fff;
    outline: 0;
    border: 1px solid rgba(0,0,0,.125);
    cursor: default;
    height: 50px;
    line-height: 50px;
    margin: 10px 10px 0px 10px;
    user-select: none;
}

.dragging {
  background-color: #6699cc;
  color: white;
}
</style>
