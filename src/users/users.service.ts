import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Preference } from './entities/preference.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: Repository<User>,

    @Inject('PREFERENCES_REPOSITORY')
    private preferenceRepository: Repository<Preference>,
  ) {}

  async store(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existUser) throw new NotFoundException('User exist');
    const user = this.userRepository.create(createUserDto);
    const preference = this.preferenceRepository.create();
    user.preference = preference;
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });
    if (!user) throw new NotFoundException('User not found');
    return this.userRepository.save(user);
  }

  async destroy(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return await this.userRepository.softDelete(id);
  }
}
