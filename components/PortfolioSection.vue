<script setup lang="ts">
import WarsawAesthetic from '~/public/projects/warsawaesthetic.png';
import WarsawAestheticCMS from '~/public/projects/warsawaesthetic_cms.png';
import WojolRacing from '~/public/projects/wojolracing.png';
import CRM from '~/public/projects/crm.png';
import PrintCommander from '~/public/projects/printcommander.png';
import Termobudowa from '~/public/projects/termobudowa.png';

const projects: Project[] = [
  {
    title: 'Warsaw Aesthetic',
    description: 'Warsaw Aesthetic is a web application that allows users to book appointments in beauty salons.',
    link: 'https://aplikacja.warsawaesthetic.com/',
    technologiesIcons: ['skill-icons:flutter-dark'],
    img: WarsawAesthetic,
  },
  {
    title: 'WojolRacing',
    description:
      'WojolRacing is a website dedicated to esport drivers, offering information about racing events, teams, and drivers. It provides access to results, statistics and classifications.',
    link: 'https://wojolracing.pl/',
    technologiesIcons: ['skill-icons:nuxtjs-dark', 'skill-icons:expressjs-dark', 'skill-icons:mongodb'],
    img: WojolRacing,
  },
  {
    title: 'Warsaw Aesthetic CMS',
    description: 'Warsaw Aesthetic CMS is a content management system for the Warsaw Aesthetic application.',
    technologiesIcons: ['skill-icons:vuejs-dark', 'skill-icons:pinia-dark'],
    img: WarsawAestheticCMS,
  },
  {
    title: 'PrintCommanderPlus',
    description: 'Streamlines the entire printing process for businesses, from order intake to production.',
    technologiesIcons: ['skill-icons:vuejs-dark', 'skill-icons:pinia-dark'],
    img: PrintCommander,
  },
  {
    title: 'ViCRM',
    description: 'ViCRM is a CRM system that allows you to manage your customers, sales, and marketing in one place.',
    technologiesIcons: ['skill-icons:vuejs-dark', 'skill-icons:pinia-dark'],
    img: CRM,
  },
  {
    title: 'Termobudowa',
    description: 'Termobudowa is a website that provides information about the company and its services.',
    link: 'http://www.termobudowa.com.pl/#/',
    technologiesIcons: ['skill-icons:vuejs-dark'],
    img: Termobudowa,
  },
];
</script>

<template>
  <section id="portfolio">
    <WidgetsSectionTitle :title="$t('portfolio.title')" />

    <ClientOnly>
      <vue-horizontal>
        <WidgetsPortfolioWidget v-for="(project, index) in projects" :key="index" :index="index" :project="project" />
      </vue-horizontal>
    </ClientOnly>
  </section>
</template>
