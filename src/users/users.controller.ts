import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly UsersService: UsersService) {}


  @Post('create')
  async create(@Body() data: CreateUserDto) {
    return this.UsersService.create(data);
  }

  @Get()
  async read() {
    return this.UsersService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
      return this.UsersService.show(id);
  }

  @Patch(':id')
  async updatePartial(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUserDto) {
    return this.UsersService.update(id, data);
  }
  
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return this.UsersService.delete(id);
  }
}
