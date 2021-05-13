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
    }
}
</script>

<style scoped>

    /* mobile */
    .header {position:relative;width:100%;height:64px;background-color:#333;transition:all 0.5s ease;}
    .header .inner {position:relative;padding:20px;width:100%;max-width:1160px;height:100%;margin:0 auto;box-sizing: border-box;}
    .header h1 {font-size:2.4rem;color:#fff;transform:translate3d(0,0,0);transition:all 0.5s ease;}
    .header .gnb {display:none;}
    .header .gnb li {display:inline-block;}
    .header .gnb li a {display:block;padding:5px 10px;font-size:1.6rem;color:#fff;}
    
    .header.detailview {background-color:transparent;height:80px;}
    .header.detailview h1 {color:#333;transform:translate3d(0,15px,0);}
    
    @media screen and (min-width: 550px) {
        .header {height:100px;background-color:transparent;}
        .header .inner {padding:60px 0px 0px;}
        .header h1 {color:#333;}
        .header .gnb {display:block;position:absolute;right:0px;top:60px;}
        .header .gnb li a {color:#333;}
        .header.detailview {background-color:transparent;height:140px;}
        .header.detailview h1 {color:#333;transform:translate3d(0,40px,0);}
        .header .navi-enter-active, 
        .header .navi-leave-active {transition: all .5s ease;}
        .header .navi-enter, 
        .header .navi-leave-to {transform:translate3d(0,40px,0);opacity: 0;}
    }

</style>