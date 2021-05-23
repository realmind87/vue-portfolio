<template>
    <li :class="className" :style="style">
        <a href="#" @click.prevent="showProjectDetail(item,left)">
            <div class="thumbnail-link">
                <i class="far fa-image noData"></i>
            </div>
            <strong class='project_name'>{{ item.project_name }}</strong>
            <p class='date-infor'>{{ item.year }}</p>
        </a>
    </li>
</template>

<script>
import windowSize from '@/mixins/resize.js'

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
	mixins : [windowSize],
    data(){
        return {
            zIndex : 1,
            opacity : 0,
			x : 0,
			y : 0,

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
        showProjectDetail(item,left){
			if( window.innerWidth > 1200 ){
				this.x = left
				this.y = this.$el.getBoundingClientRect().top + (20 - 140);
			} else {
				this.x = this.$el.getBoundingClientRect().left + 20;
				this.y = this.$el.getBoundingClientRect().top + (20 - 100);
			}
            this.$EventBus.$emit("showProjectDetail",item,this.y,this.x);
        }
    }
}
</script>
<style scoped>
	.item {display:block;position: absolute;box-sizing: border-box;left : 0px;top : 0px;user-select: none;transform:translate3d(0px,0px,0px);z-index:1;padding:20px;}
    .item a { position: relative; display:block;width:100%;height:100%;padding:15px;background-color:#fff;border-radius: 5px;box-shadow: 0 0 10px rgba(0,0,0,0.2);box-sizing:border-box;}
    .item .project_name {font-size:1.6rem;line-height:1.2;}
    .animate {transition:all 0.5s ease;}
    .item .thumbnail-link {display:flex; justify-content: center; align-items:center; height:130px;margin-bottom:15px;background-color:#efefef;}
	.item .thumbnail-link .noData {font-size:10rem;color:#888;}
    .item .date-infor {position: absolute;left:20px;bottom:20px;font-size:1.4rem;color:#888;}
</style>