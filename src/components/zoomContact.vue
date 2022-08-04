<script>
import topbar from './topbar.vue'
import bottombar from './bottombar.vue'
import returnBack from './returnBack.vue'

export default {
	name: 'zoom_contact',
    props: ['color'],
    components: {
        topbar,
        bottombar,
        returnBack
    }
}
</script>

<template>
    <div class="zoom_contact-app">
        <topbar color="#000"/>
        <div class="zoom_contact-content">
            <div class="contactId-top">
                <returnBack text="Contact" path="contact"/>
                <img src="../assets/app-icon/camera.png" class="contactId-img">
                <h2>Jane Appleseed</h2>
                <p>555-8596</p>
                <div class="contactId-boutton">
                    <div class="contactId-component">
                        <div class="contactId-messageicon">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="20.000000pt" height="30.000000pt" viewBox="0 0 256.000000 256.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                            fill="#FFF" stroke="none">
                            <path d="M1133 2340 c-374 -39 -702 -207 -890 -454 -58 -77 -127 -222 -149
                            -311 -24 -101 -21 -277 6 -380 53 -207 187 -397 373 -529 57 -40 67 -52 61
                            -70 -18 -59 -93 -143 -180 -199 -64 -42 -68 -67 -19 -112 103 -98 351 -91 554
                            15 42 22 100 58 128 80 l53 39 217 4 c234 5 293 14 455 67 203 68 350 158 493
                            304 72 73 113 125 148 186 288 513 -3 1091 -654 1298 -174 55 -417 81 -596 62z"/>
                            </g>
                            </svg>
                        </div>
                        <p>Message</p>
                    </div>
                    <div class="contactId-component">
                        <div class="contactId-callicon">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="20.000000pt" height="31.000000pt" viewBox="0 0 225.000000 225.000000"
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
                        </div>
                        <p>Appel</p>
                    </div>
                </div>
            </div>
            <div class="contactId-content">
                <div class="contactId-number">
                    <h4>Téléphone</h4>
                    <p>555-8596</p>
                </div>
                <hr>
                <div class="contactId-history">
                    <h4>Historique des appels</h4>
                    <div class="contactId-historyId">
                        <h5>25 Nov 15:07</h5><p>Sortant : 1 min 30 s</p>
                    </div>
                    <div class="contactId-historyId">
                        <h5>24 Nov 11:09</h5><p>Sortant : 2 min 15 s</p>
                    </div>
                    <div class="contactId-historyId">
                        <h5>23 Nov 16:15</h5><p>Sortant : 0 min 30 s</p>
                    </div>
                    <div class="contactId-historyId">
                        <h5>22 Nov 12:07</h5><p>Entrant : 4 min 20 s</p>
                    </div>
                </div>
            </div>
            User {{ $route.params.id }}
        </div>
        <bottombar color="#000"/>
    </div>
</template>

<style>
.zoom_contact-app {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 25px;
    z-index: 1;
}
.zoom_contact-content {
    position: relative;
    top: 7px;
    height: calc(100% - 32px);
    width: 100%;
}
.contactId-top {
    position: absolute;
    width: 100%;
    height: 300px;
    top: -40px;
    text-align: center;
    padding: 60px 20px;
    background-color: rgb(243, 243, 243);
}
.contactId-img {
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 50%;
}
.contactId-top > h2 {
    color: black;
    font-size: 25px;
    margin: 0;
}
.contactId-top > p {
    margin-top: 10px;
    color: rgb(114, 114, 114);
}
.contactId-boutton {
    position: relative;
    margin-top: 20px;
    display: flex;
    height: 60px;
    width: 180px;
    left: 50%;
    transform: translate(-50%, 0%);
}
.contactId-component {
    flex: auto;
    height: 60px;
    width: 60px;
}
.contactId-messageicon, .contactId-callicon {
    background-color: rgb(45, 126, 248);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    position: relative;
    transition: .2s;
}

.contactId-messageicon:hover, .contactId-callicon:hover {
    background-color: rgb(40, 105, 202);
    transition: .2s;
    cursor: pointer;
}
.contactId-component > p {
    margin: 0;
    color: rgb(45, 126, 248);
}
.contactId-content {
    position: relative;
    top: 270px;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
}
.contactId-number {
    position: relative;
    width: 100%;
    height: 50px;
}
.contactId-number > h4 {
    margin-bottom: 0;
    color: black;
}
.contactId-number > p {
    margin: 0;
    font-size: 20px;
    color: rgb(45, 126, 248);
}
.contactId-history {
    position: relative;
    width: 100%;
    height: 50px;
}
.contactId-history > h4 {
    margin: 0;
    font-size: 12px;
    color: rgb(153, 153, 153);
}
.contactId-historyId {
    margin: 0;
    height: 40px;
    width: 100%;
    display: flex;
}
.contactId-historyId > p, .contactId-historyId > h5{
    flex: auto;
    line-height: 40px;
    margin: 0;
    color: black;
}
.contactId-historyId > p {
    text-align: right;
    color: rgb(92, 92, 92);
}
</style>