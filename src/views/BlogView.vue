<template>
  <section class="padding-x min-h-svh pt-[20vh] pb-20">
    <div class="w-full max-w-5xl mx-auto mb-20 z-10 relative">
      <p class="blog-header-anim heading-6 font-mono font-bold tracking-[0.2em] text-flax-smoke-400 uppercase mb-4">
        [ Engineering Journal ]
      </p>
      <h1 class="blog-header-anim heading-display font-fancy font-bold leading-[0.85] tracking-tighter uppercase text-flax-smoke-900">
        Writing & <br/> <span class="text-flax-smoke-400">Thinking.</span>
      </h1>
    </div>

    <div class="blog-list-container w-full max-w-5xl mx-auto flex flex-col border-t-2 border-flax-smoke-200 z-10 relative">
      <router-link
        v-for="post in blogPosts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="blog-item-anim group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b-2 border-flax-smoke-100 hover:border-flax-smoke-900 transition-colors duration-500"
      >
        <div class="flex flex-col gap-4 md:w-1/3 mb-6 md:mb-0 pr-4">
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
          <h2 class="heading-3 font-fancy font-bold leading-tight mb-4 group-hover:translate-x-4 transition-transform duration-500 text-flax-smoke-900">
            {{ post.title }}
          </h2>
          <p class="heading-6 text-flax-smoke-600 text-balance font-medium">
            {{ post.excerpt }}
          </p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { blogPosts } from '@/data';
  import { animateBlogListEnter } from '@/animations'; // Adjust path if needed

  onMounted(() => {
    animateBlogListEnter();
  });
</script>