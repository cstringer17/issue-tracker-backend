import { Inject, Injectable } from "@nestjs/common";
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Issue } from "./entities/issue.entity";
import { Repository } from "typeorm";

@Injectable()
export class IssuesService {

  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>
  ) {
  }

  create(createIssueDto: CreateIssueDto) {
    this.issueRepository.create(createIssueDto)
    return 'This action adds a new issue';
  }

  findAll(): Promise<Issue[]>{
    return this.issueRepository.find()
  }


}
