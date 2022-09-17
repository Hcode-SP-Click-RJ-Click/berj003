import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({
        message: 'Informe seu nome.',
    })
    name: string;

    @IsNotEmpty({
        message: 'Informe seu email.',
    })
    @IsEmail({
        message: 'Email inválido.',
    })
    email: string;

    @IsNotEmpty({
        message: 'Informe a senha.',
    })
    @MinLength(8, {
        message: 'A senha deve ter pelo menos oito caracteres',
    })
    @Matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]))/, {
        message: 'A senha deve conter uma letra maiúscula, uma letra minúscula, um número e um caracter especial.',
    })
    password: string;
}
