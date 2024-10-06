import mongoose from "mongoose"

interface INewsletter extends mongoose.Document {
  email: string
}

// Define the schema
const emailSchema: mongoose.Schema<INewsletter> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  }
})

// Create the model
const Email = mongoose.models.Email || mongoose.model("Email", emailSchema)

export default Email
