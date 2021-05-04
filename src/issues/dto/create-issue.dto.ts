import { IsString } from 'class-validator';

export class CreateIssueDto {
  @IsString()
  readonly name: string;
}
