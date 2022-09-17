import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { CreateLoginDto } from './dto/create-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async create(data: CreateAuthDto) {

    const user = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new BadRequestException("Este email já está sendo utilizado.");
    }

    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(data.password, salt);

    data.password = hashedPassword;

    return this.prisma.users.create({
      data,
    });

  }

  async login(data: CreateLoginDto) {

    const user = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new BadRequestException('Usuário ou senha incorreta.');
    }

    if (!(await bcrypt.compare(data.password, user.password))) {
      throw new BadRequestException('Usuário ou senha incorreta.');
    }

    const token = this.jwtService.sign({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    return {
      access_token: token,
    }

  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
