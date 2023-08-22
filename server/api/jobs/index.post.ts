// import { job } from "../../dbModels";

// export default defineEventHandler(async (event) => {
//   console.log("POST /api/jobs");
//   const body = await readBody(event)

//     //   _id: ObjectId("64d1b3f5eac398d66e12998d"),
//     //   id: 10,
//     //   company: 'The Air Filter Company',
//     //   logo: './images/the-air-filter-company.svg',
//     //   new: false,
//     //   featured: false,
//     //   position: 'Front-end Dev',
//     //   role: 'Frontend',
//     //   level: 'Junior',
//     //   postedAt: '1mo ago',
//     //   contract: 'Part Time',
//     //   location: 'Worldwide',
//     //   languages: [ 'JavaScript' ],
//     //   tools: [ 'React', 'Sass' ]

//     body.new = body.new ? !!body.new : false;
//     body.featured = body.featured ? !!body.featured : false;
//     body.logo = './images/the-air-filter-company.svg',
//     body.postedAt = new Date();

//     console.log(body)

//   try {
//     console.log("Create new job");
//     const jobData = await job.create(body);
//     return { data: jobData, success: true };
//   } catch (err) {
//     console.dir(err);
//     event.node.res.statusCode = 500;
//     return {
//       success: false,
//       code: "ERROR",
//       message: "Something went wrong.",
//     };
//   }
// });