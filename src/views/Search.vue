<template>
   <div class="flex justify-center items-center h-screen">
      <div class="flex flex-col bg-gray-200 p-4">
         <router-link to="/" class="rounded-button">Home</router-link>
         <input v-on:input="(inputEl) => search(inputEl.srcElement.value)" 
         type="text" placeholder="Search song..." class="text-black outline-none"/>
         <ul class="divide-solid divide-y divide-black">
            <li v-for="(result, index) in this.searchResults" :key="result.doc.id" 
               class="text-black flex flex-col" :class="{ 'bg-gray-400': index == focusedElement }">
               <h3>{{result.doc.title}}</h3>
               <p class="text-gray-500">{{result.doc.data.album}} - {{result.doc.data.artists[0]}}</p>
            </li>
         </ul>
      </div>
      <LoadingSpinnerModal :is-visible="this.isLoading" />
   </div>
</template>

<script>
import { Document } from "flexsearch"
import spotifyService from "@/model/spotifyService.js";
import LoadingSpinnerModal from "@/components/LoadingSpinner/Modal.vue";

export default {
   data: function () {
      return {
         flexDocument: new Document({
            tokenize: "forward", 
            document: {
               index: ["title"],
               store: true
            }
         }),
         searchResults: [],
         isLoading: false,
         focusedElement: 0
      }
   },
   methods: {
      search: function (searchValue) {
         const results = this.flexDocument.search(searchValue, { enrich: true });
         this.searchResults = results.length > 0 ? results[0].result.slice(0, 10) : [];
         this.focusedElement = 0;
         console.log(this.searchResults);
      },
      getLikedSongs: async function () {
         return await spotifyService.getLikedSongs();
      },
      moveFocus(direction) {
         if (direction > 0 && this.focusedElement > 0) {
            this.focusedElement--;
         } else if (direction < 0 && this.focusedElement < 9) {
            this.focusedElement++;
         }
      },
      selectSong() {
        this.$router.push("/search/" + this.searchResults[this.focusedElement].doc.data.id);
      },
      keypress(e) {
         if (e.key == "ArrowUp") {
            this.moveFocus(1);
         } else if (e.key == "ArrowDown") {
            this.moveFocus(-1);
         } else if (e.key == "Enter") {
            this.selectSong();
         }
      }
   },
   created: function () {
      window.addEventListener('keydown', this.keypress);

      this.isLoading = true;
      this.getLikedSongs().then(likedSongs => {
         console.log(likedSongs);
         likedSongs.forEach((song, index) => {
            if (song === null) return;
            this.flexDocument.add({
               id: index,
               title: song.name,
               data: song
            });
         });
         this.isLoading = false;
      }); 
   },
   destroyed: function() {
      window.removeEventListener('keydown', this.keypress);
   },
   components: {
      LoadingSpinnerModal
   }
}
</script>