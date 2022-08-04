// ./components/icon.vue
<script>
export default {
	name: 'icon',
    props: ['title', 'iconURL', 'redirect'],
}
</script>

<template>
    <div>
        <router-link class="icon" :style="{'background-image': 'url(' + require('@/assets/app-icon/' + iconURL) + ')'}" :to="redirect">
            <p class="app-name">{{title}}</p>
        </router-link>
    </div>
</template>

<style>
    .icon {
        position: relative;
        display: inline-block;
        align-items: center;
        height: 50px;
        width: 50px;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all .2s;
    }
    .icon:hover {
        transition: all .2s;
        filter: brightness(90%);
    }
    .app-name {
        font-size: 11px;
        width: 50px;
        position: absolute;
        bottom: -27px;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        text-shadow: 0px 0px 3px rgb(0, 0, 0);
    }
</style>