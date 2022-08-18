import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity('preferences')
export class Preference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'pt-BR' })
  language: string;

  @Column({ default: false, name: 'is_dark' })
  isDark: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
