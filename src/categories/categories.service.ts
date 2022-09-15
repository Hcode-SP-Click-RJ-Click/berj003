/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common/decorators"

@Injectable()
export class CategoriesService {

    listCategories() {
        return "Aqui estão todas as Categorias!"
    }

    showCategories(id) {
        return `Essa é a categoria número: ${id}`
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

