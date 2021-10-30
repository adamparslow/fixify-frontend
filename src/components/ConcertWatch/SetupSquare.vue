<template>
    <li class="p-2 text-center flex flex-col justify-between items-center bg-gray-700 m-2 relative cursor-pointer hover:bg-gray-500" 
        @mouseenter="mouseEnter" @mouseleave="mouseLeave" @click="click">
        <img :src="props.artist.image.url" class="h-40 w-40 rounded-full" :alt="`${props.artist.name} profile image`"/>
        <p>{{getArtistName()}}</p>
        <button v-if="mouseOver" class="absolute bottom-10 right-4 bg-green-500 rounded-2xl w-8 h-8">+</button>
        <!-- <button class="bg-gray-500 p-2 rounded-md m-2 hover:bg-gray-700">Register</button>  -->
    </li>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const MAX_ARTIST_NAME_LENGTH = 17;

const mouseOver = ref(false);

const emits = defineEmits(['open-modal'])
const props = defineProps({ artist: Object });

const getArtistName = () => 
    props.artist.name.length > MAX_ARTIST_NAME_LENGTH ? 
        props.artist.name.substring(0, MAX_ARTIST_NAME_LENGTH) + "..." : props.artist.name;

const mouseEnter = () => mouseOver.value = true;
const mouseLeave = () => mouseOver.value = false;
const click = () => emits('open-modal', props.artist);

</script>