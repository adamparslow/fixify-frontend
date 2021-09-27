<template>
    <div class="flex flex-col bg-gray-600">
        <div v-if="!props.isCollapsed" class="flex flex-col p-1 flex-1">
            <router-link class="nav-button hover:bg-blue-500" to="/">Home</router-link>
            <router-link class="nav-button hover:bg-green-500" to="/megamix">Megamix</router-link>
            <router-link class="nav-button hover:bg-red-500" to="/collage">Collage</router-link>
            <router-link class="nav-button hover:bg-purple-500" to="/moodring">Mood Ring</router-link>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    'isCollapsed': Boolean
})

console.log(props.isCollapsed);

</script>

<style scoped>
.nav-button {
    @apply p-3 px-8 text-xl border-b-2 border-black;
}
</style>