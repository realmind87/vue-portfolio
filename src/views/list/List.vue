<template>
    <div class="list">
        <transition-group name="project-list" tag="ul">
            <li v-for="(project , index) in portfolio" :key="index">
                <a href="#">{{ project.project_name }}</a>
            </li>
        </transition-group>
    </div>
</template>

<script>

const onResize = () => {
    console.log( 'resize' );
}

export default {
    name:"list",
    props:['portfolio'],
    mounted(){
        window.addEventListener('resize', onResize);
    },
    methods : {
    }
}
</script>

<style scoped>
    .list {text-align: center;}
    .list ul {width:100%;max-width:900px;display:inline-block;text-align:left;}
    .list ul li {display:inline-block;width:160px;margin:10px;vertical-align:middle;}
    .list ul li a {display:block;width:100%;height:160px;font-size:1.6rem;background-color:#fff;}
</style>