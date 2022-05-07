<script setup lang="ts">
import { Post } from '../server/api/types';

interface Props {
  posts: {
    contents: Array<Post>
  }
}

const props = defineProps<Props>()
const pageLink = (post: Post) => `/${post.id}`
</script>

<template>
  <article v-for="post in posts.contents" :key="post.id" class="mb-8">
    <span class="mr-2">{{ $formatDate(post.publishedAt) }}</span>
    <span v-for="tag in post.tag" :key="tag.id" class="badge badge-outline mr-2">
      {{ tag.name }}
    </span>
    <NuxtLink :to="pageLink(post)" class="prose">
      <h1>{{ post.title }}</h1>
    </NuxtLink>
  </article>
</template>
