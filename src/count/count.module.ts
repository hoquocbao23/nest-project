import { Module } from "@nestjs/common";
import { CountService } from "./count.service";
import { MathModule } from "src/math/math.module";
import { MathService } from "src/math/math.service";

@Module({
    // import MathModule để sử dụng MathService
    // thay vì khai báo MathService trong providers, ta khai báo MathModule
    // MathModule sẽ cung cấp MathService cho CountModule
    //all modules share the same instance of MathService
    imports: [MathModule],
    providers: [CountService,],
    exports: [CountService]
})
export class CountModule {}