<template>
  <div class="min-h-screen light-grayish-cyan-bg">
    <div class="container mx-auto">
      <div v-if="jobs.filters.length !== 0" class="filter-container bg-white flex mx-5 mb-10 mt-20 pt-5 px-5 rounded-md shadow-lg justify-between">
        <div class="filter-buttons flex flex-wrap">
          <div v-for="filter in jobs.filters">
            <div class="primary light-grayish-cyan-bg rounded-sm flex font-bold mr-3 mb-5 text-sm" @click="jobs.clearFilter({type:filter.type, data: filter.data})">
              <div class="label p-2">{{ filter.data }}</div><div class="clear primary-bg text-white rounded-r-sm p-2">&#10006;</div>
            </div>
          </div>
        </div>

        <button class="dark-grayish-cyan font-bold mb-5" @click="jobs.clearFilters()">Clear</button>
      </div>

      <ul class="mx-5">
          <li class="md:p-7 p-4 md:my-4 my-12 bg-white mb-3 mx-auto rounded-md shadow-lg" v-for="(job, index) in getJobs">
              <div class="flex flex-wrap">
                  <div class="w-full md:w-1/6 flex items-center md:justify-center">
                      <img :src="job.logo"/>
                  </div>
                  <div class="w-full md:w-2/6 mt-3 md:mt-0">
                      <div>
                          <span class="primary font-semibold mr-3">{{ job.company }}</span>
                          <span class="new text-sm uppercase font-semibold primary-bg px-2 py-0.5 mr-2 rounded-xl" v-if="job.new">New!</span>
                          <span class="featured text-sm uppercase font-semibold very-dark-grayish-cyan-bg px-2 py-0.5 rounded-xl" v-if="job.featured">Featured</span>
                      </div>
                      <h2 class="font-bold very-dark-grayish-cyan py-2 text-lg">{{ job.position }}</h2>
                      <div>
                          <span class="dark-grayish-cyan pr-3">{{ job.postedAt }}</span><span>&#183;</span>
                          <span class="dark-grayish-cyan px-3">{{ job.contract }}</span><span>&#183;</span>
                          <span class="dark-grayish-cyan pl-3">{{ job.location }}</span>
                      </div>
                  </div>
                  <div class="w-full md:w-3/6 tags-container flex items-center justify-start md:justify-end flex-wrap">
                      <button class="primary light-grayish-cyan-bg rounded-sm text-sm" @click="jobs.applyFilter({type:'role', nested: false, data: job.role})">{{ job.role }}</button>
                      <button class="primary light-grayish-cyan-bg rounded-sm text-sm" @click="jobs.applyFilter({type:'level', nested: false, data: job.level})">{{ job.level }}</button>
                      <div v-for="language in job.languages">
                          <button class="primary light-grayish-cyan-bg rounded-sm text-sm" @click="jobs.applyFilter({type:'languages', nested: true, data: language})">{{ language }}</button>
                      </div>
                      <div v-for="tool in job.tools">
                          <button class="primary light-grayish-cyan-bg rounded-sm text-sm" @click="jobs.applyFilter({type:'tools', nested: true, data: tool})">{{ tool }}</button>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useJobsStore } from '@/stores/jobs/index';
  alert(useJobsStore)
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
test