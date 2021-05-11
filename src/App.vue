<template>
  <div id="app">
    <div id="wrap">
      <Header :headerdata="headerdata" />
      <div class='container'>
        <div id="content">
          <transition name="layout-fade">
            <component
              :is="layout" 
              :portfolio="portfolios"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Data from '../database/data.json'
import Header from '@/components/Header'
import * as layouts from '@/views/layouts'

export default {
  name: 'App',
  data(){
    return {
      portfolios : Data,
      layoutType : 'Grid',
      headerdata : null,
    }
  },
  components : {
    ...layouts,
    Header
  },
  computed:{
    layout(){
      return this.layoutType
    }
  },
  created(){
    this.$EventBus.$on("showProjectDetail", this.getProjectDetail);
    this.$EventBus.$on("backToList", this.getProjectList);
  },
  methods : {
    getProjectDetail(project){
      this.headerdata = project;
      this.portfolios = project;
      this.layoutType = "Detail"
    },
    getProjectList(){
      this.headerdata = null;
      this.portfolios = Data;
      this.layoutType = "Grid"
    }
  }
}
</script>

<style>
  @import url('assets/css/reset.css');
  @import url('assets/css/layout.css');

  .layout-fade-enter-active,
  .layout-fade-leave-acgtive {
    transition: all 0.3s ease;
  }  
  .layout-fade-enter,
  .layout-fade-leave-to {
    opacity: 0;
  }
</style>
