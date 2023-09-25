<script setup lang="ts">
import axios from 'axios';
import {ref} from "vue";

const name = ref('');
const email = ref('');
const address = ref('');
const gender = ref('');

const sendData = async () => {
    //console.log(name.value, email.value, address.value, gender.value);
    console.log(await axios({
        url: 'http://localhost:3000/api/records',
        method: 'post',
        data: {
            name: name.value,
            email: email.value,
            address: address.value,
            gender: gender.value
        }}));
}
</script>

<template>
    <div class="home">
        <form @submit.prevent="sendData">
            <div class="form-control">
                <label for="name">Name</label>
                <input v-model="name" id="name" type="text">
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input v-model="email" id="email" type="email">
            </div>
            <div class="form-control">
                <label for="address">Address</label>
                <input v-model="address" id="address" type="text">
            </div>
            <div class="form-control">
                <label for="gender">Gender</label>
                <span>Male <input v-model="gender" id="gender" type="radio" value="male"></span>
                <span>Female <input v-model="gender" id="gender" type="radio" value="female"></span>
            </div>
            <input type="submit" class="send" value="Send">
        </form>
    </div>
</template>

<style scoped>
.form-control {
    padding: 5px;
}

.form-control label {
    display: block;
}

.send {
    margin: 5px
}
</style>
