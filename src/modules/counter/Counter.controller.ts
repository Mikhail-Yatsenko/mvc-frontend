import {IController} from "../../types/controller";
import {IModel} from "../../types/model";
import {CounterModel} from "./Counter.model";

export class CounterController implements IController {
    model: IModel

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
