import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Injectable } from "@nestjs/common";
import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('issues')
//@UseGuards(JwtAuthGuard)

export class IssuesController {
  constructor(
    private readonly issuesService: IssuesService
  ) {}

  @Post()
  create(@Body() createIssueDto: CreateIssueDto) {
    return this.issuesService.create(createIssueDto);
  }

  @Get()
  findAll() {
    return this.issuesService.findAll();
  }

}
