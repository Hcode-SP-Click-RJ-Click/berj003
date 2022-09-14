import { Controller, Get, Param, Post, Body, Patch, Delete } from "@nestjs/common";
import { PlacesService } from "./places.service";

// http://localhost:3000/places
@Controller('places')
export class PlacesController {

    constructor(private placesService: PlacesService) {}

    // http://localhost:3000/places
    // GET
    @Get()
    listPlaces(): string {
        return this.placesService.getPlaces();
    }

    // http://localhost:3000/places/532
    @Get(':id')
    showPlace(@Param('id') identifier: number) {
        return "Rota que mostra um lugar específico. ID: " + identifier;
    }

    // http://localhost:3000/places
    // POST
    @Post()
    createPlace(@Body() dados) {
        return {
            dados,
        };
    }

    // http://localhost:3000/places/3
    // PATCH
    @Patch(':id')
    updatePlace(
        @Param('id') id: number,
        @Body() updateData: {},
    ) {
        return this.placesService.update(id, updateData);
    }

    // http://localhost:3000/places/15
    // DELETE
    @Delete(':id')
    removePlace(@Param() params) {
        return this.placesService.remove(params.id);
    }

}