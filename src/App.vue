<template>
  <div id="app">
    <div id="wrap">
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
      portfolios : Data,
      layout : Grid,
      headerdata : null,
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
      this.headerdata = project;
    },
    onBackHeader(){
      this.headerdata = null;
    }
  }
}
</script>

<style>
  @import url('assets/css/reset.css');
  @import url('assets/css/layout.css');
</style>
