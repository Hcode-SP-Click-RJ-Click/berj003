/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Patch, Delete } from "@nestjs/common"
import { CategoriesService } from "./categories.service"

// http://localhost:3000/categories
@Controller('categories')
export class CategoriesController {

    constructor( private categoriesService: CategoriesService ) {}

    // http://localhost:3000/categories
    // GET
    @Get()
    listCategories() {
        return this.categoriesService.listCategories()
    }

    // http://localhost:3000/categories/:id
    // GET
    @Get(":id")
    showCategory(@Param("id") id) {
        return this.categoriesService.showCategories(id)
    }

    // http://localhost:3000/categories
    // POST
    @Post()
    createCategory(@Body() body) {
        return this.categoriesService.createCategory(body)
    }

    // http://localhost:3000/categories/:id
    // PACTH
    @Patch(":id")
    updateCategory(@Param("id") id, @Body() body) {
        return this.categoriesService.updateCategory(id, body)
    }

    // http://localhost:3000/categories/:id
    // DELETE
    @Delete(":id")
    removeCategory(@Param("id") id) {
        return this.categoriesService.deleteCategory(id)
    }
    
}