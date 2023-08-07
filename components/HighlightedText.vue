<template>
  <div>
    <ul class="container">
        <li class="p-4 my-4 bg-white rounded-md shadow-lg" v-for="(job, index) in jobs">
            <div class="flex">
                <div class="w-1/6 flex items-center justify-center">
                    <img :src="job.logo"/>
                </div>
                <div class="w-2/6">
                    <div>
                        <span class="primary font-bold">{{ job.company }}</span>
                        <span class="new uppercase primary-bg p-1 rounded-xl" v-if="job.new">New!</span>
                        <span class="featured uppercase very-dark-grayish-cyan-bg p-1 rounded-xl" v-if="job.featured">Featured!</span>
                    </div>
                    <h3 class="font-bold very-dark-grayish-cyan">{{ job.position }}</h3>
                    <div>
                        <span class="dark-grayish-cyan">{{ job.postedAt }}</span>
                        <span class="dark-grayish-cyan">{{ job.contract }}</span>
                        <span class="dark-grayish-cyan">{{ job.location }}</span>
                    </div>
                </div>
                <div class="w-3/6 tags-container flex items-center justify-end flex-wrap">
                    <span class="primary light-grayish-cyan-bg rounded-sm">{{ job.role }}</span>
                    <span class="primary light-grayish-cyan-bg rounded-sm">{{ job.level }}</span>
                    <span class="primary light-grayish-cyan-bg rounded-sm" v-for="language in job.languages">
                        {{ language }}
                    </span>
                    <span class="primary light-grayish-cyan-bg rounded-sm" v-for="tool in job.tools">
                        {{ tool }}
                    </span>
                    <!-- <button @click="counter++">Add 1</button>
                    <p>Count is: {{ counter }}</p> -->

                    <!-- <button @click="selectedFilters('piong')">Piong button</button>
                    <p>Filter is: {{ selectedFilters }}</p> -->
                </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script setup>
    //import { ref, useState } from 'vue'
    //const counter = ref(0)

    const counter = useState('counter', () => Math.round(Math.random() * 1000))

    const jobs =    [
                        {
                            "id": 1,
                            "company": "Photosnap",
                            "logo": "/images/photosnap.svg",
                            "new": true,
                            "featured": true,
                            "position": "Senior Frontend Developer",
                            "role": "Frontend",
                            "level": "Senior",
                            "postedAt": "1d ago",
                            "contract": "Full Time",
                            "location": "USA Only",
                            "languages": ["HTML", "CSS", "JavaScript"],
                            "tools": []
                        }
                    ]
</script>

<!-- <script>
    export default {
        data() {
            return {
                jobs: [
                        {
                            "id": 1,
                            "company": "Photosnap",
                            "logo": "/images/photosnap.svg",
                            "new": true,
                            "featured": true,
                            "position": "Senior Frontend Developer",
                            "role": "Frontend",
                            "level": "Senior",
                            "postedAt": "1d ago",
                            "contract": "Full Time",
                            "location": "USA Only",
                            "languages": ["HTML", "CSS", "JavaScript"],
                            "tools": []
                        },
                        {
                            "id": 2,
                            "company": "Manage",
                            "logo": "./images/manage.svg",
                            "new": true,
                            "featured": true,
                            "position": "Fullstack Developer",
                            "role": "Fullstack",
                            "level": "Midweight",
                            "postedAt": "1d ago",
                            "contract": "Part Time",
                            "location": "Remote",
                            "languages": ["Python"],
                            "tools": ["React"]
                        },
                        {
                            "id": 3,
                            "company": "Account",
                            "logo": "./images/account.svg",
                            "new": true,
                            "featured": false,
                            "position": "Junior Frontend Developer",
                            "role": "Frontend",
                            "level": "Junior",
                            "postedAt": "2d ago",
                            "contract": "Part Time",
                            "location": "USA Only",
                            "languages": ["JavaScript"],
                            "tools": ["React", "Sass"]
                        },
                        {
                            "id": 4,
                            "company": "MyHome",
                            "logo": "./images/myhome.svg",
                            "new": false,
                            "featured": false,
                            "position": "Junior Frontend Developer",
                            "role": "Frontend",
                            "level": "Junior",
                            "postedAt": "5d ago",
                            "contract": "Contract",
                            "location": "USA Only",
                            "languages": ["CSS", "JavaScript"],
                            "tools": []
                        },
                        {
                            "id": 5,
                            "company": "Loop Studios",
                            "logo": "./images/loop-studios.svg",
                            "new": false,
                            "featured": false,
                            "position": "Software Engineer",
                            "role": "Fullstack",
                            "level": "Midweight",
                            "postedAt": "1w ago",
                            "contract": "Full Time",
                            "location": "Worldwide",
                            "languages": ["JavaScript"],
                            "tools": ["Ruby", "Sass"]
                        },
                        {
                            "id": 6,
                            "company": "FaceIt",
                            "logo": "./images/faceit.svg",
                            "new": false,
                            "featured": false,
                            "position": "Junior Backend Developer",
                            "role": "Backend",
                            "level": "Junior",
                            "postedAt": "2w ago",
                            "contract": "Full Time",
                            "location": "UK Only",
                            "languages": ["Ruby"],
                            "tools": ["RoR"]
                        },
                        {
                            "id": 7,
                            "company": "Shortly",
                            "logo": "./images/shortly.svg",
                            "new": false,
                            "featured": false,
                            "position": "Junior Developer",
                            "role": "Frontend",
                            "level": "Junior",
                            "postedAt": "2w ago",
                            "contract": "Full Time",
                            "location": "Worldwide",
                            "languages": ["HTML", "JavaScript"],
                            "tools": ["Sass"]
                        },
                        {
                            "id": 8,
                            "company": "Insure",
                            "logo": "./images/insure.svg",
                            "new": false,
                            "featured": false,
                            "position": "Junior Frontend Developer",
                            "role": "Frontend",
                            "level": "Junior",
                            "postedAt": "2w ago",
                            "contract": "Full Time",
                            "location": "USA Only",
                            "languages": ["JavaScript"],
                            "tools": ["Vue", "Sass"]
                        },
                        {
                            "id": 9,
                            "company": "Eyecam Co.",
                            "logo": "./images/eyecam-co.svg",
                            "new": false,
                            "featured": false,
                            "position": "Full Stack Engineer",
                            "role": "Fullstack",
                            "level": "Midweight",
                            "postedAt": "3w ago",
                            "contract": "Full Time",
                            "location": "Worldwide",
                            "languages": ["JavaScript", "Python"],
                            "tools": ["Django"]
                        },
                        {
                            "id": 10,
                            "company": "The Air Filter Company",
                            "logo": "./images/the-air-filter-company.svg",
                            "new": false,
                            "featured": false,
                            "position": "Front-end Dev",
                            "role": "Frontend",
                            "level": "Junior",
                            "postedAt": "1mo ago",
                            "contract": "Part Time",
                            "location": "Worldwide",
                            "languages": ["JavaScript"],
                            "tools": ["React", "Sass"]
                        }
                    ]
            }
        }
    }
</script> -->

<style scoped>
    a {
    color: #42b983;
    }

    li{
        max-width: 1200px;
        margin: 0 auto;
    }
    .new, .featured{
        color: #fff;
    }

    .tags-container span{
        margin: 5px;
        padding: 10px;
        font-weight: 700;
    }
</style>
