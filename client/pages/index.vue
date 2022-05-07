<script setup lang="ts">
//import { Post } from '~/server/api/types';
const route = useRoute()
const page = Number(route.params.p || 1)
const selectedTagId = route.params.tagId === undefined ? '' : route.params.tagId as string

const limit = 5
const offset = (page - 1) * limit
const params = { limit: limit, offset: offset }

if (selectedTagId) {
  params['tagId'] = selectedTagId
}

const { data: posts } = await useFetch('/api/postList', {
  params: params
})
const { data: tags } = await useFetch('/api/tagList')

const totalCount = posts.value.totalCount
const numPages = Math.ceil(totalCount / limit)

const selectedTagObject = selectedTagId !== ''
    ? tags.value.contents.find((tag) => tag.id === selectedTagId) : {}
</script>

<template>
  <div class="md:container md:mx-auto">
    <div>
      <aside>
        <!-- キーワード検索、タグ一覧 -->
        <SearchForm class="mb-2" />
        <Tags :tags="tags" class="mb-4" />
      </aside>
      <section>
        <Breadcrumb :tag="selectedTagObject" />
        <PostList :posts="posts" />
      </section>
    </div>
    <Pagination
      :numPages="numPages"
      :corrent="page"
      :selectedTagId="selectedTagId"
      class="mb-8"
    />
  </div>
</template>