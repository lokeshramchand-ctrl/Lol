<template>
  <svg
    class="w-full fill-flax-smoke-900"
    viewBox="0 0 1000 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- The `<g>` wrapper maintains the GSAP animation classes -->
    <g class="translate-y-full will-change-auto origin-bottom">
      <text
        x="50%"
        y="110"
        text-anchor="middle"
        font-family="var(--font-fancy, 'Bricolage Grotesque', sans-serif)"
        font-weight="800"
        font-size="120"
        letter-spacing="-0.03em"
        style="text-transform: uppercase;"
      >
        Lokesh Ram Chand
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
  // Component setup logic (empty as animations are handled via CSS/GSAP classes)
</script>

<style scoped>
  /* Fallback to ensure correct rendering if CSS variables fail to load */
  text {
    font-family: 'title', 'Bricolage Grotesque', sans-serif;
  }
</style>