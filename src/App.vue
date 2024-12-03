<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ICourse } from "./model/type";

const data = ref<ICourse[]>();

const id = ref("");
const name = ref("");

const sendData = () => {
  fetch("http://localhost:3000/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const getData = () => {};

onMounted(() => {
  fetch("http://localhost:3000/courses")
    .then((response) => response.json())
    .then((data) => {
      data.value = data;
    });
});
</script>
<template>
  <div>
    <input v-model="id" type="text" name="" id="" />
    <input v-model="name" type="text" name="" id="" />
    {{ data ? data.map((item) => item.name) : "Sosal?" }}
    <button @click="sendData">Send</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
