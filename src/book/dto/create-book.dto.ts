import {  Min } from "class-validator";

import { IsDate } from "class-validator";

import { IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    name: string;

    @IsString()
    author: string;

    @IsString()
    description: string;

    @Min(5)
    price: number;

    
    createdAt: Date;

    
    updatedAt: Date;

   
    category: {
        categoryId: string;
        categoryName: string;
    }
}
