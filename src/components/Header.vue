<template>
    <header class='header' :class="{detailview:detailview}">
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
export default {
    name : "Header",
    props:['headerdata'],
    computed:{
        headertitle(){
            if(this.headerdata == null) return 'Portfolio'
            else return this.headerdata.project_name
        },
        isNavigation(){
            if(this.headerdata != null) return false
            else return true;
        },
        detailview(){
            if(this.headerdata != null) return true
            else return false;
        }
    },
    mounted(){
        console.log( this.headerdata );
    }
}
</script>

<style scoped>

    /* mobile */
    .header {position:fixed;top:0px;left:0px;width:100%;height:64px;border-bottom:1px solid #666;background-color:#efefef;transition:all 0.5s ease;z-index: 1000;}
    .header .inner {position:relative;padding:20px;width:100%;max-width:1160px;height:100%;margin:0 auto;box-sizing: border-box;}
    .header h1 {font-size:2.4rem;color:#333;transform:translate3d(0,0,0);transition:all 0.5s ease;}
    .header .gnb {display:none;}
    .header .gnb li {display:inline-block;}
    .header .gnb li a {display:block;padding:5px 10px;font-size:1.6rem;color:#fff;}
    
    .header.detailview {position:relative;height:100px;border-bottom:none;}
    .header.detailview h1 {color:#333;transform:translate3d(0,40px,0);}
    
    @media screen and (min-width: 550px) {
        .header {position:relative;}
        .header h1 {color:#333;}
        .header .gnb {display:block;position:absolute;right:0px;top:20px;}
        .header .gnb li a {color:#333;}
        .header.detailview h1 {color:#333;transform:translate3d(0,40px,0);}
        .header .navi-enter-active, 
        .header .navi-leave-active {transition: all .5s ease;}
        .header .navi-enter, 
        .header .navi-leave-to {transform:translate3d(0,40px,0);opacity: 0;}
    }

    @media screen and (min-width: 1200px) {
        .header {height:100px;border-bottom:none;}
        .header .inner {padding:60px 0px 0px;}
        .header .gnb {top:60px;}
        .header.detailview {height:140px;}
    }

</style>