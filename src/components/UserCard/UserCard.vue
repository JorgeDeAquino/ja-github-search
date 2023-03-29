<template>
    <div class="UserCard">
        <h2>{{ user.login }}</h2>
        <img :src="user[0].avatar_url" alt="Avatar">
        <p>{{ user.bio }}</p>
        <p>{{ user.repos_url }}</p>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: ["user"]
}
</script>

<style src="./styles.scss" lang="scss" scoped />