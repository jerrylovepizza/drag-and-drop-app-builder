<template>
  <div>
    <h3 class="pb-2 text-center">{{widget.title}}</h3>
    <div class="text-right mt-3 mb-3">
      <b-button variant="danger" class="mr-2" @click="remove(widget.id)">Remove</b-button>
      <!--<b-button variant="success" class="mr-2" @click="applyChanges(widget)">Apply</b-button> -->
      <b-button variant="success" class="mr-2" @click="addField()">Add</b-button>
    </div>

      <div v-if="field">
        <el-row>
          <el-card>
            <Properties :element="field">
            </Properties>
          </el-card>
        </el-row>
      </div>
      <div v-else>
        <el-row>
          <el-card  v-for="(item, index) in fields" :key="index">
            <a class="btn-delete" @click="removeEl(index)"><i class="el-icon-error"></i></a>
            <Properties :index="index" :element="item">
              </Properties>
          </el-card>
        </el-row>
      </div>
  </div>
</template>

<script>
import Properties from '@/components/Properties'

export default {
  name: 'EditorPane',
  components: { Properties },
  props: {
    'widget': Object
  },
  data () {
    return {
      model: {}
    }
  },
  watch: {
    widget: function (val) {
    }
  },

  computed: {
    fields () {
      return this.$store.state.activeFields
    },
    widgetTemplate () {
      console.log(this.$store.state.widgetTemplates)
      return this.$store.state.widgetTemplates[this.widget.type]
    },
    field () {
      return this.$store.state.activeField
    }
  },
  methods: {
    remove (id) {
      this.$emit('remove', id)
    },
    applyChanges (widget) {
      widget.data = this.templateGenerate(widget)
    },
    removeEl (index) {
      this.fields.splice(index, 1)
      if (this.fields.length === 0) {
        this.$emit('remove', this.widget.id)
      }
    },
    addField () {
      let field = this.$store.state.widgetTemplates[this.widget.type]
      this.$store.state.activeFields.push(JSON.parse(field))
    },
    templateGenerate (widget) {
      let htmlString = ''
      switch (widget.title) {
        case 'Square Widget':
          htmlString =
            `<div class="h-template" style="background-image: url(${this.model['backgroundImage']}); background-color: ${this.model['backgroundColor']}">
               <h1 class="title">${this.model['title']}</h1>
            </div>`
          break
        case 'Square Widget (x2)':
          htmlString =
            `<div class="h-template" style="background-image: ${this.model['backgroundImage']}; background-color: ${this.model['backgroundColor']}">
               <h1 class="title">${this.model['title']}</h1>
            </div>`
          break
        case 'Square Widget (x3)':
          htmlString =
            `<div class="h-template" style="background-image: ${this.model['backgroundImage']}; background-color: ${this.model['backgroundColor']}">
               <h1 class="title">${this.model['title']}</h1>
            </div>`
          break
        case 'Text Widget':
          htmlString =
            `<div class="h-template" style="text-align: center; text-align: ${this.model['align']};">
                <h1>${this.model['title']}</h1>
                <h3>${this.model['subTitle']}</h3>
                <p>${this.model['description']}</p>
            </div>`
          break
        case 'Image Widget':
          htmlString =
            `<div class="h-template">
                <img src="${this.model['source']}" style="max-height: ${this.model['maxHeight']}" />
             </div>`
          break
        case 'Text Button Widget':
          htmlString =
            `<div class="h-template" style="margin: ${this.model['margin']};">
               <a href="${this.model['link']}" style="padding: ${this.model['padding']}; color: ${this.model['textColor']}; background-color: ${this.model['backgroundColor']};">
                 ${this.model['title']}
               </a>
             </div>`
          break
      }

      return htmlString
    }
  }
}
</script>

<style lang="scss">
  .el-card {
    margin: 0 0 15px 0;
    position: relative;
  }

  .btn-delete {
    color: #dc3545!important;
    font-size: 30px;
    position: absolute;
    right: 20px;
    top: 0;
    cursor: pointer!important;
  }

  .el-form-item {
    display: flex;

    .el-form-item__label {
      min-width: 200px;
    }
  }

  .text-center {
    text-align: center;
  }
</style>
