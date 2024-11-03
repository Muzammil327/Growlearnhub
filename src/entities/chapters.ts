import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Question } from "./question"

@Entity("chapters")
export class Chapters {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "varchar", length: 255 })
  name!: string

  @Column({ type: "varchar", length: 255, unique: true })
  slug!: string

  // One-to-many relation with Question entity
  @OneToMany(() => Question, (question) => question.chapter)
  questions!: Question[] // This will hold the related questions
}
