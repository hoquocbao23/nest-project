import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto)   {
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | null > {
    return this.userRepository.findOneBy({ id });
  }

  // async update(id: number, updateUserDto: UpdateUserDto)  {
  //   return this.userRepository.update(id, updateUserDto);
  // }

  async remove(id: number): Promise<void> {
     this.userRepository.delete(id);
  }
}
