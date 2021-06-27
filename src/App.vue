<template>
  <div id="app">
    <div id="wrap" :class="{view:isView,scroll:isScroll}">
      <Header :portfolios="portfolios" />
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
/* eslint-disable */
import DB from '../database/data.json';
import Header from '@/components/Header';
import Grid from '@/views/layouts/grid/GridList';
import { mapState } from 'vuex';
export default {
  name: 'App',
  data(){
    return {
      portfolios: DB,
      pureData: DB,
	  	layout:Grid,
      isView: false,
      isScroll: false,
      timer: null,
	  }
  },
  components : {
    Header,
    Grid,
  },
  computed: {
    ...mapState({
    })
  },
  created(){
    this.$EventBus.$on('showProjectDetail', this.onHeader);
    this.$EventBus.$on('backToList', this.onBackHeader);
	  this.$EventBus.$on('showCurrentYears', this.showCurrentYears);
  },
  methods : {
    onHeader(){
		  this.isView = true;
		  this.setScrollEvent();
    },
    onBackHeader(){
		  this.isView = false;
		  this.removeScrollEvent();
    },
	setScrollEvent(){
		  this.timer = setTimeout(() => {
			this.isScroll = true;
		}, 600);
	},
	removeScrollEvent(){
		this.isScroll = false;
	},
	showCurrentYears( year ){
		let years = [];
		if( year == 'All' ) {
			this.portfolios = this.pureData;
		} else {
			years = this.pureData.filter((item)=>{
				return item.year == year
			});
			this.portfolios = years;
		}
	}
  }
}
</script>
<style>
  @import url('assets/css/reset.css');
  @import url('assets/css/layout.css');
</style>
