import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Question, Subheading } from "@/src/entities" // Adjust the import path as necessary

@Entity("headings")
export class Heading {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "varchar", length: 255 })
  name!: string

  @Column({ type: "varchar", length: 255, unique: true })
  slug!: string

  // One-to-many relation with Question entity
  @OneToMany(() => Question, (question) => question.heading)
  questions!: Question[] // This will hold the related questions

  @OneToMany(() => Subheading, (subheadings) => subheadings.headingId)
  subHeadings!: Subheading[]
}
