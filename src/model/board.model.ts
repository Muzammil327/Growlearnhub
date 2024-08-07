import mongoose, { Document, Schema } from 'mongoose'

interface BoardDocument extends Document {
  name: string
  slug: string
}

const BoardSchema = new Schema<BoardDocument>(
  {
    name: { type: String, lowercase: true, required: true },
    slug: { type: String, lowercase: true, required: true },
  },
  {
    collection: 'board',
  }
)

const board =
  mongoose.models.board ||
  mongoose.model<BoardDocument>('board', BoardSchema, 'board')

export default board
