<template>
  <main class="relative min-h-full">
    <Hero />
    <div class="text-flax-smoke-200 relative rounded-t-3xl bg-[#0B0B0A] py-[5%]">
      <Services />
      <Marquee />
      <Works />
    </div>
    <aboutMe />
    <People />
    <Contact />
  </main>
</template>

<script setup lang="ts">
  import {
    Hero,
    People,
    Services,
    Works,
    aboutMe,
    Contact,
  } from '@/components/sections';
  import { Marquee } from '@/components/design';
</script>