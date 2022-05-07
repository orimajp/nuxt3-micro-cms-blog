<script setup lang="ts">
import { Tag } from '../server/api/types';

interface Props {
  tags: {
    contents: Array<Tag>
  }
}

const router = useRouter()
const props = defineProps<Props>()

const goTagIndex = (tag: Tag) => {
  router.push(`/tag/${tag.id}/page/1`)
}
</script>

<template>
  <div>
    <span
      v-for="tag in tags.contents"
      :key="tag.id"
      class="badge badge-outline mr-2 tag-button"
      @click="goTagIndex(tag)"
    >
      {{ tag.name }}
    </span>
  </div>
</template>

<style scoped>
.tag-button {
  cursor: pointer;
}
</style>