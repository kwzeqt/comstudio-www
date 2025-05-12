---
layout: page
aside: false
sidebar: false
footer: true
---

<div class="mt-12 flex flex-col justify-center items-center p-10">
  <div class="text-4xl font-medium">FEATURED WORKS</div>
  <p class="text-lg font-medium text-center italic mt-2"><span class="text-red-400 font-medium">Please Note:</span> This is a temporary site. We're currently featuring our major anime projects, with more to come on our full website.</p>
</div>

<section class="mt-20 mx-auto my-25">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
    <div v-for="work in works" :key="work.id" class="flex flex-col justify-center items-center gap-4 max-w-lg">
      <div class="border-3 border-[var(--vp-c-brand-1)] rounded-xl p-3 w-full h-full bg-white/80 dark:bg-neutral-900 flex flex-col">
        <img class="w-full max-h-auto object-cover rounded-xl" :src="work.image" alt="{{ work.title }}">
        <div class="flex flex-col justify-center items-center flex-1">
          <div class="mt-4 text-xl p-1 mb-2 font-semibold">{{ work.title }}</div>
          <div class="text-neutral-600 dark:text-neutral-300 text-center mb-2">{{ work.description }}</div>
          <div class="text-sm text-neutral-400 mb-2">{{ work.status }}</div>
        </div>
      </div>
    </div>
  </div>
</section>

<script setup lang="ts">
interface Work {
  id: number;
  title: string;
  description: string;
  status: string;
  image: string;
}

const works: Work[] = [
  {
    id: 1,
    title: "Spy x Family",
    description: "The 2nd season of SPY×FAMILY.",
    status: "Collaboration",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142838-26JrqcFU1ljB.jpg"
  },
  {
    id: 2,
    title: "Boku No Hero Academia",
    description: "The 6th season of Boku No Hero Academia.",
    status: "Collaboration",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139630-3v4gxWtNZxLV.jpg"
  },
  {
    id: 3,
    title: "Urusei Yatsura",
    description: "The 1st season of Urusei Yatsura.",
    status: "Collaboration",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143277-snjd4UzsUl8M.jpg"
  },
  {
    id: 4,
    title: "LOTR: Rohan no Tatakai",
    description: "The 1st season of Lord of the Rings: Rohan no Tatakai.",
    status: "Collaboration",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx185613-9zocGYsTHeO5.jpg"
  },
  {
    id: 5,
    title: "Date a Live",
    description: "The 5th season of Date a Live.",
    status: "Collaboration",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151380-gvN5PjrybTw2.jpg"
  },
  {
    id: 6,
    title: "Boruto: Naruto Next Generations",
    description: "The 1st season of Boruto: Naruto Next Generations.",
    status: "Collaboration",
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-BnF6M5yTaNB1.jpg"
  },

];
</script>

<style scoped>
img {
  background: #e5e7eb;
}
.grid {
  width: 100%;
}
.card-fixed {
  width: 20rem;
  height: 24rem;
}
@media (max-width: 640px) {
  .max-w-xs {
    max-width: 18rem;
  }
  .card-fixed {
    width: 100%;
    height: 20rem;
  }
}
</style>
