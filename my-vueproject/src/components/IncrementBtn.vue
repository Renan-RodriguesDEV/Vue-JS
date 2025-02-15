<template>
    <div>
        <button class="increment" @click="handleClick" :disabled="disabled">increment

        </button>
    </div>
</template>
<script>
export default {
    name: "IncrementBtn",
    props: {
        disabled: Boolean,
    },
    methods: {
        handleClick() {
            this.$emit('increment')
        }
    }
}
</script>
<style>
.increment {
    background: #2fff00;
    display: flex;
}

.increment:hover {
    background: #00883686;
    display: flex;
}
</style>