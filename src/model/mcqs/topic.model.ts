import mongoose, { Document, Schema } from 'mongoose'

interface TopicDocument extends Document {
  name: string
  slug: string
  bookId: mongoose.Schema.Types.ObjectId
  chapterId: mongoose.Schema.Types.ObjectId
}

const TopicSchema = new Schema<TopicDocument>(
  {
    name: { type: String, lowercase: true, required: true },
    slug: { type: String, lowercase: true, required: true },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book',
    },
    chapterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'chapter',
    },
  },
  {
    collection: 'topic',
  }
)

const topic =
  mongoose.models.topic ||
  mongoose.model<TopicDocument>('topic', TopicSchema, 'topic')

export default topic
