<template>
    <ul class="mx-5">
        <li class="md:p-7 md:pt-14 p-4 md:my-4 my-12 bg-white mb-3 mx-auto rounded-md shadow-lg" v-for="(job, index) in getJobs">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/6 flex items-center md:justify-center">
                    <img :src="job.logo"/>
                </div>
                <div class="w-full md:w-2/6 mt-3 md:mt-0">
                    <div>
                        <h3 class="primary font-semibold mr-3 inline">{{ job.company }}</h3>
                        <span class="new text-sm uppercase font-semibold primary-bg px-2 py-0.5 mr-2 rounded-xl" v-if="job.new">New!</span>
                        <span class="featured text-sm uppercase font-semibold very-dark-grayish-cyan-bg px-2 py-0.5 rounded-xl" v-if="job.featured">Featured</span>
                    </div>
                    <h2 class="font-bold very-dark-grayish-cyan py-2 text-lg">{{ job.position }}</h2>
                    <div>
                        <span class="dark-grayish-cyan pr-3 inline-block">{{ jobs.displayFormattedDate(job.postedAt) }}</span><span>&#183;</span>
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
                <nuxt-link class="edit primary light-grayish-cyan-bg rounded-sm text-sm" :to="{path: `/jobs/${job._id}/edit`}">Edit</nuxt-link>
                <button class="delete primary light-grayish-cyan-bg rounded-sm text-sm" @click="jobs.confirmDelete(job._id)">Delete</button>
            </div>
        </li>
    </ul>
</template>

<script setup="ts">
    const props = defineProps({
        getJobs: [Object],
        jobs: Object
    })
</script>

<style scoped>
a {
  color: #42b983;
}

h2:hover{
    color: hsl(180, 29%, 50%);
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

a, button{
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

    .edit{
        margin-left: auto;
    }
}

</style>