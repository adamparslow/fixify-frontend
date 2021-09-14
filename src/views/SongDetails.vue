<template>
    <div class="flex flex-col">
        <router-link to="/search">Back</router-link>
        {{$route.params.id}}    

        <hr>
        <h2 class="text-2xl">Playlists the Song is in</h2>
        <p v-for="(playlist, i) in playlists" v-bind:key="i">{{playlist}}</p>

        <hr>
        <h2 class="text-2xl">Audio Features</h2>
        <p v-for="(feature, i) in Object.keys(audioFeatures)" v-bind:key="i">{{feature}}:{{audioFeatures[feature]}}</p>

        <hr>
        <p>You liked this song on {{formatAddedAt}}</p>
    </div>
</template>

<script>
import spotifyService from "@/model/spotifyService.js";

export default {
    data: function () {
        return {
            playlists: [],
            audioFeatures: {},
            addedAt: new Date()
        }
    },
    computed: {
        formatAddedAt: function() {
            return `${this.addedAt.getDate()}/${this.addedAt.getMonth() + 1}/${this.addedAt.getFullYear()}`;
        }
    },
    created: async function() {
        const response = await spotifyService.getSongData(this.$route.params.id);

        this.playlists = response.playlists
        this.audioFeatures = response.audioFeatures;
        this.addedAt = new Date(response.addedAt);
    }
}
</script>
