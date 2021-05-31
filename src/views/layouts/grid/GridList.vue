<template>
	<div class="s-body">
		<transition name='layout-fade'>
			<div class="list" v-show="isGrid" :style="style"> <!-- v-show="isGrid" -->

				<transition-group name="list-fade" tag="ul">
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
				</transition-group>
			</div>
		</transition>
		<component
			:is="detail"
			:project="item"
			:offsetX="left"
			:offsetY="top"
			:scrollTop="scrollTop"
		></component>
	</div>
</template>
<script>
import windowSize from '@/mixins/resize.js'
import windowScroll from '@/mixins/scroll.js'
import GridItem from '@/views/layouts/grid/GridItem';
import Detail from '@/views/layouts/detail/Detail';

export default {
    name:"List",
    props:{
        portfolio : {
            type:Array
        },
		center : {
			type:Boolean,
			default:true,
		}
    },
    mixins : [windowSize,windowScroll],
    components:{
        GridItem,
        Detail
    },
    data(){
        return {
            isGrid:true,
            cellWidth:300,
            cellHeight:360,
            contentSize : 0,
            detail:null,
            item:null,
            left:0,
            top:0,
            timer:null,
			offsetTop:0,
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

			if(this.center){
				let contentWidth = this.portfolio.length * this.cellWidth;
				let rowShift = contentWidth < this.gridResponsiveWidth 
								? ( this.gridResponsiveWidth - contentWidth ) / 2
								: ( this.gridResponsiveWidth % this.cellWidth ) / 2
				return Math.floor(rowShift);
			}

			return 0;
        },
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
        },
        backToList(scrollY){
			this.timer = setTimeout(() => {
				this.detail = null;
				clearTimeout(this.timer);
			}, 500);
			window.requestAnimationFrame(()=>{
				window.scroll(0,scrollY)
			});
            this.isGrid = true;
        },
    },
}
</script>
<style scoped>
    .layout-fade-enter-active {transition: all 1s ease;}  
    .layout-fade-enter,
    .layout-fade-leave-to {opacity: 0; }
	.s-body {position: relative;width:100%;max-width:1200px;display:block;margin:0px auto 0;}
	.list {margin-top:64px;}
	.list-fade-enter-active {transition: all 0.5s ease;}
    .list-fade-enter,
    .list-fade-leave-to {opacity: 0;}
    @media screen and (min-width: 550px) {
        .list {margin-top:90px;}
    }
</style>