<template>
    <div class="list" :style="style">
        <transition name='layout-fade'>
            <ul v-show="isGrid">
                <GridItem
                    v-for="(project , index) in portfolio"
                    :item="project"
                    :key="index"
                    :index="index"
                    :sort="index"
                    :cell-width="cellWidth"
                    :cell-height="cellHeight"
                    :row-count="rowCount"
                    :row-shift="rowShift"
                >
                </GridItem>
            </ul>
        </transition>
        <component
            :is="detail"
            :project="item"
            :offsetX="left"
            :offsetY="top"
        ></component>
    </div>
</template>

<script>
import windowSize from '@/mixins/resize.js'
import GridItem from '@/views/layouts/grid/GridItem';
import Detail from '@/views/layouts/detail/Detail';

export default {
    name:"List",
    props:{
        portfolio : {
            type:Array
        },
    },
    mixins : [windowSize],
    components:{
        GridItem,
        Detail
    },
    data(){
        return {
            isGrid:true,
            cellWidth:300,
            cellHeight:360,
            center:true,
            contentSize : 0,
            detail:null,
            item:null,
            left:0,
            top:0,
            timer:null,
        }
    },
    computed : {
        gridResponsiveWidth(){
            return this.windowWidth
        },
        height(){
            return Math.ceil(this.portfolio.length / this.rowCount) * this.cellHeight
        },
        style(){
            return {
                height : this.height + 'px'
            }
        },
        rowCount(){
            return Math.floor(this.gridResponsiveWidth / this.cellWidth);
        },
        rowShift(){
            let contentWidth = this.portfolio.length * this.cellWidth;
            let rowShift = contentWidth < this.gridResponsiveWidth 
                            ? ( this.gridResponsiveWidth - contentWidth ) / 2
                            : ( this.gridResponsiveWidth % this.cellWidth ) / 2
            return Math.floor(rowShift);
        }
    },
    created(){
        this.$EventBus.$on('showProjectDetail', this.onProjectDetail);
        this.$EventBus.$on('backToList', this.backToList);
    },
    methods : {
        onProjectDetail(project,top,left){
            this.isGrid = false;
            this.detail = Detail;
            this.item = project;
            this.top=top;
            this.left=left;
            console.log(this.item);
        },
        backToList(){
            this.isGrid = true;
            this.detail = null;
        }
    }
    
}
</script>

<style scoped>
    .list {position: relative;width:100%;max-width:1200px;display:block;margin:70px auto 0;}
    .layout-fade-enter-active,
    .layout-fade-leave-active {
        transition: all 0.5s ease;
    }  
    .layout-fade-enter,
    .layout-fade-leave-to {
        opacity: 0;
    }
    
    @media screen and (min-width: 550px) {
        .list {margin-top:0px;}
    }
</style>