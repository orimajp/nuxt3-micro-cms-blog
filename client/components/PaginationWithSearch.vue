<script setup lang="ts">
const router = useRouter()

const props = defineProps({
  numPages: Number,
  current: Number,
  q: String,
})

const goPage = (p: number) => {
  return navigateTo({
    path: '/search',
    query: {
      q: props.q,
      page: p,
    }
  })  
}

const isCurrentPage = (p: number) => p === props.current
</script>

<template>
  <div class="btn-group">
    <button
      v-for="num in numPages"
      :key="num"
      class="btn btn-lg"
      :class="[ isCurrentPage(num)? 'btn-active' : '' ]"
      @click="goPage(num)"
    >
      {{ num }}
    </button>
  </div>
</template>
