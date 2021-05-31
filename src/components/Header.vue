<template>
    <header class='header' ref='header'>
        <div class='inner'>
            <h1>Portfolio</h1>
			<div class='gnb'>
				
				<div v-if="isMobile">
					<a href="#" @click="isMenu=true" class="current-year"><i class="fas fa-bars"></i></a>
					<transition name='navi-fade'>
						<nav v-if="isMenu">
							<a class="close" @click="isMenu=false" href="#"><i class="fas fa-times"></i></a>
							<ul>
								<li v-for="(year, index) in uniqueYears" :key="index">
									<a href="#" @click="showCurrentYears(year)">{{year}}</a>
								</li>
							</ul>
						</nav>
					</transition>
				</div>
				<div v-else>
					<nav>
						<ul>
							<li v-for="(year, index) in uniqueYears" :key="index">
								<a href="#" @click="showCurrentYears(year)">{{year}}</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
        </div>
    </header>
</template>
<script>
import windowSize from '@/mixins/resize.js'
export default {
    name : "Header",
    props:['portfolios'],
	mixins : [windowSize],
	data(){
		return {
			date : [],
			uniqueYears : [],
			isMobile : false,
			isMenu : false,
		}
	},
	created(){
		this.years();
		window.addEventListener('resize' , this.windowSizeNavi);
		this.windowSizeNavi();
	},
	mounted(){
		this.windowSizeNavi();
	},
	beforeDestroy () {
      window.removeEventListener('resize', this.windowSizeNavi)
    },
	methods:{
		years(){
			this.portfolios.forEach(item => {
				this.date.push( item.year );	
			});
			this.uniqueYears = this.date.filter((item,index)=>{
				return this.date.indexOf(item) == index
			});
			this.uniqueYears.unshift('All');
		},
		showCurrentYears(year){
			if( this.windowWidth <= 768 ){
				this.isMenu = false;
			} else {
				this.isMenu = true;
			}
			this.$EventBus.$emit("showCurrentYears",year);
		},
		windowSizeNavi(){
			if( this.windowWidth <= 768 ){
				this.isMobile = true;
				this.isMenu = false;
			} else {
				this.isMobile = false;
				this.isMenu = true;
			}
		}
	}
}
</script>
<style scoped>
    /* mobile */
    .header {position:fixed;top:0px;left:0px;width:100%;height:64px;background-color:#efefef;border-bottom:1px solid #888;z-index: 100;transition:all 0.2s ease;}
	.header .inner {display:flex;justify-content:space-between;align-items:center;position:relative;padding:20px;width:100%;max-width:1160px;height:100%;margin:0 auto;box-sizing: border-box;}
    .header h1 {font-size:2.4rem;color:#333;}
	.header .current-year .fa-bars {font-size:2.2rem;color:#333;}
	.header nav {display:none;position:fixed;display:flex; flex-flow: column; justify-content: center; top:0px;left:0px;width:100%;height:100%;background-color:#efefef;}
	.header nav .close { position: absolute;right:20px;top:20px;}
	.header nav .close .fa-times {font-size:3rem;color:#333;}
	.header .gnb li {display:block;text-align:center;}
    .header .gnb li a {display:block;padding:10px 5px;font-size:1.8rem;color:#333;}
	.header .project-year p {font-size:1.8rem;}
	.view .header {opacity:0;z-index:10;}
	.navi-fade-enter-active, .navi-fade-leave-active {transform: translateY(0%);transition:transform .5s ease-in-out;}
	.navi-fade-enter, .navi-fade-leave-to {transform: translateY(-100%);}
	@media screen and (min-width: 550px) {
		.header {height:76px;}
		.header h1 {color:#333;}
    }
	@media screen and (min-width: 769px) {
		.header .inner {padding:20px 0;}
		.header nav {position: relative;}
		.header nav .close {display:none;}
		.header .gnb li {display:inline-block;}
		
	}

</style>