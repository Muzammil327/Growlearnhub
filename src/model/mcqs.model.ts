import mongoose from "mongoose"

interface IMcqs extends mongoose.Document {
  name: string
  slug: string
  options: string[]
  catgeory: string[]
  description: string
  correctOptions: string
  relatedQuizzes: mongoose.Schema.Types.ObjectId
  relatedVideo: string
  verified: boolean
}

// Define the schema
const mcqsSchema: mongoose.Schema<IMcqs> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  options: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  correctOptions: {
    type: String,
    required: true
  },
  relatedQuizzes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Quiz"
  },
  catgeory: {
    type: [String],
    required: true
  },
  relatedVideo: {
    type: String,
    set: (v: string) => (v === "" ? undefined : v)
  },
  verified: {
    type: Boolean,
    default: false,
  }
})

// Create the model
const Mcqs = mongoose.models.Mcqs || mongoose.model("Mcqs", mcqsSchema)

export default Mcqs
