<template>
    <div class="flex-1 relative">
        <ul class="divide-solid divide-y divide-black overflow-y-scroll absolute top-0 bottom-0 left-0 right-0">
            <li v-for="result in props.results" :key="result.id" 
                class="flex flex-col hover:bg-gray-700" @click="() => selectSong(result.doc.id)">
                <h3>{{result.doc.title}}</h3>
                <p class="text-gray-500">{{result.doc.data.album}} - {{result.doc.data.artists[0]}}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import router from '../../router';

const props = defineProps({
    'results': Array
});

const selectSong = (index) => {
    console.log(props.results);
    console.log(index);
    router.push("/search/" + props.results[index].doc.data.id);
}

</script>
