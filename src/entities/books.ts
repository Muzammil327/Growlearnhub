import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Question } from "@/src/entities"

@Entity("books")
export class Books {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "varchar", length: 255 })
  name!: string

  @Column({ type: "varchar", length: 255 })
  slug!: string

  // One-to-many relation with Question entity
  @OneToMany(() => Question, (question) => question.book)
  questions!: Question[] // This will hold the related questions
}
