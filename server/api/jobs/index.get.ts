import { job } from "../../dbModels";

export default defineEventHandler(async (event) => {
  console.log("GET /api/jobs");
  const query  = getQuery(event);
  const { filters } = query;

  let formattedResult = {
    languages: [],
    tools: [],
    role: '',
    level: ''
  };
  
  JSON.parse(filters).forEach(elem:any => {
    if(elem.type === 'languages'){
      formattedResult.languages.push(elem.data);
    }
    if(elem.type === 'tools'){
      formattedResult.tools.push(elem.data);
    }
    if(elem.type === 'role'){
      formattedResult.role = elem.data;
    }
    if(elem.type === 'level'){
      formattedResult.level = elem.data;
    }
  });
  console.log(formattedResult)

  const filteredResult = Object.entries(formattedResult).filter(([key, value]) => {
    if(typeof(value) === 'string' && value !== ""){
      return value;
    }
    if(typeof(value) === 'object' && value.length > 0){
      return value;
    }
  }).map(([key, value]) => {
    if(key === "languages" || key === "tools"){
      return [key, {$all:value}]
    }else{
      return [key, value]
    }
  })
  const lol = Object.fromEntries(filteredResult);

  try {
    const jobsData = await job.find(lol);
    return { data: jobsData };
  } catch (err) {
    console.dir(err);
    event.node.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});

function filters(filters: any) {
  throw new Error("Function not implemented.");
}
