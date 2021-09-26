<template>
    <div class="flex flex-col">
        <div class="border-b-2 border-black py-1 w-12" @click="toggleNav">
            <div class=" border border-white rounded-md p-1 px-2 hover:bg-gray-500"><MenuIcon /></div>
        </div>
        <div v-if="open" class="bg-gray-600 flex flex-col p-1 flex-1">
            <router-link class="nav-button hover:bg-blue-500" to="/">Home</router-link>
            <router-link class="nav-button hover:bg-green-500" to="/megamix">Megamix</router-link>
            <router-link class="nav-button hover:bg-red-500" to="/collage">Collage</router-link>
            <router-link class="nav-button hover:bg-purple-500" to="/moodring">Mood Ring</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { MenuIcon } from '@heroicons/vue/outline';

let open = ref(true);

function toggleNav() {
    open = !open.value;
}
</script>


<style scoped>
.nav-button {
    @apply p-3 px-8 text-xl border-b-2 border-black;
}
</style>