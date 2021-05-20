<template>
    <li :class="className" :style="style">
        <a href="#" @click="showProjectDetail(item,top,left)">
            <div class="thumbnail-link">
                
            </div>
            <strong class='project_name'>{{ item.project_name }}</strong>
            <p class='date-infor'>{{ item.year }}</p>
        </a>
    </li>
</template>

<script>
export default {
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
    data(){
        return {
            zIndex : 1,
            opacity : 0,
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
        showProjectDetail(project,top,left){
            this.$EventBus.$emit("showProjectDetail", project,top,left);
        }
    }
}
</script>

<style scoped>
    .item {display:block;position: absolute;box-sizing: border-box;left : 0px;top : 0px;user-select: none;transform:translate3d(0px,0px,0px); z-index:1;padding:20px;}
    .item a { position: relative; display:block;width:100%;height:100%;padding:15px;background-color:#fff;border-radius: 5px;box-sizing:border-box;}
    .item .project_name {font-size:1.6rem;line-height:1.2;}
    .animate {transition:all 0.5s ease;}
    .item .thumbnail-link {height:130px;margin-bottom:15px;background-color:#888;}
    .item .date-infor {position: absolute;left:20px;bottom:20px;font-size:1.4rem;color:#888;}
</style>