<template>
  <section class="padding-x min-h-svh pt-[20vh] pb-20 bg-flax-smoke-50 text-flax-smoke-900">
    <div class="w-full max-w-5xl mx-auto mb-20">
      <p class="heading-6 font-mono font-bold tracking-[0.2em] text-flax-smoke-400 uppercase mb-4">
        [ Engineering Journal ]
      </p>
      <h1 class="heading-display font-fancy font-bold leading-[0.85] tracking-tighter uppercase">
        Writing & <br/> <span class="text-flax-smoke-400">Thinking.</span>
      </h1>
    </div>

    <div class="w-full max-w-5xl mx-auto flex flex-col border-t border-flax-smoke-300">
      <router-link
        v-for="post in blogPosts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-flax-smoke-300 hover:bg-flax-smoke-100 transition-colors duration-300 px-4 -mx-4 rounded-lg"
      >
        <div class="flex flex-col gap-4 md:w-1/3 mb-6 md:mb-0">
          <p class="font-mono text-sm font-bold text-flax-smoke-500 uppercase">{{ post.date }}</p>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="text-xs font-bold uppercase tracking-widest text-flax-smoke-600 border border-flax-smoke-300 rounded-full px-3 py-1"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="md:w-2/3 flex flex-col items-start">
          <h2 class="heading-3 font-fancy font-bold leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">
            {{ post.title }}
          </h2>
          <p class="heading-6 text-flax-smoke-600 text-balance">
            {{ post.excerpt }}
          </p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { blogPosts } from '@/data';
</script>