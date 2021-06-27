<template>
    <div>
        <h1>Test</h1>
        <xmp>
            {{ this.portfolios }}
        </xmp>
    </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';

export default {
    name : 'vuex',
    data(){
        return {}
    },
    computed: {
        ...mapState({
            portfolios: 'data',
            pureData: 'data',
            layout: 'layout',
            isView: 'isView',
            isScroll: 'isScroll',
            timer: 'timer',
        })
    }
}
</script>

<style scoped>

</style>