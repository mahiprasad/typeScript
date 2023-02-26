import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
// import { NestApplication } from '@nestjs/core';
// import { User } from './interfaces/user.interface';
// import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { Db, ObjectID } from 'mongodb';

// export  interface User {
//     name: string;
// }

@Injectable()

export class UsersService {
  // delete(arg0: string) {
  //   throw new Error("Method not implemented.");
  // }
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}


  async servicefind(): Promise <any[]> {
    return await this.db.collection('fruits').find().toArray();
  }

  async findOne(id: string): Promise<any> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException;
    }

    const response = await this.db.collection('fruits').findOne({
      _id: new ObjectID(id),
    });

    if (!response) {
      throw new NotFoundException;
    }

    return response;
  }

  async create(title: string, content: string, review: string
  ): Promise<string> {
    this.db.collection('fruits').insertOne({title:title,content:content,review:review});
    return "added";
  }

  async update(
    _id: string,
    title: string,
    content: string,
    review: string
    ): Promise <void> {
      if (!ObjectID.isValid(_id)) {
      throw new BadRequestException;
    }
   
    await this.db.collection('fruits').updateOne(
      {
        _id: new ObjectID(_id),
      },
      {
       $set:{
        title :title,
       content: content,
       review :review
       }
      },
    );
  }

  async delete( id: string)
  : Promise <any> {
    if (!ObjectID.isValid(id)) {
      throw new BadRequestException;
    }

    const response = await this.db.collection('fruits').deleteOne({
      _id: new ObjectID(id),
    });

    if (response.deletedCount === 0) {
      throw new NotFoundException;
    }
  }
}