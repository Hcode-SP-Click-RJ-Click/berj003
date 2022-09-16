import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({
        message: 'Informe o nome.',
    })
    name: string;
}