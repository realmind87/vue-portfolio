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
import List from "@/views/list/List"
export default {
  name: 'App',
  data(){
    return {
      portfolios : [
        {
          id:0,
          name:'구축 1',
          type:'build',
          url:'www.naver.com',
          date:{
            start:202001,
            end:202002,
          }
        },
        {
          id:1,
          name:'운영 2',
          type:'manage',
          url:'www.naver.com',
          date:{
            start:202003,
            end:202004,
          }
        },
        {
          id:2,
          name:'구축 3',
          type:'build',
          url:'www.naver.com',
          date:{
            start:202003,
            end:202004,
          }
        },
        {
          id:3,
          name:'구축 4',
          type:'build',
          url:'www.naver.com',
          date:{
            start:202003,
            end:202004,
          }
        },
        {
          id:4,
          name:'운영 5',
          type:'manage',
          url:'www.naver.com',
          date:{
            start:202003,
            end:202004,
          }
        },
        {
          id:5,
          name:'구축 6',
          type:'build',
          url:'www.naver.com',
          date:{
            start:202003,
            end:202004,
          }
        }
      ]
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
