import {IModel} from "../../types/counter/model";

export class CounterModel implements IModel {
    value: number;

    constructor() {
        this.value = 0;
    }

    increment() {
        this.value += 1;
        return this.value;
    }

    decrement() {
        this.value -= 1;
        return this.value;
    }
}
