<script setup lang="ts">
const route = useRoute()

const page = Number(route.query.page || 1)
const query = ref(route.query.q)
const limit = 5
const offset = (page - 1) * limit
const params = {
  q: query.value,
  limit: limit,
  offset: offset,
}

const { data: posts, refresh } = await useFetch('/api/search', {
  params: params
})

// ページ数の計算
const totalCount = posts.value.totalCount
const numPages = Math.ceil(totalCount / limit)

const submit = async () => {
  await navigateTo({
    path: '/search',
    query: {
      q: query.value,
    }
  })
  params.q = query.value
  refresh()
}
</script>

<template>
  <div class="md:container md:mx-auto">
    <div>
      <form @submit.prevent="submit">
        <input
          type="text"
          v-model="query"
          class="input input-bordered w-full max-w-xs"
          placeholder="サイト内検索"
        />
      </form>
    </div>
    <PostList :posts="posts" />
    <PaginationWithSearch :numPages="numPages" :current="page" :q="(query as string)" />
  </div>
</template>
