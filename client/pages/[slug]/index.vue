<script setup lang="ts">
import * as cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'

const route = useRoute()
const slug: string | string[] = route.params.slug

const { data: article } = await useFetch(`/api/postDetail`, {
  params: { slug: slug },
})

// hljsクラスをつける
const $ = cheerio.load(article.value.text);
$('pre code').each((_, elm) => {
  const result = hljs.highlightAuto($(elm).text());
  $(elm).html(result.value);
  $(elm).addClass('hljs');
})
const body = $.html()
</script>

<template>
  <div class="md:container md:mx-auto mb-8">
    <div class="mb-2">
      <span class="mr-2">{{ $formatDate(article.publishedAt) }}</span>
      <span v-for="tag in article.tag" :key="tag.id" class="badge badge-outline mr-2">
        {{ tag.name }}
      </span>
    </div>
    <h1 class="text-xl border border-gray-400 p-1 mb-4">{{ article.title }}</h1>
    <div class="prose" v-html="body" />
  </div>
</template>
