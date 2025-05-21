import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CategorySchema } from "./category.schema";
import { Category } from "./category.schema";   

@Schema()
export class Book {
    @Prop()
    id: string;
    @Prop()
    name: string;
    @Prop()
    author: string;
    @Prop()
    description: string;
    @Prop()
    price: number;
    @Prop()
    createdAt: Date;
    @Prop()
    updatedAt: Date;
    @Prop({ type: CategorySchema, ref: 'Category' })
    category: Category;


}

export const BookSchema = SchemaFactory.createForClass(Book);
