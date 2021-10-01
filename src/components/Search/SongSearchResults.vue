<template>
    <div class="flex-1 relative">
        <ul class="divide-solid divide-y divide-black overflow-y-scroll absolute top-0 bottom-0 left-0 right-0">
            <li v-for="result in props.results" :key="result.id" 
                class="flex flex-col">
                <h3>{{result.doc.title}}</h3>
                <p class="text-gray-500">{{result.doc.data.album}} - {{result.doc.data.artists[0]}}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    'results': Array
});

</script>
