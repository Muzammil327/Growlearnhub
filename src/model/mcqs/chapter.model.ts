import mongoose, { Document, Schema } from 'mongoose'

interface ChapterDocument extends Document {
  name: string
  slug: string
  bookId: mongoose.Schema.Types.ObjectId
}

const ChapterSchema = new Schema<ChapterDocument>(
  {
    name: { type: String, lowercase: true, required: true },
    slug: { type: String, lowercase: true, required: true },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book',
    },
  },
  {
    collection: 'chapter',
  }
)

const chapter =
  mongoose.models.chapter ||
  mongoose.model<ChapterDocument>('chapter', ChapterSchema, 'chapter')

export default chapter
