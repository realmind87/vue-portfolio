<template>
    <header class='header' :style="style">
        <div class='inner'>
            <h1 :style="translatetop">{{ headertitle }}</h1>
            <div class='gnb' v-show="isNavigation">
                <nav>
                    <ul>
                        <li><a href="#">2012</a></li>
                        <li><a href="#">2013</a></li>
                    </ul>
                </nav>
            </div>
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
            if(this.headerdata != null) return {background:'transparent',height:200+'px',}
            else return false 
        },
        translatetop(){
            if(this.headerdata != null) return { color:'#333', transform:`translate3d(${0},${60}px,${0})`}
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
    .header {position:relative;top:0px;left:0px;width:100%;height:80px;background:#000;transition:all 0.5s ease;}
    .header .inner {display:flex;align-items:center;width:100%;max-width:1160px;height:100%;justify-content:space-between; margin:0 auto;box-sizing: border-box;}
    .header h1 {font-size:2.4rem;color:#fff;transform:translate3d(0,0,0);transition:all 0.5s ease;}
    .header .gnb li {display:inline-block;}
    .header .gnb li a {display:block;padding:20px;font-size:2rem;color:#fff;}
</style>