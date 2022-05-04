<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 12));
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world! {{ counter }}</h1>
</template>
