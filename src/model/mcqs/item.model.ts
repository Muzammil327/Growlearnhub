import mongoose, { Document, Schema } from 'mongoose'

interface ItemDocument extends Document {
  name: string
  catgeoryId: mongoose.Schema.Types.ObjectId
  subcatgeoryId: mongoose.Schema.Types.ObjectId
}

const ItemSchema = new Schema<ItemDocument>(
  {
    name: { type: String },
    catgeoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'catgeory',
    },
    subcatgeoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subcatgeory',
    },
  },
  {
    collection: 'item',
  }
)

const item =
  mongoose.models.item ||
  mongoose.model<ItemDocument>('item', ItemSchema, 'item')

export default item
