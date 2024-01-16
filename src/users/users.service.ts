import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  productService: any;

  constructor(private readonly prisma: PrismaService) {}


  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }


  async list() {
    return this.prisma.user.findMany();
  }


  async show(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }
  

  async update(id: number, data: UpdateUserDto) {
    await this.exits(id);
    return this.prisma.user.update({
      data,
      where: {
        id
      }
    })
  }


  async delete(id: number) {
    await this.exits(id);
    return this.prisma.user.delete({
      where: {
        id
      }
    })
  }
    


  async exits(id: number) {
    if (!(await this.show(id))) {
      throw new NotFoundException(`O usruario ${id} não existe`);
    }
  }
}
