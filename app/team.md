---
layout: page
footer: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/78265854?s=96&v=4',
    name: 'Kwzeqt',
    title: 'Full Stack Developer',
    links: [
      { icon: 'discord' },
      { icon: 'x', link: 'https://twitter.com/kwzeqt' }
    ]
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1904564624176934912/hbxl_V-W_400x400.jpg',
    name: 'Cyrus Rebello',
    title: 'Founder & Animation Director',
    links: [
      { icon: 'discord' },
      { icon: 'x', link: 'https://x.com/cyrus_rebello' }
    ]
  },
  {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrTCbnEijydkb353p4OUh7ItBGs8TiBGfTQ&s',
    name: 'Bazinga',
    title: 'Quote Master',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/@raydiatious2073' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The team behind COM Studio.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
