import { job } from "../../dbModels";
export default defineEventHandler(async (event) => {
  const jobId = event.context.params.id;
  console.log(`GET /api/jobs/${jobId}`);
  try {
    console.log("Find job");
    const jobData = await job.findOne({
      "_id": jobId,
    });
    if (jobData) {
      console.log("Job found");
      console.log(jobData)

      return {
        data: jobData
      };
    } else {
      console.log("Job not found");
      event.res.statusCode = 404;
      return {
        code: "JOB_NOT_FOUND",
        message: `User with id ${jobId} doesn't exists.`,
      };
    }
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});