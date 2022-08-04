<script>
import Vue from 'vue'
import icon from './icon.vue'
import topbar from './topbar.vue'
export default {
	name: 'main',
    components : {
        icon,
        topbar
    },
    data: function (){
        return{
            mainApps: [
                {
                    title: 'Mail',
                    iconURL: 'mail.png',
                    redirect: '/mail'
                },
                {
                    title: 'Notes',
                    iconURL: 'notes.png',
                    redirect: '/notes'
                },
                {
                    title: 'Photos',
                    iconURL: 'photos.png',
                    redirect: '/photos'
                },
                {
                    title: 'Paramètres',
                    iconURL: 'settings.png',
                    redirect: '/settings'
                },
                {
                    title: 'Horloges',
                    iconURL: 'clock.png',
                    redirect: '/clock'
                },
                {
                    title: 'Calculatrice',
                    iconURL: 'calculator.png',
                    redirect: '/calculator'
                },
                {
                    title: 'Musique',
                    iconURL: 'musique.png',
                    redirect: '/musique'
                },
                {
                    title: 'Maps',
                    iconURL: 'gps.png',
                    redirect: '/maps'
                }
            ],
            favApps: [
                {
                    //title: 'call',
                    iconURL: 'call.png',
                    redirect: '/call'
                },
                {
                    //title: 'contact',
                    iconURL: 'contact.png',
                    redirect: '/contact'
                },
                {
                    //title: 'sms',
                    iconURL: 'sms.png',
                    redirect: '/sms'
                },
                {
                    //title: 'camera',
                    iconURL: 'camera.png',
                    redirect: '/camera'
                }
            ],
        }
    }
}
</script>
<template>
    <div class="phone-container">
        <topbar color="#FFF"/>
        <div class="app-items">
            <div v-for="mainApp in mainApps" :key="mainApp.id" class="container-apps">
                <icon v-bind:title="mainApp.title" v-bind:iconURL="mainApp.iconURL" v-bind:redirect="mainApp.redirect"/>
            </div>
        </div>
        <div class="bottom-fav">
            <div v-for="favApp in favApps" :key="favApp.id">
                <icon v-bind:iconURL="favApp.iconURL" v-bind:redirect="favApp.redirect"/>
            </div>
        </div>
    </div>
</template>
<style>
    .phone-container {
        width: 100%;
    }
    .bottom-fav {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 95%;
        height: 70px;
        background-color: rgba(0, 0, 0, 0.3);
        bottom: 15px;
        border-radius: 20px;
        padding: 10px;
        backdrop-filter: blur(15px)
    }
    .app-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 25px;
        grid-auto-rows: 60px;
        justify-content: space-between;
        position: absolute;
        left: 50%;
        top: 35px;
        transform: translate(-50%, 0%);
        width: 100%;
        height: 83%;
        padding: 20px;
    }
    .container-apps {
        height: 6px;
    }
</style>