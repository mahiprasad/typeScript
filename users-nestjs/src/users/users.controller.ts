import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { UsersService } from './users.service'

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  find() {
    return this.usersService.servicefind();
  }

  findOne() {
    return this.usersService.findOne('6363a958b0a86eeea47388e1');
  }

  @Post()
  addUser(
    @Body('title') userTitle: string,
    @Body('content') userContent: string,
    @Body('review') userReview: string
  ){
    const generatedMsg = this.usersService.create(
      userTitle,
      userContent,
      userReview,
      );
    return generatedMsg
  }

  @Patch()
  updateUser(
    @Body('title') userTitle: string,
    @Body('content') userContent: string,
    @Body('review') userReview: string
  ){
    this.usersService.update('6363a958b0a86eeea47388e1',userTitle, userContent, userReview);
    return "updated";
  }

  @Delete()
  remove(id: string){
    this.usersService.delete("6363a958b0a86eeea47388e1");
    return "deleted";
  }
  
}
