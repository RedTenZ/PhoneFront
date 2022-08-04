<script>
export default {
	name: 'returnBack',
    props: ['text', 'path']
}
</script>
<template>
    <router-link class="returnBack" :to="'/' + path">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="20.000000pt" height="25.000000pt" viewBox="0 0 256.000000 256.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
        fill="#74C0F5" stroke="none">
        <path d="M1450 2017 c-38 -19 -577 -665 -591 -708 -9 -30 -9 -42 3 -67 9 -16
        134 -177 279 -357 285 -354 298 -367 365 -345 46 16 74 54 74 101 0 36 -19 63
        -241 339 l-241 300 240 287 c131 159 244 298 250 310 27 49 1 116 -53 139 -42
        17 -53 17 -85 1z"/>
        </g>
        </svg>
        <p>{{text}}</p>
    </router-link>
</template>
<style>
    .returnBack {
        display: flex;
        position: absolute;
        cursor: pointer;
        left: 0;
        text-decoration: none;
        top: 40px;
        line-height: 32px;
    }
    .returnBack:hover > p {
        text-decoration: underline;
    }
    .returnBack > p {
        color: #74C0F5;
        margin: 0;
    }
</style>