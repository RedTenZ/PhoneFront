// ./components/call.vue
<script>
import topbar from './topbar.vue'
import bottombar from './bottombar.vue'
import zoomContact from './zoomContact.vue'

export default {
	name: 'contact',
    components:{
        topbar,
        bottombar
    },
    data: function(){
        return{
            search: '',
            contactList : [
                {
                    id:1,
                    name:"Luc Besson",
                },
                {
                    id:2,
                    name:"Anne Hathaway",
                },
                {
                    id:3,
                    name:"James Bond",
                },
                {
                    id:4,
                    name:"Odile Josset",
                },
                {
                    id:5,
                    name:"Jean Reno",
                },
                {
                    id:6,
                    name:"Vivien Leigh",
                },
                {
                    id:7,
                    name:"Emma Stone",
                },
                {
                    id:8,
                    name:"Eva Green",
                },
                {
                    id:9,
                    name:"Edgard Dantas",
                },
                {
                    id:10,
                    name:"Alonzo Church",
                },
                {
                    id:11,
                    name:"Andy Warhol",
                },
                {
                    id:12,
                    name:"Alain Barret",
                }
            ]
        }
    },
    computed:{
        filteredList(){
            var sorted = [];
            var tab = this.contactList
            for(var key in tab) {
                sorted[sorted.length] = this.contactList[key].name;
            }
            sorted.sort();
            for(var i in tab){
                tab[i]["name"] = sorted[i];
            }
            return tab.filter(contact => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>

<template>
    <div class="contact-app">
        <topbar color="#000"/>
        <h1>Contacts</h1>
        <input type="text" class="search-bar" v-model="search" placeholder="Rechercher">
        <div class="my-number">
            <img src="../assets/app-icon/img-contact.png" class="img-contact">
            <div class="my-number-desc">
                <p>Moi</p>
                <span>555-5555</span>
            </div>
        </div>
        <hr>
        <div class="contacts">
            <router-link class="contact-container" v-for="contact in filteredList" :key="contact.id" :to="'/contact/' + contact.id">
                <hr>
                <div class="contact" >
                    <img src="../assets/app-icon/camera.png">
                    <a>{{contact.name}}</a>
                </div>
            </router-link>
        </div>
        <bottombar color="#000"/>
    </div>
</template>

<style>
    .contact-app {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 25px;
        z-index: 1;
        text-align: center;
    }
    h1 {
        position: absolute;
        font-weight: bold;
        top: 40px;
        margin-left: 10px;
        font-size: 30px;
        color: black;
        text-align: left;
    }
    .search-bar {
        position: absolute;
        top: 105px;
        height: 30px;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 200px;
        color: rgb(24, 24, 24);
        font-size: 15px;
        border: none;
        padding: 10px;
        background-color: rgb(188, 229, 236);
        border-radius: 7px;
    }
    .my-number {
        width: 100%;
        height: 60px;
        position: absolute;
        top: 145px;
        padding: 5px 20px;
        transition: .2s;
    }
    .my-number:hover {
        background-color: rgb(226, 226, 226);
        transition: .2s;
    }
    .img-contact {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
        float: left;
    }
    .my-number-desc {
        position: relative;
        top: 5px;
    }
    .my-number-desc > p {
        margin: 0;
        display: flex;
        color: black;
        font-size: 15px;
        font-weight: bold;
    }
    .my-number-desc > span {
        color: rgb(134, 134, 134);
        display: flex;
    }
    .contact {
        width: 100%;
        height: 40px;
        text-align: left;
        padding: 5px 20px;
        transition: .2s;
    }
    .contact:hover {
        background-color: rgb(226, 226, 226);
        transition: .2s;
    }
    .contact-container:nth-child(1) > hr {
        display: none;
    }
    .contact-container > hr {
        position: relative;
        margin: 1px 15px;
        width: 90%;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 5px;
    }
    .contact-app > hr {
        position: absolute;
        top: 205px;
        margin: 1px 15px;
        width: 90%;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 5px;
    }
    .contact > img {
        float: left;
        height: 30px;
        width: 30px;
        margin-right: 20px;
        border-radius: 50%;
    }
    .contact > a {
        color: black;
        line-height: 28px;
    }
    .contacts{
        position: relative;
        top: 180px;
        height: calc(100% - 214px);
        width: 100%;
        overflow-y: scroll;
    }

    ::-webkit-scrollbar {
    display: none;
    }

    * {
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch; /* Touch scroll by default */
    }

</style>