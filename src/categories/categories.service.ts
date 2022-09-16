import { Injectable } from "@nestjs/common/decorators"
import { PrismaService } from "src/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common/exceptions";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoriesService {

    constructor(private prisma: PrismaService) {}

    listCategories() {
        return this.prisma.categories.findMany();
    }

    async showCategories(id: number) {
        if (isNaN(Number(id))) {
            throw new BadRequestException("ID inválido.");
        }

        const category = await this.prisma.categories.findUnique({
            where: {
                id: +id,
            },
        });

        if (!category) {
            throw new NotFoundException("Categoria não encontrada.");
        }

        return category;
    }

    createCategory(body: CreateCategoryDto) {

        return this.prisma.categories.create({
            data: {
                name: body.name,
            },
        });
        
    }

    async updateCategory(id: number, body: UpdateCategoryDto) {

        await this.showCategories(id);

        return this.prisma.categories.update({
            data: {
                name: body.name,
            },
            where: {
                id: +id,
            },
        });

    }

    async deleteCategory(id: number) {

        await this.showCategories(id);

        return this.prisma.categories.delete({
            where: {
                id,
            },
        });

    }
}

