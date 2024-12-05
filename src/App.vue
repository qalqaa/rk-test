<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Api } from "./data/api";
import { ICourse } from "./model/type";

const data = ref<ICourse[]>();

const id = ref("");
const name = ref("");

async function handlePost() {
  Api.postCourse({ id: id.value, name: name.value }).finally(() => {
    renderCourses();
  });
}
const renderCourses = async () => {
  data.value = await Api.getCourses();
};

onMounted(async () => {
  renderCourses();
});
</script>
<template>
  <div class="bebra2">
    <input v-model="id" type="text" name="" id="" />
    <input v-model="name" type="text" name="" id="" />
    {{ data ? data.map((item) => item.name) : "Sosal?" }}
    <button @click="handlePost">Send</button>
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

.bebra {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
</style>
