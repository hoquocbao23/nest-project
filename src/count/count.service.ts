import { Injectable } from "@nestjs/common";
import { MathService } from "src/math/math.service";

@Injectable()
export class CountService {
    public count: number = 0;

    constructor(private readonly mathService: MathService) {
        
    }

    public doubleIncrement(): number {
        return this.count = this.mathService.add(5, 5);
    }
    
}