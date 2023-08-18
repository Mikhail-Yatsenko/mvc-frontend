import {IModel} from "../../types/counter-second/model";
import {CounterView} from "./Counter.view.ts";

export class CounterModel implements IModel {
    view: CounterView;
    value: number;

    constructor(view: CounterView) {
        this.value = 0;
        this.view = view;
    }

    increment() {
        this.value += 1;
        this.view.updateTitle();
    }

    decrement() {
        this.value -= 1;
        this.view.updateTitle();
    }
}
