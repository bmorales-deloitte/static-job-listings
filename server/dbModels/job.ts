import mongoose from "mongoose";
import bcrypt from "mongoose-bcrypt";

const schema = new mongoose.Schema(
  {
    id: { type: Number},
    company: {type: String},
    logo: {type: String},
    new: {type: Boolean},
    featured: {type: Boolean},
    position: {type: String},
    role: {type: String},
    level: {type: String},
    postedAt: {type: String},
    contract: {type: String},
    location: {type: String},
    languages: {type: Array},
    tools: {type: Array}
  },
  { timestamps: true, strict: true, strictQuery: true }
);
//schema.plugin(bcrypt);
export default mongoose.model("Job", schema, "job");