<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000));
</script>

<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-4 text-xl"
  >
    <p>Here's a counter:</p>
    <div class="flex items-center justify-center gap-2">
      <button
        @click="counter = counter + jumpValue"
        class="
          px-4
          py-2
          font-bold
          text-white
          bg-green-500
          rounded
          hover:bg-green-700
        "
      >
        +
      </button>
      <span
        class="
          px-4
          py-2
          font-bold
          bg-green-100
          text-green-500
          rounded
          hover:bg-green-700
        "
        >{{ counter }}</span
      >
      <button
        @click="counter--"
        class="
          px-4
          py-2
          font-bold
          text-white
          bg-green-500
          rounded
          hover:bg-green-700
        "
      >
        -
      </button>
    </div>
    <div class="flex items-center justify-center gap-2">
      <p>Faster: {{ jumpValue }}</p>
      <input
        type="number"
        name="number1"
        @input="update_number1"
        placeholder="Jump value"
        class="
          w-30
          px-4
          py-2
          font-bold
          border-green-500 border-2
          text-green-700
          bg-green-100
          rounded
        "
      />
    </div>
  </div>
</template>
