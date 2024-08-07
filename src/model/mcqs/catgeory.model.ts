import mongoose, { Document, Schema } from 'mongoose'

interface CatgeoryDocument extends Document {
  name: string
}

const CatgeorySchema = new Schema<CatgeoryDocument>(
  {
    name: { type: String },
  },
  {
    collection: 'catgeory',
  }
)

const catgeory =
  mongoose.models.catgeory ||
  mongoose.model<CatgeoryDocument>('catgeory', CatgeorySchema, 'catgeory')

export default catgeory
