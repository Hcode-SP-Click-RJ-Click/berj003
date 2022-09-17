import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateLoginDto {
    @IsNotEmpty({
        message: 'Informe seu email.',
    })
    @IsEmail({}, {
        message: 'Email inválido.',
    })
    email: string;

    @IsNotEmpty({
        message: 'Informe sua senha.',
    })
    password: string;
}