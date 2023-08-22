import { job } from "../../dbModels";

export default defineEventHandler(async (event) => {
  console.log("DELETE /api/jobs");
  const body = await readBody(event)

  try {
    console.log("Delete job");
    console.log(body)
    const jobData = await job.deleteOne({ _id: body.id });
    console.log(jobData)
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