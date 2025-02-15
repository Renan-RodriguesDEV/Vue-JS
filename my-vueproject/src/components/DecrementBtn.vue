<template>
    <div>
        <button class="decrement" @click="handleClick" :disabled="disabled">Decrement</button>
    </div>
</template>
<script>
export default {
    name: 'DecrementBtn',
    props: {
        disabled: Boolean,
    },
    methods: {
        handleClick() {
            this.$emit('decrement')
        }
    }
}
</script>
<style>
.decrement {
    background: #ff0000;
    display: flex;
  
}

.decrement:hover {
    background: #8b000081;
    display: flex;
}
</style>