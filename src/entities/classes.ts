import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Question } from "./question"

@Entity("classes")
export class Classes {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: "varchar", length: 255, unique: true })
  name!: string

  @Column({ type: "varchar", length: 255, unique: true })
  slug!: string

  @OneToMany(() => Question, (question) => question.class)
  questions!: Question[]
}
