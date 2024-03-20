<template>
    <div>
        <div class="w-25">
            <input v-model="name" type="text" class="form-control mt-3 mb-3" placeholder="name">
            <input v-model="email" type="email" class="form-control mb-3" placeholder="email">
            <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
            <input v-model="confirm_password" type="password" class="form-control mb-3" placeholder="confirm password">
            <input @click.prevent="store" type="submit" class="btn btn-primary ">
            <div v-if="error" class="text-danger">{{ this.error}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registration",

        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                error: null
            }
        },

        methods: {
            store() {
                axios.post('/api/users', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password
                })
                .then( res => {
                    localStorage.setItem('access_token', res.data.access_token);
                    this.$router.push({name: 'user.personal'});
                    console.log(res);
                })
                .catch( error => {
                    this.error = error.response.data.error;
                })
            }
        }
    }
</script>

<style scoped>

</style>
