<template>
    <header class='header' ref='header' :class="{line:isLine}">
        <div class='inner'>
            <h1>{{ headertitle }}</h1>
            <transition name='navi'>
                <div class='gnb' v-if="isNavigation">
                    <nav>
                        <ul>
                            <li><a href="#">2012</a></li>
                            <li><a href="#">2013</a></li>
                        </ul>
                    </nav>
                </div>
            </transition>
        </div>
    </header>
</template>
<script>
import windowScroll from '@/mixins/scroll.js'
export default {
    name : "Header",
    props:['headerdata'],
	mixins:[windowScroll],
	data(){
		return {
			headerHeight : 0,
		}
	},
    computed:{
        headertitle(){
            if(this.headerdata == null) return 'Portfolio'
            else return this.headerdata.project_name
        },
        isNavigation(){
            if(this.headerdata != null) return false
            else return true;
        },
		isLine(){
			if(this.headerHeight < this.scrollTop) return true;
			else return false;
		}
    },
	mounted(){
		this.isLineScroll();
	},
	methods : {
		isLineScroll(){
			this.headerHeight = this.$refs.header.offsetHeight
		}
	}
}
</script>
<style scoped>
    /* mobile */
    .header {position:fixed;top:0px;left:0px;width:100%;height:64px;background-color:#efefef;border-bottom:1px solid transparent;transition:all 0.5s ease;z-index: 1000;}
	.header .inner {display:flex;justify-content:space-between;align-items:center;position:relative;padding:20px;width:100%;max-width:1160px;height:100%;margin:0 auto;box-sizing: border-box;}
    .header h1 {font-size:2.4rem;color:#333;}
    .header .gnb {display:none;}
    .header .gnb li {display:inline-block;}
    .header .gnb li a {display:block;padding:5px 10px;font-size:1.6rem;color:#fff;}
	.header.line {border-color:#888;}
	.view .header,
	.view .header.line {border-color:transparent;}
    .view .header {height:100px;}
	.view .header .inner {align-items:flex-end;}

	.scroll .header {position: relative;}
    
	@media screen and (min-width: 550px) {
		.header {height:76px;}
		.header h1 {color:#333;}
        .header .gnb {display:block;}
        .header .gnb li a {color:#333;}
        .header .navi-enter-active, 
        .header .navi-leave-active {transition: all .5s ease;}
        .header .navi-enter, 
        .header .navi-leave-to {opacity: 0;}
    }
    @media screen and (min-width: 1200px) {
        .view .header {height:140px;}
    }
</style>