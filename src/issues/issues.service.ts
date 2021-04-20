
import { CreateIssueDto } from './dto/create-issue.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Issue } from "./entities/issue.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UpdateIssueDto } from "./dto/update-issue.dto";

@Injectable()
export class IssuesService {

  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>
  ) {
  }

  async create(dto: CreateIssueDto) {
    try {
      await this.issueRepository.save(new Issue(dto.name)).then(r => {return r ;})
    }catch (err){
      return err;
    }
  }

  findAll(): Promise<Issue[]>{
    return this.issueRepository.find()
  }


  findIssueByID(id: number): Promise<Issue>{
    return this.issueRepository.findOne(id)
  }

  async deleteIssue(id: number) {
    let issue: Issue = await this.issueRepository.findOne(id);
    return this.issueRepository.remove(issue);
  }


  async updateIssue(id, updateIssueDto: UpdateIssueDto) {
    let issue: Issue = await this.issueRepository.findOne(id);
    console.log("dto:  " + updateIssueDto)
    console.log("stored:  " + issue.name)
    issue.name = updateIssueDto.name;
    return this.issueRepository.save(issue);
  }
}
