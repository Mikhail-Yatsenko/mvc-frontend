import {IController} from "../../types/counter-second/controller";
import {CounterModel} from "./Counter.model";

export class CounterController implements IController {
    model: CounterModel

    constructor(model: CounterModel) {
        this.model = model;
    }

    handleIncrement() {
        this.model.increment();
    }

    handleDecrement() {
        this.model.decrement();
    }
}
