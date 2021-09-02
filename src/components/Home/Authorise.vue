<template>
    <div>
        <header class="header-bar">
            <h1>Fixify</h1>
        </header>
        <article>
            <p>Please log into your spotify to gain access to Fixify</p>
            <a :href="backendUri + '/auth/login'" class="rounded-button">Log In</a>
        </article>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            backendUri: process.env.VUE_APP_BACKEND_URI
        }
    }
};
</script>


<style scoped>
article {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
