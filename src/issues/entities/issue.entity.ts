import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity, Entity } from "typeorm";

@Entity()
export abstract class Issue extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', default: true })
  name: string;

}
