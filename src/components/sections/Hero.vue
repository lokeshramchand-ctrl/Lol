<template>
  <section class="padding-x mb-[-100svh] py-0 relative">
    <div
      id="hero"
      class="sticky top-0 flex min-h-svh w-full flex-col justify-center pt-[15vh] pb-[5vh]"
    >
      <!-- TOP: Massive Headline -->
      <div class="w-full z-10 flex flex-col">
        <h1 class="heading-display font-fancy font-bold leading-[0.85] tracking-tighter text-flax-smoke-900 uppercase">
          <span class="block">Engineering</span>
          <span class="block text-flax-smoke-400">Enterprise AI.</span>
        </h1>
      </div>

      <!-- BOTTOM: Architectural Divider & Content Grid -->
      <div class="w-full z-10 mt-12 sm:mt-20 lg:mt-24 border-t-2 border-flax-smoke-200 pt-8 sm:pt-12 grid grid-cols-12 gap-y-10 sm:gap-6 items-start">
        
        <!-- Column 1: The Star Anchor -->
        <div class="col-span-full sm:col-span-2 flex justify-start">
          <Star id="star" class="size-12 sm:size-16 text-flax-smoke-500 will-change-transform" />
        </div>

        <!-- Column 2: Biography -->
        <div class="col-span-full sm:col-span-6 lg:col-span-7 flex flex-col overflow-hidden">
          <p
            v-html="whoAmI"
            id="whoAmI"
            class="who-am-i heading-5 w-full max-w-[50ch] text-balance font-medium leading-snug text-flax-smoke-700"
          ></p>
        </div>

        <!-- Column 3: Contact Button -->
        <div class="col-span-full sm:col-span-4 lg:col-span-3 flex sm:justify-end origin-left sm:origin-right overflow-hidden relative">
          <div id="contact-btn" class="flex -translate-y-full will-change-transform scale-110 sm:scale-100">
            <Button label="Get in touch" url="https://wa.me/919121661507" />
          </div>
        </div>

      </div>

      <!-- Scroll Indicator (Bottom Left) -->
      <div class="absolute bottom-8 left-[3%] overflow-hidden flex items-center gap-4">
        <svg
          id="down-arrow"
          stroke="currentColor"
          fill="none"
          stroke-width="1.5"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="m-0 size-6 -translate-y-full p-0 text-flax-smoke-500 will-change-transform"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="6" x2="12" y2="18"></line>
          <polyline points="7 13 12 18 17 13"></polyline>
        </svg>
        <span class="font-fancy font-bold uppercase tracking-widest text-xs text-flax-smoke-400">
          Scroll to explore
        </span>
      </div>
    </div>
    
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { Star } from '../design';
  import { Button } from '@/components/common';
  import { textSplitterIntoChar } from '@/functions';

  const whoAmI = ref(
    'I specialize in clean full-stack web architectures and production-grade MLOps. Currently focused on designing event-driven RAG systems and end-to-end Enterprise Twin architectures.'
  );

  onBeforeMount(() => {
    whoAmI.value = textSplitterIntoChar(whoAmI.value);
  });
</script>