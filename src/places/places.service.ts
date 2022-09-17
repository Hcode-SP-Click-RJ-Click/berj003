import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(
    private database: PrismaService,
    private categoriesService: CategoriesService,
  ) {}

  async create(data: CreatePlaceDto) {

    await this.categoriesService.showCategories(data.categoryId);

    data.categoryId = Number(data.categoryId);

    return this.database.places.create({
      data,
    });

  }

  findAll() {
    return this.database.places.findMany({
      include: {
        categories: true,
      },
    });
  }

  async findOne(id: number) {

    if (isNaN(Number(id))) {
      throw new BadRequestException("ID inválido.");
    }
    
    const place = await this.database.places.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        categories: true,
      },
    });

    if (!place) {
      throw new NotFoundException("Lugar não encontrado.");
    }

    return place;

  }

  async update(id: number, data: UpdatePlaceDto) {
    
    await this.findOne(id);

    if (data.categoryId) {
      await this.categoriesService.showCategories(data.categoryId);

      data.categoryId = Number(data.categoryId);
    }

    return this.database.places.update({
      data,
      where: {
        id: +id,
      },
      include: {
        categories: true,
      },
    });

  }

  async remove(id: number) {

    await this.findOne(id);
    
    return this.database.places.delete({
      where: {
        id: +id,
      },
    });

  }
}
