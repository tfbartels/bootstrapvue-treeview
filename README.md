# Bootstrapvue Treeview

A Vuejs Treeview made with the [boostrapvue framework](https://bootstrap-vue.org/).

## Installation
Install the package:
```bash
npm install bootstrapvue-treeview
```

## Usage
Import into your application:

```js
import bootstrapvueTreeview from "bootstrapvue-treeview"
Vue.use(bootstrapvueTreeview)
```

And add in your template :

```

```

## Props List
| Name  | Type  | Description  | Default  |
| :--------------------------- | :----------: | -------------------------------------------------------------------------------------------------- | :------: |
| data | Array | Data to be show in treeview. | 
| labelExpandAll | String | Label of the expand/collapse field when the treeview are collapsed  | EXPAND ALL
| labelCollapseAll | String | Label of the expand/collapse field when the treeview are expanded | COLLAPSE ALL
| nameFieldLabelNode | String | Field in the data array corresponding to the label node | label 
| nameFieldChildrensNode | String | Field in the data array corresponding to the childrens nodes | childrens 
| showLineOnLeaf | Boolean | Displays the dividing line on the leaf | true 
| nodeClick | Function | 	Callback to call a method when click on the node |  
| nodeRightClick | Function | Displays the dividing line on the leaf when right click on the node | 


## License
MIT

## Status
This project is in development. Any contribution is welcome

## Keywords
vue vuejs vue2 treeview boostrapvue boostrapvue-treeview


