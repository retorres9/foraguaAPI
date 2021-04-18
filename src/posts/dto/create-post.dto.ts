import { IsNotEmpty } from "class-validator";

export class CreatePosts {
    id: string;

    @IsNotEmpty()
    title: string;

    img?: string;

    isUp: boolean;

    @IsNotEmpty()
    body: string;

    @IsNotEmpty()
    created_at?: Date;

    @IsNotEmpty()
    updated_at?: Date;
}