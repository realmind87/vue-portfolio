<template>
    <div class="list" :style="style">
        <ul>
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
    </div>
</template>

<script>
import windowSize from '@/mixins/resize.js'
import GridItem from '@/views/Grid/GridItem'
export default {
    name:"List",
    props:{
        portfolio : {
            type:Array
        },
    },
    mixins : [windowSize],
    components:{
        GridItem
    },
    data(){
        return {
            cellWidth:180,
            cellHeight:180,
            center:true,
            contentSize : 0,
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

}
</script>

<style scoped>
    .list {position: relative;width:100%;max-width:900px;display:block;margin:0 auto;}
</style>