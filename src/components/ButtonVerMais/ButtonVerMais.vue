<template>
    <button class="btn_ver-mais" @click="verMais">Ver mais</button>
</template>

<script>
export default {
    name: 'ButtonVerMais',
    methods: {
        verMais() {
            console.log("teste")
        }
    }
}
</script>

<style src="./styles.scss" lang="scss" scoped />