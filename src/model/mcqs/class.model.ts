import mongoose, { Document, Schema } from 'mongoose'

interface ClassDocument extends Document {
  name: string
  slug: string
}

const ClassSchema = new Schema<ClassDocument>(
  {
    name: { type: String, lowercase: true, required: true },
    slug: { type: String, lowercase: true, required: true },
  },
  {
    collection: 'classes',
  }
)

const classes =
  mongoose.models.classes ||
  mongoose.model<ClassDocument>('classes', ClassSchema, 'classes')

export default classes
