<template>
  <section class="padding-x min-h-svh pt-[15vh] pb-32 relative z-10">
    <div class="w-full max-w-3xl mx-auto">
      
      <router-link to="/blog" class="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-flax-smoke-500 hover:text-flax-smoke-900 transition-colors mb-12">
        <span>←</span> Back to Journal
      </router-link>

      <div v-if="isLoading" class="heading-4 font-mono animate-pulse text-flax-smoke-400">
        Loading data stream...
      </div>
      <div v-else-if="error" class="heading-4 font-mono text-flax-smoke-500">
        {{ error }}
      </div>

      <article v-else class="will-change-transform">
        <header class="mb-16 pb-12 border-b-2 border-flax-smoke-200">
          <p class="font-mono text-sm font-bold text-flax-smoke-500 uppercase mb-6">{{ postMeta?.date }}</p>
          <h1 class="heading-1 font-fancy font-bold leading-[0.9] tracking-tighter uppercase text-balance mb-8 text-flax-smoke-900">
            {{ postMeta?.title }}
          </h1>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="tag in postMeta?.tags" 
              :key="tag"
              class="text-xs font-bold uppercase tracking-widest bg-flax-smoke-900 text-flax-smoke-50 px-4 py-2 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <div class="markdown-content" v-html="parsedMarkdown"></div>
      </article>

    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { marked } from 'marked';
  import { blogPosts } from '@/data';

  const route = useRoute();
  const slug = route.params.slug as string;

  const isLoading = ref(true);
  const error = ref<string | null>(null);
  const parsedMarkdown = ref('');

  // Find the metadata from data.ts
  const postMeta = computed(() => {
    return blogPosts.find(post => post.slug === slug);
  });

  onMounted(async () => {
    if (!postMeta.value) {
      error.value = "Error 404: Post metadata not found.";
      isLoading.value = false;
      return;
    }

    try {
      // Fetch the raw markdown file from the public/blogs/ folder
      const response = await fetch(`/blogs/${slug}.md`);
      
      if (!response.ok) {
        throw new Error("Markdown file could not be loaded.");
      }

      const text = await response.text();
      parsedMarkdown.value = marked.parse(text) as string;
    } catch (err) {
      error.value = "Failed to load content. Please check the file path.";
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  });
</script>

<style>
/* Custom styling for the Markdown HTML. 
  This forces the parsed HTML to use your Tailwind variables. 
*/
.markdown-content {
  @apply font-fancy text-lg leading-relaxed text-flax-smoke-800;
}
.markdown-content h1, 
.markdown-content h2 {
  @apply font-fancy text-3xl md:text-4xl font-bold uppercase tracking-tight text-flax-smoke-900 mt-16 mb-6;
}
.markdown-content h3 {
  @apply font-fancy text-2xl font-bold text-flax-smoke-800 mt-10 mb-4;
}
.markdown-content p {
  @apply mb-6;
}
.markdown-content a {
  @apply underline decoration-flax-smoke-400 decoration-2 underline-offset-4 hover:decoration-flax-smoke-900 hover:text-flax-smoke-950 transition-colors;
}
.markdown-content ul {
  @apply list-disc list-inside mb-6 pl-4 space-y-2;
}
.markdown-content blockquote {
  @apply border-l-4 border-flax-smoke-900 pl-6 my-8 italic text-xl text-flax-smoke-600;
}
.markdown-content code {
  @apply font-mono text-sm bg-flax-smoke-200 text-flax-smoke-900 px-2 py-1 rounded-md;
}
.markdown-content pre {
  @apply bg-[#0f172a] text-flax-smoke-50 p-6 rounded-lg my-8 overflow-x-auto;
}
.markdown-content pre code {
  @apply bg-transparent text-flax-smoke-50 p-0 rounded-none;
}
</style>