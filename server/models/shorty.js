import mongoose from "mongoose"
const Schema = mongoose.Schema

const shortySchema = new Schema({
  url: { type: "String", required: true },
  key: { type: "String", required: true },
  dateAdded: { type: "Date", default: Date.now, required: true }
})

export default mongoose.model("Shorty", shortySchema)
