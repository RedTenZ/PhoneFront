<script>
export default {
	name: 'topbar',
    props: ['color'],
    data(){
        return{
            time: '00:00'
        }
    },
    methods:{
        updateTime(){
            var date = new Date();
            this.time = this.zeroPrefix(date.getHours()) + ':' + this.zeroPrefix(date.getMinutes())
        },
        zeroPrefix(number){
            return number < 10 ? "0" + number : number;
        }
    },
    created(){
        setInterval(this.updateTime, 10000);
        this.updateTime();
    }
}
</script>
<template>
    <div class="top-bar">
        <span :style="{'color': color}">{{time}}</span>
        <span><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="15.000000pt" height="15.000000pt" viewBox="0 0 2004.000000 940.000000"
            preserveAspectRatio="xMidYMid meet">
           <g transform="translate(0.000000,940.000000) scale(0.100000,-0.100000)"
           :fill="color" stroke="none">
           <path d="M1864 9359 c-465 -34 -920 -245 -1259 -584 -352 -351 -551 -794 -585
           -1296 -7 -103 -10 -1063 -8 -2889 4 -3011 -1 -2786 63 -3040 123 -490 422
           -909 852 -1196 176 -117 387 -209 609 -265 254 -64 -346 -59 7390 -59 4875 0
           7075 3 7142 11 452 49 893 266 1213 596 159 164 266 316 364 516 105 216 170
           436 194 659 8 66 11 999 11 2892 0 3064 3 2892 -59 3140 -94 369 -270 676
           -542 943 -312 306 -664 482 -1119 560 -100 17 -432 18 -7130 19 -3864 1 -7075
           -2 -7136 -7z m14221 -1198 c313 -105 535 -357 584 -662 7 -43 11 -959 11
           -2807 0 -2461 -2 -2751 -16 -2820 -68 -333 -323 -588 -656 -656 -70 -15 -736
           -16 -7070 -16 -4787 0 -7013 3 -7057 11 -305 49 -557 271 -662 584 l-24 70 -3
           2795 c-3 3083 -7 2865 59 3022 104 246 333 437 587 492 58 12 1018 14 7122 13
           l7055 -2 70 -24z"/>
           <path d="M2448 7360 c-201 -34 -350 -163 -411 -355 l-22 -70 0 -2240 c0 -2145
           1 -2243 18 -2300 53 -173 189 -305 362 -350 53 -13 753 -15 6540 -15 5712 0
           6488 2 6538 15 32 8 81 27 110 41 67 34 177 144 211 211 60 119 56 -37 56
           2398 0 2461 5 2282 -63 2409 -58 110 -168 199 -297 243 -53 17 -267 18 -6525
           19 -3558 1 -6491 -2 -6517 -6z"/>
           <path d="M18682 4699 l3 -2144 45 3 c170 9 361 108 541 280 414 393 712 1101
           745 1767 28 562 -197 1268 -556 1740 -216 284 -482 467 -716 491 l-64 7 2
           -2144z"/>
           </g>
           </svg>
        </span>
        <span><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="20.000000pt" height="11.000000pt" viewBox="0 0 155.000000 159.000000"
            preserveAspectRaio="xMidYMid meet">
           
           <g transform="translate(0.000000,159.000000) scale(0.100000,-0.100000)"
           :fill="color" stroke="none">
           <path d="M1312 1510 c-63 -39 -62 -24 -62 -731 0 -578 2 -644 17 -676 46 -98
           189 -98 234 0 18 40 19 75 19 677 0 602 -1 637 -19 677 -33 71 -120 95 -189
           53z"/>
           <path d="M914 1261 c-59 -36 -59 -35 -59 -611 0 -483 1 -528 18 -557 48 -89
           194 -81 233 12 21 51 21 1049 0 1100 -29 68 -126 96 -192 56z"/>
           <path d="M518 1014 c-58 -31 -58 -35 -58 -490 l0 -416 39 -39 c32 -33 45 -39
           80 -39 54 0 97 22 121 63 19 30 20 53 20 435 0 437 0 437 -56 481 -32 25 -105
           28 -146 5z"/>
           <path d="M154 779 c-36 -10 -82 -53 -90 -83 -3 -12 -4 -151 -2 -309 l3 -289
           37 -34 c32 -29 45 -34 87 -34 38 0 56 6 79 25 51 43 53 57 50 367 l-3 286 -25
           27 c-42 44 -85 58 -136 44z"/>
           </g>
           </svg></span>
    </div>
</template>
<style>
    .top-bar {
        position: relative;
        top: 0;
        width: 100%;
        height: 21px;
        padding: 6px 25px;
        z-index: 2;
        pointer-events: none;
    }
    .top-bar > span {
        display: inline-block;
        vertical-align: middle;
        font-size: 13px;
        font-weight: 500;
    }
    .top-bar > span:nth-child(1) {
        float: left;
    }
    .top-bar > span:nth-child(2), .top-bar > span:nth-child(3) {
        float: right;
    }
</style>