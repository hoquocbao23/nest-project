import { Module } from "@nestjs/common";
import { MathService } from "./math.service";

@Module({
    providers: [MathService],

    // shared module, chia sẻ cho các module khác
   exports: [MathService]
})
export class MathModule {}
