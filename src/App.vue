<script>
  export default {
    name: 'App',
    data: function(){
      return{
        show: true
      } 
  }
}
</script>
  
<template>
  <div id="app">
    <div class="phone">
      <div class="coque"></div>
        <div class="phone-screen">
          <transition name="fade">
            <router-view v-if="show"></router-view>
          </transition>
      </div>
    </div>
  </div>
</template>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.4s, transform 0.4s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(0);
  }
  .cancel {
        position: absolute;
        left: 30px;
        top: 33px;
        color:rgb(70, 173, 233);
    }
    .router-link-active:hover > .cancel {
        text-decoration: underline;
    }
    .back-arrow {
        position: absolute;
        left: 10px;
        top: 30px;
        font-size: 30px;
        color:rgb(70, 173, 233);
        font-style:bold;
    }

  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serifa;
    color: white;
    font-size: 12px;
  }
  body {
    background-color: rgb(51, 51, 51);
  }
  .coque {
    position: absolute;
    z-index: 999;
    bottom: 20px;
    right: 40px;
    width: 350px;
    height: 710px;
    background-image: url("./assets/coque-purple.png");
    background-size: cover;
    background-repeat: no-repeat;
    pointer-events: none;
  }
  .phone-screen {
    position: absolute;
    background-image: url("./assets/basic-wallpaper.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    bottom: 32px;
    right: 58px;
    width: 314px;
    height: 685px;
    border-radius: 30px;
    display: flex;
  }
</style>