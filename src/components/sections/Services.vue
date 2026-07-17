<template>
  <section id="services" class="padding-x mb-20">
    <div class="flex w-full flex-col text-flax-smoke-800">
      <h3
        id="what-i-do"
        v-html="whatIDo"
        class="heading-1 font-extrabold uppercase"
      ></h3>

      <div
        id="services-text"
        class="grid-gap text-flax-smoke-800 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-800/85 col-span-4 col-start-0 text-center text-nowrap md:col-start-4"
        >
          ( SERVICES )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold md:col-span-5"
        >
  I design and build software that transforms complex ideas into practical products. From intelligent AI-powered systems to scalable backend platforms and polished user experiences, I enjoy creating technology that is reliable, efficient, and built for real-world impact.
        </p>
      </div>
    </div>

    <div class="relative mt-12 w-full lg:mt-[10%] text-flax-smoke-800/85">
      <div class="mt-12 flex flex-col justify-between gap-y-16 text-flax-smoke-800/85">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :key="index"
          :number="index + 1"
          :title="card.title"
          
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          class="border-flax-smoke-800 sticky border-t bg-[#0B0B0A]"
          :class="getStyle(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { ServicesCard } from '..';

  const whatIDo = ref('My services /');

  const servicesCardProps = [
    {
      title: 'AI & Machine Learning',
      body: 'I build intelligent applications that can understand data, automate workflows, and assist users in making better decisions. My focus is on integrating modern AI into real products rather than building models that remain only as research.',
      headings: ['Machine Learning', 'Generative AI', 'Intelligent Automation'],
      shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
    },
    {
      title: 'Full-Stack Engineering',
      body: 'I develop modern web and mobile applications with clean architecture, responsive interfaces, and scalable backend systems. I enjoy taking products from an initial concept to a production-ready solution while keeping performance and user experience at the center.',
      headings: [
        'React & Next.js',
        'Flutter Development',
        'Component Architecture',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" />
  </svg>
  `,
    },
    {
      title: 'Backend & Infrastructure',
      body: 'I build reliable backend services capable of processing large volumes of data, supporting distributed systems, and powering modern applications. My work focuses on designing maintainable architectures that remain efficient as products grow.',
      headings: [
        'Distributed Systems',
        'Cloud Infrastructure',
        'Data Engineering',
      ],
      shape: `<svg  viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" />
  </svg>
  `,
    },
  ];

  onBeforeMount(() => {
    whatIDo.value = textSplitterIntoChar('What I do /', true);
  });

  onMounted(() => {
    animateSplitText('#what-i-do .letters', '#services-text', 0.7, 0.01, 0);
  });

  const getStyle = (index: number) => {
    if (index === 0) {
      return 'top-[calc(20vh_+_0em)] mb-[17.25em]';
    }

    if (index === 1) {
      return 'top-[calc(20vh_+_5.75em)] mb-[11.5em]';
    }

    if (index === 2) {
      return 'top-[calc(20vh_+_11.5em)] mb-[5.75em]';
    }
  };
</script>