<script lang="ts" setup>
import NavBar from '../components/NavBar.vue';

</script>

<template>
    <div class="bx-shadow">
        <NavBar/>
    </div>
    <router-view/>
</template>

<style>
    .bx-shadow{
        border-bottom: .2rem solid rgba(0, 0, 0, 0.1);
    }
</style>