<template>
    <header class='header' :style="style">
        <div class="inner">
            <h1 :style="translatetop">{{ headertitle }}</h1>
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
            if(this.headerdata == null) {
                return {
                    background:'#ccc',
                    height:100+'px',
                }
            } else {
                return {
                    background:'transparent',
                    height:200+'px',
                }
            }
        },
        translatetop(){
            if(this.headerdata == null){
                return {
                    transform:`translateY(${0}px)`,
                }
            } else {
                return {
                    transform:`translateY(${50}px)`,
                }
            }
        },
    }
}
</script>

<style scoped>
    .header {position:relative;top:0px;left:0px;width:100%;height:100px;background:#ccc;transition:all 0.5s ease;}
    .header .inner {display:flex;align-items:center;width:100%;max-width:1200px;height:100%;margin:0 auto;padding:0 10px;box-sizing: border-box;}
    .header h1 {font-size:2.4rem;transform:translateY(0px); transition:all 0.5s ease;}
</style>