import { job } from "../../dbModels";

export default defineEventHandler(async (event) => {
    const jobId = event.context.params.id;
    console.log(`GET /api/jobs/${jobId}`);
    const body = await readBody(event)

    body.logo =  body.logo ? './images/the-air-filter-company.svg' : body.logo,
    body.postedAt = new Date();

    console.log(body)

  try {
    console.log("Update job");
    const jobData = await job.findOneAndUpdate({_id: jobId}, body);
    return { data: jobData, success: true };
  } catch (err) {
    console.dir(err);
    event.node.res.statusCode = 500;
    return {
      success: false,
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});