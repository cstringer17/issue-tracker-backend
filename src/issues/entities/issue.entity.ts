import { PrimaryGeneratedColumn, Column,  BaseEntity, Entity } from "typeorm";

@Entity()
export class Issue extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', default: true })
  name: string;

  constructor(name: string) {
    super();
    this.name = name;

  }

}
