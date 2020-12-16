<template>
    <TreeView
      :data="data"
    >
    </TreeView>
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
                label: "Item 2.1",
                childrens:[
                  {
                    label: "Item 2.1.1"
                  }
                ]
              }
            ]
          },
          {
            label: "Item 3",
          },
        ]     
    }
  },
}
</script>

<style>

</style>
