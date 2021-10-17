<template>
    <div>Getting spotify information</div>
</template>

<script>
import tokenHandler from "../../service/tokenHandler.js";

export default {
    created: function () {
        const queryString = this.$route.params.query;

        const [accessToken, refreshToken, expiresAt] = queryString
            .split("&")
            .map((query) => query.split("=")[1]);

        tokenHandler.setAccessToken(accessToken);
        tokenHandler.setRefreshToken(refreshToken);
        tokenHandler.setExpiresAt(expiresAt);

        this.$router.push("/");
    },
};
</script>

<style scoped>
</style>