<script setup lang="ts">
const query = ref('')

const canSubmit = () => {
  return !!query.value && !/^\s+$/.test(query.value)
}

const submit = () => {
  if (canSubmit()) {
    return navigateTo({
      path: '/search',
      query: {
        q: query.value
      }
    })
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submit">
      <input
        type="text"
        v-model="query"
        class="input input-bordered w-full md:max-w-xs"
        placeholder="サイト内検索"
      />
    </form>
  </div>
</template>
