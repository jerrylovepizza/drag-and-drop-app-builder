<template>
  <div class="el-options">
    <el-form>
    <div class="form-group">
      <el-form-item label="Value" v-if="element.type ==='image' || element.type ==='video'">
       <el-input v-model="element.label" ></el-input>
      </el-form-item>
      <el-form-item label="label" v-else>
       <el-input v-model="element.label" ></el-input>
      </el-form-item>
    </div>
    <div class="form-group" v-for="(item, index) in element.styles" :key="index">
      <div v-if="item.type === 'text'">
        <el-form-item :label="item.label">
          <el-input v-model="item.value" ></el-input>
        </el-form-item>
      </div>
      <div v-if="item.type === 'background-image'">
        <el-form-item :label="item.label">
          <el-input v-model="item.value" ></el-input>
        </el-form-item>
      </div>
      <div v-if="item.type === 'ftext'">
        <el-form-item :label="item.label">
        <el-input-number v-model="item.value" :min="0" :max="50"></el-input-number>
        </el-form-item>
      </div>
      <div v-else-if="item.type === 'color'">
      <el-form-item :label="item.label">
        <el-color-picker v-model="item.value" :min="0" :max="50"></el-color-picker>
      </el-form-item>
      </div>
      <div v-else-if="item.type == 'weight-list'">
        <el-form-item :label="item.label">
        <el-radio-group v-model="item.value">
        <el-radio-button :label="500">Normal</el-radio-button>
        <el-radio-button :label="700">Bold</el-radio-button>
        </el-radio-group>
      </el-form-item>
      </div>
      <div v-else-if="item.type == 'object-fit-list'">
        <el-form-item :label="item.label">
        <el-radio-group v-model="item.value">
        <el-radio-button label="contain">Contain</el-radio-button>
        <el-radio-button label="cover">Cover</el-radio-button>
        </el-radio-group>
      </el-form-item>
      </div>
    </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Properties',
  props: {
    index: Number,
    element: Object
  },
  data () {
    return {
      fontsize: 10,
      val: '',
      field: Object
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 15px;
}
</style>
