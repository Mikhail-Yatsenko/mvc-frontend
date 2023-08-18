import {IController} from "../../types/counter/controller";
import {CounterModel} from "./Counter.model";

export class CounterController implements IController {
    model: CounterModel

    constructor() {
        this.model = new CounterModel();
    }

    handleIncrement() {
        return this.model.increment();
    }

    handleDecrement() {
        return this.model.decrement();
    }
}
