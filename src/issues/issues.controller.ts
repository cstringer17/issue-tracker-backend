import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Injectable, Put } from "@nestjs/common";
import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Issue } from "./entities/issue.entity";

@Controller('issues')
@UseGuards(JwtAuthGuard)

export class IssuesController {
  constructor(
    private readonly issuesService: IssuesService
  ) {}

  @Post()
  create(@Body() issueDTO: CreateIssueDto,) {
     this.issuesService.create(issueDTO);
  }

  @Get()
  async findAll(): Promise<Issue[]> {
    return await this.issuesService.findAll();
  }

  @Get(':id')
  findIssueById(@Param() params) {
    return this.issuesService.findIssueByID(params.id);
  }

  @Delete(':id')
  deleteIssueById(@Param() params){
    return "Deleted Issue" + this.issuesService.deleteIssue(params.id);
  }

  @Patch(':id')
  updateIssue(@Param() params, @Body() updateIssueDto: UpdateIssueDto ){
    return this.issuesService.updateIssue(params.id, updateIssueDto);
  }

}
