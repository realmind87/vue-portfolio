<template>
  <div id="app">
    <div id="wrap">
      <div class='container'>
        <div id="content">
          <List v-bind:portfolio="portfolios"></List>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Data from '../database/data.json'
import List from "@/views/Grid/GridList";
export default {
  name: 'App',
  data(){
    return {
      portfolios : Data,
    }
  },
  components : {
    List
  }
}
</script>

<style>
  @import url('assets/css/reset.css');
  @import url('assets/css/layout.css');
</style>
