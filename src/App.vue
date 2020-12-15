<template>
  <div id="app">
    <b-card>
    <TreeView
      :data="data"
      labelExpandAll="EXPANDIR TODOS"
      :showLineOnLeaf="true">
    </TreeView>
    </b-card>
  </div>
</template>

<script>
import TreeView from './components/TreeView.vue'

export default {
  name: 'App',
  components: {
    TreeView
  },

    data() {
      return {
          data: [
            {
              label: "Item 1",
              childrens:[
                {
                  label: "Item 1.1"
                }
              ]
            },
            {
              label: "Item 2",
              childrens:[
                {
                  label: "Item 2.1"
                }
              ]
            },
            {
              label: "Item 3",
              childrens:[               
              ]
            },
          ]     
      }
    },
}
</script>

<style>

</style>
