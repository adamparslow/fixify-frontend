<template>
    <div class="flex flex-col">
        <div class="flex h-screen items-stretch">
            <LeftNav />
            <div class="flex-1">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import LeftNav from "../components/Home/LeftNav.vue";

export default {
    name: "Home",
    components: {
        LeftNav
    },
};
</script>

<style>
</style>
