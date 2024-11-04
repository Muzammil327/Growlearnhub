import { DataSource } from "typeorm"
import {
  Heading,
  Subheading,
  Chapters,
  Classes,
  Question,
  Books
} from "@/src/entities"

const AppDataSource = new DataSource({
  type: process.env.NEXT_PUBLIC_PG_TYPE as any,
  host: process.env.NEXT_PUBLIC_PG_HOST,
  port: process.env.NEXT_PUBLIC_PG_PORT as any,
  username: process.env.NEXT_PUBLIC_PG_USERNAME,
  password: process.env.NEXT_PUBLIC_PG_PASSWORD,
  database: process.env.NEXT_PUBLIC_PG_DATABASE,
  synchronize: process.env.NEXT_PUBLIC_SYNCHRONIZE as any,
  logging: process.env.NEXT_PUBLIC_LOGGING as any,
  entities: [Classes, Chapters, Heading, Subheading, Question, Books],
  extra: {
    connectionTimeoutMillis: 30000,
  },
})

export default AppDataSource
