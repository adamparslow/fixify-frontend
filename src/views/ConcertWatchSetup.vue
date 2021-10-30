<template>
    <div class="relative">
        <div class="flex flex-col absolute top-0 bottom-0 right-0 left-0">
            <div class="flex border-black border-b-2 items-center">
                <router-link class="bg-gray-500 p-2 rounded-md m-2 hover:bg-gray-700" to="/concert-watch">Back</router-link>
                <h1 class="text-xl">Setup</h1>
            </div>
            <div class="flex-1 relative">
                <ul class="overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 flex flex-wrap justify-center">
                    <SetupSquare v-for="(artist, index) in setupData" :key="index" :artist="artist" @open-modal="openModal" />
                </ul>
            </div>
        </div>
        <div v-if="modalState.open" class="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-10 bg-black bg-opacity-75">
            <RegisterModal :artist="modalState.artist" @register-artist="registerArtist" @close="close" />
        </div>
        <LoadingSpinnerModal :is-visible="loadingSetup"/> 
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import concertWatchService from '../service/backend/concertWatchService.js';
import SetupSquare from '../components/ConcertWatch/SetupSquare.vue';
import RegisterModal from '../components/ConcertWatch/RegisterModal.vue';
import LoadingSpinnerModal from "../components/LoadingSpinner/Modal.vue";

const setupData = ref([]);
const modalState = reactive({
    open: false,
    artist: {}
})
// const modalOpen = ref(false);
// const modalIndex = ref(0);
// const modalArtist = ref({});
// const modalArtistName = ref("");
// const modalArtistId = ref(0);

const close = () => {
    modalState.open = false;
}

const registerArtist = ({id, url}) => {
    concertWatchService.registerArtist(id, url);

    modalState.open = false;

    const index = setupData.value.map(artist => artist.id).indexOf(id);
    setupData.value.splice(index, 0);
    setupData.value = [...setupData.value];
}

const openModal = (artist) => {
    modalState.open = true;
    // modalArtistName.value = artist.name;
    // modalArtistId.value = artist.id;
    modalState.artist = artist;
    // modalIndex.value = i;
}

const loadingSetup = ref(true);
concertWatchService.getSetup()
    .then(response => {
        setupData.value = response;
        loadingSetup.value = false;
    });
</script>