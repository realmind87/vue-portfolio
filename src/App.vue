<template>
  <div id="app">
    <div id="wrap" :class="{view:isView,scroll:isScroll}">
      <Header :headerdata="headerdata" />
      <div class='container'>
        <div id="content">
            <component
              :is="layout"
              :portfolio="portfolios"
            />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Data from '../database/data.json'
import Header from '@/components/Header'
import Grid from '@/views/layouts/grid/GridList';
export default {
  name: 'App',
  data(){
    return {
		portfolios:Data,
		layout:Grid,
		headerdata:null,
		isView:false,
		isScroll:false,
		timer:null,
	}
  },
  components : {
    Header,
    Grid,
  },
  created(){
    this.$EventBus.$on('showProjectDetail', this.onHeader);
    this.$EventBus.$on('backToList', this.onBackHeader);
  },
  methods : {
    onHeader(project){
		this.isView = true;
		this.headerdata = project;
		this.setScrollEvent();
	
    },
    onBackHeader(){
		this.isView = false;
		this.headerdata = null;
		this.removeScrollEvent();
    },
	setScrollEvent(){
		this.timer = setTimeout(() => {
			this.isScroll = true;
		}, 600);
	},
	removeScrollEvent(){
		this.isScroll = false;
	}
  }
}
</script>

<style>
  @import url('assets/css/reset.css');
  @import url('assets/css/layout.css');
</style>
