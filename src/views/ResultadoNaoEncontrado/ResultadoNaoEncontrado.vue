<template>
    <section class="ResultadoNaoEncontrado">
        <div class="container">
            <img src="../../assets/images/important.svg" alt="Aviso!">
            <div class="aviso_text">
                <h2>
                    Desculpe!
                </h2>
                <p>
                    Não foi possível encontrar o repositório ou usuário desejado!
                </p>
            </div>
            <button>Certo</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ResultadoNaoEncontrado'
}
</script>

<style src="./styles.scss" lang="scss" scoped />