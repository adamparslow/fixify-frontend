<template>
    <div class="flex flex-col h-screen">
        <Header @menu-click="menuClick" @logout="logout" />
        <div class="flex flex-1 items-stretch">
            <LeftNav :is-collapsed="leftNavCollapsed" />
            <router-view class="flex-1 flex" />
        </div>
    </div>
</template>

<script>
import Header from "../components/Home/Header.vue";
import LeftNav from "../components/Home/LeftNav.vue";
import tokenHandler from "@/model/tokenHandler.js";

export default {
    data: function() {
        return {
            leftNavCollapsed: false
        };
    },
    methods: {
        logout: function() {
            tokenHandler.setAccessToken(null);
            tokenHandler.setRefreshToken(null);
            this.$router.push("/authorise");
        },
        menuClick: function() {
            this.leftNavCollapsed = !this.leftNavCollapsed;
        }
    },
    created: function() {
        if (!tokenHandler.getAccessToken()) {
            this.$router.push("/authorise");
        }
    },
    components: {
        Header,
        LeftNav
    }
}
</script>


<style>
</style>
