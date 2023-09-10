<template>
    <div class="min-h-screen light-grayish-cyan-bg">
      <div class="container mx-auto">
        <FilterSection :jobs="jobs"></FilterSection>
        <nuxt-link class="primary light-grayish-cyan-bg rounded-sm text-sm block text-center mt-4" :to="{path: `/jobs/new`}">New Job Post</nuxt-link>
        <JobCard :getJobs="getJobs" :jobs="jobs"></JobCard>
      </div>
    </div>
  </template>

  <script setup lang="ts">
    import { useJobsStore } from '@/stores/jobs/index';

    const store = useJobsStore();
    const getJobs = computed(() => {
      return store.getJobs;
    });
    const jobs = computed(() => {
      return store;
    });
    onMounted(() => {
      store.fetchJobs();
    });
  </script>

  <style scoped>
      a {
        color: #42b983;
      }

      li{
        border-left: 5px solid #fff;
      }
      li:hover{
        border-left: 5px solid hsl(180, 29%, 50%);
      }
      li button:hover{
        background-color: hsl(180, 29%, 50%);
        color: #fff;
      }

      .new, .featured{
          color: #fff;
      }

      .tags-container span, .tags-container button{
          margin: 5px;
          padding: 10px;
          font-weight: 700;
      }

      .tags-container button:first-child{
        margin-left: 0;
      }

      .filter-buttons .clear:hover{
        background-color: hsl(180, 14%, 20%);
        cursor: pointer;
      }

      img{
        margin-top: -40px;
        max-width: 50px;
      }

      @media (max-width: 767.98px) {
        .tags-container{
          border-top: 1px solid hsl(180, 8%, 52%);
          margin-top: 15px;
          padding-top: 15px;
        }
      }

      @media only screen and (min-width: 768px) {
        img {
            max-width: 100% !important;
            margin-top: 0 !important;
        }
        .tags-container{
            border-top: none;
            margin-top: 0;
            padding-top: 0;
        }
      }

  </style>