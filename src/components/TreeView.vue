<template>
    <div>   
        <div class="text-right">     
            <button class="button" @click="collapseAllClick()">
                <b-icon class="pr-1" :icon="collapseAll.icon"></b-icon>  
                <span>{{collapseAll.label}}</span>    
            </button>   
        </div>      
        <node 
            :data="data"
            :nameFieldLabel="nameFieldLabel"
            :nameFieldChildrens="nameFieldChildrens"
            :showLineOnLeaf="showLineOnLeaf"        
            @nodeClick="nodeClick"
            @nodeRightClick="nodeRightClick"              
        >
        </node>                                                   
    </div>
</template>

<script>


import Node from './Node';

export default {
    name: "treeview",

    components: {
        Node
    },

    props: {
        data: { type: Array, default: () => [] },
        labelExpandAll:  { type: String, default: () => 'EXPAND ALL' },
        labelCollapseAll:  { type: String, default: () => 'COLLAPSE ALL' },
        nameFieldLabel:  { type: String, default: () => 'label' },
        nameFieldChildrens:  { type: String, default: () => 'childrens' }, 
        showLineOnLeaf:  { type: Boolean, default: () => true },
    },

    data() {
        return { 
            collapseAll:{
                value: true,
                icon: 'chevron-right',
                label: this.labelExpandAll
            }      
        }
    },

    methods: {        
        nodeClick(item, event){
            this.$emit('nodeClick', item, event);
        }, 
        
        nodeRightClick(item, event){
            this.$emit('nodeRightClick', item, event);
        },
        
        collapseAllClick(){
            if(this.collapseAll.value){
               this.collapseAll.icon = 'chevron-down';
               this.collapseAll.label = this.labelCollapseAll;
            }else{
               this.collapseAll.icon = 'chevron-right';
               this.collapseAll.label = this.labelExpandAll;
            }    
          
            this.setShowDetailsRecursive(this.data, this.collapseAll.value);

            this.collapseAll.value = !this.collapseAll.value;
        },

        setShowDetailsRecursive(itens, value){
            itens.forEach(item => {                                  
                this.$set(item, 'showDetails', value); 

                if(item[`${this.nameFieldChildrens}`]){
                  this.setShowDetailsRecursive(item[`${this.nameFieldChildrens}`], value);  
                }                  
            });
        },
    },
    
    mounted(){       
        this.data.forEach(item => {                   
            this.$set(item, 'nodeRoot', true)                
        });
    }
}
</script>

<style scoped>
    .button{        
        background-color: transparent;
        color:#5F6368;
        border-style: none;          
        outline: none;
        font-size: 0.72rem;  
        font-weight: bold;           
    }

</style>
