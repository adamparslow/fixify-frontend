<template>
    <div class="flex flex-col">
        <Header @menu-click="menuClick" />
        <div class="flex h-screen items-stretch">
            <LeftNav :is-collapsed="leftNavCollapsed" />
            <div class="flex-1">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "../components/Home/Header.vue";
import LeftNav from "../components/Home/LeftNav.vue";

const leftNavCollapsed = ref(true);

const menuClick = () => {
    leftNavCollapsed.value = !leftNavCollapsed.value;
}
</script>

<style>
</style>
