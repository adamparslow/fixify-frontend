<template>
    <div class="bg-gray-500 rounded-md flex">
        <img :src="props.artist.image.url" class="h-40 w-40 m-2 rounded-full" />
        <form @submit.prevent="submit" class="flex flex-col items-center justify-evenly mx-3">
            <button class="self-end mt-2" @click="close">X</button>
            <h1 class="m-2">Register {{props.artist.name}}'s Touring Page</h1>
            <input name="url" :value="url" @input="updateUrl" placeholder="Touring Page URL" class="bg-gray-700 p-2 rounded-md m-2"/>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 py-2 px-4 m-2 rounded-3xl">Register</button>
        </form>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const url = ref("");

const props = defineProps({
    artist: Object
});

const emits = defineEmits(['register-artist', 'close']);

const updateUrl = (value) => {
    url.value = value.target.value;
    console.log(url.value);
}

const submit = (e) => {
    console.log(url.value);
    emits('register-artist', {
        id: props.artist.id, 
        url: url.value
    });
}

const close = () => {
    emits('close');
}

</script>