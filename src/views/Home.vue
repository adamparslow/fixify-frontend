<template>
    <div class="flex flex-col h-screen">
        <Header @menu-click="menuClick" />
        <div class="flex flex-1 items-stretch">
            <LeftNav :is-collapsed="leftNavCollapsed" />
            <router-view class="flex-1 flex" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from "../components/Home/Header.vue";
import LeftNav from "../components/Home/LeftNav.vue";

const leftNavCollapsed = ref(false);

const menuClick = () => {
    leftNavCollapsed.value = !leftNavCollapsed.value;
}
</script>

<style>
</style>
