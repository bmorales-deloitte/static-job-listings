<template>
    <div v-if="jobs.filters.length !== 0" class="filter-container bg-white flex mx-5 mb-10 mt-20 pt-5 px-5 rounded-md shadow-lg justify-between">
        <div class="filter-buttons flex flex-wrap">
        <div v-for="filter in jobs.filters">
            <div class="primary light-grayish-cyan-bg rounded-sm flex font-bold mr-3 mb-5 text-sm" @click="jobs.clearFilter({type:filter.type, data: filter.data})">
            <div class="label p-2">{{ filter.data }}</div><div class="clear primary-bg text-white rounded-r-sm p-2">&#10006;</div>
            </div>
        </div>
        </div>

        <button class="primary font-bold mb-5" @click="jobs.clearFilters()">Clear</button>
    </div>
</template>

<script setup="ts">
    const props = defineProps({
        jobs: Object
    })
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