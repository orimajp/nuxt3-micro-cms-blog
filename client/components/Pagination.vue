<script setup lang="ts">
const router = useRouter()

const props = defineProps({
  numPages: Number,
  corrent: Number,
  selectedTagId: String,
})

const goPage = (p: number) => {
   if (props.selectedTagId) {
     router.push(`/tag/${props.selectedTagId}/page/${p}`)
   } else {
    router.push(`/page/${p}`)
   }
}

const isCurrentPage = (p: number) => p === props.corrent
</script>

<template>
  <div class="btn-group place-content-center">
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
