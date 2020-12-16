<template>
    <div>        
        <b-row v-for="(item, index) in data" :key="index">
            <b-col :class="getNodeClass(item)">
                <hr v-if="showLine(item)"> 

                <div :class="getContentClass(item)">   
                <button class="button" @click="itemClick(item)" @contextmenu="itemRightClick($event,item)">            
                    <b-icon :icon="getArrowIcon(item)" 
                            v-if="Array.isArray(item[`${nameFieldChildrensNode}`]) && item[`${nameFieldChildrensNode}`].length"
                            class="pr-1">
                    </b-icon>          
                    <i v-if="item.icon" :class="item.icon" class="pr-1"></i>  
                    <span>{{item[`${nameFieldLabelNode}`]}}</span>                
                </button>
               
                <b-collapse v-model="item._showDetails" >
                    <node 
                        :data="item[`${nameFieldChildrensNode}`]"
                        :nameFieldLabelNode="nameFieldLabelNode"
                        :nameFieldChildrensNode="nameFieldChildrensNode"
                        :showLineOnLeaf="showLineOnLeaf"
                        @nodeClick="nodeClick"
                        @nodeRightClick="nodeRightClick"
                    >
                    </node>  
                </b-collapse>
                </div>
            </b-col >                             
        </b-row>
    </div>
</template>

<script>


import Node from './Node';

export default {
    name: "node",

    components: {
        Node
    },

    props: {
        data: { type: Array, default: () => [] },
        nameFieldLabelNode:  { type: String, default: () => 'label' },
        nameFieldChildrensNode:  { type: String, default: () => 'childrens' }, 
        nameFieldFatherId:  { type: String, default: () => 'fatherId' },
        showLineOnLeaf:  { type: Boolean, default: () => true },
    },

    data() {
        return {
            fields: [{ key: 'label' }],
        }
    },

    methods: {
        itemClick(item){  
            if(item[`${this.nameFieldChildrensNode}`]){                
                this.$set(item, '_showDetails', !item._showDetails);                                           
            }else{              
               this.$set(item, '_showDetails', false);   
            }
            
            this.nodeClick(item);
        },

        nodeClick(item){
            this.$emit('nodeClick', item);
        },

        itemRightClick(event,item){        
            event.preventDefault();

            this.nodeRightClick(item);
        },

        nodeRightClick(item){
            this.$emit('nodeRightClick', item);
        },

        getArrowIcon(item){     
            return item._showDetails ? "chevron-down" : "chevron-right";           
        },

        getNodeClass(item){
            if(item.nodeRoot){
                return 'node-root';
            }else{
                return 'node-child';
            }
        },
      
        getContentClass(item){
            if(Array.isArray(item[`${this.nameFieldChildrensNode}`]) && item[`${this.nameFieldChildrensNode}`].length){
                return 'content';
            }else{
                return 'content-leaf';
            }
        },
      
        showLine(item){ 
            if(!item[`${this.nameFieldChildrensNode}`]){
                return this.showLineOnLeaf;
            }
            return true;            
        },
    },
    
    mounted(){       
        this.data.forEach(item => {                  
            this.$set(item, '_showDetails', item.showDetails)                 
        });
    }
}
</script>

<style scoped>
    .node-root .content,
    .node-root .content-leaf, 
    .node-child .content,
    .node-child .content-leaf {       
        font-size: 0.93rem;   
    }

    .node-root  {           
        margin-left: 0rem;    
    }

    .node-child {     
        margin-left: 1.5rem;       
    }

    .node-root .content button, 
    .node-root .content-leaf button, 
    .node-child .content button,
    .node-child .content-leaf button{        
        background-color: transparent;
        border-style: none;
        width: 100%;
        text-decoration: none;
        text-align: left;
        outline: none;
    }

    .content-leaf{        
       margin-left: 0.91rem;  
    }


</style>
