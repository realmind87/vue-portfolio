<template>
    <div class="list">
        <ul>
            <li v-for="(project , index) in portfolio" :key="index">
                <a href="#">{{ project.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"list",
    props:['portfolio']
}
</script>

<style scoped>
    .list {}
    .list ul {display: flex; flex-wrap: wrap;}
    .list ul li {flex-shrink: 0;  width:160px;margin:10px;}
    .list ul li a {display: block;width:100%;height:160px;font-size:1rem;background-color:#fff;}
</style>