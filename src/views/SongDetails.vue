<template>
    <div class="flex flex-col">
        <router-link to="/search">Back</router-link>
        {{$route.params.id}}    
    </div>
</template>

<script>
import spotifyService from "@/model/spotifyService.js";

export default {
    created: async function() {
        const response = await spotifyService.getSongData(this.$route.params.id);
        console.log(response);
    }
}
</script>
