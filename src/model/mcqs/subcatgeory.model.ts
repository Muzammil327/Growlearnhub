import mongoose, { Document, Schema } from 'mongoose'

interface SubCatgeoryDocument extends Document {
  name: string
  catgeoryId: mongoose.Schema.Types.ObjectId
}

const SubCatgeorySchema = new Schema<SubCatgeoryDocument>(
  {
    name: { type: String },
    catgeoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'catgeory',
    },
  },
  {
    collection: 'subcatgeory',
  }
)

const subcatgeory =
  mongoose.models.subcatgeory ||
  mongoose.model<SubCatgeoryDocument>(
    'subcatgeory',
    SubCatgeorySchema,
    'subcatgeory'
  )

export default subcatgeory
