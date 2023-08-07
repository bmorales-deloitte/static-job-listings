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
const jobs: job[] = [
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

type filter = {
    type?: string;
    nested?: boolean;
    data?: string;
}
export const useJobs = defineStore('useJobs', {
  state: () => ({
    n: jobs,
    filters: [] as filter[]
  }),

  actions: {
        applyFilter(filter: { data?: string, type: string, nested: boolean}){

            const result = this.filters.find((x: { data?: string, type?: string}, index) => {
                return x.type === filter.type &&
                x.data === filter.data
            });

            if(!result){
                this.filters.push(filter);
            }

            this.n = this.n.filter((job: any) => {
                if(filter.nested === false){
                    return job[filter.type] === filter.data;
                }else{
                    return job[filter.type].includes(filter.data);
                }
            });
        },
        clearFilter(filter: {data?: string, type?: string}){
            this.filters = this.filters.filter(( x:any, index ) => {
                return x.data !== filter.data;
            });

            this.n = jobs;

            if(this.filters.length > 0){

                this.filters.forEach(( xFilter:any, index) => {
                    this.n = this.n.map((job: any) => {
                        if(xFilter.nested === false){
                            if(job[xFilter.type] === xFilter.data){
                                return job;
                            }
                        }else{
                            if(job[xFilter.type].includes(xFilter.data)){
                                return job;
                            }
                        }
                    }).filter((job)=> !!job);
                });

            }

        },
        clearFilters() {
            this.n = jobs;
            this.filters = [];
        }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useJobs, import.meta.hot))
}
