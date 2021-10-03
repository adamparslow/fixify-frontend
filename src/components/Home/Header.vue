<template>
    <div class="flex justify-between bg-gray-700">
        <div class="flex">
            <div class="w-10 hover-button" @click="menuClick"><MenuIcon /></div>
            <div class="flex items-center text-4xl"><p class="text-blue-500">Fixify</p></div>
        </div>
        <div class="flex items-center self-end" @click="logout"><p class="hover-button">Logout</p></div>
    </div>    
</template>

<script setup>
import { MenuIcon } from '@heroicons/vue/outline';
import { defineEmits } from 'vue';

const emit = defineEmits(['menu-click', 'logout'])

const menuClick = () => emit('menu-click');

const logout = () => emit('logout');
</script>

<style scoped>
.hover-button {
    @apply my-2 mx-4 rounded-md p-1.5 hover:bg-gray-500 cursor-pointer
}
</style>