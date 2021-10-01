<template>
    <div class="flex">
        <SearchIcon class="w-11 bg-white text-black p-2" />
        <input @input="onInput" type="text" placeholder="Search song..." class="flex-1 text-black outline-none p-2 bg-none"/>
    </div>
</template>

<script setup>
import { SearchIcon } from "@heroicons/vue/outline";
import { defineEmits } from 'vue'

const emits = defineEmits(['search'])

const onInput = inputEl => {
    emits('search', inputEl.srcElement.value);
}
</script>