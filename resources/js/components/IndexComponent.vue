<template>
    <div>
        <router-link :to="{ name: 'fruit.index'}" class="px-2">List</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.login'}" class="px-2">Login</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.register'}" class="px-2">Register</router-link>
        <router-link v-if="accessToken" :to="{ name: 'user.personal'}" class="px-2">Personal</router-link>
        <a href="#" @click.prevent="logout" v-if="accessToken">Logout</a>
        <router-view  :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
    import api from "../api";

    export default {
        name: "Index",

        data() {
            return {
                accessToken: '',
            }
        },

        mounted() {
            this.getAccessToken()
        },

        updated() {
            this.getAccessToken()
        },

        methods: {
            getAccessToken() {
                this.accessToken = localStorage.getItem('access_token');
            },

            logout() {
                api.post('/api/auth/logout')
                .then( res => {
                    localStorage.removeItem('access_token');
                    this.$router.push({name: 'user.login'});
                })
            }
        }
    }
</script>
