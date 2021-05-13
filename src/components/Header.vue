<template>
    <header class='header' :style="style">
        <div class='inner'>
            <h1 :style="translatetop">{{ headertitle }}</h1>
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
        style(){
            if(this.headerdata != null) return {height:200+'px'}
            else return false 
        },
        translatetop(){
            if(this.headerdata != null) return {transform:`translate3d(${0},${100}px,${0})`}
            else return false;
        },
        isNavigation(){
            if(this.headerdata != null) return false
            else return true;
        }
    }
}
</script>

<style scoped>
    .header {position:relative;top:0px;left:0px;width:100%;height:80px;transition:all 0.5s ease;}
    .header .inner {overflow:hidden;padding-top:50px;width:100%;max-width:1160px;height:100%;margin:0 auto;box-sizing: border-box;}
    .header h1 {float:left; font-size:3rem;color:#333;transform:translate3d(0,0,0);transition:all 0.5s ease;}
    .header .gnb {float:right;}
    .header .gnb li {display:inline-block;}
    .header .gnb li a {display:block;padding:0 10px;font-size:2rem;color:#333;}
    .navi-enter-active, 
    .navi-leave-active {transition: all .5s ease;}
    .navi-enter, 
    .navi-leave-to {transform:translate3d(0,100px,0);opacity: 0;}
</style>