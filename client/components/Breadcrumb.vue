<script setup lang="ts">
const props = defineProps({
  tag: Object,
})

const hasTag = (arg: object) => {
  return Object.keys(arg).length > 0
}
</script>

<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/">記事一覧</NuxtLink>
      </li>
      <li v-if="hasTag(tag)">
        <NuxtLink :to="`/tag/${tag.id}/page/1`">{{ tag.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
