<template>
    <div class="flex flex-col h-screen">
        <Header @menu-click="menuClick" @logout="logout" />
        <div class="flex flex-1 items-stretch">
            <LeftNav :is-collapsed="leftNavCollapsed" />
            <router-view class="flex-1 flex" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Home/Header.vue";
import LeftNav from "../components/Home/LeftNav.vue";
import tokenHandler from "@/model/tokenHandler.js";
import router from "@/router";

const logout = () => {
    tokenHandler.setAccessToken(null);
    tokenHandler.setRefreshToken(null);
    router.push("/authorise");
};

const menuClick = () => {
    leftNavCollapsed.value = !leftNavCollapsed.value;
};

const leftNavCollapsed = ref(false);

if (!tokenHandler.getAccessToken()) {
    router.push("/authorise");
}
</script>


<style>
</style>
