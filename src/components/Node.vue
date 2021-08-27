<template>
    <div>        
        <b-row v-for="(item, index) in data" :key="index">
            <b-col :class="getNodeClass(item)">
                <hr v-if="showLine(item)"> 

                <div :class="getContentClass(item)"> 
                    <b-link                                          
                        class='link'                                                             
                        :href="item.href"              
                        @click="itemClick(item, $event)" 
                        @contextmenu="nodeRightClick(item, $event)">

                        <div :style="item.style">                     
                            <b-icon v-if="Array.isArray(item[`${nameFieldChildrens}`]) && item[`${nameFieldChildrens}`].length"  
                                :icon="getArrowIcon(item)" 
                                class="pr-1">
                            </b-icon>
                            
                            <b-icon v-if="item.icon" 
                                :icon="item.icon" 
                                class="pr-1" >
                            </b-icon>  
                            
                            <span>{{item[`${nameFieldLabel}`]}}</span>                
                        </div>
                    </b-link>
                
                    <b-collapse v-model="item.showDetails" >
                        <node 
                            :data="item[`${nameFieldChildrens}`]"
                            :nameFieldLabel="nameFieldLabel"
                            :nameFieldChildrens="nameFieldChildrens"
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
        nameFieldLabel:  { type: String, default: () => 'label' },
        nameFieldChildrens:  { type: String, default: () => 'childrens' }, 
        nameFieldFatherId:  { type: String, default: () => 'fatherId' },
        showLineOnLeaf:  { type: Boolean, default: () => true },
    },


    methods: {
        itemClick(item, event){  
            if(item[`${this.nameFieldChildrens}`]){                
                this.$set(item, 'showDetails', !item.showDetails);                                           
            }else{              
               this.$set(item, 'showDetails', false);   
            }
            
            this.nodeClick(item, event);
        },

        nodeClick(item, event){            
            this.$emit('nodeClick', item, event);                       
        },

        nodeRightClick(item, event){      
            this.$emit('nodeRightClick', item, event);                                                   
        },

        getArrowIcon(item){     
            return item.showDetails ? "chevron-down" : "chevron-right";           
        },

        getNodeClass(item){
            if(item.nodeRoot){
                return 'node-root';
            }else{
                return 'node-child';
            }
        },
      
        getContentClass(item){
            if(Array.isArray(item[`${this.nameFieldChildrens}`]) && item[`${this.nameFieldChildrens}`].length){
                return 'content';
            }else{
                return 'content-leaf';
            }
        },
      
        showLine(item){ 
            if(!item[`${this.nameFieldChildrens}`]){
                return this.showLineOnLeaf;
            }
            return true;            
        },
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
        text-align: left;  
    }

    .node-child {     
        margin-left: 1.5rem; 
        text-align: left;      
    }
 
    .node-root .content .link, 
    .node-root .content-leaf .link, 
    .node-child .content .link,
    .node-child .content-leaf .link{        
        color: initial;      
    }

    .content-leaf{        
       margin-left: 0.91rem;  
    }

</style>
