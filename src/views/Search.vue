<template>
   <div class="flex justify-center items-center h-screen" >
      <input v-on:input="(inputEl) => search(inputEl.srcElement.value)" type="text" placeholder="Search song..."/>
   </div>
</template>

<script>
import { Document } from "flexsearch"

export default {
   data: function () {
      return {
         flexDocument: new Document({
            tokenize: "forward", 
            document: {
               index: ["title"],
               store: true
            }
         })
      }
   },
   methods: {
      search: function (searchValue) {
         const results = this.flexDocument.search(searchValue, { enrich: true });
         console.log(results);
         results[0].result.forEach(result => {
            console.log(result);
         })
      }
   },
   created: function () {
      this.flexDocument.add({
         id: 1,
         title: "song 1",
      });
      this.flexDocument.add({
         id: 2,
         title: "abba babba",
      });
      this.flexDocument.add({
         id: 3,
         title: "abba",
      });
   }
}
</script>