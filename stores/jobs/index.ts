import { job } from "server/dbModels";
import Swal from 'sweetalert2';
import moment from 'moment';
import { boolean, object } from "yup";

type job = {
    id?: number;
    company?: string;
    logo?: string;
    new?: boolean;
    featured?: boolean;
    position?: string;
    role?: string;
    level?: string;
    postedAt?: string;
    contract?: string;
    location?: string;
    languages?: string[];
    tools?: string[];

}

const jobs: job[] = [];

type filter = {
    type?: string;
    nested?: boolean;
    data?: string;
}


export const useJobsStore = defineStore('useJobsStore', {
  state: () => ({
    n: jobs,
    filters: [] as filter[],
    job: {}
  }),
  getters: {
    getJobs(state){
        return state.n
    },
    getJob(state){
        return state.job
    },
  },
  actions: {
        async register(values: object) {
            try {
                console.log('calling new')
                let jobResult: any;
                jobResult = await $fetch('/api/jobs', {
                    method: 'POST',
                    body: JSON.stringify(values)
                }).catch((error) => {
                    Swal.fire('Oops. Something went wrong. Please try again later.', '', 'info')
                });

                if(jobResult && jobResult.data && jobResult.success){
                    Swal.fire('Job Created!', '', 'success')
                    window.location.href = '/jobs';
                }
            }
            catch (error) {
                Swal.fire('Oops. Something went wrong. Please try again later.', '', 'info')
                console.log(error)
            }
        },
        async updateJob(values: object) {
            try {
                console.log('calling update')
                const route = useRoute();
                let jobResult: any;
                jobResult = await $fetch('/api/jobs/' + route.params.id, {
                    method: 'POST',
                    body: JSON.stringify(values)
                }).catch((error) => error.data);

                if(jobResult && jobResult.data && jobResult.success){
                    Swal.fire('Job Updated!', '', 'success')
                    window.location.href = '/jobs';
                }
            }
            catch (error) {
                Swal.fire('Oops. Something went wrong. Please try again later.', '', 'info')
                console.log(error)
            }
        },
        async deleteJob(jobId: string) {
              try {
                console.log('calling delete')
                const route = useRoute();
                const job = await $fetch('/api/jobs', {
                    method: 'DELETE',
                    body: JSON.stringify({id: jobId})
                }).catch((error) => error.data);

                if(job.data && job.success){
                    Swal.fire('Job Deleted!', '', 'success')
                    window.location.href = '/jobs';
                }
              }
            catch (error) {
                Swal.fire('Oops. Something went wrong. Please try again later.', '', 'info')
                console.log(error)
            }
        },
        confirmDelete(jobId: string) {
            Swal.fire({
                title: 'Delete Job?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Delete',
                denyButtonText: `Cancel`,
              }).then((result) => {
                if (result.isConfirmed) {
                  this.deleteJob(jobId);
                } else if (result.isDenied) {
                  Swal.fire('Job deletion cancelled', '', 'info')
                }
              })
        },
        applyFilter(filter: { data?: string, type: string, nested: boolean}){

            const result = this.filters.find((x: { data?: string, type?: string}, index) => {
                return x.type === filter.type &&
                x.data === filter.data
            });

            if(!result){
                this.filters.push(filter);
            }
            this.fetchJobs();
        },
        clearFilter(filter: {data?: string, type?: string}){
            this.filters = this.filters.filter(( x:any, index ) => {
                return x.data !== filter.data;
            });
            this.fetchJobs();

        },
        clearFilters() {
            this.filters = [];
            this.fetchJobs();
        },
        async fetchJobs() {
            try {
                const jobs = await $fetch('/api/jobs', { query: { filters: JSON.stringify(this.filters) } }).catch((error) => error.data);
                this.n = jobs.data;
              }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async fetchJob(jobId: string) {
            try {
                const route = useRoute();
                const job = await $fetch('/api/jobs/' + route.params.id).catch((error) => error.data);
                this.job = job.data;
              }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        displayFormattedDate(date: string){
            if (isNaN(Date.parse(date))){
                return moment(new Date(), "YYYYMMDD").fromNow();;
            }

            return moment(new Date(date), "YYYYMMDD").fromNow();

        }
  }
});