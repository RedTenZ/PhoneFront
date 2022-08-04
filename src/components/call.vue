// ./components/call.vue
<script>
import topbar from './topbar.vue'
import bottombar from './bottombar.vue'

export default {
	name: 'call',
    components:{
        topbar,
        bottombar
    },
    methods:{
        addNumber : function(n){
            if(document.getElementById("input-number").value.length==3) {
                document.getElementById("input-number").value+= "-";
            }
            document.getElementById("input-number").value+=n;
        },
        removeNumber: function(n){
            var str = document.getElementById("input-number").value;
            if(str.length==5) str = str.substr(0, str.length - 1);
            str = str.substr(0, str.length - 1);
            document.getElementById("input-number").value=str;
        },
        keyPressed(event){
            if(isFinite(event.key) || event.keyCode==106){
                if(document.getElementById("input-number").value.length==3) {
                    document.getElementById("input-number").value+= "-";
                }
                document.getElementById("input-number").value+=event.key;
            }
            if(event.keyCode==8){
                var str = document.getElementById("input-number").value;
                if(str.length==5) str = str.substr(0, str.length - 1);
                str = str.substr(0, str.length - 1);
                document.getElementById("input-number").value=str;
            }
            if(event.keyCode==46){
                document.getElementById("input-number").value="";
            }
        }
    },
    mounted(){
        window.addEventListener('keyup', this.keyPressed, event);
    },
    beforeDestroy(){
        window.removeEventListener('keyup', this.keyPressed, event);
    }
}

</script>

<template>
    <div class="call-app" id="princ">
        <topbar color="#000"/>
        <input type="tel" id="input-number" disabled="disabled">
        <button id="del-button" @click="removeNumber()" >
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="20.000000pt" height="28.000000pt" viewBox="0 0 200.000000 200.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M524 1590 c-59 -30 -477 -453 -503 -511 -26 -55 -26 -112 -2 -164 26
            -55 463 -489 513 -510 56 -23 1280 -23 1336 1 49 20 90 60 113 109 17 37 19
            73 19 486 l0 447 -28 53 c-22 43 -38 59 -81 81 l-53 28 -637 0 c-617 0 -637
            -1 -677 -20z m1311 -106 c43 -17 45 -41 45 -484 0 -443 -2 -467 -45 -484 -9
            -3 -296 -6 -638 -6 l-621 0 -223 223 c-123 122 -226 232 -230 245 -3 12 0 35
            6 51 7 15 110 125 230 244 l217 217 621 0 c342 0 629 -3 638 -6z"/>
            <path d="M852 1238 c-29 -29 -13 -61 75 -150 l88 -88 -88 -88 c-88 -89 -104
            -121 -75 -150 26 -26 54 -11 143 78 l90 90 90 -90 c56 -57 97 -90 111 -90 23
            0 54 29 54 51 0 7 -42 55 -92 106 l-93 93 93 93 c50 51 92 99 92 108 0 21 -32
            49 -56 49 -11 0 -58 -38 -109 -90 l-90 -90 -90 90 c-89 89 -117 104 -143 78z"/>
            </g>
            </svg>
        </button>
        <div class="pad">
            <button v-for="n in 9" v-bind:id="n" :key="n" @click="addNumber(n)">{{ n }}</button>
            <button id="*" @click="addNumber('*')">*</button>
            <button id="0" @click="addNumber('0')">0</button>
            <button id="#" @click="addNumber('#')">#</button>
            <button id="call-button">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="30.000000pt" height="30.000000pt" viewBox="0 0 225.000000 225.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                fill="#FFF" stroke="none">
                <path d="M450 2050 c-55 -15 -73 -27 -112 -70 -60 -64 -113 -174 -129 -264
                -15 -91 -2 -170 57 -334 94 -260 181 -392 408 -617 226 -224 361 -311 631
                -405 138 -48 246 -61 336 -40 113 27 250 114 285 182 8 16 22 64 30 105 12 67
                12 79 0 99 -9 12 -70 52 -138 90 -68 37 -145 82 -173 100 -83 54 -103 59 -140
                32 -17 -13 -59 -54 -92 -93 -92 -106 -107 -119 -141 -112 -37 7 -189 98 -273
                163 -136 104 -286 288 -363 447 -27 53 -27 58 -13 81 9 13 47 50 84 82 147
                128 155 146 100 229 -19 28 -62 102 -97 165 -93 169 -102 180 -153 179 -23 0
                -71 -9 -107 -19z"/>
                </g>
                </svg>
            </button>
        </div>
        <bottombar color="#000"/>
    </div>
</template>

<style>
    .call-app {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 25px;
        z-index: 1;
        text-align: center;
    }
    .call-app > input {
        position: relative;
        top: 100px;
        height: 50px;
        width: 180px;
        color: black;
        font-size: 40px;
        text-align: center;
        border: none;
        border-bottom: none;
        background-color: transparent;
    }
    #del-button {
        position: absolute;
        background-color: rgb(233, 233, 233);
        top: 110px;
        right: 20px;
        height: 40px;
        width: 40px;
        border: none;
        border-radius: 50%;
        transition: all .2s;
    }
    #del-button:hover {
        background-color: rgb(209, 209, 209);
        transition: all .2s;
    }
    .pad {
        position: relative;
        top: 150px;
    }
    .pad > button {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        text-align: center;
        background-color: rgb(233, 233, 233);
        border: none;
        color: rgb(0, 0, 0);
        font-size: 25px;
        font-weight: bold;
        margin: 7px 12px;
        transition: all .2s;
    }
    .pad > button:hover {
        background-color: rgb(209, 209, 209);
        transition: all .2s;
    }
    #call-button{
        background-color: rgb(72, 236, 67);
        transition: all .2s;
    }
    #call-button:hover {
        background-color: rgb(62, 201, 57);
        transition: all .2s;
    }
    #call-button > svg{
        position: absolute;
        transform: translate(-50%, -50%);
    }
</style>