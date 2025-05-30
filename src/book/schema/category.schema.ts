import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Category {
    @Prop()
    categoryId: string;
    @Prop()
    categoryName: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

