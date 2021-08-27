# Bootstrapvue Treeview

A Vuejs Treeview made with the [boostrapvue framework](https://bootstrap-vue.org/).

![alt text](https://github.com/tfbartels/bootstrapvue-treeview/blob/master/src/assets/treeview.jpg "Treeview")

## Props List
| Name  | Type  | Description  | Default  |
| :--------------------------- | :----------: | -------------------------------------------------------------------------------------------------- | :------: |
| data | Array | Data to be show in treeview. | 
| labelExpandAll | String | Label of the expand/collapse field when the treeview are collapsed  | EXPAND ALL
| labelCollapseAll | String | Label of the expand/collapse field when the treeview are expanded | COLLAPSE ALL
| nameFieldLabel | String | Field in the data array corresponding to the label node | label 
| nameFieldChildrens | String | Field in the data array corresponding to the childrens nodes | childrens 
| showLineOnLeaf | Boolean | Displays the dividing line on the leaf | true 
| nodeClick | Function | 	Callback to call a method when click on the node |  
| nodeRightClick | Function | Displays the dividing line on the leaf when right click on the node | 


## Example
```js
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
```

## License
MIT

## Status
This project is in development. Any contribution is welcome

## Keywords
vue vuejs vue2 treeview boostrapvue boostrapvue-treeview


