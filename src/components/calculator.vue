// ./components/call.vue
<script>
import topbar from './topbar.vue'
import bottombar from './bottombar.vue'

export default {
	name: 'calculator',
    components:{
        topbar,
        bottombar
    },
    data(){
        return{
            calcul :0,
            show : 0,
        }
    },
    methods:{
        reverseString(){
            var splitString = this.calcul.split("");
            var reverseArray = splitString.reverse();
            var joinArray = reverseArray.join("");
            this.show = joinArray;
        },
        operate(e){
            if(this.calcul != 0){
                this.calcul += e;
                this.calcul = this.calcul.toString()
                this.reverseString()
            }else{
                if(e!=0){
                    this.calcul = e;
                    this.calcul = this.calcul.toString()
                    this.reverseString()
                }
            }


            //Text qui s'ajuste
            var txt = document.getElementById("calc")
            if(this.calcul.length > 5){
                if(this.calcul.length < 10){
                    for(let i=5; i <= this.calcul.length; i++){
                        txt.style.fontSize=(100-((i-5)*10))+"px"
                        txt.style.top=(150+((i-5)*10))+"px"
                    }
                }
            }else{
                txt.style.fontSize="100px"
                txt.style.top="155px"
            }
            
        },
        equal(){
            this.calcul = eval(this.calcul).toString();
            this.reverseString()
        },
        cleanAll(){
            this.calcul = 0;
            this.show = 0;
        },
        toggle(){
            this.calcul===""||this.calcul.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.calcul.startsWith("-")?this.calcul = Math.abs(eval(this.calcul)).toString(): this.calcul="-("+this.calcul+")";
            this.equal();
            this.reverseString()
        },
    },
    created(){
        window.addEventListener('keyup', event => {
            if(isFinite(event.key) || event.keyCode==106 || event.keyCode==107 || event.keyCode==109 || event.keyCode==110 || event.keyCode==111 || event.keyCode==192){
                this.operate(event.key);
            }
            if(event.keyCode==8){
                if(this.calcul.length == 1){
                    this.calcul = "0";
                    this.reverseString()
                }else{
                    this.calcul = this.calcul.substr(0, this.calcul.length - 1);
                    this.reverseString()
                }
            }
            if(event.keyCode==13){
                this.equal()
            }
        });
    }
}
</script>

<template>
    <div class="calculator-app">
        <topbar color="#FFF"/>
        <div class="value" v-cloak ><p id="calc">{{show}}</p></div>
        <div class="buttons-container">
            <div class="button function ac" @click="cleanAll()">AC</div>
            <div class="button function pm" @click="toggle()">±</div>
            <div class="button function percent" @click="operate('%')">%</div>
            <div class="button operator division" @click="operate('/')">÷</div>
            <div class="button number-7" @click="operate(7)">7</div>
            <div class="button number-8" @click="operate(8)">8</div>
            <div class="button number-9" @click="operate(9)">9</div>
            <div class="button operator multiplication" @click="operate('*')">×</div>
            <div class="button number-4" @click="operate(4)">4</div>
            <div class="button number-5" @click="operate(5)">5</div>
            <div class="button number-6" @click="operate(6)">6</div>
            <div class="button operator subtraction" @click="operate('-')">−</div>
            <div class="button number-1" @click="operate(1)">1</div>
            <div class="button number-2" @click="operate(2)">2</div>
            <div class="button number-3" @click="operate(3)">3</div>
            <div class="button operator addition" @click="operate('+')">+</div>
            <div class="button number-0" @click="operate('0')">0</div>
            <div class="button decimal" @click="operate('.')">.</div>
            <div class="button operator equal" @click="equal()">=</div>
        </div>
        <bottombar color="#FFF"/>
    </div>
</template>

<style>
    .calculator-app {
        background: rgb(0, 0, 0);
        border-radius: 25px;
        color: white;
        height: 100%;
        position: absolute;
        width: 100%;
    }
    .value {
        width: 100%;
        height: 260px;
        text-align: right;
    }
    .value > p {
        unicode-bidi:bidi-override;
        direction: rtl;
        overflow:auto;
        position: absolute;
        font-size: 100px;
        width: calc(100% - 10px);
        font-weight: 300;
        text-align: right;
        margin: -10px;
        top: 150px;
    }
    .buttons-container {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        padding: 5px;
    }
    .button {
        align-items: center;
        background: #333;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        font-size: 30px;
        height: 65px;
        justify-content: center;
        transition: filter .2s;
        width: 65px;
    }
    .button:hover {
        filter: brightness(.8);
        transition: filter .2s;
    }
    .button.function {
        color: black;
        background: #a5a5a5;
    }
    .button.operator {
        background: #f1a33c;
    }
    .button.number-0 {
        border-radius: 55px;
        grid-column: 1 / span 2;
        justify-content: flex-start;
        padding-left: 25px;
        width: 140px;
    }
</style>