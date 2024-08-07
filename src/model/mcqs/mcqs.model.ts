import mongoose, { Document, Schema } from 'mongoose'

interface McqsDocument extends Document {
  name: string
  slug: string
  options: [string]
  correct: string
  description: string
  bookId: mongoose.Schema.Types.ObjectId
  chapterId: mongoose.Schema.Types.ObjectId
  topicId: mongoose.Schema.Types.ObjectId
  classId: mongoose.Schema.Types.ObjectId
  catgeoryId: mongoose.Schema.Types.ObjectId
  subcatgeoryId: mongoose.Schema.Types.ObjectId
  itemId: mongoose.Schema.Types.ObjectId
}

const McqsSchema = new Schema<McqsDocument>(
  {
    name: { type: String, lowercase: true, required: true },
    slug: { type: String, lowercase: true, required: true },
    options: {
      type: [String],
      lowercase: true,
      required: true,
    },
    correct: { type: String, lowercase: true, required: true },
    description: { type: String },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book',
    },
    chapterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'chapter',
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'topic',
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'classes',
    },
    catgeoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'catgeory',
    },
    subcatgeoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subcatgeory',
    },
    itemId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item',
      },
    ],
  },
  {
    collection: 'mcqs',
    timestamps: true,
  }
)

const mcqs =
  mongoose.models.mcqs ||
  mongoose.model<McqsDocument>('mcqs', McqsSchema, 'mcqs')

export default mcqs
