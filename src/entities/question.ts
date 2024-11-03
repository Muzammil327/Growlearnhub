import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn
} from "typeorm"
import { Heading, Subheading } from "@/src/entities" // Ensure this import path is correct
import { Chapters } from "@/src/entities" // Ensure this import path is correct
import { Books } from "@/src/entities" // Ensure this import path is correct
import { Classes } from "@/src/entities" // Ensure this import path is correct

@Entity("questions")
export class Question {
  @PrimaryGeneratedColumn()
  id!: number // Correctly typed as number

  @Column({ type: "varchar", length: 255 })
  name!: string

  @Column({ type: "varchar", length: 255 })
  slug!: string // Already indexed through @Index()

  @Column("jsonb", { nullable: false }) // Store options in JSON format for flexibility
  options!: string[] // Example: ["Option 1", "Option 2", "Option 3", "Option 4"]

  @Column("jsonb", { nullable: false }) // Store options in JSON format for flexibility
  tags!: string[] // Example: ["Option 1", "Option 2", "Option 3", "Option 4"]

  @Column("varchar", { nullable: true }) // Store correct options as an array of strings
  correctOptions!: string // Example: ["Option 3"] (multiple correct answers allowed)

  @Column({ type: "text", nullable: true })
  description!: string // Detailed explanation or description of the question

  // Many-to-one relation with Subheading entity
  @ManyToOne(() => Heading, (Heading) => Heading.questions, {
    nullable: false, // A question must belong to a subheading
    onDelete: "CASCADE" // When a subheading is deleted, its questions will also be deleted
  })
  @JoinColumn({ name: "headingId" }) // Foreign key to the Subheading entity
  heading!: Heading

  @Column({ type: "integer", nullable: true }) // Reference to the related Subheading
  headingId!: number // Changed to number

  // Many-to-one relation with Subheading entity
  @ManyToOne(() => Subheading, (subHeading) => subHeading.questions, {
    nullable: false, // A question must belong to a subheading
    onDelete: "CASCADE" // When a subheading is deleted, its questions will also be deleted
  })
  @JoinColumn({ name: "subHeadingId" }) // Foreign key to the Subheading entity
  subHeading!: Subheading

  @Column({ type: "integer", nullable: true }) // Reference to the related Subheading
  subHeadingId!: number // Changed to number

  // Many-to-one relation with Chapter entity
  @ManyToOne(() => Chapters, (chapter) => chapter.questions, {
    nullable: false, // A question must belong to a chapter
    onDelete: "CASCADE" // When a chapter is deleted, its questions will also be deleted
  })
  @JoinColumn({ name: "chapterId" }) // Foreign key to the Chapter entity
  chapter!: Chapters

  @Column({ type: "integer", nullable: true }) // Reference to the related Chapter
  chapterId!: number // Changed to number

  // Many-to-one relation with Book entity
  @ManyToOne(() => Books, (book) => book.questions, {
    nullable: false, // A question must belong to a book
    onDelete: "CASCADE" // When a book is deleted, its questions will also be deleted
  })
  @JoinColumn({ name: "bookId" }) // Foreign key to the Book entity
  book!: Books

  @Column({ type: "integer", nullable: true }) // Reference to the related Book
  bookId!: number // Changed to number

  // Many-to-one relation with Class entity
  @ManyToOne(() => Classes, (classEntity) => classEntity.questions, {
    nullable: false, // A question must belong to a class
    onDelete: "CASCADE" // When a class is deleted, its questions will also be deleted
  })
  @JoinColumn({ name: "classId" }) // Foreign key to the Class entity
  class!: Classes

  @Column({ type: "integer", nullable: true }) // Reference to the related Class
  classId!: number // Changed to number

  // Metadata columns
  @CreateDateColumn({ type: "timestamptz" }) // Automatically set the creation date
  createdAt!: Date
}
