<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col space-y-4 font-bold text-blue-700">
    <RouterLink
      v-for="route in router.getRoutes()"
      :key="route.path"
      :to="route.path"
    >
      {{ route.path }}
    </RouterLink>
  </div>
</template>
