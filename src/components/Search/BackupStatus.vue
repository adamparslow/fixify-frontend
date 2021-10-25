<template>
    <div class="flex items-center">
        <Spinner v-if="isBackingUp" />
        <p class="text-2xl pl-1">Backup</p>
    </div>
</template>

<script setup>
import spotifyService from '../../service/backend/spotifyService.js';
import { ref } from 'vue';
import Spinner from "../StatusSpinner/Spinner.vue";

let isBackingUp = ref(true);

spotifyService.backupLikedSongs().then(() => {
    console.log("backup complete");
    isBackingUp.value = false;
});
</script>