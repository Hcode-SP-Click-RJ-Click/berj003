import { Injectable } from "@nestjs/common";

@Injectable()
export class PlacesService {

    getPlaces(): string {
        return "Rota que lista os lugares";
    }

    save() {
        return "Criando um novo lugar.";
    }

    update(placeId: number, data: {}) {
        return {
            message: "Atualizando o lugar " + placeId,
            data,
        };
    }

    remove(placeId: number) {
        return `Excluindo o lugar ${placeId}.`;
    }

}