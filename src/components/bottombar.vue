<script>
export default {
    name: 'bottombar',
    props: ['color']
    }
</script>
<template>
    <router-link :to="'/'" ><div class="outline"><div :style="{'background-color': color}" class="bottombar"></div></div></router-link>
</template>
<style>
    .outline {
        height: 20px;
        position: absolute;
        bottom: 10px;
        width: 50%;
        left: 50%;
        transform: translate(-50%);
    }
    .bottombar {
        position: absolute;
        width: 90%;
        height: 7px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
    }
</style>