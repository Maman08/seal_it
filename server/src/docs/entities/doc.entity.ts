// docs.entity.ts

import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

export enum DocType {
  AADHAR = 'aadhar',
  PAN = 'pan',
  DRIVING_LICENSE = 'drivinglicense',
  PASSPORT = 'passport',
  PROPERTY = 'property',
}

export enum RejectReason {
  TAMPERED = 'tampered',
  NOT_CLEAR = 'not clear',
  INVALID = 'invalid',
  FAKE = 'fake',
}

export enum Status {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

@Entity()
export class Docs {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({
    type: 'enum',
    enum: DocType,
  })
  doc_type: DocType;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;

  @Column()
  doc_src: string;

  @Column()
  doc_name: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: 'pending',
  })
  status: Status;

  @Column({
    type: 'enum',
    enum: RejectReason,
    nullable: true,
  })
  reject_reason: RejectReason;
}
