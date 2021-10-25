<template>
   <div class="flex">
      <div class="flex-1 flex flex-col relative">
         <div class="flex-1 flex flex-col">
            <SearchBar @search="search" />
            <SongSearchResults :results="searchResults" />
         </div>
         <LoadingSpinnerModal :is-visible="isLoading" />
      </div>
      <div class="w-40 border-l-2 border-black flex flex-col">
         <BackupStatus />
      </div>
   </div>
</template>

<script setup>
import { Document } from "flexsearch"
import { ref } from 'vue';
import spotifyService from "../service/backend/spotifyService.js";
import LoadingSpinnerModal from "../components/LoadingSpinner/Modal.vue";
import SearchBar from "../components/Search/SearchBar.vue";
import SongSearchResults from "../components/Search/SongSearchResults.vue";
import BackupStatus from "../components/Search/BackupStatus.vue"

const flexDocument = new Document({
   tokenize: "forward", 
   document: {
      index: ["title"],
      store: true
   }
});

let fullResults = [];
let searchResults = ref([]);

const search = (searchValue) => {
   const results = flexDocument.search(searchValue, {enrich: true});
   console.log(results);
   searchResults.value = searchValue.length > 0 ? results[0].result : fullResults;
}

let isLoading = ref(true);

spotifyService.getLikedSongs().then(likedSongs => {
   likedSongs.forEach((song, index) => {
      if (song === null) return;
      const songData = {
         id: index,
         title: song.name,
         data: song
      };
      flexDocument.add(songData);
      fullResults.push({doc: songData});
      searchResults.value = fullResults;
   });
   isLoading.value = false;
}); 
</script>