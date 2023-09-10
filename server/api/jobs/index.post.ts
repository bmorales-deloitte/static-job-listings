import { job } from "../../dbModels";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

    body.new = body.new ? !!body.new : false;
    body.featured = body.featured ? !!body.featured : false;
    body.logo = 'https://placehold.co/88x88/png',
    body.postedAt = new Date();
  try {
    const jobData = await job.create(body);
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