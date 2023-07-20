<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goToFeed = () => {
    router.push('/newsfeed')
}

</script>

<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="row py-2 mt-4 pt-4 border border-primary bg-light position-relative shadow-sm rounded">
                <div class="position-absolute bg-primary text-white ml-3 p-0 m-0 px-1 shadow-sm" style="left:7px;top:-12px; width: fit-content">
                    <b>Login form</b>
                </div>
                <form class="login-form p-4">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" @click="goToFeed()" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>