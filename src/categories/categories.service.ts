import { Injectable } from "@nestjs/common/decorators"
import { PrismaService } from "src/prisma/prisma.service";
import { BadRequestException, NotFoundException } from "@nestjs/common/exceptions";

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

    createCategory(body) {
        return {
            message: "Categoria criada com sucessso!",
            body
        }
        
    }

    updateCategory(id, body) {

        return {
            message: `Categoria número ${id} atualizada com sucesso!`,
            body 
        }
    }

    deleteCategory(id) {
        return `Categoria número ${id} deletada com sucesso.`
    }
}

