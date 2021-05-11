<template>
    <li :class="className" :style="style">
        <a href="#" @click="showProjectDetail(item)">
            <strong class='project_name'>{{ item.project_name }}</strong>
        </a>
    </li>
</template>

<script>
export default {
    data(){
        return {
            zIndex : 1,
            opacity : 0, 
        }
    },
    props:{
        item : {
            type : Object
        },
        index : {
            type : Number
        },
        sort : {
            type : Number
        },
        cellHeight: {
            type : Number
        },
        cellWidth : {
            type :Number
        },
        rowCount : {
            type : Number
        },
        rowShift : {
            type : Number
        }
    },
    computed : {
        className(){
            return 'item animate'
        },
        style(){
            let { zIndex, cellWidth, cellHeight, top, left } = this;
            return {
                zIndex,
                width : cellWidth + "px",
                height : cellHeight + "px",
                transform : `translate3d(${left}px, ${top}px, 0)`,
            }
        },
        left(){
            return this.rowShift + (this.sort % this.rowCount) * this.cellWidth
        },
        top(){
            return Math.floor( this.sort / this.rowCount ) * this.cellHeight
        }
    },
    methods : {
        showProjectDetail(project){
            this.$EventBus.$emit("showProjectDetail", project)
        }
    }
}
</script>

<style scoped>
    .item {display: block;position: absolute;box-sizing: border-box;left : 0px;top : 0px;user-select: none;transform:translate3d(0px,0px,0px); z-index:1;padding:20px;}
    .item a {display:block;width:100%;height:100%;background-color:#fff;border-radius: 10px;}
    .item .project_name {font-size:1.6rem;}
    .animate {transition:all 0.5s ease;}
</style>