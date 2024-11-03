import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from "typeorm"
import { Heading } from "@/src/entities" // Ensure this import path is correct
import { Question } from "@/src/entities/question" // Ensure this import path is correct

@Entity("subheadings")
export class Subheading {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "varchar", length: 255, unique: true }) // Ensure unique names
  name!: string

  @Column({ type: "varchar", length: 255, unique: true }) // Ensure unique slugs for better referencing
  slug!: string

  @ManyToOne(() => Heading, (heading) => heading.subHeadings, {
    nullable: true, // Optional: Set to true if not every subheading must have a heading
    onDelete: "CASCADE" // Cascade delete behavior
  })
  headingId!: Heading // Single linked heading

  @OneToMany(() => Question, (question) => question.subHeading)
  questions!: Question[] // Array of linked questions
}
