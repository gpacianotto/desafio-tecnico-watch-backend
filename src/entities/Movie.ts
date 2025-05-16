import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  year: string;

  @Column({ nullable: false })
  sinopse: string;

  @Column({ nullable: false })
  userRating: number;

  @Column({ nullable: false })
  userConsiderations: string;

  @ManyToOne(() => User, (user) => user.movies)
  user: User;

  @Column({ nullable: false })
  userId: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}